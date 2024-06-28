export const IncompleteTodosArea = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incompleteArea">
      <p className="title">未完了項目</p>
      <ul>
        {todos.map((todo, index) => (
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
  );
};
