const text = document.getElementById("index_introduce_detail0");

const textValue = "I Love ";

const textArr = ["Programing!", "Design!"];

let index = 1;
let i = 0;

const write = () => {
  text.innerHTML = textValue + textArr[i].slice(0, index);

  index++;

  if (index > textArr[i].length) {
    index = 1;
    i++;
  }
  if (i >= textArr.length) {
    i = 0;
  }

  setTimeout(write, 250);
};

write();
