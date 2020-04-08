import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFoundPage from '../components/NotFoundPage'
import AddAssetPage from '../components/AddAssetPage'
import IndexPage from '../pages/IndexPage'
import UsersListPage from '../pages/users/UsersListPage'
import UsersEditPage from '../pages/users/UsersEditPage'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/users" component={UsersListPage} />
            <Route exact path="/users/edit/:id" component={UsersEditPage}>
            </Route>

            <Route path="/assets/create" component={AddAssetPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter