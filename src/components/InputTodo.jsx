import { useState } from "react";

export const InputTodo = () => {
  const [todoText, setTodoText] = useState("");
  const onChangeInput = () => {
    setTodoText();
  };
  const onClickRegister = () => alert();
  return (
    <div style={inputArea}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeInput}
        style={input}
      />
      <button onClick={onClickRegister} style={button}>
        登録
      </button>
    </div>
  );
};

const inputArea = {
  background: "#deb887",
  width: "480px",
  height: "35px",
  borderRadius: "6px",
  boxShadow: "1px 1px 3px gray",
  display: "flex",
  alignItems: "center",
  padding: "8px",
  margin: "8px",
};

const input = {
  width: "357px",
  margin: "10px",
  padding: "6px 16px",
  borderRadius: "3px",
  border: "none",
  boxShadow: "1px 1px 3px gray",
  outline: "none",
};

const button = {
  border: "none",
  boxShadow: "1px 1px 3px gray",
  borderRadius: "3px",
  height: "27px",
  margin: "3px 3px",
};
