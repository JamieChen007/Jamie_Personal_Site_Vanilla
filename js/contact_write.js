const text = document.getElementById("contact_title_subtitle");

const textValue = "I am ";
const textArr = ["Jamie Chen.", "a full stack developer.", "a designer."];
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
