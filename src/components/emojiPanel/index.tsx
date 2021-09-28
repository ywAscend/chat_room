import React, { memo } from "react";
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import './index.less'

type IProps = {
    visiable: boolean,
    chooseEmoji: (emoji: any) => void,
    hideEmojiPanel: () => void
}

const EmojiPanel: React.FC<IProps> = props => {
    const { chooseEmoji, visiable, hideEmojiPanel } = props
    return (
        <div className='emojiPanelContent' style={{ display: visiable ? 'block' : 'none' }} onClick={hideEmojiPanel}>
            <div className='emojiPanel' >
                <Picker style={{ position: 'absolute', bottom: '0', left: '0' }} onSelect={chooseEmoji} />
            </div>
        </div>
    )
}

export default memo(EmojiPanel)