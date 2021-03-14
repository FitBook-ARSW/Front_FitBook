import Login from './Component/login/Login';
import Register from './Component/register/Register'
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashBoard from './Component/dashboard/Dashboard';
import Procfile from './Component/procfile/Procfile';
import PrivateRoute from './Component/privateRoute/PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
        <PrivateRoute path="/procfile" component={Procfile} />
      </Switch>
    </AuthProvider>
  );
}

export default App;