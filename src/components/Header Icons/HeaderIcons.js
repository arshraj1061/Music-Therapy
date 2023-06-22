import classes from './HeaderIcons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach, faTree, faCity, faWater, faCouch, faFootball, faDog, faOm, faGuitar, faMusic , faBrain, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
function HeaderIcons() {

    return (
        <div className={classes.headerIcons}>
        <nav className={classes.nav}>
            <NavLink to='/' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faArrowLeftLong} size="2xl" style={{color: "#ac921e",}} />
            </NavLink>

            <NavLink to='/beach' className={navData => navData.isActive ? classes.active : '' }>
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

            <NavLink to='/raga' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faMusic} size="2xl" style={{color: "#D10000",}} />
            </NavLink>

            <NavLink to='/binaural' className={navData => navData.isActive ? classes.active : '' }>
                <FontAwesomeIcon className={classes.icon} icon={faBrain} size="2xl" style={{color: "#D10000",}} />
            </NavLink>
        </nav>
    </div>
    )
}

export default HeaderIcons;