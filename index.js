const darkToggle = document.querySelector("#toggle-dark-mode");
const answerText = document.querySelector(".question-answer");
const answerButton = document.querySelector(".button");
const form = document.querySelector('[data-js="form"]');

const questionElement = document.querySelector('[data-js="yourQuestion"]');
const answerElement = document.querySelector('[data-js="yourAnswer"]');
const amountLeftQ = document.querySelector('[data-js="amountLeftQ"]');
const amountLeftA = document.querySelector('[data-js="amountLeftA"]');

if (answerElement) {
  function updateAmountLeft(event) {
    const maxLength = event.target.maxLength;
    const amountLeft = maxLength - event.target.value.length;
    if (event.target.name === "your_question") {
      amountLeftQ.innerText = amountLeft;
    } else {
      amountLeftA.innerText = amountLeft;
    }
  }

  answerElement.addEventListener("input", (event) => {
    updateAmountLeft(event);
  });

  questionElement.addEventListener("input", (event) => {
    updateAmountLeft(event);
  });
}

if (darkToggle) {
  console.log(darkToggle);
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

if (answerButton) {
  answerButton.addEventListener("click", () => {
    answerText.classList.toggle("hidden");
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(data.your_question);
    // DOM entries

    const question = document.createElement("section");
    question.classList.add("Question");

    const questionParagraph = document.createElement("p");
    question.append(questionParagraph);
    questionParagraph.textContent = data.your_question;

    const button = document.createElement("button");
    question.append(button);
    button.textContent = "Show answer";
    button.classList.add("button");

    const answerParagraph = document.createElement("p");
    question.append(answerParagraph);
    answerParagraph.textContent = data.your_answer;

    const ul = document.createElement("ul");
    question.append(ul);
    ul.classList.add("tags");

    const li1 = document.createElement("li");
    li1.classList.add("sources");
    li1.textContent = "#html";

    const li2 = document.createElement("li");
    li2.classList.add("sources");
    li2.textContent = "#css";

    const li3 = document.createElement("li");
    li3.classList.add("sources");
    li3.textContent = "#flexbox";

    ul.append(li1, li2, li3);

    const div = document.createElement("div");
    div.classList.add("bookmark");
    question.append(div);

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("aria-labelledby", "bookmark");

    const divImg = document.createElement("div");
    div.classList.add("background-img");

    div.append(input, divImg);
    document.body.append(question);
  });
}
