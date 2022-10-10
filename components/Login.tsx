import GitHubIcon from "@mui/icons-material/GitHub";
import {Card} from "@mui/material";
import {signIn} from "next-auth/react";
import styles from "../styles/login.module.scss"
import ButtonBasic from "./ButtonBasic";
import useTranslation from "next-translate/useTranslation";

const login = function () {
    const { t } = useTranslation("home");

    return (
        <Card variant="outlined" className={styles.container}>
            <GitHubIcon sx={{fontSize: 87}} className={styles.loginIcon}/>
            <div className={styles.loginMessage}>{t('loginText')}</div>
             {/*@ts-ignore*/}
            <ButtonBasic action={() => signIn('github')}>{t('buttonText')}</ButtonBasic>
        </Card>
    )
}

export default login;