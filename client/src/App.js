import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import BlogPage from './components/views/BlogPage/BlogPage' 
import CreatePage from './components/views/BlogPage/CreatePage/CreatePage'
import PostPage from './components/views/BlogPage/PostPage/PostPage' 
import UpdatePage from './components/views/BlogPage/UpdatePage/UpdatePage'
import Auth from "./hoc/auth" 
import './App.css'
import './normalize.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout">
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/list" component={Auth(BlogPage, null)} /> {/* 나중에 /list/:category 추가 */}
          <Route exact path="/list/post/:postId" component={Auth(PostPage, null)} />
          <Route exact path="/list/insert" component={Auth(CreatePage, true)} />
          <Route exact path="/list/update/:postId" component={Auth(UpdatePage, true)} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
