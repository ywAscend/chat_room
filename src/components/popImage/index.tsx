import React, { memo } from 'react'
import './index.less'

interface IPropsImg {
    visible: boolean,
    src: string,
    close?: () => void

}

const PopImgae: React.FC<IPropsImg> = props => {
    const { visible, src, close } = props
    return (
        <div className={`popImage ${visible ? 'showPopImg' : ''}`} onClick={close}>
            <div className='imgContent'>
                <img src={src} alt="" />
            </div>
        </div>
    )
}

export default memo(PopImgae)