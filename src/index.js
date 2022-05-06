import './style.css';

const body = document.querySelector('body');

const header = document.createElement('header');
    header.textContent = 'Hello ToDo List!';

body.appendChild(header);