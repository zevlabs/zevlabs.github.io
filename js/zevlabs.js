$(document).ready(function() {
    $window = $(window);

    // Parallax
    $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $('#parallax').data('speed') - 280);
        // Put together our final background position
        var coords = '50%' + yPos + 'px';
        // Move the background
        $('#parallax').css({
            backgroundPosition: coords
        });
    });

    //when top hits the first cta btn, run this
    $(".cont-wrapper .btn-wrp").waypoint(function() {
        $(".ipad").addClass("anim");
        $(".text").addClass("anim");
    });

    // Navigation
    $("#navigation li").click(function() {
        $("#navigation li ").removeClass("active");
        $(this).addClass("active");
    });

    $("nav").onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 5
    });

    $('.hash-scroll').onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 5
    });

    $('#navigation').scrollspy();

    $("a.mini-nav").click(function() {
        $("ul.nav").slideToggle("slow");
        return false;
    });

    $('#contactform input[type=submit]').click(function() {
        var form = $('#contactform');
        $.ajax({
            url: form.attr('action'),
            data: form.serialize(),
            type: 'post',
            dataType: 'json',
            success: function(json) {
                var success = $('#success');
                success.html(json.message).removeClass('alert alert-success alert-danger');
                if (json.success) {
                    success.addClass('alert alert-success');
                } else {
                    success.addClass('alert alert-danger');
                }
            }
        });
        return false;
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    $('#contactform').ebcaptcha();

    $('#contactform #protect').val('no-more-spam');
});
