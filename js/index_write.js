const text = document.getElementById("index_introduce_detail0");

const textValue = "I Love Programing!";

let index = 1;

const write = () => {
  text.innerHTML = textValue.slice(0, index);

  index++;

  if (index > textValue.length) {
    index = 1;
  }

  setTimeout(write, 250);
};

write();
