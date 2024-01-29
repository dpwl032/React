import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { useState } from 'react';
import Buttons from './component/Buttons';
import DoneButtons from './component/DoneButtons';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
// eslint-disable-line no-unused-vars 

function App() {
  //Working
  //배열 state화
    const [toDoLists, setTodoLists] = useState(
      [{id:1, title:'리액트 입문', text:'입문 강의 복습하기', deadline: '2024-01-26',isDone:false},
      {id:2, title:'리액트 숙련', text:'숙련 강의 듣기',deadline: '2024-01-27', isDone:false},
      {id:3, title:'JS 복습', text:'JS 강의 복습하기',deadline: '2024-01-23', isDone:false},]
    );

    //input값 state화 ---> form으로 변경
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');

    const newTodoList = (newTodoList) => {
      setTodoLists((toDoLists) =>
   [newTodoList, ...toDoLists])

      
    }


    //삭제하기(working)
    const removeToDoList = (id) =>{
      const newTodoList = toDoLists.filter((items)=>items.id !==id);
      setTodoLists(newTodoList);
    }

////////////////////////////////////////////////////
    //done state화
    const [doneLists, setDoneLists] = useState(
      [{id:1, title:'JS 강의 듣기', text:'JS 강의 완강하기',deadline: '2024-01-18',isDone:true},
      {id:2, title:'개인 과제 제출', text:'리액트 개인과제',deadline: '2024-01-12',isDone:true},
      ]
    );

    //삭제하기(done)
    const removeDoneList = (id) =>{
      const newDoneList = doneLists.filter((items)=>items.id !==id);
      setDoneLists(newDoneList);
    }

  


    const addDoneList = (id) =>{
      const changeDone = toDoLists.filter((items)=>items.id ===id);
      const changeDoneList = {...changeDone[0]}
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
      resultList.isDone = true;

      setTodoLists([...toDoLists, resultList]);
      
      const chandDoneList = doneLists.filter((items)=>items.id !==id);
        setDoneLists(chandDoneList);
      }




      //////////////////////////////

      
  const [sortOrder, setSortOrder] = useState('asc');

  const doListSortHandler = (e) =>{

   const newTodoList = [...toDoLists].sort((a,b)=>{

      if(e === 'asc'){
        return new Date(a.deadline) - new Date(b.deadline);
      }
      return new Date(b.deadline) - new Date(a.deadline);      
   })
   setTodoLists(newTodoList);
  } 

///
const doneListSortHandler = (e) =>{

  const newDoneList = [...doneLists].sort((a,b)=>{

     if(e === 'asc'){
       return new Date(a.deadline) - new Date(b.deadline);
     }
     return new Date(b.deadline) - new Date(a.deadline);      
  })
  setDoneLists(newDoneList);
 } 




  

  return (<div className='content-wrap'> 
      <div className='contents'>
        <Header/>
          <nav className='input-wrap'>
            <TodoForm newTodoList={newTodoList}/>
          </nav>
          


      

          <section>
            <h2>Working..🔥</h2>
            <select onChange={(e)=>doListSortHandler(e.target.value)} DoLists={DoLists}>
           <option  name="sortOrder" value="desc"> 내림차순  </option>
            <option name="sortOrder" value="asc">오름차순  </option>
            </select>
          

            </section>
              <div className='wrap-working'>

                {toDoLists.map(function (items){
          return <DoLists 
                          toDoLists={toDoLists} 
                          items={items} 
                          addDoneList={addDoneList} 
                          removeToDoList={removeToDoList}
                          doListSortHandler={doListSortHandler} />})}

               
            
                          
            </div>

<section><h2>Done..🎉</h2>
<select onChange={(e)=>doneListSortHandler(e.target.value)} DoneList={DoneList}>
           <option  name="sortOrder" value="desc"> 내림차순  </option>
            <option name="sortOrder" value="asc">오름차순  </option>
            </select>
          
</section>
                <div className='wrap-working'>
             
                {doneLists.map(function (items){
          {/* onSubmit은 form 안에 있을 때만 사용 가능, onClick은 상관없음 */}
          return <DoneList doneLists={doneLists} 
                          items={items} 
                          addWorkingList={addWorkingList} 
                          removeDoneList={removeDoneList}
                          doneListSortHandler={doneListSortHandler}/>})}
                
             
                          
                          
          </div> 

        
            </div>
            
          </div>

        );
      };

//todo 컴포넌트 분리
const DoLists = ({toDoLists,items,addDoneList,removeToDoList,ascEventHandler}) =>{

  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });



  return (
<div key={toDoLists.id} className='todo-lists-css'> 
    <div className='card-list'>
    <h2>{items.title}</h2>
      <p>{items.text}</p>
      <p>{dateString}</p>
      <div className='buttons'>
      <Buttons onClick={()=>removeToDoList(items.id)}>삭제하기</Buttons> 
      <DoneButtons onClick={()=>addDoneList(items.id)}>완료</DoneButtons>
      </div>
    </div>
      


      </div>
  );
};

////////////////////////////////////////////////////////////////
//done 컴포넌트 분리

const DoneList = ({doneLists,items,addWorkingList,removeDoneList}) =>{

  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });


  return (
<div key={doneLists.id} className='todo-lists-css'> 
<div className='card-list'>

<h2>{items.title}</h2>
      <p>{items.text}</p>
      <p>{dateString}</p>
      <div className='buttons'>
      <Buttons onClick={()=>removeDoneList(items.id)}>삭제하기</Buttons> 
      <DoneButtons onClick={()=>addWorkingList(items.id)}>취소</DoneButtons>
      </div>
</div>
   
    
      </div>
  );
};

export default App;
