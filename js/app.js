document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 15) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          $('.navbar').css({'background-color':'#fff','box-shadow': '10px 1px 10px #888888'});

          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          $('.navbar').css({'background-color':'#fbf5f5','box-shadow': 'none'});
          document.body.style.paddingTop = '0';
        } 
    });
  });