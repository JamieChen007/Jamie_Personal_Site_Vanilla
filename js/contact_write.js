const text = document.getElementById("contact_title_subtitle");

const textValue = "I am Jamie Chen!";

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
