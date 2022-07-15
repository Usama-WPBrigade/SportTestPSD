
function close_notification() {
  document.getElementById("main_container").style.display = "none";
}




$(document).ready(function () {
  $(".burgericon").on('click', function () {
    $("#outer_header").slideToggle();
    $("body").toggleClass("overflow")
  });
  // js for slider
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





  // Carusel section js 
  var swiper1 = new Swiper(".mycarusel", {
    slidesPerView: 1,
    spaceBetween: 28,
    slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".carusel-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 31,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 31,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
    navigation: {
      nextEl: ".carusel-button-next",
      prevEl: ".carusel-button-prev",
    },
  });


  //accordines
  $('.accordion').find('.accordion__header').click(function () {
    // Adds active class
    $(this).toggleClass('is-active');
    // Expand or collapse this panel
    $(this).next().slideToggle();
    // // Hide the other panels
    $('.accordion__body').not($(this).next()).slideUp();
    // Removes active class from other titles
    $('.accordion__body').not($(this)).removeClass('is-active');
    $('.accordion__header').not($(this)).removeClass('is-active');
  });

  //search field cross icon
  $(".search_field").on("input", function () {
    // Print entered value in a div box
    var res = $(this).val();
    if (res != 0) {
      $(".btn_search").addClass("hide");
    } else if (res == 0) {
      $(".btn_search").removeClass("hide");
    }
  });

  //menu burger_icon and cross icon
  var imgs = 0;
  $("#toggle_nav").click(function () {
    if (imgs == 0) {
      $(".image").attr("src", "assets/img/menu-close-icon.png");
      imgs = 1;
    } else if (imgs == 1) {
      $(".image").attr("src", "assets/img/burger.svg");
      imgs = 0;
    }
  });

  $(".dropdown_icon").on('click', function () {
    $(".dropdown-content").slideToggle();
    $(".dropdown_icon").toggleClass("rotate")
  });
});






// tab js
document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



// && window.matchMedia("(min-width: 768px)").matches

/******* video play function */
function playvideo(url) {
  const iframe = document.querySelector(".video_container iframe");
  iframe.setAttribute("src", url)
  document.getElementById('video_container').style.visibility = "visible"
}

function videoClose() {
  document.getElementById('video_container').style.visibility = "hidden"

}