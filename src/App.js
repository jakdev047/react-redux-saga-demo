import React from 'react';

// store
import { Provider } from 'react-redux';
import store from './store';

// axios
import axios from 'axios';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

// axios config
axios.defaults.withCredentials = true;
axios.defaults.baseUrl = 'http://rem-rest-api.herokuapp.com/api';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <h2>Hello React</h2>
        </div>
      </div>
    </Provider>
  );
}

export default App;
