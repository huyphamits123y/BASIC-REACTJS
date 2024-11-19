// import { createSlice } from "@reduxjs/toolkit";
// import React from "react";
// const saveStateToLocalStorage = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('userState', serializedState);
//     } catch (e) {
//         console.error(e);
//     }
// };

// // Hàm tải state từ localStorage
// const loadStateFromLocalStorage = () => {
//     try {
//         const serializedState = localStorage.getItem('userState');  // Đảm bảo key là 'userState'
//         if (serializedState === null) return undefined;
//         return JSON.parse(serializedState);
//     } catch (e) {
//         console.error(e);
//         return undefined;
//     }
// };

// // Lấy trạng thái ban đầu từ localStorage, nếu không có thì sử dụng trạng thái mặc định
// const initialState = loadStateFromLocalStorage() || {
//     name: '',
//     userclass: '',
//     mssv: '',
// };

// const userSlide = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         adduser: (state, action) => {
//             const { name, userclass, mssv } = action.payload;
//             state.name = name;
//             state.userclass = userclass;
//             state.mssv = mssv;

//             saveStateToLocalStorage(state);

//         }

//     }


// })
// export const { adduser } = userSlide.actions;

// export default userSlide.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Hàm lưu danh sách người dùng vào localStorage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('userState', serializedState);
    } catch (e) {
        console.error(e);
    }
};

// Hàm tải danh sách người dùng từ localStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('userState');
        if (serializedState === null) return [];  // Nếu không có dữ liệu, trả về mảng rỗng
        return JSON.parse(serializedState);
    } catch (e) {
        console.error(e);
        return [];  // Trả về mảng rỗng nếu có lỗi
    }
};

// Lấy trạng thái ban đầu từ localStorage, nếu không có thì sử dụng trạng thái mặc định
const initialState = loadStateFromLocalStorage();

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.push(action.payload);  // Thêm người dùng mới vào danh sách
            saveStateToLocalStorage(state);  // Lưu lại toàn bộ danh sách người dùng vào localStorage
        }
    }
});

// Xuất action và reducer
export const { adduser } = userSlice.actions;
export default userSlice.reducer;

