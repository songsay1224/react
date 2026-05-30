import { useState } from "react";

const Drink2 = () =>{
    //음료 리스트 상태 관리 - 빈 리스트(초기화)
    const [drinks, setDrinks] = useState([]);

    //입력값 상태 관리 = 빈 문자열(초기화)
    const [inputValue, setInputValue] = useState('')

    //입력값 변경 함수

    const inputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const addDrink = () => {
        const newDrink = inputValue;
        setDrinks([...drinks, newDrink]);
            //입력값 초기화
        setInputValue('');
    }

  

    return (

    <div>
        <h2>음료수 관리</h2>
        <input 
            type="text"
            placeholder="음료 이름 정하기"
            value={inputValue}
            onChange={inputValueChange}
        />
        {/* <p>음료: {inputValue}</p> */}
        <button onClick={addDrink}>음려 추가</button>
        {/* 음료 목록 */}
        <ul>
        {drinks.map((drinks, index) =>(
            <li key={index}>{drinks}</li>
        ))}
        </ul>
    </div>
)

}


export default Drink2;
