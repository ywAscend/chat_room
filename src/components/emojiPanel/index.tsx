import React, { memo, MouseEvent } from "react"
import { EmojEnum } from "../../utils/common"
import './index.less'

type IProps = {
    visiable: boolean,
    chooseEmoji: (e:MouseEvent,emoji: any) => void
}

const EmojiPanel: React.FC<IProps> = props => {
    const { chooseEmoji,visiable} = props
    return (
        <div className='emojiPanelContent' style={{ display: visiable ? 'block' : 'none' }} >
            <ul className='emojiPanel' >
               {
                   EmojEnum.map((item,index)=>{
                       return <li key={index} onClick={(e)=>chooseEmoji(e,item)}><span>{item.native}</span></li>
                   })
               }
            </ul>
        </div>
    )
}

export default memo(EmojiPanel)