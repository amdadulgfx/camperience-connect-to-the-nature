import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageCamps from './Pages/ManageCamps/ManageCamps';
import MyCamps from './Pages/MyCamps/MyCamps';
import RegisterCamp from './Pages/RegisterCamp/RegisterCamp';
import Footer from './Pages/Shared/Footer/Footer';
import NavigationBar from './Pages/Shared/NavigationBar/NavigationBar';

function App() {
  return (

    <AuthProvider>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path='/registerCamp/:serviceId'>
            <RegisterCamp></RegisterCamp>
          </PrivateRoute>
          <PrivateRoute path='/myCamps'>
            <MyCamps></MyCamps>
          </PrivateRoute>
          <PrivateRoute path='/manageCamps'>
            <ManageCamps></ManageCamps>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
