import './App.css'
import { useReducer } from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from './pages/Edit.jsx';
import Notfound from "./pages/Notfound.jsx";

const mockData = [
    {   
        id:1,
        createdDate : new Date().getTime(),
        emotionId : 1,
        contetn : "1번 일기 내용",
    },
    {   
        id : 2,
        createdDate : new Date().getTime(),
        emotionId : 2,
        contetn : "2번 일기 내용",
    },
]

function reducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App
