var x, y, top, left, down;

$(".dragnscroll").mousedown(function(e) {
    e.preventDefault();
    down = true;
    x = e.pageX;
    y = e.pageY;
    top = $(this).scrollTop();
    left = $(this).scrollLeft();
});

$("body").mousemove(function(e) {
    if (down) {
        var newX = e.pageX;
        var newY = e.pageY;

        //console.log(y+", "+newY+", "+top+", "+(top+(newY-y)));

        $(".dragnscroll").scrollTop(top - newY + y);
        $(".dragnscroll").scrollLeft(left - newX + x);
    }
});

$("body").mouseup(function(e) { down = false; });