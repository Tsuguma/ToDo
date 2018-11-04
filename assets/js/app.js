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
// 追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click',function() {
    let taskName = document.getElementById('task').value;
    addTaskToDOM(taskName);
    document.getElementById('task').value = '';

  //データ保存
  
  data.not.push(taskName);
  localStorage.setItem('todoList',JSON.stringify(data));
  });
  //---関数---  
  
  function addTaskToDOM(taskName){
  	let not = document.createElement('li');
    not.textContent = taskName;
    let buttons =document.createElement('div');
    buttons.classList.add('buttons');
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    //削除ボタン動作
    remove.addEventListener('click',removeTask);
    
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;
    //完了ボタン動作
    done.addEventListener('click',doneTask);

    buttons.appendChild(remove);
    buttons.appendChild(done);
    not.appendChild(buttons);
    document.getElementById('not-yet').appendChild(not);
  };
  function removeTask(){
  	let task = this.parentNode.parentNode;
  	let value= task.textContent;
  	task.remove();
  	data.not.splice(data.not.indexOf(value),1)
  	dataObjectUpdated();
  };
  function doneTask(){
  	let task = this.parentNode.parentNode;
  	document.getElementById('done').appendChild(task);
    };
　function dataObjectUpdated(){
	  localStorage.setItem('todoList',JSON.stringify(data));
}
