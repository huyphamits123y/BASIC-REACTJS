import React from "react";
import { useEffect, useState, useMemo } from "react";
const UseMeMoPage = ({ age, name }) => {
    const AGE_G = 18;

    // const [Adult, setAdult] = useState(false)
    // useEffect(() => {
    //     setAdult(age > AGE_G);
    // }, [age]);
    // return (
    //     <p>Hello {name} , {Adult ? "adult" : "child"}</p>

    // )


    // sử dụng useMeMo giống như useEffect khi age thay đổi giá trị sẽ gọi lại nó (callback)
    // const Adult = useMemo(() => age > AGE_G, [age])
    const Adult = useMemo(() => age > AGE_G ? "adultrr" : "childs", [age])
    return (
        // <p>Hello {name} , {Adult ? "adult" : "childd"}</p>
        <p>Hello {name} , {Adult}</p>


    )

}
export default UseMeMoPage