/* BITFLIPPER
 * A binary art-type experiment
 * in Javascript / jQuery
 */

//arrays to store the bits
var bits = new Array();
var antibits = new Array();

//on load
$(document).ready(function() {
	//create the bits, store to arrays
	for (var i = 8; i > 0; i--) {
		var bit = document.createElement('div');
		$(bit).addClass('bit');
		bits.push(bit);
		antibits.push(bit);
		$('.binarybox').append(bit);
	}
	//reverse the bits to work properly
	bits.reverse();

	$('button').on('click', reset);
	//start timer to flip bits every second
	var maintimer = window.setInterval(run,1000);
});

//wrapper function to check pause state before flipping
function run() {
	if (!document.querySelector('#pbutton').checked)
		flip(0);
}

//recursive method to flip bits 
function flip(bit) {
	var dis = bits[bit];
	var dat = antibits[bit];
	//strictly speaking only need to check one but safety
	if ($(dis).hasClass('flipped') && $(dat).hasClass('antiflip')){
		if (bits[bit+1] && antibits[bit+1]);
			flip(bit+1);
		$(dis).removeClass('flipped');
		$(dat).removeClass('antiflip');
	}
	else {
		$(dis).addClass('flipped');
		$(dat).addClass('antiflip');
	}
}

//unflips all items; used for restart button
function reset() {
	for (var i = 0; i < bits.length; i++) {
		$(bits[i]).removeClass('flipped');
		$(antibits[i]).removeClass('antiflip');
	}
}