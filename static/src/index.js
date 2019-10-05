import React from 'react';
import { IntlProvider } from "react-intl";
import { render } from 'react-dom';
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
