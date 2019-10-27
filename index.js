const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let nextId = 5;

let users = [
  {
    id: 1,
    username: 'kimfox',
    password: 'love1',
    // profile: [
    //   {
    //     avatar: '/static/media/1.66e813ce.jpg',
    //     about_me: `Hipster-friendly bacon maven. Beer fanatic. Total pop culture ninja. Freelance tv fanatic. Extreme music scholar. I don't like to make plans too far in advance because then the word "premeditated" gets thrown around in the courtroom.`,
    //     dob: 'july 2, 1983',
    //     location: 'Seattle, Washington',
    //     favorite_languages: ['Idris', 'Java', 'Python'],
    //     questionnaire: [
    //       {
    //         question: 'question',
    //         answer: 'answer'
    //       },
    //       {
    //         question: 'question',
    //         answer: 'answer'
    //       },
    //       {
    //         question: 'question',
    //         answer: 'answer'
    //       },
    //       {
    //         question: 'question',
    //         answer: 'answer'
    //       },
    //       {
    //         question: 'question',
    //         answer: 'answer'
    //       },
    //     ],
    //   }
    // ],
    // friends: [
    //   {
    //     id: 2,
    //     username: 'frederickperez'
    //   },
    //   {
    //     id: 3,
    //     username: 'wendymitchell'
    //   },
    //   {
    //     id: 4,
    //     username: 'tommylowe'
    //   },
    // ]
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

let activeUser = [
  
]

app.use(bodyParser.json());

app.use(cors());

// GETS LIST OF USERS
app.get('/users', (req, res) => {
  res.json(users);
});

// GETS THE ACTIVE USER
app.get('/activeUser', (req, res) => {
  res.json(activeUser);
});

// AUTHENTICATION USING TOKEN
function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

// REGISTERS NEW USER AND ADDS THEM TO THE ACTIVE USER DATA
// INITIAL REGISTRATION
app.post('/api/users', (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: getNextId(), ...req.body };
  const findUserByUsername = user => {
    return user.username === username;
  };
    if (users.find(findUserByUsername)){
      return sendUserError (
        `There is already an account under that username.`,
        res
      );
    }else{
      users = [...users, newUser];
      activeUser = [...activeUser, newUser];
      res
      .status(200).json({
        payload: token
      });
      // .send(users);
    }
    console.log('USERNAME', username, 'PASSWORD', password, 'NEWUSER', newUser)
});

// MAIN PROFILE INFORMATION (CMP PAGE 1)
app.put('/api/create/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex(item => item.id == id);

  if (userIndex > -1) {
    const user = { ...users[userIndex], ...req.body };
    users = [
      ...users.slice(0, userIndex),
      user,
      ...users.slice(userIndex + 1)
    ];
    activeUser[userIndex] =  user;
    res.send(users);
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
})

// QUESTIONNAIRE (CMP PAGE 2)


// FAVORITE LANGUAGES (CMP PAGE 3)


// LOGS IN USER AND ADDS THEM TO THE ACTIVE USER DATA
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const findUser = users.find(user => {
    return user.username === username && user.password === password
  })
  // console.log('FINDUSERBYID', findUserById, 'ID', id)
    let user = findUser;
    if (findUser) {
      req.loggedIn = true;
      res.status(200).json({
        payload: token,
        id: user.id,
        username: user.username,
        password: user.password
      });
      activeUser = [...activeUser, user]
      // res.send(activeUser);
    } else {
      res
        .status(403)
        .json({ error: 'Username or Password incorrect. Please try again.' });
    }
});



// WILL DELETE USER WITHIN THE ACTIVE USER DATA (NEEDS AUTH. WHICH SHOULD BE FINE SINCE THE USER IS ALREADY LOGGED IN AND THIS CALL WILL HAPPEN USER IS TRYING TO LOG OUT)
app.delete('/api/activeUser', authenticator, (req, res) => {
  // const { id } = req.params;
  activeUser = activeUser.filter(f => f[0] !== f[0]);

  res.send(activeUser);
});


/*********** HAVE NOT BEEN ALTERED ***********/

// returns the list of users
// app.get('/api/users', authenticator, (req, res) => {
//   setTimeout(() => {
//     res.send(users);
//   }, 1000);
// });

// // returns the friend with the id passed as part of the URL
// app.get('/api/users/:id', authenticator, (req, res) => {
//   const friend = users.find(f => f.id == req.params.id);

//   if (friend) {
//     res.status(200).json(friend);
//   } else {
//     res.status(404).send({ msg: 'Friend not found' });
//   }
// });

// // app.get('/api/activeUser', authenticator, (req, res) => {
// //   setTimeout(() => {
// //     res.send(activeUser);
// //   }, 2000);
// // });

// // updates the friend using the id passed as part of the URL. Send the an object with the updated information as the body of the request (the second argument passed to axios.put)
// app.put('/api/users/:id', authenticator, (req, res) => {
//   const { id } = req.params;

//   const friendIndex = users.findIndex(f => f.id == id);

//   if (friendIndex > -1) {
//     const friend = { ...users[friendIndex], ...req.body };

//     users = [
//       ...users.slice(0, friendIndex),
//       friend,
//       ...users.slice(friendIndex + 1)
//     ];
//     res.send(users);
//   } else {
//     res.status(404).send({ msg: 'Friend not found' });
//   }
// });

// // removes the friend using the id passed as part of the URL (123 in example)
// app.delete('/api/users/:id', authenticator, (req, res) => {
//   const { id } = req.params;

//   users = users.filter(f => f.id !== Number(id));

//   res.send(users);
// });

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// SHAPE OF DATA:
// let users = [
//   {
//     id: 1,
//     username: 'kimfox',
//     password: 'love1',
      // profile: [
        // {
          // avatar: img.jpg
          // aboutme: 'information'           
          // favorite_languages: ['language', 'language', 'language']
          // questionnaire: [
          //   {
          //     question: 'question',
          //     answer: 'answer'
          //   },
          //   {
          //     question: 'question',
          //     answer: 'answer'
          //   },
          //   {
          //     question: 'question',
          //     answer: 'answer'
          //   },
          //   {
          //     question: 'question',
          //     answer: 'answer'
          //   },
          //   {
          //     question: 'question',
          //     answer: 'answer'
          //   },
          // ]
          // friends: [
          //   {
          //     id: 2,
          //     username: 'frederickperez'
          //   },
          //   {
          //     id: 3,
          //     username: 'wendymitchell',
          //     password: 'kitkat'
          //   },
          //   {
          //     id: 4,
          //     username: 'tommylowe',
          //     password: 'bamboo'
          //   },
          //   {
          //     id: 5,
          //     username: 'mea'
          //   }
          // ]
        // }
      // ]
//   },
//   {
//     id: 2,
//     username: 'frederickperez',
//     password: 'lillian'
//      ...
//   },
//   {
//     id: 3,
//     username: 'wendymitchell',
//     password: 'kitkat'
//   },
//   {
//     id: 4,
//     username: 'tommylowe',
//     password: 'bamboo'
//   },
// ];

// let activeUser = [
  
// ]