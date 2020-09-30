var p1=document.querySelector("#btn1");
var p2=document.querySelector("#btn2");
var reset=document.querySelector("#btn3");
var span1=document.querySelector("#span1");
var span2=document.querySelector("#span2");
var input=document.querySelector("input");
var p1score=0;
var p2score=0;
var gameover = false;
var limit=5;


p1.addEventListener("click", function() {
if(!gameover){
	p1score++;
	span1.textContent=p1score;
if(p1score===limit){
	span1.classList.add("winner");
	gameover=true;
}
}
});

p2.addEventListener("click",function(){
	if(!gameover){
		p2score++;
		span2.textContent=p2score;
	if(p2score===limit){
		span2.classList.add("winner");
		gameover=true;
		}
	}
 });

reset.addEventListener("click", rst);

function rst(){
	p1score=0;
	p2score=0;
	gameover=false;
	span1.textContent=0;
	span2.textContent=0;
	span1.classList.remove("winner");
	span2.classList.remove("winner");
}

input.addEventListener("change", function(){
	limit=Number(input.value);
	document.querySelector("#span3").textContent=Number(input.value);
	rst();
	

});