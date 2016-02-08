import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './_components/app_bar/hello-react.jsx';

Meteor.startup(function () {
    console.log('render')
    ReactDOM.render(<App />, document.getElementById("render-target"));
});