import React from 'react'
import 'antd/dist/antd.css';
import LayoutHOC from '../../components/LayoutHOC'
import UsersList from '../../components/UsersList'

const UsersListPage = () => {
    return (
        <LayoutHOC
            component={<UsersList />}
        />
    )
}

export default UsersListPage