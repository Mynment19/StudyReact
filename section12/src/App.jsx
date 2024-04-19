import './App.css'
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from './pages/Edit.jsx';
import Notfound from "./pages/Notfound.jsx";

const mockData = [
    {
        id: 1,
        createdDate: new Date("2024-04-19").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2024-04-18").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 3,
        createdDate: new Date("2024-03-14").getTime(),
        emotionId: 3,
        content: "성민이 생일",
    },
    {
        id: 4,
        createdDate: new Date("2023-10-31").getTime(),
        emotionId: 4,
        content: "가장 좋아하는 날",
    },
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.id : item
            );
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // 새로운 일기 추가
    const onCreate = (createdData, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdData,
                emotionId,
                content,
            },
        })
    }

    // 기존 일기 수정
    const onUpdate = (id, createdData, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdData,
                emotionId,
                content,
            },
        })
    }

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            data: {
                id,
            }
        })
    }

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{
                    onCreate, onUpdate, onDelete,
                }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App
