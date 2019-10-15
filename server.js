const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let friends = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    id: 2,
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: 4,
    name: 'Dustin',
    age: 25,
    email: 'D-munny@lambdaschool.com'
  },
  {
    id: 5,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: 6,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

// returns a token to be added to the header of all other requests. Pass in the credentials as the body of the request
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'mea' && password === 'mea') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

// returns the list of friends
app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

// returns the friend with the id passed as part of the URL
app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

// creates a friend and return the new list of friends. Pass the friend as the body of the request (the second argument passed to axios.post)
app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

// updates the friend using the id passed as part of the URL. Send the an object with the updated information as the body of the request (the second argument passed to axios.put)
app.put('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

// removes the friend using the id passed as part of the URL (123 in example)
app.delete('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
