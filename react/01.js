
class MyComponent extends React.Component {
  constructor(props){
    super(props);
      this.state={msg:[]}
    
  }
  handleChange = (e) => {
    // ステートを変更することで表示を更新する
    // console.log(this);
    this.setState({msg: this.state.msg.concat(e.target.value)});
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e)
    // 実際にはここでメッセージ送信を行う（内容は state から取得する）
    this.setState({msg: this.state.msg.concat(e.target.value)});
      // this.state.msg;
  
  }

  
  // }
  render(){
    console.log(this.state);
      return (
          <div>
            <h1>ToDoリスト</h1>
            <form>
                <input type="radio" name="check" value="0"/>すべて
                <input type="radio" name="check" value="1"/>作業中
                <input type="radio" name="check" value="2"/>完了
            </form>
            <table id="comment">
            </table>
            <h2>新規タスク追加</h2>
            <form onSubmit ={this.handleSubmit}>
                <input id ="task" type="text" value={this.state.msg} name = "task"/>
                <input id ="btn" type="button" value="追加"  onSubmit={this.handleChange} />
            </form>
                {this.state.msg}
          </div>
      )
  }
}

ReactDOM.render(
<MyComponent />,
document.getElementById('main') /* Reactが生成したコードを#mainに書き出す */
);