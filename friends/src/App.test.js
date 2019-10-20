import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('tests to make sure unique id received', () => {
//   const arr = [0, 1, 3, 4, 5];
//   const num = Math.floor(Math.random()*5);
//   const id = arr.forEach(item => {
//     if (num !== item){
//       return num
//     }
//   })
//   expect(id).toBe(2)
// })
