import { useState } from "react";

const Drink = () => {

    const[drink, setDrink] = useState(['커피', '콜라']);

    const addDrink = () => {

        setDrink([...drink, '딸기주스']);
    }

    return(
        <div>
            <h2>음료수 </h2>
            <h4>현재 음료: {drink.join(',')}</h4>
            <button onClick={addDrink}>음료 추가</button>
        </div>
    )
}

export default Drink;