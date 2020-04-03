import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFoundPage from '../components/NotFoundPage'
import LayoutHOC from '../components/LayoutHOC'
import AddAssetPage from '../components/AddAssetPage'
import IndexPage from '../pages/IndexPage'
import UsersListPage from '../pages/users/UsersListPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <LayoutHOC />
            <Switch>
                <Route path="/" component={IndexPage} exact={true} />
                <Route path="/users" component={UsersListPage} />
                <Route path="/assets/create" component={AddAssetPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter