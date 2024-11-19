import React, { useCallback, useEffect } from 'react';
import { useState, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UseMeMoComponent from '../../components/UseMeMoComponent/UseMeMoComponent';
import ChildComponent from '../../components/ChildComponent/ChildComponent';
import DependencyComponent from '../../components/DepedencyComponent/DepedencyComponent';
const HomePage = () => {
    const initState = {
        job: '',
        jobs: []
    }
    const navigate = useNavigate()
    const handleUseContext = () => {
        navigate('/usecontext')
    }
    const inputRef = useRef()
    const SET_JOB = 'set_job'
    const ADD_JOB = 'add_job'
    const DELETE_JOB = 'delete_job'
    const SET_JOBS = payload => {
        return {
            type: SET_JOB,
            payload
        }
    }
    const ADD_JOBS = payload => {
        return {
            type: ADD_JOB,
            payload
        }
    }
    const DELETE_JOBS = payload => {
        return {
            type: DELETE_JOB,
            payload
        }
    }
    console.log(SET_JOBS('rua bat'))
    const reducer = (state, action) => {
        console.log('action', action)
        console.log('state', state)
        let newState
        switch (action.type) {
            case SET_JOB:
                newState = {
                    ...state,
                    job: action.payload,
                }
                break
            case ADD_JOB:
                newState = {
                    ...state,
                    jobs: [...state.jobs, action.payload]

                }
                break
            case DELETE_JOB:
                const newJobs = [...state.jobs]
                newJobs.splice(action.payload, 1)
                newState = {
                    ...state,
                    jobs: newJobs

                }
                break
            default:
                throw new Error('Invalid action')
        }
        console.log('new state', newState)
        return newState

    }
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const handleAdd = () => {
        dispatch(ADD_JOBS(job))
        dispatch(SET_JOBS(''))
        inputRef.current.focus()

    }
    const age = 20;

    // useCallback
    const [users, setUsers] = useState([]);
    // Nếu không dùng useCallback thì khi handleClick setUsers sẽ thay đổi dẫn đến toàn bộ code sẽ được render lại và getData sẽ thay đổi và useEffect bên ChildComponent được thực hiện lại
    // Khi setUsers thay đổi thì toàn bộ code sẽ được render lại dẫn đến getData thay đổi
    // const getData = (type) => {
    //     return fetch(`https://reqres.in/api/${type}`)

    // }
    // Dùng useCallback thì khi handleClick setUsers thay đổi code sẽ render lại và nó giúp khi getData thay đổi thì nó ngăn chặn useEffect thực hiện lại một lần nữa
    const getData = useCallback((type) => {
        return fetch(`https://reqres.in/api/${type}`)

    }, []);
    const handleClick = () => {
        getData('user')
            .then((res) => res.json())
            .then((res) => {
                const users = res.data;
                setUsers(users)
            })

    }


    // useRef
    const countRef = useRef(0)
    const obj = {
        current: 0,
    }
    const [count, setCount] = useState(0)
    const handle = () => {
        // khi setCount không thay đổi giá trị thì các giá trị trong useRef vẫn có thể thay đổi, và nó không hiện console.log liên tục như khi setCount thay đổi. Giá trị nó vẫn được thay đổi.

        countRef.current = countRef.current + 1;
        obj.current = obj.current + 1;
        setCount(count + 1)

    }
    // lí do để console.log hiển thị liên tục vì khi dùng useState setCount thay đổi dẫn đến toàn bộ code sẽ được thực thi lại

    console.log(countRef, obj, count)
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count + 1)
    //         console.log(count)
    //     }, 1000)

    // }, [count])



    // Dependency trong Array
    const [count1, setCount1] = useState(0)
    const handleincrease = () => {
        setCount1(count1 + 1)

    }
    const [tem] = useState([1, 2, 3, 4])
   




    return (
        <div>




            <h3>Todo</h3>
            <input ref={inputRef} placeholder='Enter todo' value={job} type="text" onChange={e => dispatch(SET_JOBS(e.target.value))} />
            <button onClick={handleAdd}>add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(DELETE_JOBS(index))}>&times;</span>


                    </li>

                ))}

            </ul>
            <button onClick={() => navigate(`/second`)}>Chuyen trang</button>
            <button onClick={() => navigate(`/user`)}>user</button>
            {/* <UseMeMoPage age={age} name='huy' /> */}
            <UseMeMoComponent age={10} name="huy" />
            <p>Data:</p>
            <button onClick={handleClick}>get users data</button>
            <p>{JSON.stringify(users)}</p>
            <ChildComponent getData={getData} />
            <button onClick={handle}>Click</button>
            <button onClick={handleUseContext}>useContext</button>
            <p>{count1}</p>
            <button onClick={handleincrease}>increase</button>

            <DependencyComponent tem={tem}></DependencyComponent>





        </div>
    );
}
export default HomePage