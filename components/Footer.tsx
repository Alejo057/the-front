import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.linksContainer}>
            <ul>
                <li className={styles.category}><a href="#">SERVICES</a></li>
                <li><a href="#">Software Development</a></li>
                <li><a href="#">Quality assurance</a></li>
            </ul>
            <ul>
                <li className={styles.category}><a href="#">COMPANY</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <ul>
                <li className={styles.category}>LEGAL</li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            <ul>
                <li className={styles.category}><a href="#">RESOURCES</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    </footer>
}

export default Footer;