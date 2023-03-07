import React from "react";
import styles from './styles.module.css';
console.log(styles);
const UserInfo=(props)=>{
    return <div > 
     <ul className={styles.userList}>
        <li>name:{props.data.name}</li>
        <li>Age:{props.data.age}</li>
        <li>gender:{props.data.gender}</li>
    </ul>
    </div>;
}
export default UserInfo;