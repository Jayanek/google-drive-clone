import SignUp from "./signup";
import {AuthProvider} from '../context/authContext'
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import SignIn from "./signIn";
import PrivateRoute from "../auth/privateRoutes";
import ForgotPassword from "./forgotPassword";

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
    <AuthProvider>
      <Switch>
        <PrivateRoute path='/' component={Dashboard} exact/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
       </Switch>
    </AuthProvider>
    </Router>
    </div>
    </Container>
  )
 
}

export default App;
