import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Header from './components/Header';
import DoctorDetail from './pages/DoctorDetail';
import Footer from './components/Footer'; // Import et

const App =() =>{
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;