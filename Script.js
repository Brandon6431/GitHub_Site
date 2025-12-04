var hamEl = document.getElementById("ham");
var drawerEl = document.getElementById("drawerNav");

function drawerToggle(){
        drawerEl.classList.toggle("opened");

        if(drawerEl.classList.contains("opened")){
            hamEl.textContent = "✖";

        }else{
           hamEl.textContent = "☰";;
        }
        
    
   /**  if(){drawerEl.style.display == "none";
        drawerEl.style.display = "block"; 
        hamEl.src = "images/close.svg";
    }else{ 

          drawerEl.style.display = "none";
          hamEl.src = "images/menu.svg";
    }**/
}

//**new */
hamEl.addEventListener("click", drawerToggle);

// Select all testimonial images
const testimonialImages = document.querySelectorAll(".testimonial .container img");
const tip = document.getElementById('tooltip');

function show(e) {
    tip.textContent = 'Customer testimonial image'; 
    tip.style.left = e.clientX + 'px';
    tip.style.top = e.clientY + 'px';
    tip.classList.add('visible');
    tip.setAttribute('aria-hidden', 'false');
}

function move(e) {
    tip.style.left = e.clientX + 'px';
    tip.style.top = e.clientY + 'px';
}

function hide() {
    tip.classList.remove('visible');
    tip.setAttribute('aria-hidden', 'true');
}

// Add events to all testimonial images
testimonialImages.forEach(img => {
    img.addEventListener('mouseenter', show);
    img.addEventListener('mousemove', move);
    img.addEventListener('mouseleave', hide);

    img.addEventListener('focus', (e) => show(e));
    img.addEventListener('blur', hide);
});
//**new */
