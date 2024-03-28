import { useEffect } from "react";

const Even = () => {

    // 3. UnMount
    useEffect(() => {
        console.log("Even - Mount");
        // clean-up (정리함수) : 종료될 때 정리함수를 호출
        return () => {
            console.log("Even - unMount");
        };
    }, []);

    return (
        <div>
            Even
        </div>
    )
};

export default Even;