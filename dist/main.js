(()=>{"use strict";function e(e,t,n){const a=document.createElement(e);return a.textContent=t,a.setAttribute("class",n),a}function t(e,t,n){const a=document.createElement(e);return a.textContent=t,a.setAttribute("class",n),a}const n=function(){const e=document.getElementsByClassName("container");e[0].classList.add("flex-lay"),e[0].classList.remove("grid-lay"),e[0].textContent="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementsByClassName("home-btn")[0].classList.add("active")}(),e[0].appendChild(t("p","WELCOME TO VIAPIAS","")),e[0].appendChild(t("p","Italian and Pizza Cousine","")),e[0].appendChild(t("a","Order Online","order-btn"))};function a(e,t,n){const a=document.createElement(e);return a.textContent=t,a.setAttribute("class",n),a}function i(e,t,n,i){const s=a("p","","list-ingredients");return s.textContent=`${e} + ${t} + ${n} + ${i}`,s}function s(e,t){const n=a("div","","box-menuitem");return n.appendChild(a("span",`${t}`,"")),n.appendChild(a("span","","underline")),n.appendChild(a("span",`${e}`,"")),n}function d(e,t,n,d,o,l,r,c,p,m,h,u,C){const b=a("div","",`box-${e}`);b.appendChild(a("h3",e,"h-title"));const g=s(n,t);return b.appendChild(g),b.appendChild(i(d,o,l,r)),b.appendChild(s(p,c)),b.appendChild(i(m,h,u,C)),b}const o=function(){const e=document.getElementsByClassName("container");e[0].classList.add("grid-lay"),e[0].classList.remove("flex-lay"),e[0].textContent="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementsByClassName("menu-btn")[0].classList.add("active")}(),[d("Pizza","Quattro Formaggi","35","Mozzarella","Gorgonzola","Fontina","Grana Padano","Napoletana","40","Dough Type 0","Brewer Yeast","Buffalo Mozzarella","San Martano Tomatoe"),d("Pasta","Fettuccine Alfredo","20","Heavy Cream","Garlic Clove","Parmesan Cheese","Italian Parsley","Spaghetti","25","Extra-virgin Oil","Garlic Cloves","Anchovies","Carbonara Sauce"),d("Meat","Barilla Lasagna","15","Italian Sausage","Mozzarella Cheese","Parmigiano-Reggiano cheese","Ricotta Cheese","Meatballs","18","Ground Beef/Pork","Onions","Parmesan Cheese","Black & Red pepper"),d("Desserts","Canestrelli","7","Egg Yolks","Conrstarch","Vanilla Extract","Confectioners Sugar","Lemon Ricotta Cake","8","Vanilla Extract","Caster Sugar","Almond Meal","Lemon Zest")].forEach((t=>{e[0].appendChild(t)}))};function l(e,t,n){const a=document.createElement(e);return a.textContent=t,a.setAttribute("class",n),a}const r=function(){const e=document.getElementsByClassName("container");e[0].classList.remove("flex-lay"),e[0].classList.add("grid-lay"),e[0].textContent="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementsByClassName("contact-btn")[0].classList.add("active")}(),e[0].appendChild(function(){const e=l("div","","addres-box");e.appendChild(l("p","🏠 3260 NW 24th St, Miami, FL","local-address"));const t=l("iframe","","address-frame");return t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.365448114017!2d-80.20286546499318!3d25.759285988204216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b680b32f18ad%3A0x4ad3029ff324f4d5!2sBrickell%2C%20Miami%2C%20FL!5e0!3m2!1sen!2sus!4v1665030739671!5m2!1sen!2sus",e.appendChild(t),e}()),e[0].appendChild(function(){const e=l("div","","hours-box");return e.appendChild(l("h3","Hours","title-time")),e.appendChild(l("p","Tuesday: 12:00 - 22:00","time")),e.appendChild(l("p","Wednesday: 12:00 - 22:00","time")),e.appendChild(l("p","Thursday: 12:00 - 22:00","time")),e.appendChild(l("p","Friday: 12:00 - 23:30","time")),e.appendChild(l("p","Saturday: 12:00 - 23:30","time")),e.appendChild(l("p","Sunday: 12:00 - 23:30","time")),e}())};function c(e,t,n){const a=document.createElement(e);return a.textContent=t,a.setAttribute("class",n),a}const p=function(){const e=document.getElementsByClassName("container");e[0].classList.remove("flex-lay"),e[0].classList.add("grid-lay"),e[0].textContent="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementsByClassName("about-btn")[0].classList.add("active")}(),e[0].appendChild(function(){const e=c("div","","intro-text-box");return e.appendChild(c("p","Founded by Rodrigo Viarpi, Jeffi Piason, and Carlos Chanel, Viapias is one of the most celebrated Italian restaurants of the last century. Forbes probably put it best: “It is a fancy red-sauce joint as directed by Christopher Nolan, bringing back the punch-in-the-guts thrills of a genre that everybody else sees as uncultured and a little embarrassing, while exposing the sophistication that was always lurking there. The restaurant has a technical prowess that can make you giddy and an instinct for sheer entertainment that makes a lot of other restaurants seem like earnest, unimaginative drones.”","intro-text")),e.appendChild(c("p","Viarpi, Piason, and Chanel—who together own the company Trinity Cibo Group—are also behind such iconic concepts as THE GILL, tomo’s, YY’s SUSHI Bar, Pomos, and Double Plate.","intro-text")),e}()),e[0].appendChild(function(){const e=c("div","","team-box");return e.appendChild(function(){const e=c("div","","about-sidebar"),t=c("div","","person-holder");e.appendChild(t),t.appendChild(c("h2","THE TEAM","team-title"));const n=c("div","","person"),a=c("img","","person-img");a.src="~/repos/restaurant-page/dist/images/chef-1.jpg",n.appendChild(a),n.appendChild(c("h4","RODRIGO VIARPI",""));const i=c("div","","person"),s=c("img","","person-img");s.src="~/repos/restaurant-page/dist/images/chef-2.jpg",i.appendChild(s),i.appendChild(c("h4","JEFFI PIASON",""));const d=c("div","","person"),o=c("img","","person-img");return o.src="https://pixabay.com/images/id-4282016/",d.appendChild(o),d.appendChild(c("h4","CARLOS CHANEL","")),t.appendChild(n),t.appendChild(i),t.appendChild(d),e}()),e.appendChild(function(){const e=c("div","","about-content"),t=c("div","","slider-holder");e.appendChild(t),t.appendChild(c("h2","PHOTOS","slider-title"));const n=c("div","","carousel-wrapper");t.appendChild(n);const a=c("img","","slider-food-img");a.src="",n.appendChild(a);const i=c("div","","slider-nav");return t.appendChild(i),i.appendChild(c("a","PREVIOUS PHOTO","slider-link")),i.appendChild(c("div","|","divider-links")),i.appendChild(c("a","NEXT PHOTO","slider-link")),e}()),e}())};(function(){const t=document.getElementById("content"),n=document.createElement("section");t.appendChild(n);const a=n.appendChild(e("header","","home-header"));a.appendChild(e("a","VIAPIAS","intro")),a.appendChild(e("div","(789)-635-2410 Call to order!","cellular"));const i=n.appendChild(e("nav","","home-nav")).appendChild(e("ul","","nav-option")),s=i.appendChild(e("li","","r1")),d=i.appendChild(e("li","","r2")),o=i.appendChild(e("li","","r3")),l=i.appendChild(e("li","","r4"));s.appendChild(e("button","HOME","home-btn")).classList.add("tab"),d.appendChild(e("button","MENU","menu-btn")).classList.add("tab"),o.appendChild(e("button","ABOUT","about-btn")).classList.add("tab"),l.appendChild(e("button","CONTACT US","contact-btn")).classList.add("tab"),n.appendChild(e("div","","middle")).appendChild(e("div","","container")),n.appendChild(e("footer","Designed by Falteringsky","footer"))})(),n(),function(){const e=document.getElementsByClassName("home-btn"),t=document.getElementsByClassName("menu-btn"),a=document.getElementsByClassName("about-btn"),i=document.getElementsByClassName("contact-btn");e[0].addEventListener("click",n),t[0].addEventListener("click",o),a[0].addEventListener("click",p),i[0].addEventListener("click",r)}()})();