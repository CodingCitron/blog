import './App.css'
import './normalize.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import CreatePage from './components/views/PostPage/CreatePage' 
import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'
import Auth from "./hoc/auth" 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/post/insert" component={Auth(CreatePage, true)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
