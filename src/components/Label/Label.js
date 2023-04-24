import classes from './Label.module.css'

function Label (props) {
    return (
        <p className={classes.text}>{props.text}</p>
    )
}

export default Label