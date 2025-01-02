import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  "./App.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import PrivateRouter from "./components/services/PrivateRouter"
//IMPORT PAGES
import Home from "./pages/Home/Home";
import Inventory from './pages/Inventory/Inventory';
import User from './pages/Profile/User';
import Login from './pages/Login/Login';
import ConditionalSidebar from './components/services/ConditionalSidebar';
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
                <Route path='/user'  element={<User />} />
                <Route path='/inventory'  element={<Inventory />} />
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
