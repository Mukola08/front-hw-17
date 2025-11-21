let e=document.querySelector(".js_list"),t=document.querySelector(".js_btn"),s=document.querySelector(".box_form"),a=1,n="";function u(){return fetch(`https://pixabay.com/api/?key=53352836-dad5189717df5eb8e42c0a0ba&q=${n}&per_page=3&page=${a}`).then(e=>e.json())}function r(t){let s=t.map(({user:e,tags:t,largeImageURL:s,pageURL:a})=>`
      <li class="js_item">
        <img src="${s}" alt="${t}" class="js_img">
        <h2 class="js_desc">${t}</h2>
        <h3 class="js_title">\u{410}\u{432}\u{442}\u{43E}\u{440}: ${e}</h3>
        <a href="${a}" class="js_link" target="_blank">\u{412}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438}</a>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s)}s.addEventListener("submit",t=>{t.preventDefault(),e.innerHTML="",a=1,n=t.currentTarget.elements.name.value,u().then(e=>r(e.hits))}),t.addEventListener("click",()=>{a+=1,u().then(e=>r(e.hits))});
//# sourceMappingURL=front-hw-17.40ef8e2c.js.map
