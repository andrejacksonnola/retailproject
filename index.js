
/* effect to make image change on hover start */
$('#rings-link').on('mouseenter', function () {
    $('#ring-image').attr('src', '/images/ring2.jpg');
    hoverText(true, '#ring-category');
});

$('#rings-link').on('mouseleave', function () {
    $('#ring-image').attr('src', '/images/rings.jpg');
    hoverText(false, '#ring-category');
});

$('#chains-link').on('mouseenter', function () {
    $('#chain-image').attr('src', '/images/chain3.jpg');
    hoverText(true, '#chain-category');
});

$('#chains-link').on('mouseleave', function () {
    $('#chain-image').attr('src', '/images/chains.jpg');
    hoverText(false, '#chain-category');
});
/* effect to make image change end */

/* function to make hover text appear and disappear */
function hoverText(isHovered, idName) {
    if (isHovered === true) {
        $(idName).css('opacity', '1');
    } else {
        $(idName).css('opacity', '0');
    }
}
