import classes from './FooterIcons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUmbrellaBeach, faTree, faCity, faWater, faCouch, faFootball, faDog, faOm, faGuitar, faBrain, faUpload } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
function FooterIcons() {

    return (
        <div className={classes.footerIcons}>
        <nav className={classes.nav}>
            <NavLink to='/favourites' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faHeart} size="2xl" style={{color: "#D10000",}} beat/>
            </NavLink>

            <NavLink to='/' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faUmbrellaBeach} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/forest' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faTree} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/city' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faCity} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/underwater' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faWater} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/home' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faCouch} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/park' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faFootball} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/countryside' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faDog} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/eastasia' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faOm} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/instrumental' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faGuitar} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/binaural' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faBrain} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/custom' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faUpload} size="2xl" style={{color: "#D10000",}} />
            </NavLink>
        </nav>
    </div>
    )
}

export default FooterIcons;