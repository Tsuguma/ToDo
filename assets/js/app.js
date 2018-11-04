let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


// 追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click',function() {
    let taskName = document.getElementById('task').value;
    let not = document.createElement('li');
    not.textContent = taskName;
    let buttons =document.createElement('div');
    buttons.classList.add('buttons');
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;
    buttons.appendChild(remove);
    buttons.appendChild(done);
    not.appendChild(buttons);
    document.getElementById('not-yet').appendChild(not);

  })

