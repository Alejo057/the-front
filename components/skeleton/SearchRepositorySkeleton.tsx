import React from "react";
import {Skeleton} from "@mui/material";
import styles from '../../styles/SearchRepositorySkeleton.module.scss';

const SearchRepositorySkeleton = () => {
    return <React.Fragment>
        <Skeleton  className={styles.title}/>
        <div className={styles.repositoryListContainer}>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
            <Skeleton className={styles.repository}/>
        </div>

    </React.Fragment>
}

export default SearchRepositorySkeleton;