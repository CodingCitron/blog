import './App.css'
import './normalize.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import CreatePage from './components/views/PostPage/CreatePage' 
import PostPage from './components/views/PostPage/PostPage' 
import BlogPage from './components/views/BlogPage/BlogPage' 
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
        <Route exact path="/blog" component={Auth(BlogPage, null)} />
        <Route exact path="/blog/post/:postId" component={Auth(PostPage, null)} />
        <Route exact path="/post/insert" component={Auth(CreatePage, true)} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
