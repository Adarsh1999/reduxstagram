import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

// to enhance our Redux app with Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//const store = createStore(rootReducer, defaultState, enhancers);
//export const history = syncHistoryWithStore(browserHistory, store);

export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  defaultState,
  enhancers,
  applyMiddleware(middleware)
);

export default store;
