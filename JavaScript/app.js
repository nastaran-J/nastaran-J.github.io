const Peoples = [
  {
    id: 1,
    name: "Nahal Shahi",
    job: "Web developer",
    img: "assets/Nahal-Shahi.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab, repudiandae unde, nesciunt nam quos eligendi assumenda ducimus pariatur incidunt, itaque similique!",
  },
  {
    id: 2,
    name: "Niloofar Rad",
    job: "Web designer",
    img: "assets/Niloofar-Rad.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab, repudiandae unde, nesciunt nam quos eligendi assumenda ducimus pariatur incidunt, itaque similique!",
  },
  {
    id: 3,
    name: "Raha Mehr",
    job: "intern",
    img: "assets/Raha-Mehr.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab, repudiandae unde, nesciunt nam quos eligendi assumenda ducimus pariatur incidunt, itaque similique!",
  },
];

const UserImage = document.getElementById("People-picture");
const UserName = document.getElementById("name");
const UserJob = document.getElementById("job");
const UserReview = document.getElementById("People-review");

let currentUser = 0;

const setSlideData = (UserIndex) => {
  const User = Peoples[UserIndex];
  UserImage.src = User.img;
  UserName.textContent = User.name;
  UserJob.textContent = User.job;
  UserReview.textContent = User.text;
};
document.addEventListener("DOMContentLoaded", function () {
  setSlideData(0);
});

document.getElementById("a_right").addEventListener("click", function () {
  if (currentUser >= 0 && currentUser < Peoples.length - 1) {
    currentUser++;
    setSlideData(currentUser);
  } else if (currentUser >= Peoples.length - 1) {
    currentUser = 0;
    setSlideData(currentUser);
  }
});

document.getElementById("a_left").addEventListener("click", function () {
  if (currentUser > 0) {
    currentUser--;
    setSlideData(currentUser);
  } else {
    currentUser = Peoples.length - 1;
    setSlideData(currentUser);
  }
});

const form = document.getElementById("to-do-form");
const inputOne = document.getElementById("item-input-1");
const inputTwo = document.getElementById("item-input-2");
const inputThree = document.getElementById("item-input-3");
const errorMsg = document.getElementById("errors");
let tasks = [];

const setError = (msg) => {
  errorMsg.innerText = msg;
  setTimeout(() => {
    errorMsg.innerText = "";
  }, 1000);
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTaskOne = inputOne.value;

  if (newTaskOne == "" && newTaskOne == "") {
    setError("please enter your email");
    return;
  } else if (newTaskOne && tasks.includes(newTaskOne)) {
    setError("This task is duplicated");
    return;
  }
  tasks.push(newTaskOne);
  inputOne.value = "";
  console.log(newTaskOne);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTaskTwo = inputTwo.value;
  if (newTaskTwo == "" && newTaskTwo == "") {
    setError("please enter your password");
    return;
  } else if (newTaskTwo && tasks.includes(newTaskTwo)) {
    setError("This task is duplicated");
    return;
  }
  tasks.push(newTaskTwo);
  inputTwo.value = "";
  console.log(newTaskTwo);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTaskThree = inputThree.value;
  if (newTaskThree == "" && newTaskThree == "") {
    setError("please enter your Message");
    return;
  } else if (newTaskThree && tasks.includes(newTaskThree)) {
    setError("This task is duplicated");
    return;
  }
  tasks.push(newTaskThree);
  inputThree.value = "";
  console.log(newTaskThree);
});

const submitButton = () => {
  tasks = [];
};

