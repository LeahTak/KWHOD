 window.addEventListener('DOMContentLoaded', function(e){
 	e.preventDefault();
 	attachEvents();



		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			console.log(scrollPos);




 });
});


  	function attachEvents(){

  		$('.sideNav a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	     });

  	}




	var mySideNav = document.getElementById("mySideNav");


function openNav(){
	mySideNav.style.width="15vw";
	
	

}

function closeNav(){
	mySideNav.style.width="0";
	

}

document.addEventListener('DOMContentLoaded', function(){ //since we don't have anything to triger the action of pushing all the links
														  //inside the HTML, we need to use this statement
														  //the meaning of this statement is when the you load the DOM, load as well the 
														  //function that contains all the information inside...



function addLinks(parent){ //here I'm using an argument for my function
							// so I can astore all the information without repeating it
	parent.innerHTML += "<a href = '#home'>HOME</a>"; 
	parent.innerHTML += "<a href = '#desire'>DESIRE</a>";
	parent.innerHTML += "<a href = '#humility'>HUMILITY</a>";
	parent.innerHTML += "<a href = '#knowledge'>KNOWLEDGE</a>";
	parent.innerHTML += "<a href = '#perspective'>PERSPECTIVE</a>";
	parent.innerHTML += "<a href = '#integrity'>INTEGRITY</a>";
	parent.innerHTML += "<a href = '#truth'>TRUTH</a>";




	
}

	
	var sideNav = document.getElementById("mySideNav");
	addLinks(sideNav);  
});

// function preload() {
//   soundFormats('wav');
//   mySound = loadSound('tracks/1_Desire.wav');
// }

// function setup() {
//   mySound.setVolume(0.1);
//   mySound.play();
// }







