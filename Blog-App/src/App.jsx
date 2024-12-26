import './App.css';
import Navbar from './Compponants/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlogs from './Page/AddBlogs'
import Footer from './Compponants/Footer';
import Information from './Page/information';
import Signin from './Page/Signin';
import Login from './Page/Login';
import Blog from './Page/Blog';
import Profile from './Page/Profile';
import ProtectedRoute from './ProtectedRoute';


function App() {

  const savedCards = localStorage.getItem("cards");
  const cards = savedCards ? JSON.parse(savedCards) : [];

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/addblogs" element={ <ProtectedRoute><AddBlogs/></ProtectedRoute> } />
          <Route path="/" element={ <ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="info/:infoId" element={<Information cards={cards} />}/>
          <Route path="addblogs/info/:infoId" element={<Information cards={cards} />}/>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
