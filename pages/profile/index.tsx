import {NextPage} from "next";
import {signOut, useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";


const Profile: NextPage = () => {
    const {data: session} = useSession();
    const router = useRouter();

    if (session) {
        console.log(session.user);
    } else {
        useEffect(() => {
            router.push("/");
        }, []);
    }

    axios.get('https://api.github.com/user', {
        headers: {
            'Authorization': `Bearer ${session?.accessToken}`
        }
    }).then((data) => {
        console.log(data)
    });
    return (<button onClick={() => signOut()}>Sign out</button>)
}

export default Profile;