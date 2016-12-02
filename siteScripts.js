$( init );
function init() {

 // Hide the form initially.  
 // Position the form so it sits in the center of the browser window. 

$('#contactForm').hide().submit( submitForm ).addClass( 'positioned' );
 // When the "Send us an email" link is clicked: 
   //Fade the content out using fadeTo 
   //Display 
   // Move focus to the first field 
   // Prevent the link being followed

 $('a[href="#contactForm"]').click( function() {   
   $('#content').fadeTo( 'slow', .2 );   
   $('#contactForm').fadeIn( 'slow', function() {     
      $('#senderName').focus();   
 } )
   return false; 
 });
 // When the "Cancel" button is clicked, close the form 

$('#cancel').click( function() {    
$('#contactForm').fadeOut();   
$('#content').fadeTo( 'slow', 1 );  } );  

$('#contactForm').keydown( function( event ) {   
    if ( event.which == 27 ) {     
        $('#contactForm').fadeOut();     
        $('#content').fadeTo( 'slow', 1 );   
    } 
} );
//submit the form
function submitForm()
    {  var contactForm = $(this);
  if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() )
    {
     $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut(); contactForm.fadeOut().delay(messageDelay).fadeIn();

     }
     else {
    $('#sendingMessage').fadeIn();   
    contactForm.fadeOut();

    $.ajax( { 
       url: contactForm.attr( 'action' ) + "?ajax=true",     
       type: contactForm.attr( 'method' ),     
       data: contactForm.serialize(),     
       success: submitFinished   
    } );  }
  return false;
  }
function submitFinished( response ) { 
   response = $.trim( response );

 $('#sendingMessage').fadeOut();
  if ( response == "success" )
    {

    $('#successMessage').fadeIn().delay(messageDelay).fadeOut();   
    $('#senderName').val( "" );   
    $('#senderEmail').val( "" );   
    $('#message').val( "" );

    $('#content').delay(messageDelay+500).fadeTo( 'slow', 1 );
     }
     
     else
     {
    $('#failureMessage').fadeIn().delay(messageDelay).fadeOut();   
    $('#contactForm').delay(messageDelay+500).fadeIn(); 
   
  }
}
//fade content in and out when clicked
/*function FadeInAndOut()
{
	
	$("h2").on("click",(
		function()
	    {
		if ($(this).next("div").hasClass("isClicked"))
		{
		$(this).next("div").removeClass("isClicked");
		$(this).next("div").fadeOut(500);
		
	    }
	    else
            {
		$(this).next("div").addClass("isClicked");
		$(this).next().slideDown(1000);
		$(this).animate({fontSize:"175%"},
                                {duration: 1000,step: function (currentVal)
        {
            var intVal = Math.round(currentVal);
            var color = "rgb(" + intVal + ",0, 0)";
            $(this).css("color", color);
		
	}
       }
                
            );
                }
            }))}*/
$("div .content").hide();
$("#faqs h2").on("click",(
		function()
	    {
		if ($(this).next("div").hasClass("isClicked"))
		{
		$(this).next("div").removeClass("isClicked");
		$(this).next("div").slideUp(1000);
		
	    }
	    else{
		$(this).next("div").addClass("isClicked");
		$(this).next().slideDown(1000);
		
	    }}));
//ending init() bracket
}


