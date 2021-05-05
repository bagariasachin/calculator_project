let myValues= [];

function hello() {
	let input = document.getElementById("first");

	myValues.push(input.value);
	console.log(myValues);

    let final = document.getElementById("result");
    final.innerHTML= myValues;

	
}

 function remove(){
       
      let final = document.getElementById("result");
      let input = document.getElementById("first"); 
      let remove = document.getElementById("remove");
      myValues.pop(input.value);
      console.log(myValues);
      final.innerHTML= myValues;


 }