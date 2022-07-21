import GitHubIcon from "@mui/icons-material/GitHub";
import {Button, Card} from "@mui/material";
import {signIn} from "next-auth/react";
import styles from "../styles/login.module.scss"

const login = function () {
    console.log(styles)
    return (
        <Card variant="outlined" className={styles.container}>
            <GitHubIcon sx={{fontSize: 87}} className={styles.loginIcon}/>
            <div className={styles.loginMessage}>Log in to your account</div>
            <Button className={styles.loginButton} variant="contained" onClick={() => signIn('github')}>Sign in with github</Button>
        </Card>
    )
}

export default login;