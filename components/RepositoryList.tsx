import {RepositoryDto} from "../models/repository/Repository.dto";
import React from "react";
import LanguagesList from "./LanguagesList";
import {Card} from "@mui/material";
import styles from "../styles/RepositoryList.module.scss";
import {uniqueKeyGenerator} from "../mappings/utils";

const RepositoryList = (props) => {
    const list = props.list;
    return (
        <div className={styles.repositoryListContainer.concat(props.isFullScreen ? ' '.concat(styles.lessPadding) : '')}>
            {props.children}
            <div className={styles.cardListContainer}>
                {list.map((listItem: RepositoryDto, index: React.Key | null | undefined) => {
                    return  <React.Fragment key={uniqueKeyGenerator()}>
                        <Card variant="outlined" className={styles.repositoryCard.concat(props.isFullScreen ? ' '.concat(styles.fullScreenContent) : '')}>
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