import React, { memo, useEffect, useRef, useState, MouseEvent, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { EnumTypes } from "../../utils/common";
import ChatList from "../../components/chatList";
import DrawerCom from "../../components/drawer";
import EmojiPanel from "../../components/emojiPanel";
import { Input, message } from 'antd';
import { LeftOutlined, SmileOutlined, PlusOutlined, FileImageOutlined } from '@ant-design/icons'
import './index.less'
import voice from '../../assets/imgs/voice.png'

export interface IUserInfo {
    username: string,
    userId: number,
    avatar: any
}

export interface IMessage {
    message: string,
    userInfo: IUserInfo,
    type?: string
}

const ChatRoom: React.FC<{}> = props => {
    const history = useHistory()
    const { socket, userInfo } = useSelector((state: IState) => state.socketReducer)
    const [value, setValue] = useState<any>()
    const [list, setList] = useState<any[]>([])
    const [userList, setUserList] = useState<any[]>([])
    const listRef = useRef<any[]>([])
    const emojRef = useRef<any[]>([])
    const [onlineUser, setOnlineUser] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(false)
    const [panelVisible, setPanelVisible] = useState<boolean>(false)
    const [phoneVisible, setPhoneVisible] = useState<boolean>(false)
    const chatListRef = useRef<HTMLElement>()


    const createChild = (type: string, userInfo: IUserInfo) => {
        let li = document.createElement('li')
        li.setAttribute('id', 'userTips')
        li.innerHTML = `<div id=${type === 'Login' ? "tips" : 'leaveTips'}>${userInfo.username}${EnumTypes[type]}了群聊</div>`
        return li
    }
    useEffect(() => {
        document.getElementsByClassName('chartContent')[0].addEventListener('click', () => {
            hideEmojiPanel()
        })
        return () => {
            document.getElementsByClassName('chartContent')[0]?.removeEventListener('click', () => { })
        }
    }, [])

    useEffect(() => {
        socket.on('Message', (data: IMessage) => {
            setList([...listRef.current, data])
            listRef.current = [...listRef.current, data]
            scrollToView()
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

    const scrollToView = () => {
        document.getElementsByClassName('chartContent')[0].scrollTop = document.getElementsByClassName('chartContent')[0].scrollHeight
    }

    const handlePressEnter = () => {
        if (!value) return
        socket.emit('Message', { userInfo, message: value, type: 'msg' })
        setValue('')
        emojRef.current = []
        hideEmojiPanel()
    }

    const hideEmojiPanel = () => {
        setPanelVisible(false)
        setPhoneVisible(false)
    }

    const addEmoji = (e: MouseEvent, emoji: any) => {
        e && e.stopPropagation()
        emojRef.current = [...emojRef.current, emoji.native]
        setValue(emojRef.current)
    }

    const handlePanelClick = () => {
        setPanelVisible(true)
        setPhoneVisible(false)
    }
    const handlePlusClick = () => {
        setPhoneVisible(true)
        setPanelVisible(false)
    }

    const handleAlbumClick = () => {
        document.getElementById('albumPhoto')?.click()
    }
    const handleChange = (e: ChangeEvent) => {
        let imgFile = (e.target as any).files[0]
        if (imgFile.size > 1024000) {
            message.warn('图片不能大于1m，请重新上传')
            return
        }
        console.log('000000000000')

        let reader = new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload = function (event) {
            let imgs = this.result
            socket.emit('Message', { userInfo, message: imgs, type: 'img' })
            hideEmojiPanel()
        };
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
                <div className='menuItem'>
                    <div className='voiceContent'>
                        <span>
                            <img src={voice} alt='' />
                        </span>
                    </div>
                    <div className='inputContent'>
                        <Input placeholder='请输入' value={value} onChange={(e) => setValue(e.target.value)} style={{ height: '50px', background: '#1c1e1f', borderColor: "#73709a" }} size='large' allowClear={true} onPressEnter={handlePressEnter} />
                    </div>
                    <div className='emjo'>
                        <SmileOutlined style={{ fontSize: '25px', color: '#bfbfbf' }} onClick={handlePanelClick} />
                        <PlusOutlined style={{ fontSize: '25px', color: '#bfbfbf' }} onClick={handlePlusClick} />
                    </div>
                </div>
                <div className={`itemDetail ${panelVisible || phoneVisible ? 'itemShow' : ''}`}>
                    <EmojiPanel visiable={panelVisible} chooseEmoji={addEmoji} />
                    {
                        phoneVisible && <div className='otherContent'>
                            <div className='itemConent' onClick={handleAlbumClick}>
                                <div className='album'>
                                    <FileImageOutlined style={{ fontSize: '25px', color: '#fff' }} />
                                </div>
                                <div className='albumText'>
                                    <input type="file" id="albumPhoto" hidden onChange={(e: ChangeEvent) => handleChange(e)} name="albumPhoto" />
                                    <span>相册</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <DrawerCom
                title="聊天信息"
                onClose={() => setVisible(false)}
                visible={visible}
                data={userList}
            />


        </div>
    )
}


export default memo(ChatRoom)