import React,  { Fragment } from 'react';
import headerImage from '../../assets/header-image.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals To Go</h1>
        <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}> 
            <img src={headerImage} alt="Meals to Go Restaurant" />
        </div>
    </Fragment>
}

export default Header;