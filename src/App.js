import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Authorization from './Components/Authorization';
import Footer from './Components/ComponentsHome/Footer';
import SetcionTwo from './component/SetcionTwo';

// import SetcionTwo from './component/SetcionTwo';
// import Section


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
          {/* <Home /> */}
          <Link to="/Register">Registration</Link>
          <Link to="/Authorization">Authorization</Link>
          <Routes>
              <Route path='/Register' element={<Registration />}></Route>
          </Routes>
          <Routes>
            <Route path='/Authorization' element={<Authorization />}></Route>
          </Routes>
          <Routes>
            <Route path='/SectionTwo' element={<SetcionTwo />}></Route>
          </Routes>
          <Footer />
          {/* <SetcionTwo /> */}
    </div>
  );
}

export default App;
