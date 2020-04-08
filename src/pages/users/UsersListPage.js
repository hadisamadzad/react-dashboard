import React from 'react'
import 'antd/dist/antd.css';
import LayoutHOC from '../../components/LayoutHOC'
import UsersList from '../../components/UsersList'

const usersList = <UsersList></UsersList>;

const UsersListPage = () => {
    return (
        <LayoutHOC
            component={usersList}
        />
    )
}

export default UsersListPage