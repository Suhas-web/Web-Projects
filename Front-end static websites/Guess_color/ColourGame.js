var num=6;
var colors=[];
var colorPicked;
var squares=document.querySelectorAll(".square");
var rgbValue=document.querySelector("#span1");
var message = document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var buttonModes=document.querySelectorAll(".mode");

init();//load the page

function init(){

setupButtonListeners();//check if easy or hard button is clicked
setupSquareListeners();//if aquares are clicked
resetfn(num);// if nothing is clicked to load all

}

function setupButtonListeners(){
	for(var i=0;i<buttonModes.length;i++){
	buttonModes[i].addEventListener("click", function(){
		document.querySelector("#message").textContent=" ";
		buttonModes[0].classList.remove("selected");
		buttonModes[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy"?num=3:num=6;
		h1.style.backgroundColor="steelblue";
		resetfn(num);
	});
}	
}

function setupSquareListeners(){
	for(var i=0;i<squares.length;i++){
	//assigning colors to squares 
	squares[i].style.backgroundColor=colors[i];
	//checking if clicked square is equal to colorPicked
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor===colorPicked){
			message.textContent="Correct!";
			allColors();
			h1.style.backgroundColor = colorPicked;
			reset.textContent="Play Again";
		}
		else{
			message.textContent="Try again!";
			this.style.backgroundColor="#232323";
		}
	});
}
}

function resetfn(num){
	colors=generateRandomColors(num);
	//pick a new random color from array
	colorPicked=randomColorPicker(num);
	rgbValue.textContent=colorPicked;
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];	
		}
		else
		{
			squares[i].style.display="none";
		}
	}
}

reset.addEventListener("click", function(){
	reset.textContent="NEW COLOR";
	resetfn(num);
	h1.style.backgroundColor="steelblue";
	message.textContent=" ";
});

function allColors(){
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=colorPicked;
	}
}

function randomColorPicker(x){
	return colors[Math.floor(Math.random()*(x-1))];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for (var i =0;i<num; i++) {
		arr.push(randomRGB());
	}
	//return that array
	return arr;

}

function randomRGB(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}