import React, { useEffect, useMemo, useState } from "react";
const DependencyComponent = ({ tem }) => {
    // sử dụng [] để khi DependencyComponent được render lại thì nó sẽ không thực hiện lại
    const [userId, setUsersId] = useState(3)
    const [serviceName, setServiceName] = useState('users')
    const [data, setData] = useState()
    const obj = {
        userId: 3,
        serviceName: 'users'
    }
    // khi khai báo temp bình thường nó là một array thì nó sẽ được render lại
    // const temp = [1, 2, 3, 4, 5, 6]

    // khi sử dụng useMemo và truyền vào [] thì nó sẽ không thay đổi, mặc dù nó là một array nhưng nó sẽ không render lại
    // const temp = useMemo(() =>
    //     {
    //         return [1, 2, 3, 4, 5, 6]
    //     }, []);

    // khi khai báo như này thì mặc dù nó là một array nhưng không được render lại
    const [temp] = useState([1, 2, 3, 4, 5, 6])
    // useEffect(() => {
    //     fetch('https://reqres.in/api/users/2')
    //         .then((res) => res.json())
    //         .then((res) => console.log(res.data))
    // }, [])
    // useEffect(() => {
    //     fetch(`https://reqres.in/api/users/${serviceName}/${userId}`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setData(res.data)
    //         })
    // }, [userId, serviceName])

    // Đối với function, array, object khi chương trình render lại thì nó sẽ render lại theo (thực hiện lại các useEffect hay useMemo ...)
    useEffect(() => {
        console.log('useEffect from child')
        temp.forEach(element => {
            console.log(element)

        });
    }, [temp])
    useEffect(() => {
        console.log('useEffect from child object',)

    }, [temp])
    // nếu truyền vào là obj là sẽ thực hiện lại khi render, nhưng obj.servicename là kiểu String và obj.userId là number nên nó sẽ không thực thi lại khi render
    useEffect(() => {
        console.log('useEffect from child tem', obj.userId, ' ', obj.serviceName)

    }, [obj.serviceName, obj.userId])

    // const useMemo = useMemo(() => {
    //     return 3 + 3;

    // }, [])
    return (
        <div>
            <div>Depency</div>
            <button onClick={() => setUsersId(6)}>CliCK</button>
        </div>
    )
}
export default DependencyComponent