
var numberOfDrumButton = document.querySelectorAll(".drum").length; //finding how many drum button are there i.e. 7 here

for (i=0; i< numberOfDrumButton; i++){//accessing all the drum key with for loop

//Detecting mouse press
document.querySelectorAll(".drum")[i].addEventListener("click", function (){ // .drum because it is a class. [i] because querySelectorAll will give a array as output

	var buttonInnerHTML = this.innerHTML; // here buttonInnerHTML will store the value "w" when i=0 and so on

	makeSound(buttonInnerHTML);// makeSound(w) in fiest case and this "w", key = w in makeSound function and will go to switch statement
	buttonAnimation(buttonInnerHTML);
	
});


}
//Detecting keyboard press
document.addEventListener("keydown", function(event){// keydown will detect the keyword press  
	// alert(event.key + " is pressed");  to show which keywrd is pressed
	makeSound(event.key);//event.key will tell exactly which keyword is pressed 
	buttonAnimation(event.key);
})


function makeSound(key){

	switch (key){
		case "w":
			var audio1 = new Audio('sounds/tom-1.mp3');
			audio1.play();
			break;
		case "a":
			var audio2 = new Audio('sounds/tom-2.mp3');
			audio2.play();
			break;
		case "s":
			var audio3 = new Audio('sounds/tom-3.mp3');
			audio3.play();
			break;
		case "d":
			var audio4 = new Audio('sounds/tom-4.mp3');
			audio4.play();
			break;
		case "j":
			var audio5 = new Audio('sounds/snare.mp3');
			audio5.play();
			break;
		case "k":
			var audio6 = new Audio('sounds/crash.mp3');
			audio6.play();
			break;
		case "l":
			var audio7 = new Audio('sounds/kick-bass.mp3');
			audio7.play();
			break;
			
		default : console.log(buttonInnerHTML);
	}

	}

	function buttonAnimation(currentkey){

		var activeButton = document.querySelector("." + currentkey);

		activeButton.classList.add("pressed");

		setTimeout(function(){
				activeButton.classList.remove("pressed");
		} , 100); // function is 1st parameter of setTimeout and 100 is 2nd parameter 1000milisecond = 1s so, here 100 is 0.1 sec.
	}
