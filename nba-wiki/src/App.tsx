import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Api from './components/Api'
import HomePage from './components/HomePage/homepage';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Teams from './components/Teams/teams';
import TeamDetails from './components/TeamDetails/teamdetails';
import Players from './components/Players/players';
import Tests from './components/Tests/tests';

function App() {
  return (
    <Router>
        <div className='content-position'>
          <Header />

          <main className='content-pages'>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/teams" element={<Teams />}/>
                <Route path="/teams/:id" element={<TeamDetails />}/>
                <Route path="/players/" element={<Players />}/>
                <Route path="/tests" element={<Tests />}/>
            </Routes>
          </main>

          <Footer />
        </div>
    </Router>
  );
}

export default App
