import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from "react-intl";
import ReactComponent from '../../src';
import config from './config.json';

const App = () => (
    <IntlProvider locale="hu" messages={config.translations}>
      <ReactComponent config={config}/>
    </IntlProvider>
);

render(
  <App />,
  document.getElementById("root")
);
