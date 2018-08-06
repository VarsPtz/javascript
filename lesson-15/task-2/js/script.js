var widthdisplay = 10;
var heightdisplay = 10;


function squareDisplay(widthdisplay, heightdisplay) {
	return (widthdisplay * heightdisplay);
}


for (var i = 0; i < 10; i++) {
	console.log(squareDisplay(widthdisplay, heightdisplay));
	widthdisplay = (widthdisplay + 10);
}