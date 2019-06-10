import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Example1 from "../src/Components/ex1";
// import Example2 from "../src/Components/ex2";
// import Button from "../src/Components/buttonEx";
import FormEx1 from "../src/Components/formEx1";

ReactDOM.render(<FormEx1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
