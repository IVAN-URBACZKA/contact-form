import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';
import { ROLE_ADMIN } from '../shared/constants/rolesConstant';
import * as URL from '../shared/constants/urls/urlConstants';
import { customHistory } from '../shared/services/historyServices';
import LoginView from '../views/LoginView';
import ContactView from './../views/ContactView';
import DashboardView from '../views/DashboardView';
import HomeView from '../views/HomeView';

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <Route exact path={URL.URL_HOME} component={HomeView} />
            <Route  path={URL.URL_DASHBOARD} component={DashboardView} />
            <Route path={URL.URL_LOGIN} component={LoginView} />
            <Route path={URL.URL_CONTACT_FORM} component={ContactView} />

        </Switch>
    );
};

export default Routes;
