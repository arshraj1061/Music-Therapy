import classes from './BgImage.module.css'

function BeachBg(props) {
    return (
        <div className={classes.container}> 
            <img className={classes.bg} src={props.src} alt="background"/>
            {props.children}
        </div>
    )
}

export default BeachBg;