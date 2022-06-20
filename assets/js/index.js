let subcontainer = document.getElementById("subcontainer");
let newTodo = document.getElementById("newTodo");
let msg = document.getElementById("msg");
let toDoPosts = document.getElementById("toDoPosts");

let formValidation = () => {
  if (newTodo.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
  }
};
