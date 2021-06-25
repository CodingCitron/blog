import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'
import Auth from "./hoc/auth" 

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
