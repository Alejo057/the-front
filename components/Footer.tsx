import styles from '../styles/Footer.module.scss';
import useTranslation from "next-translate/useTranslation";

const Footer = (props) => {
    const { t } = useTranslation('footer');

    return <footer className={styles.footer.concat(props.absolute ? " ".concat(styles.absolute) : "")}>
        <div className={styles.linksContainer}>
            <ul>
                <li className={styles.category}><a href="#">{t('services')}</a></li>
                <li><a href="#">{t('softwareDevelopment')}</a></li>
                <li><a href="#">{t('qualityAssurance')}</a></li>
            </ul>
            <ul>
                <li className={styles.category}><a href="#">{t('company')}</a></li>
                <li><a href="#">{t('about')}</a></li>
            </ul>
            <ul>
                <li className={styles.category}>{t('legal')}</li>
                <li><a href="#">{t('termsConditions')}</a></li>
                <li><a href="#">{t('privacyPolicy')}</a></li>
            </ul>
            <ul>
                <li className={styles.category}><a href="#">{t('resources')}</a></li>
                <li><a href="#">{t('faq')}</a></li>
            </ul>
        </div>
    </footer>
}

export default Footer;