import Login from './components/login';
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './components/register';
import Home from './components/Home';
import UserProfile from './components/userProfile';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import BoatsAvailable from './components/availableboats';
import SpecialPackages from './components/specialpackage';
import FeedbackForm from './components/feedback.jsx';
import Login1 from './components/admin.jsx';

function App() {
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Userprofile' element={<UserProfile/>}></Route>
    <Route path='/AboutPage' element={<AboutPage/>}></Route>
    <Route path='/contactpage' element={<ContactPage/>}></Route>
    <Route path='/availableboats' element={<BoatsAvailable/>}></Route>
    <Route path='/specialpackages' element={<SpecialPackages/>}></Route>
    <Route path='/feedback' element={<FeedbackForm/>}></Route>
    <Route path='admin' element={<Login1/>}></Route>

    
</Routes>
</BrowserRouter>
  )
}

export default App
