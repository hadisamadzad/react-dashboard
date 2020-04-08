import React from 'react'
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import LayoutHOC from '../../components/LayoutHOC'
import UsersEdit from '../../components/UsersEdit'

const UsersEditPage = (props) => {
    return (
        <LayoutHOC
            component={
                <UsersEdit user={props.user} />
            }
        />
    )
}

const mapStatToProps = (state, props) => ({
    user: state.users.find(user => user.id === props.match.params.id)
})

export default connect(mapStatToProps)(UsersEditPage)