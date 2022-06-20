let subcontainer = document.getElementById("subcontainer");
let newTodo = document.getElementById("newTodo");
let msg = document.getElementById("msg");
let toDoPosts = document.getElementById("toDoPosts");
let strikethrough = document.getElementById("strikethrough");

// let formValidation = () => {
//   if (newTodo.value === "") {
//     msg.innerHTML = "Post cannot be blank";
//     console.log("failure");
//   } else {
//     console.log("successs");
//     msg.innerHTML = "";
//   }
// };

let data = {};

let formValidation = () => {
  if (newTodo.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    // Other codes are here
    acceptData();
  }
};

let createPost = () => {
  toDoPosts.innerHTML += `
    <div id="posts" class="grid__style container"><p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
  newTodo.value = "";
};

let acceptData = () => {
  data["text"] = newTodo.value;

  createPost();
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  newTodo.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

// Store
localStorage.setItem("key", "value");

// Retrieve
document.getElementById("posts").innerHTML = localStorage.getItem("lastname");
