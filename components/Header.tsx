import styles from "../styles/Header.module.scss"
import {Avatar} from "@mui/material";
import React, {useState} from "react";
import {signOut} from "next-auth/react";
import Link from "next/link"
import useTranslation from "next-translate/useTranslation";

// @ts-ignore
const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const [showSignOutButton, setShowSignOutButton] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const { t } = useTranslation('header')

    const triggerShowSignOut = () => {
        setShowSignOutButton(!showSignOutButton);
    }

    return <header className={styles.header}>
        <span className={styles.pageLogo}></span>
        <span className={styles.hamburgerIcon} onClick={toggleMenu}></span>
        <ul className={styles.headerLinksList.concat(showMenu ? ' '.concat(styles.shown) : '')}>
            <li><span className={styles.closeIcon} onClick={toggleMenu}></span></li>
            <li><a href="#">{t('searchUser')}</a></li>
            <li><Link href="/search/repository"><a>{t('searchRepositories')}</a></Link></li>
            <li className={styles.avatarContainer}>
                <Avatar src={props.avatar} onClick={triggerShowSignOut}/>
                {showSignOutButton &&
                    <div className={styles.signOutButton}>
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>}
            </li>
        </ul>
    </header>
}

export default Header;