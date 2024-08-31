let h1 = document.querySelector('h1');
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');


// Adding Tasks on the Todo List....
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});


// Deleting Elements from the Todo List....with the help of Event Delegation....(Event Bubbling)..
ul.addEventListener('click', function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task Deleted...!!!");
    }
})

// let delBtns = document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener('click',function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

