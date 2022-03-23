const d = document,
    $sections = document.querySelectorAll("section"),
    $divAnimations = document.querySelectorAll(".animable"),
    // $cv = d.getElementById("contenedor-cv"),
    $btnHamburguer = document.getElementById("btnHamburguer"),
    $contenedorHamburguesa = d.getElementById("contenedor-hamburguesa");

d.addEventListener("click", e=>{
    // if(e.target.matches("#abrir-cv")){
    //     $cv.style.display = "block";
    // }
    if(e.target.matches("#btnHamburguer") || e.target.matches("#btnHamburguer *")){
        $btnHamburguer.classList.toggle("is-active");
    }
    if(e.target.matches(".submenus li") || e.target.matches(".submenus li a")) $btnHamburguer.classList.remove("is-active");
    if(e.target.matches("#cerrar-cv")){
        $cv.style.display = "none";
    }
});
// d.addEventListener("keydown", e=>{
//     console.log(e)
//     if(e.keyCode === 27 && $cv.style.display === "block"){
//         $cv.style.display = "none";
//     }
// });
const paintMenu = (entries) =>{
    entries.forEach(entrie=>{
        if(entrie.isIntersecting){
            document.querySelector(`a[href="#${entrie.target.id}"]`).classList.add("observer")
        }
        else document.querySelector(`a[href="#${entrie.target.id}"]`).classList.remove("observer")
    })
}

const chargeAnimations = (entries) =>{
    entries.forEach(element=>{
        if(element.isIntersecting){
            console.log(element.target.id)
            switch(element.target.id){
                case "about__img":
                case "svg-footer":
                    element.target.style.animation = "aparecerIzquierda 1s ease forwards";
                    break;
                default:
                    element.target.style.animation = "aparecer 1s ease forwards";
            }
        }
    })
}


let options = { root: null, rootMargin: "0px", threshold: 0.5},
    observer = new IntersectionObserver(paintMenu, options),
    observerAnimations = new IntersectionObserver(chargeAnimations, {...options, threshold: 0.8});

$sections.forEach($section => observer.observe($section));
$divAnimations.forEach($divAnimable => observerAnimations.observe($divAnimable));
