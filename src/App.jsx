import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { useState } from 'react';
import Buttons from './component/Buttons';
import DoneButtons from './component/DoneButtons';

function App() {
  //Working
  //배열 state화
    const [toDoLists, setTodoLists] = useState(
      [{id:1, title:'리액트 입문', text:'입문 강의 복습하기', deadline: '2024-01-26',isDone:false},
      {id:2, title:'리액트 숙련', text:'숙련 강의 듣기',deadline: '2024-01-26', isDone:false},
      {id:3, title:'JS 복습', text:'JS 강의 복습하기',deadline: '2024-01-26', isDone:false},]
    );

    //input값 state화
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');

    //제목 입력 시 input값과 동기화
    // const addTitleHandler =(event) =>{
    //   setTitle(event.target.value)
    // }
    // //내용 입력 시 input값과 동기화
    // const addTextHandler =(event) =>{
    //   setText(event.target.value)
    // }


    const addTodoListHandler = (e)=>{
      e.preventDefault();

      const title = e.target.title.value;
      const text = e.target.text.value;
      const deadline = e.target.deadline.value;
      
      const newTodoList = {
        id: toDoLists.length+1,
        title,
        text,
        deadline,
        idDone : false,
      }

      console.log(newTodoList);
      setTodoLists([...toDoLists,newTodoList]);
    }






    //버튼 클릭 시 내용 추가
    const addTodoList = (e) =>{
      const newTodoList = {
        id: toDoLists.length+1,
        title,
        text,
        deadline,
        idDone : false,
      }
      setTodoLists([...toDoLists,newTodoList]);
      setTitle("");
      setText("");
      setDeadline("");
    }

    //삭제하기(working)
    const removeToDoList = (id) =>{
      const newTodoList = toDoLists.filter((items)=>items.id !==id);
      setTodoLists(newTodoList);
    }

////////////////////////////////////////////////////
    //done state화
    const [doneLists, setDoneLists] = useState(
      [{id:1, title:'JS 강의 듣기', text:'JS 강의 완강하기',deadline: '2024-01-26',isDone:true},
      {id:2, title:'개인 과제 제출', text:'리액트 개인과제',deadline: '2024-01-26',isDone:true},
      ]
    );

    //삭제하기(done)
    const removeDoneList = (id) =>{
      const newDoneList = doneLists.filter((items)=>items.id !==id);
      setDoneLists(newDoneList);
    }

    // const [working, setWorking] = useState(toDoLists);
    // const [done, setDone] = useState(doneLists);

/////////////////////////////////////////////////////////////////////////////
  //완료버튼시 --> done
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
      
      const chandDoneList = doneLists.filter((items)=>items.id !==id);
        setDoneLists(chandDoneList);
      }

  return (<div className='content-wrap'> 
      <div className='contents'><Header>

        <nav className='input-wrap'> 
        <form className='input-contents' onSubmit={addTodoListHandler}>
            &nbsp; 제목&nbsp;<input type="text" name="title"/>
              &nbsp; 내용&nbsp;<input type="text" name="text"/>    
              <input type="date" name="deadline"  min="2024-01-01" max="2025-01-01"/>
              <button className="add-button" type="submit"
                >추가하기</button>
            </form>




        </nav>  
    
          <section><h2>Working..🔥</h2></section>
              <div className='todo-lists-css'>

                {toDoLists.map(function (items){
          return <DoLists 
                          toDoLists={toDoLists} 
                          items={items} 
                          addDoneList={addDoneList} 
                          removeToDoList={removeToDoList} />})}</div>

          <section><h2>Done..🎉</h2></section>
                <div className='todo-lists-css'>
                {doneLists.map(function (items){
          {/* onSubmit은 form 안에 있을 때만 사용 가능, onClick은 상관없음 */}
          return <DoneList doneLists={doneLists} 
                          items={items} 
                          addWorkingList={addWorkingList} 
                          removeDoneList={removeDoneList}/>})}</div> 
              </Header>
            </div>
            
          </div>

        );
      };

//todo 컴포넌트 분리
const DoLists = ({toDoLists,items,addDoneList,removeToDoList}) =>{

  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  return (
<div key={toDoLists.id} className='todo-list-css'> 
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <p>{dateString}</p>
      <Buttons onClick={()=>removeToDoList(items.id)}>삭제하기</Buttons> 
      <DoneButtons onClick={()=>addDoneList(items.id)}>완료</DoneButtons>
      </div>
  );
};


//done 컴포넌트 분리

const DoneList = ({doneLists,items,addWorkingList,removeDoneList}) =>{

  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });


  return (
<div key={doneLists.id} className='todo-list-css'> 
      <h2>{items.title}</h2>
      <p>{items.text}</p>
      <p>{dateString}</p>
      <Buttons onClick={()=>removeDoneList(items.id)}>삭제하기</Buttons> 
      <DoneButtons onClick={()=>addWorkingList(items.id)}>취소</DoneButtons>
      </div>
  );
};

export default App;
