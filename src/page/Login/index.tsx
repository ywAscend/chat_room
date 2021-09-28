import React, { memo } from "react";
import { RouteComponentProps } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions";
import { io } from 'socket.io-client'
import multiavatar from '@multiavatar/multiavatar'
import ParticlesBg from 'particles-bg'
import { Form, Input, Button, notification } from 'antd'
import './index.less'

interface IProps extends RouteComponentProps { }

const { Item } = Form
const Login: React.FC<IProps> = props => {
    const dispatch = useDispatch()
    const initSocket = (username: string) => {
        return new Promise((resolve, reject) => {
            const avatar = multiavatar(username)
            const socket = io('http://localhost:5000', { withCredentials: true, extraHeaders: { "my-custom-header": "abcd" } })
            const userInfo = { username, userId: Date.now(), avatar }
            socket.emit('Login', userInfo)
            resolve({ socket, userInfo })
        })
    }
    const handleLogin = async (values: any) => {
        const { username } = values
        if (!username) {
            notification.warn({
                message: '登录失败',
                description: '请输入名称',
            })
            return
        }
        const loginInfo: any = await initSocket(username)
        dispatch(addUser({ ...loginInfo }))
        props.history.push({ pathname: '/chatRoom' })
    }
    return (
        <div className='login'>
            <div className='login-layout'>
                <div className='login-layout-header' />
                <div className='login-layout-main'>
                    <div className='main-form'>
                        <Form
                            className='main-form-box'
                            onFinish={handleLogin}
                        >
                            <Item name='username'>
                                <Input placeholder='请输入名称' />
                            </Item>
                            <Item>
                                <Button
                                    type='primary'
                                    className='main-form-box_button'
                                    htmlType='submit'
                                >
                                    登陆
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </div>
                <div className='login-layout-footer' />
                <ParticlesBg type='lines' bg />
            </div>

        </div>

    )
}


export default memo(Login)