import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../page/Login'
import Home from '../page/Home'

const RouterCom = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route exact path='/login' component={Login} />
                <Route exact path='/chatRoom' component={Home} />
            </Switch>
        </Router>
    )
}

export default RouterCom