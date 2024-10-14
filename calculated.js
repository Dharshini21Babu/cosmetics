function solve(val){
    var pro=document.getElementById("res");
    pro.value+=val;
}
function Clear(){
    var clr=document.getElementById("res");
    clr.value='';
}
function Back(){
	var bac=document.getElementById("res");
	bac.value=bac.value.slice(0,-1);
}
function Result(){
	var a = document.getElementById("res").value;
	try{
		var b =eval(a);
		document.getElementById("res").value = b;
	}
	catch(error){
		alert("invalid expression");
		Clear();
	}
}