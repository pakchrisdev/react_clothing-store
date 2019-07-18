import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInUp from './pages/SignInUp/SignInUp';
import './App.css';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
	constructor(){
		super();
		this.state = { currentUser: null };
	}

	unsubscribeFromAuth = null;

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user })
			console.log(user)
		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
        	<Route exact path="/" component={Homepage}></Route>
        	<Route exact path="/shop" component={Shop}></Route>
        	<Route exact path="/signin" component={SignInUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
