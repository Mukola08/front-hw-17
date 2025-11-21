const listEl = document.querySelector(".js_list");
const btnEl = document.querySelector(".js_btn");
const formEl = document.querySelector(".box_form");

let page = 1;
let searchValue = "";

function getApi() {
  return fetch(
    `https://pixabay.com/api/?key=53352836-dad5189717df5eb8e42c0a0ba&q=${searchValue}&per_page=3&page=${page}`
  ).then((res) => res.json());
}

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  listEl.innerHTML = "";
  page = 1;

  searchValue = evt.currentTarget.elements.name.value;

  getApi().then((res) => render(res.hits));
});

function render(array) {
  const item = array
    .map(({ user, tags, largeImageURL, pageURL }) => {
      return `
      <li class="js_item">
        <img src="${largeImageURL}" alt="${tags}" class="js_img">
        <h2 class="js_desc">${tags}</h2>
        <h3 class="js_title">Автор: ${user}</h3>
        <a href="${pageURL}" class="js_link" target="_blank">Відкрити</a>
      </li>`;
    })
    .join("");

  listEl.insertAdjacentHTML("beforeend", item);
}

btnEl.addEventListener("click", () => {
  page += 1;
  getApi().then((res) => render(res.hits));
});
