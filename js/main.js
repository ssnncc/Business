$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

        items :1, //items: 3==> màn hình sẽ hiện 3 tấm hình.
       margin :10,// Mặc định là margin-right. K/cách giữa các tấm hình
       loop : true,// Vòng lặp
       autoplay: true,//Tự động chạy các hình ảnh
       autoplayTimeout: 4000, //Thời gian chuyển đổi từ hình này sang hình khác
       nav: true,// Mũi tên next
       navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
       navSpeed: 3000,//Xét tốc độ chạy 
    });
    
  });
  
  $(document).ready(function(){
    $('.btn').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
  });
