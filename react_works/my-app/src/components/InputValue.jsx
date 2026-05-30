
const InputValue = () =>{


  const HandleInputChange = (event) =>{

    console.log(event.target.value);
  }
 return(
  <div>
    <h2> 입력값 변경 </h2>
    <input
      type="text"
      placeholder="글자를 입력해주세요"
      onChange={HandleInputChange}
      />
  </div>
 )

}

export default InputValue;