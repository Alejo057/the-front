import styles from "../styles/SearchBox.module.scss";
import {Alert, Card, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonBasic from "./ButtonBasic";
import React, {ChangeEventHandler, useState} from "react";

const SearchBox = (props) => {
    const [inputContent, setInputContent] = useState("");
    const [errorPresented, setErrorPresented] = useState(false);
    const inputContentChange: ChangeEventHandler = (e) => {
        // @ts-ignore
        setInputContent(e.target?.value);
    }

    const onSearchTrigger = () => {
        if (inputContent.length > 0) {
            setErrorPresented(false);
            props.onSearchContentSubmit(inputContent);
        } else {
            setErrorPresented(true);
        }
    }

    // @ts-ignore
    return (<React.Fragment>
        <Card variant="outlined" className={styles.searchContainer}>
            <TextField id="outlined-basic"
                       variant="outlined"
                       className={styles.searchBox}
                       onChange={inputContentChange}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                       }}/>
            <div className={styles.searchButton}>
                <ButtonBasic action={onSearchTrigger}>SEARCH</ButtonBasic>
            </div>
        </Card>
        {errorPresented && <Alert severity="error">You need to fill this input field</Alert>}
    </React.Fragment>);
}

export default SearchBox;