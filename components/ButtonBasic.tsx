import styles from "../styles/Button.module.scss";
import {Button} from "@mui/material";
import PropTypes from "prop-types";

const ButtonBasic = (props) => {
    return <Button className={styles.button} variant="contained" onClick={props.action}>{props.children}</Button>
}

ButtonBasic.propTypes = {
    children: PropTypes.string.isRequired,
};

export default ButtonBasic;