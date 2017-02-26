import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as Actions from './actions';


import App from './components/app';
import NotFound from './components/not_found';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Landing from './components/landing';
import reducers from './reducers';
import FindGroupChat from './components/findgroupchat';
import CreateGroupChat from './components/creategroupchat';
import ChatRoom from './components/chatroom';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

store.dispatch(Actions.verifyAuth());

ReactDOM.render(
<Provider store={store}>
	<Router history={browserHistory} >
		{/* Special route for chatroom */}
		<Route path="/chatroom/:group" component={RequireAuth(ChatRoom)} />
		{/* index route and childs */}
		<Route path="/" component={App} >
			<IndexRoute component={Landing} />
			<Route path="signin" component={Signin} />
			<Route path="signout" component={Signout} />
			<Route path="signup" component={Signup} />
			<Route path="findgroupchat" component={RequireAuth(FindGroupChat)} />
			<Route path="creategroupchat" component={RequireAuth(CreateGroupChat)} />
			<Route path="feature" component={RequireAuth(Feature)} />
			{/* Default not found route */}
			<Route path="*" component={NotFound} />
		</Route>



	</Router>
</Provider>
, document.querySelector('.container'));
