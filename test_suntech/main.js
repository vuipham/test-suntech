// Lấy các phần tử HTML bằng ID
const openFormBtn = document.getElementById("toggleForm");
const myform = document.querySelector("form");

var listNumber = document.getElementById("listNumber");
const ul = document.getElementById("numbersChoosed");
const btnSubmit = document.getElementById("btnSubmit");
var tags = [];

openFormBtn.onclick = function () {
  toggleForm("flex");
};

function toggleForm(status) {
  myform.style.display = status;
}

// Hàm để xử lý sự kiện click vào thẻ span
function addTagOnClick(event) {
  let spanElement = event.target;
  let tag = spanElement.textContent.trim();
  console.log(spanElement.id);
  if (tag != "" && !tags.includes(tag)) {
    tags.push(tag);
    changeColer(spanElement.id, "black", "yellow", "none", "not-allowed");
    console.log(tags); // In mảng tags sau khi thêm tag mới
  }
}

// Hàm để gắn sự kiện click vào tất cả các thẻ span từ 1 đến 50
function attachClickEventsToSpans() {
  for (let i = 1; i <= 50; i++) {
    let spanId = "num_" + i;
    let spanElement = document.getElementById(spanId);
    spanElement.addEventListener("click", addTagOnClick);
    // console.log("id of span is clicked", spanId);
  }
}

function changeColer(spanId, color, backgroundColor, pointerEvents, cursor) {
  let spanElement = document.getElementById(spanId);
  spanElement.style.backgroundColor = backgroundColor;
  spanElement.style.color = color;
  spanElement.style.cursor = cursor;
  spanElement.style.pointerEvents = pointerEvents;
}

function createTag() {
  if (tags.length > 1) {
    ul.innerHTML = "";
  }

  tags.forEach((tag) => {
    let liTag = document.createElement("li");
    liTag.textContent = tag;
    console.log("check id: ", tag);
    changeColer("num_" + tag, "white", "red", "none", "not-allowed");
    ul.appendChild(liTag);
  });
}

// Gọi hàm để gắn sự kiện click
attachClickEventsToSpans();

btnSubmit.onclick = function (event) {
  event.preventDefault();
  console.log("Mảng sau khi thêm:", tags);
  createTag();
  toggleForm("none");
};
