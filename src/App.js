import Login from './Component/login/Login';
import Register from './Component/register/Register'
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashBoard from './Component/dashboard/Dashboard';
import Procfile from './Component/procfile/Procfile';
import Booking from './Component/booking/Booking';
import PrivateRoute from './Component/privateRoute/PrivateRoute';
import AdminRoute from './Component/adminRoute/AdminRoute';
import ManageUser from './Component/manageUser/ManageUser';
import AddPublication from './Component/addPublication/AddPublication';
import Create from './Component/create/Create';
import Schedule from './Component/schedule/Schedule';
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
        <PrivateRoute path="/procfile" component={Procfile} />
        <PrivateRoute path="/bookings" component={Booking} />
        <AdminRoute path="/manage" component={ManageUser} />
        <PrivateRoute path="/addPublication" component={AddPublication}/>
        <PrivateRoute path="/createClass" component={Create}/>
        <PrivateRoute path="/schedule" component={Schedule}/>
      </Switch>
    </AuthProvider>
  );
}

export default App;
