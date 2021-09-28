import React, { memo } from 'react'
import { ImgSrc } from '../../utils/common';
import { Drawer } from 'antd';
import './index.less'
type IProps = {
    data: Array<any>,
    title: string,
    visible: boolean,
    onClose: () => void
}

const DrawerCom: React.FC<IProps> = props => {
    const { onClose, visible, title, data } = props
    return (
        <div className='chatUserInfo'>
            <Drawer
                title={title}
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                mask={true}
                style={{ position: 'fixed' }}
                headerStyle={{ textAlign: 'center' }}
            >
                <div className='chaterList'>
                    {
                        data.map((item, index) => {
                            return (<div className='content' key={index}>
                                <div className='avatarContent'>
                                    <div className='avatar'>
                                        <img src={ImgSrc(item.avatar)} alt="" />

                                    </div>
                                </div>
                                <div className='username'>
                                    {item.username}
                                </div>
                            </div>

                            )
                        })
                    }
                </div>
            </Drawer>
        </div>
    )
}

export default memo(DrawerCom)