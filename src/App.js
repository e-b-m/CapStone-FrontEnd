
import './App.css';
import './Bubble.css';
import './components/stylesheets/UserProfile.css'
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/User/SignUp';
import LogIn from './components/User/LogIn';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import UserProfile from './components/Pages/UserProfile';
import CareeProfile from './components/Caree/CareeProfile';
import BubblePage from './components/Pages/BubblePage';
import { UserContextProvider } from './components/User/ReferenceDataContext';

function App() {

  return (
    <>
    
      <UserContextProvider>
      <BrowserRouter>
        <NavBar/> 
        <Routes>
            <Route path='/LogIn' element={<LogIn/>}/>
            <Route path ='/SignUp' element={<SignUp/>}/>
            <Route path="/UserProfile" element={<UserProfile/>}/>
            <Route path="/CareeProfile" element={<CareeProfile/>}/>
            <Route path="/BubblePage" element={<BubblePage/>}/>
        </Routes>
        <Hero/>
      </BrowserRouter>
      </UserContextProvider>
    <Footer/>
    </>
  );
}

export default App;
