const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let users = [
  {
    id: 1,
    username: 'kimfox',
    password: 'love1'
  },
  {
    id: 2,
    username: 'frederickperez',
    password: 'lillian'
  },
  {
    id: 3,
    username: 'wendymitchell',
    password: 'kitkat'
  },
  {
    id: 4,
    username: 'tommylowe',
    password: 'bamboo'
  },
];

app.use(bodyParser.json());

app.use(cors());

app.get('/users', (req, res) => {
  res.json(users);
});

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
let userId = users.length;

// app.post('/api/register', (req, res) => {
//   const { username, password } = req.body;
//   const newUser = { username, password, id: userId }
//   const duplicateUser = users.filter(user => {
//     return user.username === newUser.username
//   })
//   // if (duplicateUser) {
//   //   res
//   //     .status(405)
//   //     .json({ error: `Username ${newUser.username} is already taken.` });
//   // } else {
//     users.push(newUser);
//     userId++
//     res.json(users)
//   // }
// });

app.post('/users', (req, res) => {
  const { username } = req.body;
  const newUser = { username, password, id: userId };
  if (!username || !password) {
    return sendUserError(
      'Ya gone did smurfed! Username and password are required to create a user in the users DB.',
      res
    );
  }
  const findUserByUsername = user => {
    return user.username === username;
  };
  if (users.find(findUserByUsername)) {
    return sendUserError(
      `Ya gone did smurfed! ${username} already exists in the users DB.`,
      res
    );
  }

  users.push(newUser);
  userId++;
  res.json(users);
});


// returns the list of users
app.get('/api/users', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, 1000);
});

// returns the friend with the id passed as part of the URL
app.get('/api/users/:id', authenticator, (req, res) => {
  const friend = users.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

// creates a friend and return the new list of users. Pass the friend as the body of the request (the second argument passed to axios.post)
app.post('/api/users', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  users = [...users, friend];

  res.send(users);
});

// updates the friend using the id passed as part of the URL. Send the an object with the updated information as the body of the request (the second argument passed to axios.put)
app.put('/api/users/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = users.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...users[friendIndex], ...req.body };

    users = [
      ...users.slice(0, friendIndex),
      friend,
      ...users.slice(friendIndex + 1)
    ];
    res.send(users);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

// removes the friend using the id passed as part of the URL (123 in example)
app.delete('/api/users/:id', authenticator, (req, res) => {
  const { id } = req.params;

  users = users.filter(f => f.id !== Number(id));

  res.send(users);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
