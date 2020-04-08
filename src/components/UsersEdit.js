import React from 'react'
import { Table, Tag, ConfigProvider } from 'antd'
import 'antd/dist/antd.css';

const UsersEdit = (props) => {

    console.log(props)

    return (
        <ConfigProvider direction={'rtl'}>
            <p>
                {props.user.firstName}
            </p>
        </ConfigProvider>
    )
}

export default UsersEdit