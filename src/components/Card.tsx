import React from 'react';
interface IProps{
    name: string;
    email: string;
    deleteUser:(email:string) => void;
}
const Card = ({name,email,deleteUser}: IProps) => {
    return (
        <div className="card">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <div className="btn-group">
                <button>Edit</button>
                <button onClick={() => deleteUser(email)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;