import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {

  //Working
  //배열 state화
  const [toDoLists, setTodoLists] = useState(
    [{id:1, title:'리액트 공부하기1', text:'리액트 기초를 공부해봅시다', isDone:false},
    {id:2, title:'리액트 공부하기2', text:'리액트 기초를 공부해봅시다', isDone:false},
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
      idDone : false,

    }
    setTodoLists([...toDoLists,newTodoList]);
    setTitle("");
    setText("");
  }

  
////////////////////////////////////////////////////
  //삭제하기(working)
  const removeToDoList = (id) =>{
    const newTodoList = toDoLists.filter((items)=>items.id !==id);
    setTodoLists(newTodoList);
  }




const [doneLists, setDoneLists] = useState(
  [{id:1, title:'리액트 공부합시다.4', text:'리액트 노션보기!!',isDone:true},
  {id:2, title:'리액트 공부합시다.5', text:'리액트 노션보기!!',isDone:true},
  ]
);


//삭제하기(done)
const removeDoneList = (id) =>{
  const newDoneList = doneLists.filter((items)=>items.id !==id);
  setDoneLists(newDoneList);
}

////////////////////////////////////////////////////////
const [working, setWorking] = useState(toDoLists);
const [done, setDone] = useState(doneLists);


  //완료버튼시 --> don
  const addDoneList = (id) =>{
    const changeDone = toDoLists.filter((items)=>items.id ===id);
  //  const a = {...changeDone};
  //  const b = {...a};
  //  a.id=1515;
  //  console.log(a);
    // const a = ...changeDone;
    const changeDoneList = {...changeDone[0]}
    changeDoneList.id = doneLists.length+1;
    changeDoneList.isDone = true;

    console.log("w",changeDoneList);

    setDoneLists([...doneLists,changeDoneList]);
    
    //원래 리스트에서 삭제
    const changeTodoList = toDoLists.filter((items)=>items.id !==id);
    setTodoLists(changeTodoList);
   
  }

  //취소버튼시 ----> working
  const addWorkingList = (id) =>{
   // submit 이벤트가 일어나면 새로고침방지. submit 관련 태그 고유의 동작 금지
   const cancelDone = doneLists.filter((items)=>items.id ===id);
   const resultList = {...cancelDone[0]}
   resultList.id = toDoLists.length+1;
   resultList.isDone = true;




   setTodoLists([...toDoLists, resultList]);
   console.log("d",resultList);
   
   const chandDoneList = doneLists.filter((items)=>items.id !==id);
    setDoneLists(chandDoneList);

  }

  return (
   
    <div className='content-wrap'> 
      <div className='contents'><Header>

     <div className='input-wrap'> 
     <div className='input-contents'>
제목  &nbsp;<input
        value={title}
        onChange= {addTitleHandler}
      />
      내용 &nbsp;<input 
            value={text}
            onChange={addTextHandler}/></div>
      
          
    <div className='inputs-button'>  <button className="addButton" onClick={addTodoList}
      >추가하기</button></div>
     

     
   </div>  
    
 <div><h2>Working..🔥</h2></div>
      <div className='toDoLists-Css'>
       
      {toDoLists.map(function (items){

return <div key={toDoLists.id} className='toDoList-Css'> 
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <button className="cancelButton" onClick={()=>removeToDoList(items.id)}>삭제하기</button> 
      <button className="restButton" onClick={()=>addDoneList(items.id)}>완료</button>
      </div>
})}</div>

<div><h2>Done..🎉</h2></div>
      <div className='toDoLists-Css'>
        
      {doneLists.map(function (items){

return <div key={doneLists.id} className='toDoList-Css'> 
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <button className="cancelButton" onClick={()=>removeDoneList(items.id)}>삭제하기</button> 

         <button className="restButton" onClick={()=>addWorkingList(items.id)}>취소</button>
    
       
    {/* onSubmit은 form 안에 있을 때만 사용 가능, onClick은 상관없음 */}
      </div>



      })}



</div> </Header></div>

</div>
   



  );
}




export default App;
