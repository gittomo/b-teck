const lists=[];
function todolist(){
    const task =document.getElementById("task");
    if(task.value !== ''){
        lists.push({'comment':task.value,'status':"作業中"});
      }
      const commet =document.getElementById('comment');
      commet.innerHTML = '';
      let str = '<tr><th>ID</th><th>コメント</th><th>状態</th></tr>';

      if(lists.length > 0){
      lists.forEach((val, key) => {
          str +=  '<tr><td>'+key+'</td><td>'+val.comment+'</td><td><button>'+val.status +'</button></td><td><button class="delete">削除</button></td></tr>';

      })
      
 
     }
     commet.innerHTML = str;
}