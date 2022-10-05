import {RepositoryDto} from "../models/repository/Repository.dto";
import React from "react";
import LanguagesList from "./LanguagesList";
import {Card} from "@mui/material";
import styles from "../styles/RepositoryList.module.scss";

const RepositoryList = (props) => {
    const list = props.list;
    return (
        <div className={styles.repositoryListContainer}>
            <h3 className={styles.repositoryListTitle}>Repositories</h3>
            <div className={styles.cardListContainer}>
                {list.map((listItem: RepositoryDto, index: React.Key | null | undefined) => {
                    return  <React.Fragment>
                        <Card variant="outlined" className={styles.repositoryCard} key={index}>
                            <div className={styles.repositoryNameContainer}>
                                <div className={styles.repositoryName}>{listItem.name}</div>
                                <div className={styles.repositoryVisibility}>{listItem.visibility}</div>
                            </div>
                            <LanguagesList languages={listItem.languages} />
                        </Card>
                    </React.Fragment>
                })}
            </div>
        </div>
        )
}

export default RepositoryList;