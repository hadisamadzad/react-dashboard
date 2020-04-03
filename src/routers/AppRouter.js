import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardLayout from '../components/DashboardLayout';
import AddAssetPage from '../components/AddAssetPage';
import NotFoundPage from '../components/NotFoundPage';
import IndexPage from '../pages/IndexPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <DashboardLayout />
            <Switch>
                <Route path="/" component={IndexPage} exact={true} />
                <Route path="/create" component={AddAssetPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;