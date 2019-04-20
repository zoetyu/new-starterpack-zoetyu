import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './style.scss';

// let num = 0;
// const ms = 1000;
// setInterval(
//   () => {
//     num += 1;
//     $('#main').html(`You've been on this page for ${num} seconds.`);
//   },
//   ms,
// );

const App = () => <div className="test">Help ME</div>;

// const note = {
//   title: 'testing',
//   text: 'I is a note',
//   x: 400,
//   y: 12,
//   zIndex: 26,
// };

// $('#main').html(note);


ReactDOM.render(<App />, document.getElementById('main'));
