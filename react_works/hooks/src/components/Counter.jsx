import { useState } from "react";

const Counter = () => {
    //숫자 세기 상태 관리 선언 - 초기화 숫자 0
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>Counter</h2>
            <h3>현재 count: {count} </h3>
        </div>
    )

}


export default Counter