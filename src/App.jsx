import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
// import Login from './pages/login'
// import Store from './pages/store'
// import About from './pages/about'
import Navbar from './components/Navbar'
import { Suspense } from 'react'
import Loading from './components/Loading';
import lazyLoad from './lazyLoad';
import PrivateRoute from './components/PrivateRoute';
// import withAuthorization from './hocs/withAuthorization';

const Home = lazyLoad("./pages/home", "Home");
const Store = lazyLoad("./pages/store");
const About = lazyLoad("./pages/about");
const Login = lazyLoad("./pages/login");

// const ProtectedAbout = withAuthorization(About);
// const ProtectedStore = withAuthorization(Store);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
