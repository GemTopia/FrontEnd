import React, {useState } from "react";
//import User from "./User";
import styles from "./Signup.module.css";
import User from "./User";
import UserInputs from "./UserInputs";


const Signup = () => {
  const [users , setUsers] = useState<User[]>([]);
  

  const addUserHandeler = (newUser:User) => {
    setUsers((prevUsers) => {
      return prevUsers.concat(newUser);
    } );

    console.log(users)
  }




  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Sign up</h1>
        <p>Please fill the inputs below here</p>
        <UserInputs onAddUser = {addUserHandeler} />
      </div>
    </div>
  )
};

export default Signup;
