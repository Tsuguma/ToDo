let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


// 追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click',function() {
    let taskName = document.getElementById('task').value;
    let not = document.createElement('li');
    not.textContent = taskName;





    document.getElementById('not-yet').appendChild(not);

  })

