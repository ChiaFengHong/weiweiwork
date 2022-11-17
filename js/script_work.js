//  展開/收合按鈕
$(document).ready(function() {

    $("#collapse").on("click", function() {

        $("#sidebar").toggleClass("active");
        $(".fa-align-left").toggleClass("fa-chevron-circle-right");
    })


    // const images = $(".animated");
    // function handleScroll() {
    //   $.each(images, function (index, image) {
    //     // console.log(image.offsetTop);
    //     // console.log(image.height);
    //     // console.log(window.scrollY);
    //     // console.log(window.innerHeight);
    //     const imageMiddleOffset = image.offsetTop + image.height / 2;
    //     const scrollAt = window.scrollY + window.innerHeight;

    //     console.log("image = " + image.log);
    //     console.log("image.offsetTop = " + image.offsetTop);
    //     console.log("image.height = " + image.height);
    //     console.log("window.scrollY = " + window.scrollY);
    //     console.log("window.innerHeight = " + window.innerHeight);
    //     console.log("imageMiddleOffset = " + imageMiddleOffset);
    //     console.log("scrollAt = " + scrollAt);
        

    //     if (scrollAt > imageMiddleOffset) {
    //       $(this).attr({ class: "fadeInTop" });
    //     }
    //   });
    // }


    // function debounce (func, delay=250) {
    //     let timer = null
    //     return () => {
    //         let context = this
    //         let args = arguments
    //         clearTimeout(timer)
    //         timer = setTimeout(() => {
    //             func.apply(context, args)
    //         }, delay)
    //     }
    // }

    // $(window).scroll(debounce(handleScroll));

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 10;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } 
            else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    
})

