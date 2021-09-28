import React, { memo } from "react"
import { useSelector } from "react-redux"; 
import { Redirect } from "react-router";
import ChatRoom from '../Room'
const App: React.FC<{}> = props => {
  const { socket } = useSelector((state:IState)=>state.socketReducer)

  if(!socket) return <Redirect to='/login' />
  
  return (
    <div className="App">
      <ChatRoom />
    </div>
  );
}

export default memo(App)
