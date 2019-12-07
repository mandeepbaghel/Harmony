// //jquery to change banner image continously
// $(document).ready(function () {
//     var imageFile = ["hero.jpg", "hero3.jpg"];
//     var currentIndex = 0;
//     setInterval(function () {
//         if (currentIndex == imageFile.length) {
//             currentIndex = 0;
//         }
//         $(".hero-carousel").css('background-image', 'url("/images/' + imageFile[currentIndex++] + '")');
//     }, 3000);
// });

//fixed header after scrolling 70px

const header = $('header');
$(window).on("scroll",function(){
    if($(this).scrollTop() > 100)
    {
        $(header).addClass('fixed-header')
    }
    else{
        $(header).removeClass('fixed-header')
    }
})

//blog owl carousle initializtion
$('.blogs').owlCarousel({
    loop: false,
    margin: 40,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,

        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


/*-------------------mobile hamburger menu------------------------- */
 //toggle hamburger on toggle
 let hamburger = document.querySelector(".hamburger");
 let navLinks = document.querySelectorAll(".menu ul li");
 let links = document.querySelectorAll(".menu ul li a");
 let menu = document.querySelector(".menu");

 if (innerWidth <= 768) {
   $(links).on("click", function() {
     $(menu).toggleClass("menu-opened");
     $(hamburger).toggleClass("open");
   });
 }

 $(hamburger).on("click", function() {
   $(menu).toggleClass("menu-opened");
   $(this).toggleClass("open");
   //$(navLinks).toggleClass("fade");
   // console.log("menu-opened");
 });