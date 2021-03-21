$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $("#show-more").on('click', function (event) {
        $("#story").toggleClass("show", 10000);


        if ($("#story").hasClass('show')) {
            console.log("ssss")
            $("#show-more").html('show less' + '<svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7.41">\n' +
                '  <path id="Path_1" data-name="Path 1" d="M7.41,16,12,11.42,16.59,16,18,14.59l-6-6-6,6Z" transform="translate(-6 -8.59)"/>\n' +
                '</svg>\n');
        } else {
            $("#show-more").html('full story' + '<svg class="down-arrow" xmlns="http://www.w3.org/2000/svg"\n' +
                '                     viewBox="0 0 12 7.41">\n' +
                '                    <path id="Path_1" data-name="Path 1" d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"\n' +
                '                          transform="translate(-6 -8.59)"/>\n' +
                '                </svg>');
        }

    })
    $("#menu-btn").on('click', function (event) {
        $("#nav-items").toggle(300);
    })


});