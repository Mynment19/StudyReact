import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import New from "../src/pages/New.jsx";
import Diary from "../src/pages/Diary.jsx";
import Notfound from "../src/pages/Notfound.jsx";
import { getEmotionImage } from './util/get-emotion-img.js';
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
    const nav = useNavigate();

    const onClickButton = () => {
        nav("/new")
    }

    return (
        <>

            <Header
                title={"Header"}
                leftChild={<Button text={"Left"} />}
                rightChild={<Button text={"Right"} />}
            />
            <Button
                text={"123"}
                onClick={() => {
                    console.log("123번 버튼 클릭")
                }} />

            <Button
                text={"123"}
                type={"POSITIVE"}
                onClick={() => {
                    console.log("123번 버튼 클릭")
                }} />

            <Button
                text={"123"}
                type={"NEGATIVE"}
                onClick={() => {
                    console.log("123번 버튼 클릭")
                }} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App
