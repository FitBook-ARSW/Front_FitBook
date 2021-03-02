import Login from './Component/login/Login';
import Register from './Component/register/Register'
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
