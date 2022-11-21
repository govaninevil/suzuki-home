const nextIcon = '<img src ="./images/left.png" alt:"right">'
const prevIcon = '<img src ="./images/right.png" alt:"right">'


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [
        nextIcon,
        prevIcon
    ],
    responsive:{
        0:{
            items:1
        }
    }
})


$(document).ready(function() {
    
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', 
        width: 'auto', 
        fit: true, 
        tabidentify: 'hor_1', 
        activate: function(event) { 
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
})

