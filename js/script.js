function showMore(){
    const beniInfo = document.querySelector(".about-us-text")
    const beniInfoSuite = document.createElement("p")
    beniInfoSuite.innerText="The town was the scene of fierce fighting in the Second Congo War around 2001. Beni also has many MONUC bases; elements of the Indian-led North Kivu Brigade are based in the town."
    document.beniInfo.appendChild(beniInfoSuite);
}
const menuHamburger = document.querySelector(".menu-hamburger")
  const navLinks = document.querySelector(".nav-items")

  menuHamburger.addEventListener('click',(e)=>{
  navLinks.classList.toggle('mobile-menu')
  })

let formSign=document.getElementById("formSign")
    formSign.addEventListener("submit",(e)=>{
        e.preventDefault();
        document.getElementById("loading").setAttribute("style","display:block")
        setTimeout(() => {
            document.getElementById("loading").setAttribute("style","display:none")    
        }, 1000);
    })