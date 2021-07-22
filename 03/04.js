class Quiz {
  constructor(quizData) {
    this._quizzes = quizData.results;
    this._correctAnswersNum = 0;
    this._index=1;
  }
  getQuizCategory(index) {
    return this._quizzes[index - 1].category;
  }
  getQuizDifficulty(index) {
    return this._quizzes[index - 1].difficulty;
  }
  getQuizQuestion(index) {
    return this._quizzes[index - 1].question;
  }
  getQuizCorrect_answer(index) {
    return this._quizzes[index - 1].correct_answer;
  }
  getQuizIncorrect_answers(index) {
    return this._quizzes[index - 1].incorrect_answers;
  }
  
  arrayShuffle(array) {
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
  quiz_display(quiz) {
    title.innerHTML = "問題" + quiz._index;
    genre.innerHTML = "【ジャンル】" + quiz.getQuizCategory(quiz._index);
    difficulty.innerHTML = "【難易度】" + quiz.getQuizDifficulty(quiz._index);
    content.innerHTML = quiz.getQuizQuestion(quiz._index);
    let answers = [];
    answer.innerHTML = '';
    answers.push(quiz.getQuizIncorrect_answers(quiz._index));
    answers[0].push(quiz.getQuizCorrect_answer(quiz._index));
    quiz.arrayShuffle(answers[0]);
    answers[0].forEach(function(val) {
      let element_q = document.createElement('p');
      element_q.innerHTML = '<input id ="btn" name="quiz" type="button" value="' + val + '">';
      answer.appendChild(element_q);
    });
    quiz.button_reg(quiz);
  }
  quiz_result(quiz) {
    title.innerHTML = "あなたの正答数は" + quiz._correctAnswersNum + "です！！";
    content.innerHTML = "再度チェレンジしたい場合は以下をクリック！";
    let element_r = document.createElement('p');
    genre.innerHTML='';
    difficulty.innerHTML='';
    answer.innerHTML='';
    element_r.innerHTML = '<input id ="btn" name="quiz" type="button" onclick="get_text()" value="ホームに戻る">';
    answer.appendChild(element_r);
  }
  answers_check(ans,quiz) {
    if (quiz.getQuizCorrect_answer(quiz._index) === ans) {
      quiz._correctAnswersNum++;
    }
    quiz._index++;
    if (quiz._index === 10) {
      quiz.quiz_result(quiz);
    }
    else {
      quiz.quiz_display(quiz);
    }
  }
  button_reg(quiz) {
    const input_checks = document.querySelectorAll('input[name=quiz]');
    //押された時の値
    for (let element of input_checks) {
      element.addEventListener('click', function() {
        quiz.answers_check(this.value,quiz);
      },false)
    }
  }
}
const get_text =async () =>{
  title.innerHTML = "取得中";
  content.innerHTML = "しばらくお待ちください。";
  btn.style.display = "none";
  try{
    const res = await fetch('https://opentdb.com/api.php?amount=10');
    
    const text = await res.text(); 
    const res1_p = JSON.parse(text);
    let quiz = new Quiz(res1_p);
    
    quiz.quiz_display(quiz);
  }catch(e){
    console.log(e);
  }
}
