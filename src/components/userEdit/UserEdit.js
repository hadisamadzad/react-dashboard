import React, { useState, useEffect } from 'react'
import './style.scss'
import { Form, Input, Button, ConfigProvider, Row, Col, Space } from 'antd';
import 'antd/dist/antd.css';


const inputLayout = {
    labelCol: {
        offset: 4,
        span: 4
    },
    wrapperCol: {
        span: 24,
    }
}
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 24,
    },
}

const UsersEdit = (props) => {

    const [form] = Form.useForm();
    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName)
    const [mobile, setMobile] = useState(props.user.mobile)
    const [email, setEmail] = useState(props.user.email)

    useEffect(() => {

        return () => {
        }
    })

    const onFinish = values => {
        props.onFinish({
            firstName,
            lastName,
            mobile,
            email
        })
    }

    const onCancel = () => {
        props.onCancel()
    }

    return (
        <ConfigProvider direction={'rtl'}>
            <Row>
                <Col offset={8} span={8}>
                    <Form
                        {...inputLayout}
                        layout='vertical'
                        form={form}
                        initialValues={props.user}
                        name="control-hooks"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="firstName"
                            label="نام"
                            rules={[
                                {
                                    required: true,
                                    message: 'نام وارد نشده است'
                                },
                            ]}
                        >
                            <Input onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            label="نام خانوادگی"
                            rules={[
                                {
                                    required: true,
                                    message: 'نام خانوادگی وارد نشده است'
                                },
                            ]}
                        >
                            <Input onChange={(e) => setLastName(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            name='mobile'
                            label='موبایل'
                            rules={[
                                {
                                    required: true,
                                    message: 'شماره موبایل وارد نشده است',
                                    len: 10,
                                    message: 'شماره موبایل معتبر نمی‌باشد',
                                },
                            ]}
                        >
                            <Input
                                addonAfter='0'
                                className='input-mobile'
                                onChange={(e) => setMobile(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="ایمیل"
                            rules={[
                                {
                                    required: true,
                                    message: 'ایمیل وارد نشده است'
                                },
                            ]}
                        >
                            <Input
                                className='ltr'
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            {...tailLayout}
                        >
                            <Space>
                                <Button
                                    type='primary'
                                    htmlType="submit"
                                >
                                    به‌روزرسانی
                                </Button>
                                <Button
                                    type='link'
                                    onClick={onCancel}
                                >
                                    بازگشت
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </ConfigProvider>
    )
}

export default UsersEdit