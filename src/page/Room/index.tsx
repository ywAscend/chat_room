import React, { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { EnumTypes } from "../../utils/common";
import ChatList from "../../components/chatList";
import DrawerCom from "../../components/drawer";
import EmojiPanel from "../../components/emojiPanel";
import { Input } from 'antd';
import { LeftOutlined, SmileOutlined, PlusOutlined } from '@ant-design/icons'
import './index.less'
import voice from '../../assets/imgs/voice.png'

export interface IUserInfo {
    username: string,
    userId: number,
    avatar: any
}

interface IMessage {
    message: string,
    userInfo: IUserInfo
}

const ChatRoom: React.FC<{}> = props => {
    const history = useHistory()
    const { socket, userInfo } = useSelector((state: IState) => state.socketReducer)
    const [value, setValue] = useState<string>('')
    const [list, setList] = useState<any[]>([])
    const [userList, setUserList] = useState<any[]>([])
    const listRef = useRef<any[]>([])
    const [onlineUser, setOnlineUser] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(false)
    const [panelVisible, setPanelVisible] = useState<boolean>(false)
    const chatListRef = useRef<HTMLElement>()


    const createChild = (type: string, userInfo: IUserInfo) => {
        let li = document.createElement('li')
        li.setAttribute('id', 'userTips')
        li.innerHTML = `<div id=${type === 'Login' ? "tips" : 'leaveTips'}>${userInfo.username}${EnumTypes[type]}了群聊</div>`
        return li
    }

    useEffect(() => {
        socket.on('Message', (data: IMessage) => {
            setList([...listRef.current, data])
            listRef.current = [...listRef.current, data]
            document.getElementsByClassName('chartContent')[0].scrollTop = document.getElementsByClassName('chartContent')[0].scrollHeight
        })
        socket.on('Login', (data: LoginInfo) => {
            const { onLineCount, onLineUsers, userInfo } = data
            setOnlineUser(onLineCount)
            setUserList(onLineUsers)
            chatListRef.current?.append(createChild('Login', userInfo))
        })
        socket.on('LoginOut', (data: LoginInfo) => {
            const { onLineCount, onLineUsers, userInfo } = data
            setOnlineUser(onLineCount)
            setUserList(onLineUsers)
            chatListRef.current?.append(createChild('LoginOut', userInfo))
        })
        return () => {
            socket.close()
        }
    }, [socket])

    const handlePressEnter = () => {
        if (!value) return
        socket.emit('Message', { userInfo, message: value })
        setValue('')
    }

    const hideEmojiPanel = () => {
        setPanelVisible(false)
    }

    const addEmoji = (emoji:any) => {
        console.log(emoji)
        setValue(emoji.native)
        hideEmojiPanel()
    }

    return (
        <div className='chartRoom'>
            <header>
                <div onClick={() => history.goBack()}><LeftOutlined style={{ fontSize: '23px', color: 'white' }} /></div>
                <div className='chater'>chat room ({onlineUser})</div>
                <div className='more' onClick={() => setVisible(true)}>. . .</div>
            </header>
            <div className='chartContent'>
                <ChatList data={list} userInfo={userInfo} myRef={chatListRef} />
            </div>
            <div className='bootMenu'>
                <div className='voiceContent'>
                    <span>
                        <img src={voice} alt='' />
                    </span>
                </div>
                <div className='inputContent'>
                    <Input placeholder='请输入' value={value} onChange={(e) => setValue(e.target.value)} style={{ height: '50px', background: '#1c1e1f', borderColor: "#73709a" }} size='large' allowClear={true} onPressEnter={handlePressEnter} />
                </div>
                <div className='emjo'>
                    <SmileOutlined style={{ fontSize: '25px', color: '#bfbfbf' }} onClick={()=>setPanelVisible(true)} />
                    <PlusOutlined style={{ fontSize: '25px', color: '#bfbfbf' }} />
                </div>
            </div>
            <DrawerCom
                title="聊天信息"
                onClose={() => setVisible(false)}
                visible={visible}
                data={userList}
            />
            <EmojiPanel visiable={panelVisible} chooseEmoji={addEmoji} hideEmojiPanel={hideEmojiPanel} />

        </div>
    )
}


export default memo(ChatRoom)