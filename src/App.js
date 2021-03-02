import Login from './Component/login/Login';
import Register from './Component/register/Register'
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/register" component={Register}/>
    </Switch>
  );
}

export default App;
