class User{
    id : string;
    email : string;
    username : string;
    password : string;

    constructor(email:string , username : string , password : string ){
        this.id = Math.random().toString();
        this.email = email;
        this.username = username;
        this.password = password;

    }
}

export default User;