import React from "react";
import UserInfo from '../UserInfo/UserInfo';
import styles from './styles.module.css';
const UserList = (props) => {
    const peopleHandler=props.people.map((e) => (
        <div key={e.id} className={styles["user-data"]}>
            <UserInfo data={e}/>
        </div>
    ));
    return <div>{peopleHandler}</div>;
};
export default UserList;