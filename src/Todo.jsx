// import { InputTodo } from "./components/InputTodo";
import "./styles.css";

import { useState } from "react";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todoです",
    "勉強する",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "Todoでした",
    "勉強しました",
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickRegister = () => {
    if (todoText === "") return;
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <div className="inputArea">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickRegister}>登録</button>
      </div>
      <div className="incompleteArea">
        <p className="title">未完了項目</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="todo">
                <p className="todo_item">{todo}</p>
                <div>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
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
