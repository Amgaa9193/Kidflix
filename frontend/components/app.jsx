import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils'

import EmailContainer from './signup/email_container'
import PasswordContainer from './signup/password_container'
import LoginContainer from './session/login_container'
import BrowseContainer from './browse/browse_container'


const App = () => (
   <Switch>
       <AuthRoute exact path="/" component={EmailContainer}/>
       <AuthRoute path="/signup" component={PasswordContainer}/>
       <AuthRoute path="/signin" component={LoginContainer}/>
       <ProtectedRoute path="/browse" component={BrowseContainer}/>

   </Switch>
)

export default App;