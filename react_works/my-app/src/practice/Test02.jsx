const Test02 = () => {


    //클릭 이벤트 함수
        const doClick = ()=> {

            console.log("버튼2 클릭됨");
        }

    return (

        <div>
            <h2> 버튼 이벤트</h2>
            <button onClick={()=> console.log('클릭됨')}>확인</button>
            <button onClick={doClick}>확인2</button>
        </div>
    )
}


export default Test02;