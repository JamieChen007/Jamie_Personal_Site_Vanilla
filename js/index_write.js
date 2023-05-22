const text = document.getElementById("index_introduce_detail0");

let textValue = "I Love Programing!";

let index = 1;

write();

function write() {
  text.innerHTML = textValue.slice(0, index);

  index++;

  if (index > textValue.length) {
    index = 1;
  }

  setTimeout(write, 250);
}
