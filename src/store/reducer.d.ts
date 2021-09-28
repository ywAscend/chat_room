interface IState {
    [PropsName: string]: any
}


interface ActionParams<T = any> {
    type: string;
    payload: Object<T>
}


interface LoginInfo<T = any> {
    userInfo: Object<T>,
    onLineUsers: Object<T>,
    onLineUserInfo?: Object<T>,
    onLineCount: number,
    svgCode:any
}
