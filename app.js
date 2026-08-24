const menu = [
  {name:"Zinger Burger",cat:"burger",price:"Rs. 450",emoji:"🍔",desc:"Crispy chicken, fresh lettuce and signature sauce."},
  {name:"ZFC Special Burger",cat:"burger",price:"Rs. 550",emoji:"🍔",desc:"A loaded house-style burger made for serious appetites."},
  {name:"Chicken Pizza",cat:"pizza",price:"Rs. 950",emoji:"🍕",desc:"Cheesy pizza topped with seasoned chicken and vegetables."},
  {name:"ZFC Special Pizza",cat:"pizza",price:"Rs. 1,150",emoji:"🍕",desc:"A loaded combination pizza for the whole table."},
  {name:"Grilled Chicken",cat:"chicken",price:"Rs. 900",emoji:"🍗",desc:"Juicy grilled chicken with a smoky, savory finish."},
  {name:"Chicken Wings",cat:"chicken",price:"Rs. 650",emoji:"🍗",desc:"Crispy, seasoned wings — great for sharing."},
  {name:"Chicken Biryani",cat:"desi",price:"Rs. 350",emoji:"🍛",desc:"Fragrant rice, tender chicken and classic desi spices."},
  {name:"BBQ Platter",cat:"desi",price:"Rs. 1,200",emoji:"🥘",desc:"A generous selection of BBQ favorites for the table."},
  {name:"Cold Drink",cat:"drinks",price:"Rs. 120",emoji:"🥤",desc:"Chilled soft drink to complete your meal."}
];

const grid = document.getElementById("menuGrid");
const filters = document.getElementById("filters");

function renderMenu(filter="all"){
  grid.innerHTML = menu.filter(x => filter==="all" || x.cat===filter).map((x,i)=>`
    <article class="food-card reveal visible" style="animation-delay:${i*.06}s">
      <div class="food-image"><span>${x.emoji}</span></div>
      <div class="food-body">
        <div class="food-top"><h3>${x.name}</h3><span class="price">${x.price}</span></div>
        <p>${x.desc}</p>
        <a class="order-mini" href="https://wa.me/923315045585?text=${encodeURIComponent(`Assalam-o-Alaikum ZFC Narowal! I would like to order: ${x.name} (${x.price}). Please confirm availability.`)}" target="_blank" rel="noopener">Order this item ↗</a>
      </div>
    </article>`).join("");
}
renderMenu();

filters.addEventListener("click", e=>{
  if(!e.target.matches("button")) return;
  filters.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
  e.target.classList.add("active");
  renderMenu(e.target.dataset.filter);
});

const header = document.getElementById("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>80));

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("hide"),500));
