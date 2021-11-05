
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import ServiceInfo from './Components/ServiceInfo/ServiceInfo';
import Featured from './Components/Featured/Featured';
import Contactus from './Components/Contactus/Contactus';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/Login/PrivetRoute/PrivateRoute';
import TourPackage from './Components/TourPackage/TourPackage';
import AboutUs from './Components/AboutUs/AboutUs'
import Admin from './Components/Admin/Admin'
import { BrowserRouter as Router, Switch,Route,} from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Benefit from './Components/Benefit/Benefit';
function App() {
  return (
    <div>
          <AuthProvider>
          
          
              <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
            <Home></Home></Route>
            
            <Route path="/home">
            <Home></Home></Route>
            
            <Route path="/login">
            <Login></Login></Route>
            
            <PrivateRoute path="/tourpackage">
            <TourPackage></TourPackage></PrivateRoute>
            
            <PrivateRoute path="/services">
            <Services></Services></PrivateRoute>
          
            <PrivateRoute path="/serviceinfo/:serviceId">
                       <ServiceInfo></ServiceInfo>
            </PrivateRoute>

          <Route path="/benefit">
            <Benefit></Benefit></Route>
          
          
          <Route path="/aboutus">
            <AboutUs></AboutUs></Route>
          
          <Route path="/contactus">
            <Contactus></Contactus></Route>
          
          
          <Route path="/featured">
            <Featured></Featured></Route>
          
          
          <Route path="/addService">
            <AddService></AddService></Route>
          
          <PrivateRoute path="/admin">
            <Admin></Admin></PrivateRoute>
          
          <Route path="*">
            <NotFound></NotFound></Route>
          
          
          </Switch>
          
          
          
          <Footer></Footer>
          
          </Router>
          
          </AuthProvider>
         
        
    
      
    </div>
  );
}

export default App;
