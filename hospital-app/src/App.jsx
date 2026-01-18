import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import Header from './components/Header';
import Footer from './components/Footer'; // Import et

const App =() =>{
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Digər routelar bura gələcək */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;