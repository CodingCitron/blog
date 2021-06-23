import { Form, Input, Button, Alert } from 'antd';
import '../RegisterPage/RegisterPage.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {

    const dispatch = useDispatch()

    const formItemLayout = {
        labelCol: {
          xs: {
            span: 6,
          },
          sm: {
            span: 6,
          }
        },
        wrapperCol: {
          xs: {
            span: 14,
          },
          sm: {
            span: 14,
          }
        }
    };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 14,
            offset: 6,
          },
        }
      };

    const onFinish = (values) => {
        if(values.password !== values.confirm) return

        const body = {
            name: values.name,
            email: values.email,
            password: values.password
        }

        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                return props.history.push('/login')
            }
            return alert('회원가입에 실패하였습니다.')
        })
    };


    return (
        <div className='register-container'>
            <div className='form'>
                <Form {...formItemLayout}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError>

                    <Form.Item name="name" label="name" 
                        rules={[
                        {
                            required: true,
                            message: 'Please input your name',
                            whitespace: true,
                        },
                        ]}
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item name="email" label="E-mail" type="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your E-mail',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="confirm" label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>Register</Button>
                        <Button type="primary" htmlType="reset" style={{ marginTop: '8px' }}>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage
