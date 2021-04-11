import React from 'react';
//import PropTypes from 'prop-types';
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import NotFound from "../../components/NotFound";

//TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match= useRouteMatch(); //nested routing
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact/>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default TodoFeature;