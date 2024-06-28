export const CompleteTodosArea = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="completeArea">
      <p className="title">完了項目</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="todo">
                <p className="todo_item">{todo}</p>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
