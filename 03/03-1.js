var lists={};
function todolist(){
    var task =document.getElementById("task");
    if(task.value !== ''){
        lists.comment=task.value;
        lists.status="作業中";
        console.log(lists);
      }
      var commet =document.getElementById('comment');
      commet.innerHTML = '';
      var str = '<tr><th>ID</th><th>コメント</th><th>状態</th></tr>';
      console.log("1");
      console.log(Object.keys(lists).length);
      console.log("2");
    if(Object.keys(lists).length > 0){
      Object.keys(lists).forEach(function(index){
        console.log(lists);
        str +=  '<tr><td>'+index+'</td><td>'+lists.comment+'</td><td><button>'+lists.status +'</button></td><td><button>削除</button></td></tr>';
      })
     }
     commet.innerHTML = str;
}