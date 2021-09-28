import React, { memo } from "react";
import { IUserInfo } from "../../page/Room";
import { ImgSrc } from "../../utils/common";
import './index.less'

const ChatList: React.FC<{ data: Array<any>, userInfo: IUserInfo,myRef:any }> = props => {
  const { data, userInfo,myRef } = props
  return (
    <ul className='chatList' ref={myRef}>
      {
        data?.map((item, index) => {
          if (item.userInfo.userId === userInfo.userId) {
            return <li key={index} className='currentUserList'>
              <div className='userInfo'>
                <div className='name'>{item.userInfo.username}</div>
                <div className='msg'>
                  {item.message}
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
                {item.message}
              </div>
            </div>
          </li>
        })
      }
    </ul>
  )
}


export default memo(ChatList)