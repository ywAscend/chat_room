import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import RouterCom from './router'
import store from './store'
import './index.less'

ReactDOM.render(
  <Provider store={store}>
    <RouterCom />
  </Provider>
  ,
  document.getElementById('root')
)