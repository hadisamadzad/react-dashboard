import React from 'react'
import { Table, Tag, ConfigProvider } from 'antd'
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

const columns = [
    {
        title: 'نام و نام خانوادگی',
        dataIndex: 'fullName',
        key: 'fullName',
        render: (value, record) => <a>{`${record.firstName} ${record.lastName}`}</a>,
    },
    {
        title: 'ایمیل',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'موبایل',
        dataIndex: 'mobile',
        key: 'mobile',
        render: value => `0${value}`,
    },
    {
        title: 'وضعیت',
        key: 'status',
        dataIndex: 'status',
        render: status => (
            <span>
                <Tag
                    color={status && status.length > 5 ? 'red' : 'green'}
                    key={status}
                >
                    {status}
                </Tag>
            </span>
        ),
    },
    {
        title: 'مدیریت',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>مشاهده</a>
            </span>
        ),
    },
];

const UsersList = (props) => {

    const users = props.users.map(user => ({
        key: user.id,
        ...user,
        status: 'غیرفعال'
    }))

    console.log(users)

    return (
        <ConfigProvider direction={'rtl'}>
            <Table columns={columns} dataSource={users} />
        </ConfigProvider>
    )
}

const mapStatToProps = (state) => ({
    users: state.users
})

export default connect(mapStatToProps)(UsersList)