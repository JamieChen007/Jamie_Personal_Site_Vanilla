const text = document.getElementById("contact_title_subtitle");

let textValue = "I am Jamie Chen!";

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
