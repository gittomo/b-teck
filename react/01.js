
class  TodoApp extends React.Component {
  constructor() {
    super()
    this.state={
      todoList: [],
      value: "",
    }
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: "",
    })
  }

  render() {
    const todoList =
      this.state.todoList.map((todo, idx) => {
      return <tr key={idx}><td>{idx} </td>{todo}<td><button> 作業中 </button></td><td> <button> 削除 </button></td> </tr>
    })

    return (
      <div>
        <h2>ToDoリスト</h2>
        <div>
          <form>
            <input type="radio" name="check" value="0"/>すべて
            <input type="radio" name="check" value="1"/>作業中
            <input type="radio" name="check" value="2"/>完了

        <table>
        <tr><th>ID</th><th>コメント</th><th>状態</th></tr>
          {todoList}
        </table>
        <h2>新規タスクの追加</h2>
          </form>
            <input type="text" value={this.state.value} onChange={e => this.onChange(e)}/>
        <button onClick={() => this.add()}>追加</button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <TodoApp />,
  document.getElementById('main')
);