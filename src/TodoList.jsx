import "./TodoList.css"
import React, { useRef, useState } from 'react';
export default function TODoList() {
  const [toDoS, setArr] = useState(
    ()=>{
        const storedTodos = localStorage.getItem('toDoS');
        return storedTodos ? JSON.parse(storedTodos) : [];
    }
  );
  const [inputValue, setInputValue] = useState('');
  const listRef = useRef();

  const addHandle = () => {
    const inputValue = listRef.current.value.trim();
    if (inputValue) {
      const newArr = [...toDoS];
      newArr.push(inputValue);
      setArr(newArr);
      setInputValue('');
      localStorage.setItem('toDoS', JSON.stringify(newArr));
    }
  };

  const delHandle = (index) => {
    const newArr = toDoS.filter((_, i) => i !== index);
    setArr(newArr);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div class="toDoList">
     <p>toDoS</p>
    
     <div>
     <input placeholder='请输入' ref={listRef}  value={inputValue}
       onChange={(e) => onChangeInput(e)}
       />
      <button onClick={addHandle}>增加</button>
     </div>
      <ul>
        {toDoS.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => delHandle(index)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

