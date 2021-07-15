const lists=[];
function view(){
  const commet =document.getElementById('comment');
    commet.innerHTML = '';
    let str = '<tr><th>ID</th><th>コメント</th><th>状態</th></tr>';
  if(lists.length > 0){
    lists.forEach((val, key) => {

        str +=  '<tr><td>'+key+'</td><td>'+val.comment+'</td><td><button value='+key+' onclick="status(this)">'+val.status +'</button ></td><td><button value='+key+' onclick="del(this)">削除</button></td></tr>';
    })
  commet.innerHTML = str;
  }
}
function todolist(){
    const task =document.getElementById("task");
    if(task.value !== ''){
        lists.push({'comment':task.value,'status':"作業中"});
    }
    task.value="";
    view();
}
let del= (button)=>{
  lists.splice(button.value,1);
  view();
}

let status= (button)=>{
  lists[button.value].status=(lists[button.value].status)==="作業中"?"完了":"作業中";
      view();
  }
