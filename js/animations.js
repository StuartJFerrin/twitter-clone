$(document).ready(function () {
    $('textarea').on('click', function () {
        $('#tweet-controls').removeClass('hidden');
        $('.tweet-compose').css({ 'height': '5em' })
    });
    var charCount = $('#char-count');
    var tweetCompose = $('.tweet-compose');
    var maxChar = 140;
    var tText;

    function counter() {
        tText = tweetCompose.val();
        if (tText.length < maxChar) {
            charCount.html(maxChar - tText.length);
        } else {
            charCount.html(0);
            tweetCompose.val(tText.substring(0, maxChar));
        }
        if ((charCount.html()) <= 10) {
            $('#char-count').css({ 'color': 'red' });
        } else {
            $('#char-count').css({ 'color': 'black' });
        }
    };

    $('.tweet-compose').on('keydown', function () {
        counter();
    })
    $('.tweet-compose').on('keyup', function () {
        counter();
    })
    $('.tweet-compose').on('keypress', function () {
        counter();
    })

    if ((charCount.html()) <= 10) {
        $('#char-count').css({ 'color': 'red' });
    }
    function initialTweet() {
        $('tweet-compose').text('');
    }
    function toggleTweet() {
        $('.tweet').on('click', function () {
            $(this).find('.stats, .reply').slideDown();
            $('.tweet').on('dblclick', function () {
                $(this).find('.stats, .reply').slideUp();
            })
        });
    }

    var submitIt = function () {
        $('#tweet-submit').on('click', function (e) {
            //stores what the user wrote
            var newTweet = $('#tweet-content .tweet-compose').val();
            //copies first tweet
            $('.tweet:first').clone().prependTo('#stream');
            //copies the profile pic over
            $('.avatar:eq(1)').attr('src', 'http://coppermind.net/w/images/Iron.svg');
            //copies name over
            $('.fullname:first').text('Elend Venture');
            $('.username:first').text('@TheLastEmperor');
            //copies text over
            $('.tweet-text:first').text(newTweet);
            $('.reply .tweet-compose:first').attr("placeholder", "reply to @TheLastEmperor");
            //resets to original input
            initialTweet();
            e.preventDefault();
            $('#tweet-content .tweet-compose').val('');
            $('#char-count').text('140');
            //enables tweet info reveal
            toggleTweet();
        });
    };
    submitIt();
    $('.tweet').hover(function () {
        $(this).find('.tweet-actions').css('display', 'block');
    }, function () {
        $(this).find('.tweet-actions').css('display', 'none');
    });
    $('.tweet').on('click', function () {
        $(this).find('.stats, .reply').slideDown();
    });
    $('.tweet').on('dblclick', function () {
        $(this).find('.stats, .reply').slideUp();
    });
});