import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './app/app';
import {createStore} from "redux";

const initialState = {
  tasks: [
    {description: "Create skill matrix", time: 1599740000000},
    {description: "Improve presentation", time: 1599740000000},
    {description: "Prepare email", time: 1599740000000}
  ]
}

const store = createStore((state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}, __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
    </React.StrictMode>,
  document.getElementById('root')
);
