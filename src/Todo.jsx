// import { InputTodo } from "./components/InputTodo";
import "./styles.css";

import { useState } from "react";

export const Todo = () => {
  // const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todoです",
    "勉強する",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "Todoでした",
    "勉強しました",
  ]);

  // const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickRegister = () => alert();
  return (
    <>
      <div className="inputArea">
        <input
          type="text"
          placeholder="TODOを入力"
          // onChange={onChangeTodoText}
        />
        <button onClick={onClickRegister}>登録</button>
      </div>
      <div className="incompleteArea">
        <p className="title">未完了項目</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="todo">
                <p className="todo_item">{todo}</p>
                <div>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="completeArea">
        <p className="title">完了項目</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="todo">
                  <p className="todo_item">{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
