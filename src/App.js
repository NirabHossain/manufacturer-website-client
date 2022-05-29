// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import SingleTool from './Pages/Home/SingleTool';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import Footer from './Pages/Shared/Footer'
import MyOrders from './Pages/MyOrders/MyOrders';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<MyOrders />} />
        <Route path='/purchase/:id' element={
            <SingleTool />
        }></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>

      <ToastContainer />
    </div>
  );
}

export default App;
