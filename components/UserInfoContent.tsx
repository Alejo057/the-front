import {Avatar, Card} from "@mui/material";
import styles from "../styles/user-info-content.module.scss"

// @ts-ignore
const UserInfoContent = (props) => {
    const user = props.user;
    return (
        <Card variant="outlined" className={styles.userInfoContainer}>
            <div className={styles.userInfo}>
                <div className={styles.avatarBox}>
                    <Avatar src={user.avatarUrl}/>
                </div>
                <div className={styles.profileData}>
                    <strong className={styles.userName}>{user.name}</strong>
                    {user.email && <p>{user.email}</p>}
                    <p>ID: {user.username}</p>
                </div>
            </div>
            <div className={styles.followBox}>
                <div>{user.followers} followers</div>
                <div>{user.following} following</div>
            </div>
        </Card>
    )
}

export default UserInfoContent;