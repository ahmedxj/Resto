let toggle_btn = document.querySelector(".hambrger");
let menu = document.querySelector(".link");
let xl = document.querySelector(".fas fa-bars");


//------- navbar forms ----------

let searchForm = document.querySelector(".search-form");
let shopingForm = document.querySelector(".shoping_card");
let personInfo = document.querySelector(".person_info");

document.querySelector('#searchBtn').onclick = ()=>{
    searchForm.classList.toggle("active2")
    shopingForm.classList.remove("active2")
    personInfo.classList.remove("active2")
}

document.querySelector('#cartBtn').onclick = ()=>{
    shopingForm.classList.toggle("active2")
    searchForm.classList.remove("active2")
    personInfo.classList.remove("active2")
}

document.querySelector('#personBtn').onclick = ()=>{
    personInfo.classList.toggle("active2")
    searchForm.classList.remove("active2")
    shopingForm.classList.remove("active2")
}

// ----------- navbar btn ------------

toggle_btn.onclick = () =>{
    // xl.classList.toggle('fa-times');
    menu.classList.toggle("active1");
    personInfo.classList.remove("active2")
    searchForm.classList.remove("active2")
    shopingForm.classList.remove("active2")
}


//--------------------

let section = document.querySelectorAll(".sec");
let navlink = document.querySelectorAll("nav .links ul li a");

window.onscroll = () =>{
    // // xl.classList.remove('fa-times');
    menu.classList.remove("active");

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height ){
            navlink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('nav .links ul a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}

//---------------------

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
});


var swiper = new Swiper(".test-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

//  ------- scroll top btn -------
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
    var hed = document.querySelector('nav');
    scroll.classList.toggle("active" , window.scrollY>500);
    hed.classList.toggle("active22" , window.scrollY>900);
})	

function scrolltotp(){
	window.scrollTo({top:0,
	behavior:'smooth'
	})
}