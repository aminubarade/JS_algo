//first function
function sumarr(arr) {
	var sum =0;
	for(var i=0;i<arr.length;++i){
		sum += arr[i];
	}
	return sum;
}
//second function
function sumarrw(arr) {
	var i;
	var sum =0;
	while(i < arr.legth){
		sum += arr[i];
		i++;
	}
	
	return sum;
}

//third function
function sumRecur(arr) {
	if(arr.length == 1){
		return arr[0];
	}
	else{
		sum = arr.shift() + sumRecur(arr);
		return sum;
	}
}