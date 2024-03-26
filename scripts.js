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
                    // const quoteCarousel = '<div id="quoteCarouselItem_' + index + '" class="row mx-auto align-items-center"><div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center"><img class="d-block align-self-center" src="' + item.pic_url + '" alt="Carousel Pic ' + (index + 1) + '"></div><div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0"><div class="quote-text"><p class="text-white">' + item.text + '</p><h4 class="text-white font-weight-bold">' + item.name + '</h4><span class="text-white">' + item.title + '</span></div></div></div>';
                    // $('.qCarousel').append(quoteCarousel);
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
                    // variableWidth: false
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
