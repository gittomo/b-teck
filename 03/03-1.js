const lists=[];
let lists_new;
const checklist=['すべて','作業中','完了'];
function view(st=0){
  const comment =document.getElementById('comment');
  comment.innerHTML = '';
  let str = '<tr><th>ID</th><th>コメント</th><th>状態</th></tr>';
  lists_new = lists;
  if(st !=0){
    lists_new =lists.filter(val=>val.status==st);
  }
  if(lists_new.length > 0){
    lists_new.forEach((val, key) => {
      str +=  '<tr><td>'+key+'</td><td>'+val.comment+'</td><td><button value='+key+' onclick="status(this)">'+checklist[val.status]  +'</button ></td><td><button value='+key+' onclick="del(this)">削除</button></td></tr>';
    })
    comment.innerHTML = str;
  }
}
function todolist(){
    const task =document.getElementById("task");
    if(task.value !== ''){
        lists.push({'comment':task.value,'status':1});
    }
    task.value="";
    view();
}
const del= (button)=>{
  lists.splice(button.value,1);
  view();
}

const status= (button)=>{
  lists[button.value].status=(lists[button.value].status)===1?2:1;
      view();
  }
