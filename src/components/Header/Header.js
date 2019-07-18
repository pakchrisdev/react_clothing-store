import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './Header.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
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
        </div>
    </div>
);

export default Header;