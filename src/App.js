import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집'
  let [title, changeTitle] = useState(['유빈', '지수', '범']);
  let [logo, setLogo] = useState('ReactBlog') 
  let [likeCnt, changeLikeCnt] = useState(0)


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={ () => { changeLikeCnt(likeCnt+1) } }>👍</span> { likeCnt } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <p onClick={ () => {
        let copy = [...title];
        copy[0] = "김유빈"
        changeTitle(copy) } }>제목바꾸기 버튼</p>
      <p onClick={ () => {
        let copyTitle = [...title];
        copyTitle.sort()
        changeTitle(copyTitle)
      }}>
        제목정렬하기 버튼
      </p>

      <Modal>
      </Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
