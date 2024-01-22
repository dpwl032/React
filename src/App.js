import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {

  //배열 state화
  const [toDoLists, setTodoLists] = useState(
    [{id:1, title:'리액트 공부하기', text:'리액트 기초를 공부해봅시다', isDone:false},
    {id:2, title:'리액트 공부합시다.', text:'리액트 노션보기!!!', isDone:false},
    {id:3, title:'리액트 공부하기', text:'리액트 기초를 공부해봅시다', isDone:false},]
  );

    //input값 state화
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    //제목 입력 시 input값과 동기화
    const addTitleHandler =(event) =>{
      setTitle(event.target.value)
    }
//내용 입력 시 input값과 동기화
const addTextHandler =(event) =>{
    setText(event.target.value)
  }

  //버튼 클릭 시 내용 추가
  const addTodoList = (e) =>{
    const newTodoList = {
      id: toDoLists.length+1,
      title,
      text,

    }
    setTodoLists([...toDoLists,newTodoList]);
    setTitle("");
    setText("");
  }

  

  //삭제하기
  const removeToDoList = (id) =>{
    const newTodoList = toDoLists.filter((items)=>items.id !==id);
    setTodoLists(newTodoList);
  }

  //완료
  const isDoneToDoList = () =>{

  }

  //취소
  const isWorkingToDoList = () =>{

  }

  return (
    <Header>
    
      제목 : <input
        value={title}
        onChange= {addTitleHandler}
      />
      내용 : <input 
            value={text}
            onChange={addTextHandler}/>
          

      <button onClick={addTodoList}
      >추가하기</button>
   
    

      <div >Working
      {toDoLists.map(function (items){

return <div key={toDoLists.id} className='toDoList-Css'> 
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <button onClick={()=>removeToDoList(items.id)}>삭제하기</button> 
      <button onClick={isDoneToDoList}>완료</button>
      </div>
})}</div>


      <div>Done</div>

    </Header>
  );
}

export default App;
