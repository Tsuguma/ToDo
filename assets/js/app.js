let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;
//データ保存されていたが場合
if (localStorage.getItem('todoList')){
	data =JSON.parse(localStorage.getItem('todoList'));
	for (let taskName of data.not){
		addTaskToDOM(taskName);
	}
}else{
	//データ保存されていない場合
	data = {
		not : [],
		done : []
	}
}
data = JSON.parse(localStorage.getItem('todoList'));
console.log(data);

// 追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click',function() {
    let taskName = document.getElementById('task').value;

    document.getElementById('task').value = '';

  //データ保存
  data.not.push(taskName);
  console.log(data);
  localStorage.setItem('todoList',JSON.stringify(data));
  });
    
  function addTaskToDOM(taskName){
  	    let not = document.createElement('li');
    not.textContent = taskName;
    let buttons =document.createElement('div');
    buttons.classList.add('buttons');
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    remove.addEventListener('click',function(){
    	let task = this.parentNode.parentNode;
    	task.remove();
    });
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;
    done.addEventListener('click',function(){
    	let task = this.parentNode.parentNode;
    	console.log(task);
      let target = document.getElementById('done');
      target.appendChild(task);
    });
    buttons.appendChild(remove);
    buttons.appendChild(done);
    not.appendChild(buttons);
    document.getElementById('not-yet').appendChild(not);
  }

