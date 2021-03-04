import SignUp from "./auth/signup";
import {AuthProvider} from '../context/authContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./auth/signIn";
import PrivateRoute from "../auth/privateRoutes";
import ForgotPassword from "./auth/forgotPassword";
import Profile from "./auth/profile";
import Dashboard from "./google-drive/dashboard";


function App() {
  return (
  
    <Router>
    <AuthProvider>
      <Switch>

        {/* g-drive */}
        <PrivateRoute path='/' component={Dashboard} exact/>

        {/* auth */}
        <PrivateRoute path='/user' component={Profile}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/forgot-password" component={ForgotPassword}/>

       </Switch>
    </AuthProvider>
    </Router>

  )
 
}

export default App;
