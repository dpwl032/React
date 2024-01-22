import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {

  //Working
  //배열 state화
  const [toDoLists, setTodoLists] = useState(
    [{id:1, title:'리액트 공부하기1', text:'리액트 기초를 공부해봅시다', isDone:false},
    {id:2, title:'리액트 공부하기2.', text:'리액트 기초를 공부해봅시다', isDone:false},
    {id:3, title:'리액트 공부하기3', text:'리액트 기초를 공부해봅시다', isDone:false},]
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

  

  //삭제하기(working)
  const removeToDoList = (id) =>{
    const newTodoList = toDoLists.filter((items)=>items.id !==id);
    setTodoLists(newTodoList);
  }




const [doneLists, setDoneLists] = useState(
  [{id:1, title:'리액트 공부합시다.', text:'리액트 노션보기!!'},
  {id:2, title:'리액트 공부합시다.', text:'리액트 노션보기!!'},
  ]
);


//삭제하기(done)
const removeDoneList = (id) =>{
  const newDoneList = doneLists.filter((items)=>items.id !==id);
  setDoneLists(newDoneList);
}


  //완료
  const addDoneList = (id) =>{

    const title = document.getElementsByTagName("h2")[id].textContent;
    const text = document.getElementsByTagName("p")[id].textContent;
    const changeList = {
      id:doneLists.length+1,
      title : title,
      text : text,
    }
    console.log("test",title);
    setDoneLists([...doneLists,changeList]);
  }

  //취소
  const addWorkingList = (event) =>{
   // submit 이벤트가 일어나면 새로고침방지. submit 관련 태그 고유의 동작 금지
    event.preventDefault();
   console.log(event.target.title);
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
   
    

      <div className='toDoLists-Css'>Working
      {toDoLists.map(function (items){

return <div key={toDoLists.id} className='toDoList-Css'> 
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <button onClick={()=>removeToDoList(items.id)}>삭제하기</button> 
      <button onClick={()=>addDoneList(items.id)}>완료</button>
      </div>
})}</div>


      <div className='toDoLists-Css'>Done
      {doneLists.map(function (items){

return <div key={doneLists.id} className='toDoList-Css'> 
    <form onSubmit={addWorkingList}>
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <button onClick={()=>removeDoneList(items.id)}>삭제하기</button> 
        <button type="submit">취소</button>
      </form>
    {/* onSubmit은 form 안에 있을 때만 사용 가능, onClick은 상관없음 */}
      </div>
      })}



</div>
    </Header>
  );
}

export default App;
