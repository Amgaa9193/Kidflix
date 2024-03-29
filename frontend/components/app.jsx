import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

import EmailContainer from "./signup/email_container";
import PasswordContainer from "./signup/password_container";
import LoginContainer from "./session/login_container";
import MovieindexContainer from "./movie/movie_index_container";
import MovieShowContainer from "./movie/movie_show_container";
import GenreShowContainer from "./genre/genre_show_container";
import MyListContainer from "./mylist/mylist_index_container";
import SearchContainer from "./search/search_container";

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={EmailContainer} />
    <AuthRoute path="/signup" component={PasswordContainer} />
    <AuthRoute path="/signin" component={LoginContainer} />
    <ProtectedRoute path="/browse" component={MovieindexContainer} />
    <ProtectedRoute path="/watch/:movieId" component={MovieShowContainer} />
    <ProtectedRoute path="/genre/:genreId" component={GenreShowContainer} />
    <ProtectedRoute path="/mylist" component={MyListContainer} />
    <ProtectedRoute path="/search" component={SearchContainer} />
  </Switch>
);

export default App;
