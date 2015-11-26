// Have something that keeps track of a turn
	// changeTurn


// Create a checkForWin function
	// You need to create a big if statement
	// You need to call that every time changeTurn is run

var xWins = 0;
var oWins = 0;
var drawGame = 0;



var checkForWin = function(){

	console.log( oWins )

//Across rows

if ( $("td").eq(0).hasClass("x") && $("td").eq(1).hasClass("x") && $("td").eq(2).hasClass("x") ) {
			alert( "X is the winner" );
			xWins += 1;

} else if ( $("td").eq(3).hasClass("x") && $("td").eq(4).hasClass("x") && $("td").eq(5).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;
} else if ( $("td").eq(6).hasClass("x") && $("td").eq(7).hasClass("x") && $("td").eq(8).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;

// Down columns

} else if ( $("td").eq(0).hasClass("x") && $("td").eq(3).hasClass("x") && $("td").eq(6).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;

} else if ( $("td").eq(1).hasClass("x") && $("td").eq(4).hasClass("x") && $("td").eq(7).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;

} else if ( $("td").eq(2).hasClass("x") && $("td").eq(5).hasClass("x") && $("td").eq(8).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;

// Diagonally 

} else if ( $("td").eq(0).hasClass("x") && $("td").eq(4).hasClass("x") && $("td").eq(8).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;

} else if ( $("td").eq(2).hasClass("x") && $("td").eq(4).hasClass("x") && $("td").eq(6).hasClass("x") ) {
  			alert( "X is the winner" );
  			xWins += 1;

} else if ( $("td").eq(0).hasClass("o") && $("td").eq(1).hasClass("o") && $("td").eq(2).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

} else if ( $("td").eq(3).hasClass("o") && $("td").eq(4).hasClass("o") && $("td").eq(5).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

} else if ( $("td").eq(6).hasClass("o") && $("td").eq(7).hasClass("o") && $("td").eq(8).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

// Down columns

} else if ( $("td").eq(0).hasClass("o") && $("td").eq(3).hasClass("o") && $("td").eq(6).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

} else if ( $("td").eq(1).hasClass("o") && $("td").eq(4).hasClass("o") && $("td").eq(7).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

} else if ( $("td").eq(2).hasClass("o") && $("td").eq(5).hasClass("o") && $("td").eq(8).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

  // Diagonally 

} else if ( $("td").eq(0).hasClass("o") && $("td").eq(4).hasClass("o") && $("td").eq(8).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

} else if ( $("td").eq(2).hasClass("o") && $("td").eq(4).hasClass("o") && $("td").eq(6).hasClass("o") ) {
  			alert( "O is the winner" );
  			oWins += 1;

} else {
	var $tds = $("td"); // Stores all of the tds (so we can loop through them)
	var count = 0; // This sets up a starting point

	$tds.each(function () { // We go through each td, and the current td is stored as this
		if ( $(this).hasClass("x") || $(this).hasClass("o") ) { // If the current td has the class of "x" or of "o"
	    	count++; // Add one to count, otherwise do nothing
		}
	});	

	if ( count === 9 ) { // After the loop, if the count is 9 - it means that every td has been clicked
		var drawGame = alert( "It's a draw!" ); // Which means it is a draw
		drawGame += 1;
	}
}

// 	if ( !oWins) {
// 	debugger;
// }

	$('.playerXBox p').text( xWins );
	$('.player0Box p').text( oWins );

};

var currentPlayer = "x";
var oTurn = "http://i1341.photobucket.com/albums/o744/Kiahrm/square2Otrans_zpso6xvbmmd.png";
var xTurn = "http://i1341.photobucket.com/albums/o744/Kiahrm/square1transX_zpssh5mwvqv.png";

var createImage = function () {
	var $img = $( "<img />" );

	// If the current Player is x
		// Change the source of this image to be xTurn
	// Otherwise
		// Change the source of this image to be oTurn

	if ( currentPlayer === "x" ) {
		$img.attr("src", xTurn);
	} else {
		$img.attr("src", oTurn);	
	}

	// $img.attr("src", xTurn);

	return $img;
}

var playTurn = function () {
	console.log( this );
	console.log( currentPlayer );

	$(this).html( createImage() );
	$(this).addClass( currentPlayer );

	changeTurn();
	checkForWin();

	// Whatever was clicked,
	// we want to change the text in that to the currentPlayer
	// Then we want to call changeTurn
}

var changeTurn = function () {
	if ( currentPlayer === "x" ) {
		currentPlayer = "o";
	} else {
		currentPlayer = "x";
	}
	console.log( "Current Player is: ", currentPlayer );
}

var reset = function () {
	console.log( "game restarted" )
   $('td').empty();
   $(".x,.o").removeClass("x").removeClass("o");
}


$("#reset").click( reset );
$("td").click( playTurn );



