import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'; //Import the store
import Home from './components/home' //Import the component file

function setup() {
    class Root extends Component {
        render() {
            return (
                <Provider store={store}>
                    <Home />
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
// Redux needs to inject a store holding the app state into the app.
// To do so, it requires a ‘Provider’ wrapping the whole app.
// This store is basically a combination of reducers.
