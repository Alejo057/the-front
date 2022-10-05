import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {getSession, GetSessionParams, useSession} from "next-auth/react";
import {Fragment, useEffect} from "react";
import Login from "../components/Login";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const {data: session} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/profile");
        }
    }, []);

    return (
        <Fragment>
            <Head>
                <title>The Front</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {!session && <main className={styles.main}>
                <Login/>
            </main>}

            <footer className={styles.footer}>
            </footer>
        </Fragment>
    )
}

export default Home

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
    const session = await getSession(context);
    return {
        props: {
            session
        },
    };
};
