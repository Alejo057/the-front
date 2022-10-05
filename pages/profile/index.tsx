import {NextPage} from "next";
import {signOut, useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {repositoryMapper, userMapper} from "../../mappings/utils";
import {UserDto} from "../../models/user/User.dto";
import UserInfoContent from "../../components/UserInfoContent";
import Header from "../../components/Header";
import {RepositoryDto} from "../../models/repository/Repository.dto";
import RepositoryList from "../../components/RepositoryList";
import Footer from "../../components/Footer";


const Profile: NextPage = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const [user, setUser] = useState(new UserDto());
    const [repositoryList, setRepositoryList] = useState<RepositoryDto[]>([])

    useEffect(() => {
        if (session) {
            console.log(session.user);
        } else {
            router.push("/");
        }
    }, []);

    useEffect(() => {
        axios.get('https://api.github.com/user', {
            headers: {
                'Authorization': `Bearer ${session?.accessToken}`
            }
        }).then((data) => {
            setUser(userMapper(data.data));
        });
    }, [])

    useEffect(() => {

        axios.get('https://api.github.com/user/repos', {
            headers: {
                'Authorization': `Bearer ${session?.accessToken}`
            }
        }).then(async (data) => {
            // @ts-ignore
            data.data.forEach((repository) => {
                const mappedRepository = repositoryMapper(repository)
                if (repository.languages_url) {
                    axios.get(repository.languages_url, {
                        headers: {
                            'Authorization': `Bearer ${session?.accessToken}`
                        }
                    }).then((languages) => {
                        mappedRepository.languages = Object.keys(languages.data);
                        setRepositoryList((existContent) => [
                            ...existContent,
                            mappedRepository
                        ]);
                    })
                }
            });

        });
    }, [])


    if (user) {
        return (
            <React.Fragment>
                <Header avatar={user.avatarUrl}/>
                <div className="profile-container">
                    <div>
                        <UserInfoContent user={user}/>
                    </div>
                    <RepositoryList list={repositoryList}/>
                </div>
                <Footer />
            </React.Fragment>);
    }

    return <h2>Loading...</h2>
}

export default Profile;