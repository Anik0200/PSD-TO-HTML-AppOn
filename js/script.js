$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});
$('.screen_img_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
$('.feadback_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".img_slider",
});

$('.img_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    asNavFor: ".feadback_slider",
});

new VenoBox({
    selector: '.venobox'
});


// fix menu start

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('#main_menu').addClass('lalala')
  } else{
      $('#main_menu').removeClass('lalala')
  }
});


$(".box_btn").click(function(){
$(".box").addClass("box_remove")
})


let preLoader=document.querySelector(".preloader")

window.addEventListener("load",function(){
  preLoader.classList.add("hide_show_preloader")
})



// fix menu end


// top to bottom

$(window).scroll(function(){
  if($(this).scrollTop() > 200){
      $('.backto_top').addClass('back_to_top')
  } else{
      $('.backto_top').removeClass('back_to_top')
  }
});