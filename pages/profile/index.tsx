import {NextPage} from "next";
import {useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {repositoryMapper, userMapper} from "../../mappings/utils";
import UserInfoContent from "../../components/UserInfoContent";
import Header from "../../components/Header";
import {RepositoryDto} from "../../models/repository/Repository.dto";
import RepositoryList from "../../components/RepositoryList";
import Footer from "../../components/Footer";
import styles from "../../styles/Profile.module.scss";
import {useRecoilState} from "recoil";
import userState from "../../recoil/user/atom";
import {getContent} from "../../helper/api";
import useTranslation from "next-translate/useTranslation";

const Profile: NextPage = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const [user, setUser] = useRecoilState(userState);
    const [repositoryList, setRepositoryList] = useState<RepositoryDto[]>([]);
    const { t } = useTranslation('profile');

    useEffect(() => {
        if (session) {

            getContent('https://api.github.com/user', session).then((data) => {
                setUser(userMapper(data.data));
                localStorage.setItem('avatar', user.avatarUrl);
            });

            getContent('https://api.github.com/user/repos', session).then((data) => {
                // @ts-ignore
                data.data.forEach((repository) => {
                    const mappedRepository = repositoryMapper(repository)
                    if (repository.languages_url) {
                        getContent(repository.languages_url, session).then((languages) => {
                            mappedRepository.languages = Object.keys(languages.data);
                            setRepositoryList((existContent) => [
                                ...existContent,
                                mappedRepository
                            ]);
                        })
                    }
                });

            });
        } else {
            router.push("/");
        }
    }, []);

    if (user) {
        return (
            <React.Fragment>
                <Header avatar={user.avatarUrl}/>
                <div className="profile-container">
                    <div>
                        <UserInfoContent user={user}/>
                    </div>
                    <RepositoryList list={repositoryList}>
                        <h3 className={styles.repositoryListTitle}>{t('repositoriesTitle')}</h3>
                    </RepositoryList>
                </div>
                <Footer absolute={true}/>
            </React.Fragment>);
    }
}

export default Profile;