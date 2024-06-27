function App() {
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

  const incompleteArea = {
    backgroundColor: "#e0e0e0",
    width: "480px",
    minHeight: "200px",
    borderRadius: "6px",
    boxShadow: "1px 1px 3px gray",
    padding: "8px",
    margin: "15px 8px",
  };

  const incompleteAreaHeader = {
    textAlign: "center",
    marginTop: "0",
    fontWeight: "bold",
  };

  const completeArea = {
    backgroundColor: "#deb887",
    width: "480px",
    minHeight: "200px",
    borderRadius: "6px",
    boxShadow: "1px 1px 3px gray",
    padding: "8px",
    margin: "15px 8px",
  };

  const completeAreaHeader = {
    textAlign: "center",
    marginTop: "0",
    fontWeight: "bold",
  };

  const todo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "25px",
  };
  return (
    <div className="App">
      <div style={inputArea}>
        <input type="text" placeholder="TODOを入力" style={input} />
        <button style={button}>登録</button>
      </div>
      <div style={incompleteArea}>
        <p style={incompleteAreaHeader}>未完了項目</p>
        <div style={todo}>
          <span>・勉強をする</span>
          <div>
            <button style={button}>完了</button>
            <button style={button}>削除</button>
          </div>
        </div>
        <div style={todo}>
          <span>・勉強をする</span>
          <div>
            <button style={button}>完了</button>
            <button style={button}>削除</button>
          </div>
        </div>
      </div>
      <div style={completeArea}>
        <p style={completeAreaHeader}>完了項目</p>
        <div style={todo}>
          <span>・reactの復習</span>
          <button style={button}>戻す</button>
        </div>
        <div style={todo}>
          <span>・reactの復習</span>
          <button style={button}>戻す</button>
        </div>
      </div>
    </div>
  );
}

export default App;
