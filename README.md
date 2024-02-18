# ToDoList Project

> 스파르타 입문 주차 과정 개인 과제

## 프로젝트 소개

- 지금까지 배운 내용을 활용하여 My Todo List를 만들어보기
- ToDO 리스트에 새 Todo를 추가할 수 있다. 추가한 item은 Working 리스트에 추가된다.
- Done 버튼 클릭 시 Done 리스트로 item이 이동한다. 반대로 Cancel 버튼 클릭 시 다시 Working 리스트로 이동한다.
- Delete 버튼 클릭 시 item이 삭제된다.
- select option을 통해 리스트들을 오름차순, 내림차순으로 정렬할 수 있다.

## 프로젝트를 진행하면서 직면한 문제

- item에 있는 isDone 속성만을 이용해서 쉽게 todo/done 리스트를 나눌 수 있었는데, 불필요하게 toDoList와 DoneList로 나누었다.
- sort함수의 사용이 조금 어려웠다.
- 처음에는 상세페이지를 Link를 사용해 이동을 했었는데 새로고침을 하면 받아왔던 내용이 사라졌었다. 이는 redux를 사용해 해결했다.

## 추후 보완할 내용들

- initialization Action Creator 함수 생성
- 전반적인 css 보완
