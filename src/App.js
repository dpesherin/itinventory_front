import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  "./App.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import PrivateRouter from "./components/Services/PrivateRouter"
import ConditionalSidebar from './components/Services/ConditionalSidebar';
//IMPORT PAGES
import Home from "./pages/Home/Home";
import Items from './pages/Items/Items';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Creditials from './pages/Creditials/Creditials';
import Users from './pages/Users/Users';
//END IMPORT

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <div id="content">
          <ConditionalSidebar />
          <Content>
            <Routes>
              <Route path='/login'  element={<Login />} />
              <Route element={<PrivateRouter />}>
                <Route path='/'  element={<Home />} />
                <Route path='/users'  element={<Users />} />
                <Route path='/creditials'  element={<Creditials />} />
                <Route path='/settings'  element={<Settings />} />
                <Route path='/profile'  element={<Profile />} />
                <Route path='/items'  element={<Items />} />
              </Route>
            </Routes>
          </Content>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
