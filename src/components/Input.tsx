import React, { useState } from 'react';
import Card from './Card';

interface IUser{
    name: string;
    email: string;
}

const Input = () => {
    const [userData,setUserData] = useState<IUser[]>([]);
    const [user,setUser] = useState({} as IUser);

    const handelInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const pushUserData = () => {
        setUserData([...userData,user]);
        setUser({
            name:'',
            email:''
        })
    }

    const deleteUser = (email:string) => {
        const newUserData = userData.filter((userEmail) => userEmail.email !== email)
        setUserData(newUserData)
    }

    return (
        <>
            <div className="form">
                <input value={user.name} name="name" type="text" placeholder="Enter Your Name" onChange={handelInput}/>
                <input value={user.email} name="email" type="email" placeholder="Enter Your Email" onChange={handelInput} />
                <button onClick={pushUserData}>Add</button>
            </div>
           {
               userData.map(user =>  <Card key={user.email} name={user.name} email={user.email} deleteUser={deleteUser} />)
           }
        </>
    );
};

export default Input;