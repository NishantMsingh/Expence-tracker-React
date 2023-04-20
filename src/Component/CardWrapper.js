import "./Cardwrapper.css";
const Cardwrapper=(props)=>{
    const classes="card "+ props.className;
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default Cardwrapper;