import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInUp from './pages/SignInUp/SignInUp';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = { currentUser: null };
	// }

	unsubscribeFromAuth = null;

	componentDidMount(){
		const {setCurrentUser} = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// this.setState({ currentUser: user })
			// createUserProfileDocument(user)
			// console.log(user)
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					// console.log(snapShot.data());
					// this.setState({
					// 	currentUser: {
					// 		id: snapShot.id,
					// 		...snapShot.data()
					// 	}
					// })
					// console.log(this.state);
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				})
				
				
			} else{
				// this.setState({currentUser: userAuth})
				setCurrentUser(userAuth);
			}
		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

  render(){
    return (
      <div className="App">
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
        	<Route exact path="/" component={Homepage}></Route>
        	<Route exact path="/shop" component={Shop}></Route>
			<Route exact path="/signin" render={() => (
				this.props.currentUser
				? (<Redirect to="/" />)
				: <SignInUp></SignInUp>
			)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps  = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
