var body = document.querySelector("body");
var dark = document.querySelector(".dark");
var dark2 = document.querySelector(".dark1");
var darkImg = document.querySelector(".dark>img");
var darkImg1 = document.querySelector(".dark1>img");
var nav = document.querySelectorAll("#bars");
var down = document.querySelector(".mobile-items");
var mobileNav = document.querySelector(".mobile-nav");
var closeNav = document.querySelector(".closenav");
var page2 = document.querySelector(".page2");
var home = document.querySelector("#blurhome");
var page3 = document.querySelector(".page3");
var upper = document.querySelector(".upper");
var uppertext = document.querySelector(".project1>h1");
var center = document.querySelector(".center");
var lower = document.querySelector(".lower");
var lowertext = document.querySelector(".project2>h1");
var mobilelala = document.querySelectorAll(".item-list>a");
mobilelala.forEach(elem => {
    elem.addEventListener("click",gala)
});

function gala(){
    down.style.top = "-110%";
}
// Card Color Selector

var card1 = document.querySelector(".one");
var card2 = document.querySelector(".two");
var card3 = document.querySelector(".three");
var card4 = document.querySelector(".four");
var formContainer = document.querySelector(".form-container");
var formsub = document.querySelector(".btnsub");
var cardbtn = document.querySelectorAll(".onedown>button");
var cardtag = document.querySelector(".onedown>button>a");

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    start: "50% 50%",
    end: "100% 50%",
    pin: true,
    scrub: 2,
    // markers: true,
}});

tl.to(".upper",{
    top: "-70%"
},"a")

tl.to(".lower",{
    bottom: "-70%"
},"a")

var timel = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    start: "20% 80%",
    end: "80% 80%",
    scrub: 2,
}})

timel.to(".aboutcon",{
    opacity: 1
},"b")
timel.to(".social",{
    scale: 1
},"lala")
timel.to(".sign",{
    fontSize: "12vh"
},"lala")

dark.addEventListener("click", dark1);
dark2.addEventListener("click", dark3);
var darkToggle = false;
var darkToggle1 = false;

function dark1(){
    if(darkToggle === false){
        body.style.backgroundColor = "black";
        darkImg.src = "image/dark.png";
        darkImg.style.filter = "invert(100%)";
        nav.forEach(element => {
            element.style.color = "#fff";
        });
        mobileNav.style.filter = "invert(100%)";
        down.style.top = "-110%";
        page2.style.backgroundColor = "orangered";
        upper.style.backgroundColor = "black";
        center.style.backgroundColor = "orangered";
        lower.style.backgroundColor = "black";
        uppertext.style.color = "#fff";
        lowertext.style.color = "#fff";
        card1.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        card2.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        card3.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        card4.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        cardbtn.forEach(element => {
            element.style.backgroundColor = "orangered";
        });
        formContainer.style.backgroundColor = "orangered";
        formsub.style.backgroundColor = "black";

    }
    else{
        body.style.backgroundColor = "#fff";
        darkImg.src = "image/Light.png";
        darkImg.style.filter = "invert(0)";
        nav.forEach(element => {
            element.style.color = "black";
        });
        mobileNav.style.filter = "invert(0%)";
        down.style.top = "-110%";
        page2.style.backgroundColor = "black";
        upper.style.backgroundColor = "#fff";
        center.style.backgroundColor = "black";
        lower.style.backgroundColor = "#fff";
        uppertext.style.color = "black";
        lowertext.style.color = "black";
        card1.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        card2.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        card3.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        card4.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        cardbtn.forEach(element => {
            element.style.backgroundColor = "black";
        });
        formContainer.style.backgroundColor = "black";
        formsub.style.backgroundColor = "orangered";
        

    }
    darkToggle = !darkToggle;

}

function dark3(){
    var about = document.querySelector(".aboutcon>h2");
    if(darkToggle1 === false){
        body.style.backgroundColor = "black";
        darkImg1.src = "image/dark.png";
        darkImg1.style.filter = "invert(100%)";
        nav.forEach(element => {
            element.style.color = "#fff";
        });
        mobileNav.style.filter = "invert(100%)";
        down.style.top = "-110%";
        page2.style.backgroundColor = "orangered";
        about.style.color = "black";
        upper.style.backgroundColor = "black";
        center.style.backgroundColor = "orangered";
        lower.style.backgroundColor = "black";
        uppertext.style.color = "#fff";
        lowertext.style.color = "#fff";
        card1.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        card2.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        card3.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        card4.style.backgroundImage = "linear-gradient( 114deg,  rgba(0,0,0,1) 233.1%, rgba(187,187,187,1) 233.1% )";
        cardbtn.forEach(element => {
            element.style.backgroundColor = "orangered";
        });
        formContainer.style.backgroundColor = "orangered";
        formsub.style.backgroundColor = "black";
    }
    else{
        body.style.backgroundColor = "#fff";
        darkImg1.src = "image/Light.png";
        darkImg1.style.filter = "invert(0)";
        nav.forEach(element => {
            element.style.color = "black";
        });
        mobileNav.style.filter = "invert(0%)";
        down.style.top = "-110%";
        page2.style.backgroundColor = "black";
        about.style.color = "#fff";
        upper.style.backgroundColor = "#fff";
        center.style.backgroundColor = "black";
        lower.style.backgroundColor = "#fff";
        uppertext.style.color = "black";
        lowertext.style.color = "black";
        card1.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        card2.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        card3.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        card4.style.backgroundImage = "radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )";
        cardbtn.forEach(element => {
            element.style.backgroundColor = "black";
        });
        formContainer.style.backgroundColor = "black";
        formsub.style.backgroundColor = "orangered";
    }
    darkToggle1 = !darkToggle1;

}

mobileNav.addEventListener("click", function(){
    down.style.top = "0%";
})
closeNav.addEventListener("click", function(){
    down.style.top = "-110%";
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required.';
        isValid = false;
    }

    // Validate message
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }

});

