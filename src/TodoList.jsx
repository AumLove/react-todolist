import React from 'react';
import { useState } from 'react';
function TodoList(props) {

    const [value, setValue] = useState("");

    function clickHandle(){
        props.store.dispatch(addListAction(value));
        setValue("");
    }

    return (
       <>
        <ul>
            <li>content：{props.content}</li>
        </ul>
       </>
    );
}

// 设置 props 的默认值
TodoList.defaultProps = {
    content : 100
}


export default TodoList;