import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { AppProvider } from "@reduxjs/toolkit/query/react";
const HeaderPage = () => {
    const { userData, test } = useContext(AppContext)
    console.log({ userData }, { test })
    return (
        <div>

            <p>xin chao {userData.first_name}, {userData.email}</p>

        </div>
    )
}
export default HeaderPage