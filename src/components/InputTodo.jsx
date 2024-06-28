export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={inputArea}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClick}>登録</button>
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
