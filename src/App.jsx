import React from 'react';
import UserList from './compnents/User/UserList/UserList';
import styles from './app.module.css';
const App =()=>{
    console.log(styles)
    const people = [
        {id:1,name:"Jhone",gender:"Male",age:21},
        {id:2,name:"safa",gender:"Female",age:20},
        {id:3,name:"karim",gender:"Male",age:23}
    ];
    return <div className={styles.layout}>
        <UserList people={people}/>
    </div>
};
export default App;