import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../redux/slides/userSlice";

const UserPage = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [users, setusers] = useState({ 
        name: '',
        userclass: '',
        mssv: ''
    })
    user.map((users) => console.log('user', users))
    useEffect(() => {
        if (user) {
            console.log('user co ton tai')
        }
    }, [user])

    const handleAdd = () => {
        dispatch(adduser(users))
    }
    const onChanges = (e) => {
        setusers({
            ...users,
            [e.target.name]: e.target.value

        })
        console.log('e.target.name', e.target.name, e.target.value)


    }
    return (
        <div>
            <input placeholder="name" type='text' value={users.name} onChange={onChanges} name="name"></input>
            <input placeholder="userclass" type='text' value={users.userclass} onChange={onChanges} name="userclass"></input>
            <input placeholder="mssv" type='text' value={users.mssv} onChange={onChanges} name="mssv"></input>
            <button onClick={handleAdd}>dang ky</button>
        </div>
    )
}
export default UserPage