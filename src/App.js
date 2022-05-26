import React, { Component } from 'react';
import { Provider } from 'react-redux';
// need to have apply middleware to use the middleware with redux
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; // this is a middleware
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyA4EMZp_P4ARWhJh_asCyNN_0NCb-c3u-E',
       authDomain: 'manager-c9ba9.firebaseapp.com',
       databaseURL: 'https://manager-c9ba9.firebaseio.com',
       projectId: 'manager-c9ba9',
       storageBucket: 'manager-c9ba9.appspot.com',
       messagingSenderId: '830351966152'
    };

    firebase.initializeApp(config);
  }

  render() {
    // declared store variable here just to clean up the code in the Provider tag.
    // the third argument is called store enhancer because it is adding
    // additional functionality to the store.
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
