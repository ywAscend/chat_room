import React, { memo,useState } from "react";
import { IUserInfo,IMessage } from "../../page/Room";
import PopImgae from '../popImage'
import { ImgSrc } from "../../utils/common";
import './index.less'

const ChatList: React.FC<{ data: Array<any>, userInfo: IUserInfo,myRef:any }> = props => {
  const { data, userInfo,myRef } = props
  const [visible,setVisible] = useState<boolean>(false)
  const [showSrc,setShowSrc] = useState<string>('')
  const handleClick = (data:IMessage) => {
    const {message,type} = data
    if(type ==='img'){
      setVisible(true)
      setShowSrc(message)
    }
  }

  const renderContent = (data:IMessage) => {
    const {message,type} = data
    if(type ==='img'){
      return <img src={message} alt=""/>
    }
    return message
  }

  return (
    <ul className='chatList' ref={myRef}>
      {
        data?.map((item, index) => {
          if (item.userInfo.userId === userInfo.userId) {
            return <li key={index} className='currentUserList'>
              <div className='userInfo'>
                <div className='name'>{item.userInfo.username}</div>
                <div className='msg'  onClick={()=>handleClick(item)}>
                  {renderContent(item)}
                </div>
              </div>
              <div className='avatarContent'>
                <div className='avatar'>
                  <img src={ImgSrc(item.userInfo.avatar)} alt='' />
                </div>
              </div>
            </li>
          }
          return <li key={index} className='otherUserList'>
            <div className='avatarContent'>
              <div className='avatar' >
                <img src={ImgSrc(item.userInfo.avatar)} alt='' />
              </div>
            </div>
            <div className='userInfo'>
              <div className='name'>{item.userInfo.username}</div>
              <div className='msg'>
                {renderContent(item)}
              </div>
            </div>
          </li>
        })
      }
      <PopImgae visible={visible} src={showSrc} close={()=>setVisible(false)} />
    </ul>
  )
}


export default memo(ChatList)