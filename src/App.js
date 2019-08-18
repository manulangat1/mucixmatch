import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Index from './Components/Layout/Index'
import {Provider} from './context'
import Lyrics from './Components/tracks/Lyrics'
class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Provider>
      <Router>
      <Header />
      <div className="container">
         <Switch>
             <Route exact path="/" component={Index} />
             <Route exact path="/lyrics/track/:id" component={Lyrics} />
         </Switch>
      </div>
        <Footer />
      </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
