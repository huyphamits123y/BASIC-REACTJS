import React, { useEffect, useState } from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { AppProvider } from "../../Context/AppContext";


const UseContextPage = () => {
    // sử dụng useContext để tạo một nơi lưu trữ dữ liệu giúp cho các component có thể lấy dữ liệu mà không cần phải truyền qua props
    // const [userData, setUserData] = useState({})
    // useEffect(() => {
    //     fetch('https://reqres.in/api/users/2')
    //         .then((res) => res.json())
    //         .then((res) =>

    //             setUserData(res.data)
    //         )
    // })

    return (
        <div>
            <h1>huy</h1>
            <AppProvider>
                <HeaderPage></HeaderPage>
            </AppProvider>

        </div>

    )
}
export default UseContextPage