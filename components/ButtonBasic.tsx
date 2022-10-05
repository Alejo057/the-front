import styles from "../styles/Button.module.scss";
import {Button} from "@mui/material";

const ButtonBasic = (props) => {
    return <Button className={styles.button} variant="contained" onClick={props.action}>{props.children}</Button>
}

export default ButtonBasic;