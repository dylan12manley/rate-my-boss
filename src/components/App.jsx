import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from './pages/Admin';



class App extends React.Component {

  render(){
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

// App.propTypes = {

// };

// const mapStateToProps = state => {
//   return {

//   }
// }

// App = connect(mapStateToProps)(App);

export default App;