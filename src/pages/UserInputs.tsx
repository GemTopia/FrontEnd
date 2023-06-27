import React, {useState} from "react";
import styles from "./Signup.module.css";
import User from "./User";

const UserInputs = (props : any) => {
    const [enteredEmail , setEnteredEmail] = useState<string>(String);
    const [enteredUsername , setEnteredUsername] = useState<string>(String);
    const [enteredPassword , setEnteredPassword] = useState<string>(String);

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(e.target.value);
    }
    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredUsername(e.target.value);
    }
    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPassword(e.target.value);
    }

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();

        const newUser = new User(enteredEmail,enteredUsername,enteredPassword);

        props.onAddUser(newUser)

        setEnteredEmail('');
        setEnteredUsername('');
        setEnteredPassword('');
        
    }

    return(
        <div className={styles.box}>
            <form onSubmit={submitHandler} >
                <input type="email"
                    placeholder="Email" 
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    required />

                <input type="text" 
                    placeholder="Username"
                    value={enteredUsername}
                    onChange={usernameChangeHandler} 
                    required />

                <input type="password"
                    placeholder="Password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler} 
                    required />
                <button type="submit">Create Account</button>
            </form>
            <span>Already have an account?</span>
            <a href="/">Sign In</a>
        </div>
    )

}
export default UserInputs;