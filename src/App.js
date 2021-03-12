import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { Jumbotron } from 'react-bootstrap';
import TeamDetail from './components/TeamDetail/TeamDetail';
import logo from './images/logo.png';
import { createContext, useState } from 'react';

document.body.style.backgroundColor = "#07270a";

export const BannerImgContext = createContext();

function App() {
  const [bannerImg, setBannerImg] = useState(logo);

  return (
    <div className="main-body">
      <Router>
        <BannerImgContext.Provider value={setBannerImg}>

          <Jumbotron className="banner">
            <div className="banner-logo">
              <img src={bannerImg} alt=""/>
            </div>
          </Jumbotron>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/team/:teamId">
              <TeamDetail></TeamDetail>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BannerImgContext.Provider>
      </Router>
    </div>
  );
}

export default App;
