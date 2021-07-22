
const res2 = new Object();

function quiz_result() {
  title.innerHTML = "あなたの正答数は" + res2.result + "です！！";
  content.innerHTML = "再度チェレンジしたい場合は以下をクリック！";
  let element_r = document.createElement('p');
  genre.innerHTML='';
  difficulty.innerHTML='';
  answer.innerHTML='';
  element_r.innerHTML = '<input id ="btn" name="quiz" type="button" onclick="get_text()" value="ホームに戻る">';
  answer.appendChild(element_r);
}


function answers_check(ans) {
  if (res2.data[res2.index]['correct_answer'] === ans) {
    res2.result++;

  }
  res2.index++;
  if (res2.index === 10) {
    quiz_result();

  }
  else {
    quiz_display();

  }
}

function button_reg() {
  const input_checks = document.querySelectorAll('input[name=quiz]');

  //押された時の値
  for (let element of input_checks) {
    element.addEventListener('click', function() {
      answers_check(this.value);
    },false)
  }
}

function arrayShuffle(array) {
  for (var i = (array.length - 1); 0 < i; i--) {

    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;

}

function quiz_display() {
  title.innerHTML = "問題" + (res2.index + 1);
  genre.innerHTML = "【ジャンル】" + res2.data[res2.index]['category'];
  difficulty.innerHTML = "【難易度】" + res2.data[res2.index]['difficulty'];
  content.innerHTML = res2.data[res2.index]['question'];
  let answers = [];
  answer.innerHTML = '';
  answers.push(res2.data[res2.index]['incorrect_answers']);
  answers[0].push(res2.data[res2.index]['correct_answer']);
  arrayShuffle(answers[0]);
  answers[0].forEach(function(val) {
    let element_q = document.createElement('p');
    element_q.innerHTML = '<input id ="btn" name="quiz" type="button" value="' + val + '">';
    answer.appendChild(element_q);

  });
  button_reg();

}

get_text = () => {

  // オブジェクト初期化
  res2.index = 0;
  res2.data = [];
  res2.result = 0;

  title.innerHTML = "取得中";
  content.innerHTML = "しばらくお待ちください。";
  btn.style.display = "none";

  fetch('https://opentdb.com/api.php?amount=10')
    .then((response) =>
      response.text())
    .then(text => {
      const res = JSON.parse(text);
      res2.data = Object.assign({}, res['results']);
      quiz_display();

    });


}
