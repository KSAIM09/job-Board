import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const jobs = [
  {
    "id": "123456",
    "jobtitle": "React Native Developer",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor odio enim, a laoreet risus pellentesque eget. Integer finibus sapien at dolor interdum fringilla. Vivamus vestibulum enim sed dui vulputate, at finibus nisl dapibus. Nunc non bibendum libero. Donec vel gravida felis. Donec iaculis tortor justo, eu lobortis enim venenatis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque aliquet porttitor urna ac pulvinar.",
    "availability": "Remote",
    "company": "Stack'n'Bit"
  },
  {
    "id": "123456",
    "jobtitle": "React-Redux and Apollo CLient",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor odio enim, a laoreet risus pellentesque eget. Integer finibus sapien at dolor interdum fringilla. Vivamus vestibulum enim sed dui vulputate, at finibus nisl dapibus. Nunc non bibendum libero. Donec vel gravida felis. Donec iaculis tortor justo, eu lobortis enim venenatis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque aliquet porttitor urna ac pulvinar.",
    "availability": "Remote",
    "company": "Facebook"
 },
  {
    "id": "123456",
    "jobtitle": "React Native Developer",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor odio enim, a laoreet risus pellentesque eget. Integer finibus sapien at dolor interdum fringilla. Vivamus vestibulum enim sed dui vulputate, at finibus nisl dapibus. Nunc non bibendum libero. Donec vel gravida felis. Donec iaculis tortor justo, eu lobortis enim venenatis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque aliquet porttitor urna ac pulvinar.",
    "availability": "Full-Time",
    "company": "Whogorent"
  }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App jobs={jobs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
