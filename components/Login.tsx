import GitHubIcon from "@mui/icons-material/GitHub";
import {Card} from "@mui/material";
import {signIn} from "next-auth/react";
import styles from "../styles/login.module.scss"
import ButtonBasic from "./ButtonBasic";

const login = function () {
    console.log(styles)
    return (
        <Card variant="outlined" className={styles.container}>
            <GitHubIcon sx={{fontSize: 87}} className={styles.loginIcon}/>
            <div className={styles.loginMessage}>Log in to your account</div>
            <ButtonBasic action={() => signIn('github')}>Sign in with github</ButtonBasic>
        </Card>
    )
}

export default login;