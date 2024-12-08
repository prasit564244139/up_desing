import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './compponents/Nav';
import Carousel from './compponents/Carousel';
import Footer from './compponents/Footer'; 
import Detail from './compponents/Detail';
import SerivecHome from './compponents/ServiecHome';
import Projects from './compponents/Projects';
import ProjectsDetail from './compponents/ProjectsDetail';
import About from './compponents/About';

function App() {
  return (
    <Router>
      <Nav /> {/* แสดง Navigation Bar */}
      <Routes>
        <Route 
          path="/" 
          element={ 
            <> 
              <Carousel /> {/* แสดง Carousel */}
              <Detail /> {/* แสดง Detail */}
              <SerivecHome /> {/* แสดง Service Home */}
              <Projects /> {/* แสดง Projects */}
              {/* <HomeDamo />  สังเกตว่า HomeDamo ถูกคอมเมนต์ไว้ */}
            </>
          } 
        />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} /> {/* กำหนด route สำหรับหน้า Projects */}
        <Route path="/ProjectsDetail" element={<ProjectsDetail />} /> {/* กำหนด route สำหรับหน้า ProjectsDetail */}
      </Routes>
      <Footer /> {/* แสดง Footer Test */}
    </Router>
  );
}

export default App;
