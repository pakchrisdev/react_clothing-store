import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './Header.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">shop</Link>
            <Link to="/shop" className="option">contact</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>sign out</div> :
                <Link className="option" to="/signin">sign in</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    // currentUser: state.user.currentUser
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);