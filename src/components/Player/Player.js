import classes from "./Player.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faCirclePause, faSliders } from '@fortawesome/free-solid-svg-icons'

function Player () {
    return (
        <div className={classes.PlayerCard}>
            <FontAwesomeIcon className={classes.icon} icon={faHourglassHalf} size="2xl" style={{color: "#f7ba2b",}} />
            <FontAwesomeIcon className={classes.icon} icon={faCirclePause} size="2xl" style={{color: "#f7ba2b",}} />
            <FontAwesomeIcon className={classes.icon} icon={faSliders} size="2xl" style={{color: "#f7ba2b",}} />
        </div>
    )
}

export default Player