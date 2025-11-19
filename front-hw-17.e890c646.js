let e=document.querySelector(".js_list"),t=document.querySelector(".js_btn"),s=document.querySelector(".box_form"),n=1,r="";function l(){return fetch(`https://newsapi.org/v2/everything?q=${r}&from=2025-10-19&sortBy=publishedAt&apiKey=09de3f48ee0a4331be44f900830e74be&pageSize=3&page=${n}`).then(e=>e.json())}function i(t){let s=t.map(({author:e,title:t,url:s,urlToImage:n})=>`
      <li class="js_item">
        <img src="${n}" alt="${t}" class="js_img">
        <h2 class="js_desc">${t}</h2>
        <h3 class="js_title">${e}</h3>
        <a href="${s}" class="js_link">Follow the link</a>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s)}s.addEventListener("submit",t=>{t.preventDefault(),e.innerHTML="",n=1,r=t.currentTarget.name.value,l().then(e=>i(e.articles))}),t.addEventListener("click",()=>{n+=1,l().then(e=>i(e.articles))});
//# sourceMappingURL=front-hw-17.e890c646.js.map
