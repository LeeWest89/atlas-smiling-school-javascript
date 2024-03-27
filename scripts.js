// Quote Carousel

$(document).ready(function() {

    $('.loader').show();

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('.loader').hide();
            if (data && data.length > 0) {
                $.each(data, function(index, item){
                    let qImg = '<div class="col-12 col-sm-4 col-lg-2 offset-lg-1 text-center">' +
                    '<img src="' + item.pic_url + '" class="img-fluid d-block align-self-center rounded-circle ml-sm-2 mx-auto mx-sm-0" style="width: 160px !Important;" alt="Carousel Pic ' + (index + 1) + '">' +
                    '</div>';

                    let qInfo = '<div class="col-12 col-sm-7  col-lg-9 offset-lg-0">' +
                    '<div class="quote-text">' +
                    '<p class="text-white">' + item.text + '</p>' +
                    '<h4 class="text-white font-weight-bold">' + item.name + '</h4>' +
                    '<span class="text-white">' + item.title + '</span>' +
                    '</div>' +
                    '</div>';

                    let slide = '<div class="row mx-auto align-items-center">' + qImg + qInfo + '</div>'

                    $('.qCarousel').append(slide);
                });

                $('.qCarousel').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    centerMode: false
                });
            }
        },

        error: function(xhr, status, error) {
            console.error(xhr);
            console.error(status + ': ' + error);
            $('.loader').hide();
        }
    });

// Popular Tutorials

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/popular-tutorials',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('.loader').hide();

            if (data && data.length > 0) {
                $.each(data, function(index, item){

                    let stars = '';
                        for (let i = 0; i < item.star; i++) {
                            stars += '<img src="images/star_on.png" alt="star on" width="15px"/>';
                        }
                        for (let i = item.star; i < 5; i++) {
                            stars += '<img src="images/star_off.png" alt="star off" width="15px"/>';
                        }

                    let ptCard = '<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">' +
                    '<div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">' +
                    '<img src=' + item.thumb_url + ' class="card-img-top" alt="Video thumbnail' + (index + 1) + '"/>' +
                    '<div class="card-img-overlay text-center">' +
                    '<img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>' +
                    '</div>' +
                    '<div class="card-body">' +
                    '<h5 class="card-title font-weight-bold">' + item.title + '</h5>' +
                    '<p class="card-text text-muted">' + item['sub-title'] + '</p>' +
                    '<div class="creator d-flex align-items-center">' +
                    '<img src=' + item.author_pic_url + ' alt="Creator of Video ' + (index + 1) + '" width="30px" class="rounded-circle"/>' +
                    '<h6 class="pl-3 m-0 main-color">' + item['author'] + '</h6>' +
                    '</div>' +
                    '<div class="info pt-3 d-flex justify-content-between">' +
                    '<div class="rating">' + stars + '</div>' +
                    '<span class="main-color">' + item.duration + '</span>'+
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                    $('.ptCarousel').append(ptCard);
                });

                $('.ptCarousel').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    centerMode: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ] 
                });
            }
        },

        error: function(xhr, status, error) {
            console.error(xhr);
            console.error(status + ': ' + error);
            $('.loader').hide();
        }
    });

// Latest videos

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/latest-videos',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('.loader').hide();

            if (data && data.length > 0) {

                $.each(data, function(index, item){

                    let stars = '';
                        for (let i = 0; i < item.star; i++) {
                            stars += '<img src="images/star_on.png" alt="star on" width="15px"/>';
                        }
                        for (let i = item.star; i < 5; i++) {
                            stars += '<img src="images/star_off.png" alt="star off" width="15px"/>';
                        }

                    let lvCard = '<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">' +
                    '<div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">' +
                    '<img src=' + item.thumb_url + ' class="card-img-top" alt="Video thumbnail' + (index + 1) + '"/>' +
                    '<div class="card-img-overlay text-center">' +
                    '<img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>' +
                    '</div>' +
                    '<div class="card-body">' +
                    '<h5 class="card-title font-weight-bold">' + item.title + '</h5>' +
                    '<p class="card-text text-muted">' + item['sub-title'] + '</p>' +
                    '<div class="creator d-flex align-items-center">' +
                    '<img src=' + item.author_pic_url + ' alt="Creator of Video ' + (index + 1) + '" width="30px" class="rounded-circle"/>' +
                    '<h6 class="pl-3 m-0 main-color">' + item['author'] + '</h6>' +
                    '</div>' +
                    '<div class="info pt-3 d-flex justify-content-between">' +
                    '<div class="rating">' + stars + '</div>' +
                    '<span class="main-color">' + item.duration + '</span>'+
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                    $('.lvCarousel').append(lvCard);
                });

                $('.lvCarousel .col-lg-3').slice(0, 4).clone().appendTo('.lvCarousel');

                $('.lvCarousel .col-lg-3').slice(0, 4).remove();

                $('.lvCarousel').append($('.lvCarousel .col-lg-3').slice(0, 4).clone());

                $('.lvCarousel').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    centerMode: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ] 
                });

            }
        },

        error: function(xhr, status, error) {
            console.error(xhr);
            console.error(status + ': ' + error);
            $('.loader').hide();
        }
    });
});
