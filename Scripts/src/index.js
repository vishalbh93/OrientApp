import React from 'react';
import ReactDOM from 'react-dom/client';
console.log('JS file loaded');

const App = () => {
    return <div><h1>Hello World! Vishal</h1></div>
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);