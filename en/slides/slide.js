jQuery(document).ready(function() {
    var pop_index = 1;
    // set box
    jQuery('body').append('<div class="pop-slide"></div>');
    jQuery('[data-gallery]').each(function() {
        // set var
        var pop_class = 'pop-' + pop_index;
        s = jQuery(this).attr('data-gallery').split(',');
        h = '<div class="pop-slide-inner ' + pop_class + '">';
        // prepare slide code
        for (i = 0; i < s.length; i++) {
            h += '<div class="item" style="background-image:url(' + s[i] + ');"><img src="' + s[i] + '"></div>';
        }
        h += '</div>';
        // set each trigger
        jQuery(this).attr('data-pop', pop_class);
        // append slide code
        jQuery('body > .pop-slide').append(h);

        // sliding trigger
        //_set_slide(pop_class);

        pop_index++;
    });

    // close function
    jQuery('body > .pop-slide').prepend('<span class="close-pop"></span>');
    jQuery(document).on('click', '.pop-slide .close-pop', function() {
        jQuery('.pop-slide').fadeOut();
        jQuery('.pop-slide .pop-slide-inner').fadeOut();
        jQuery('.pop-slide .slick-initialized').slick('unslick');
    });

    jQuery('[data-gallery]').click(function(e) {
        e.preventDefault();
        var c = jQuery(this).attr('data-pop');
        jQuery('.pop-slide .' + c).fadeIn();
        jQuery('.pop-slide').fadeIn();
        _set_slide(c);
    });

});

function _set_slide(c) {
    var elm = jQuery('.' + c).slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}