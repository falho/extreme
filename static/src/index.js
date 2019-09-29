import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src';

const App = ({ translations }) => (
    <MyComponent translations={JSON.parse(translations)}/>
);

const element = document.getElementById("root");

render(
  <App translations={element.getAttribute('translations')} />,
  element
);
