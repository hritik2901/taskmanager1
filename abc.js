let taskDone = $('#taskDone');
let taskName =$('#taskName');
let taskDetails = $('#taskDetails');
let add = $('#add');
let model = $('#model');
let cross = $('#cross');
let deleteAll = $('#deleteAll');

add.click(function(){
  model.fadeIn();
});
cross.click(function(){
  model.fadeOut();
});

if(localStorage.getItem('todo')=== null){
    localStorage.setItem('todo',JSON.stringify([]));
}

taskDone.click(function(){
    let prevData = JSON.parse(localStorage.getItem('todo'));
    let newTask = {
        taskName : taskName.val(),
        taskDetails : taskDetails.val()
    }
    prevData.push(newTask);
    localStorage.setItem('todo',JSON.stringify(prevData));
    console.log(prevData);
    loadData();
    document.querySelector('#taskName').value = "";
    document.querySelector('#taskDetails    ').value = "";
    model.fadeOut();
})

function loadData(){
    let data = JSON.parse(localStorage.getItem('todo'));
    if(data.length>0){
        let temp =``;
        data.forEach(function(value , index){
            temp += `<div class="task">
            <h4>${value.taskName}</h4>
            <hr>
            <p>${value.taskDetails}</p>
            <span class="taskClose" onclick="deleteOne(${index})"><i class="ri-close-line"></i></span>
        </div>`;
        })
        $('.taskContainer').html(temp);
    }
    else{
        $('.taskContainer').html(`<h3 id="naya">You Don't Have Any Tasks Yet...</h3>`);
    }
}
loadData();

deleteAll.click(function(){
    localStorage.setItem('todo',JSON.stringify([]));
    loadData();
})

function deleteOne(index){
    let newTaskList = [];
    let hold = JSON.parse(localStorage.getItem('todo'));
    hold.forEach(function(details ,id){
        if(index !== id){
            newTaskList.push(details);
        }
        localStorage.setItem('todo',JSON.stringify(newTaskList));
        loadData();
    })
}