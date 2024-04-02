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

//Courses


    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function dropdownItems(items, dropId, click) {
        let dropdownMenu = $('#' + dropId);
        dropdownMenu.empty();
        items.forEach(function(item) {
            let itemText = item.replace('_', ' ');
            itemText = capFirst(itemText);
            let dropdownItem = $('<a class="dropdown-item" href="#" data-value="' + itemText + '">' + itemText + '</a>');

            dropdownItem.click(function() {
                click(itemText)
            });

            dropdownMenu.append(dropdownItem);
        });
    }

    function dropTopicGenerate(dropId) {
        let dropdownMenu = $('#' + dropId);
        let firstText = dropdownMenu.find('.dropdown-item').first().text();
        $('#topicDropdown').append('<span id="topicSpan">' + firstText + '</span>');
    }

    function dropSortGenerate(dropId) {
        let dropdownMenu = $('#' + dropId);
        let firstText = dropdownMenu.find('.dropdown-item').first().text();
        $('#sortDropdown').append('<span id="sortSpan">' + firstText + '</span>');
    }

    let filtered = [];

    function dropTopicClick(itemText, videos) {
        $('#topicDropdown span').text(itemText);
        filterVideos();
    }

    function dropSortClick(itemText, videos) {
        $('#sortDropdown span').text(itemText);
        filterVideos();
    }

    $('.search-text-area').on('keypress', function(event) {
        if (event.which === 13 || event.keyCode === 13) {
            filterVideos();
        }
    });

    function filterKey(videos, keywords) {
        if (!keywords) {
            return videos;
        } else {
            return videos.filter(function(video) {
                if (Array.isArray(video.keywords)) {
                    return video.keywords.join(' ').toLowerCase().includes(keywords.toLowerCase());
                }
                return false;
            });
        }
    }

    function filterVideos() {
        let searchValue = $('.search-text-area').val().toLowerCase();
        let topicValue = $('#topicDropdown span').text().toLowerCase();
        let sortValue = $('#sortDropdown span').text().toLowerCase();
    
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/courses',
            method: 'GET',
            dataType: 'json',
            data: {
                q: searchValue,
                topic: topicValue,
                sort: sortValue
            },
            success: function(data) {
                $('.loader').show();
                $('.courseImage').hide();

                setTimeout(function() {
                    $('.loader').hide();
                    $('.courseImage').show();

                    videos = [];
                    $.each(data.courses, function(index, item) {
                        videos.push({
                            video: item,
                            views: item.views,
                            published_at: new Date(item.published_at),
                            topic: item.topic,
                            keywords: item.keywords
                        });
                    });
                    showVideos(videos);
                }, 2000);
            },
            error: function(xhr, status, error) {
                console.error(xhr);
                console.error(status + ': ' + error);
            }
        });
    }

    function showVideos(videos) {
        $('.courseImage').empty();
        let keywords = $('.search-text-area').val().toLowerCase();
        let filteredVideos = filterKey(videos, keywords);
        $.each(filteredVideos, function(index, obj) {
            let item = obj.video;
            let stars = '';
            for (let i = 0; i < item.star; i++) {
                stars += '<img src="images/star_on.png" alt="star on" width="15px"/>';
            }
            for (let i = item.star; i < 5; i++) {
                stars += '<img src="images/star_off.png" alt="star off" width="15px"/>';
            }

            let courseCard = '<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">' +
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
            $('.courseImage').append(courseCard);
        });

        if (filteredVideos.length !== 1) {
            $('.video-count').text(filteredVideos.length + ' videos');
        } else {
            $('.video-count').text(filteredVideos.length + ' video');
        }
    }

    let videos = [];

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/courses',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data && data.topics && data.sorts) {
                dropdownItems(data.topics, 'topicDropdownMenu', function(itemText) {
                    dropTopicClick(itemText, videos);
                });
                dropdownItems(data.sorts, 'sortDropdownMenu', function(itemText) {
                    dropSortClick(itemText, videos);
                });

                dropTopicGenerate('topicDropdownMenu');
                dropSortGenerate('sortDropdownMenu');
            }

            $('.search-text-area').val(data.q);

            videos = [];
            $.each(data.courses, function(index, item) {
                videos.push({
                    video: item,
                    views: item.views,
                    published_at: new Date(item.published_at),
                    topic: item.topic,
                    keywords: item.keywords
                });
            });
            showVideos(videos);
        },

        error: function(xhr, status, error) {
            console.error(xhr);
            console.error(status + ': ' + error);
        }
    });
});