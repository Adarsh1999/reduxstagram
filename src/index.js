import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './components/App';

//Import the css styles for the whole app
//Styles.css is built from ./styles/style.styl using create-react-app-stylus
import './styles/style.css';

// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path='/' component={App}>
//         <IndexRoute component={PhotoGrid}></IndexRoute>
//         <Route path='/view/:postId' component={Single}></Route>
//       </Route>
//     </Router>
//   </Provider>
// )

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
