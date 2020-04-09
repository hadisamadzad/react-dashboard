import React from 'react'
import { connect } from 'react-redux';
import LayoutHOC from '../../components/LayoutHOC'
import UsersEdit from '../../components/UsersEdit'
import { editUser } from '../../actions/users'

const UsersEditPage = (props) => {

    const backPage = '/users'

    return (
        <LayoutHOC
            component={
                <UsersEdit
                    user={props.user}
                    onFinish={(updates) => {
                        props.dispatch(editUser(props.user.id, updates))
                        props.history.push(backPage)
                    }}
                    onCancel={() => props.history.push(backPage)}
                />
            }
        />
    )
}

const mapStatToProps = (state, props) => ({
    user: state.users.find(user => user.id === props.match.params.id)
})

export default connect(mapStatToProps)(UsersEditPage)