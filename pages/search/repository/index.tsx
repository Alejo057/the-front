import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from '../../../styles/SearchRepository.module.scss';
import SearchBox from "../../../components/SearchBox";
import {useSession} from "next-auth/react";
import {repositoryMapper} from "../../../mappings/utils";
import {RepositoryDto} from "../../../models/repository/Repository.dto";
import RepositoryList from "../../../components/RepositoryList";
import {Pagination, ThemeProvider} from "@mui/material";
import customTheme from "../../../config/styles";
import SearchRepositorySkeleton from "../../../components/skeleton/SearchRepositorySkeleton";
import {useRecoilState} from "recoil";
import userState from "../../../recoil/user/atom";
import {getContent} from "../../../helper/api";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

const SearchRepository: NextPage = () => {
    const {data: session} = useSession();
    const [repositoryList, setRepositoryList] = useState<RepositoryDto[]>([])
    const [pageNumber, setPageNumber] = useState(1);
    const [repositoryName, setRepositoryName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [user, _] = useRecoilState(userState);
    const router = useRouter();
    const { t } = useTranslation('search-repository');

    useEffect(() => {
        if (!session) {
            router.push("/");
        }
    }, [])
    const mapRepository = (repositories) => {
        repositories.data.items.forEach((repository) => {
            const mappedRepository = repositoryMapper(repository)
            if (repository.languages_url) {
                getContent(repository.languages_url, session).then((languages) => {
                    mappedRepository.languages = Object.keys(languages.data);
                    setRepositoryList((existContent) => [
                        ...existContent,
                        mappedRepository
                    ]);
                    setLoading(false);
                })
            }
        });
    }

    const searchContent = (repositoryToSearch) => {
        setLoading(true)
        setRepositoryList([]);
        setRepositoryName(repositoryToSearch);
        getContent(`https://api.github.com/search/repositories?q=${repositoryToSearch}`, session).then((repositories) => {
            setPageNumber(Math.ceil(repositories.data.total_count / 30))
            mapRepository(repositories);
        });
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setLoading(true);
        setCurrentPage(value);
        setRepositoryList([]);
        getContent(`https://api.github.com/search/repositories?q=${repositoryName}&page=${value}`, session).then((repositories) => {
            mapRepository(repositories);
        })
    };

    return (<div className={styles.searchRepositoryPageContainer}>
        <Header avatar={user.avatarUrl}/>

        <main className={styles.searchRepositoryPage}>
            <h1 className={styles.title}>{t('search')} <span>{t('repositories')}</span></h1>
            <SearchBox  onSearchContentSubmit={searchContent}/>

            {loading && <SearchRepositorySkeleton />}

            {repositoryList.length > 0 && <RepositoryList list={repositoryList} isFullScreen={true}>
                <h3 className={styles.resultsTitle}>{t('results')}</h3>
            </RepositoryList>}
            {repositoryList.length > 0 && <ThemeProvider theme={customTheme}>
                <Pagination className={styles.pagination} count={pageNumber} page={currentPage} color="primary" onChange={handleChangePage}/>
            </ThemeProvider>}
        </main>
        <Footer />
    </div>)
}

export default SearchRepository;