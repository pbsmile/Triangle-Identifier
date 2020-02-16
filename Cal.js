
function first() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext){
		var context = canvas.getContext('2d');
    	context.clearRect(0, 0, canvas.width, canvas.height);
  		context.fillStyle = "#FFFFFF";
  		context.fillRect(0, 0, canvas.width, canvas.height);
  		let height = 200 * Math.cos(Math.PI / 6);

  		context.beginPath();
  		context.moveTo(75, 230);
  		context.lineTo(275, 230);
  		context.lineTo(175, 230 - height);
  		context.closePath();
		// the fill color
  		context.fillStyle = "#FF0004";
  		context.fill();
	}
}
function reload(){
	location.reload();
}
function draw() {
	var canvas = document.getElementById('canvas');
	var A = document.getElementById("numberA").value;
	var B = document.getElementById("numberB").value;
	var C= document.getElementById("numberC").value;
	if (A===""||B===""||C===""||A.toString().indexOf('.') != -1
		||B.toString().indexOf('.') != -1
		||C.toString().indexOf('.') != -1){swal("!ERROR!", "Input Fail! Please fill 3 sides completely.", "error");}
	else{
		A = parseInt(A,10);
		B = parseInt(B,10);
		C = parseInt(C,10);
		if(A<=0||B<=0||C<=0||A>99||B>99||C>99){swal("!ERROR!", "Input Fail! The side can be 0 - 99.", "error");}
		else{
			document.getElementById("typeTri").innerHTML = isType(A,B,C);
			if (canvas.getContext){
				var context = canvas.getContext('2d');
    			context.clearRect(0, 0, canvas.width, canvas.height);
  				context.fillStyle = "#FFFFFF";
  				context.fillRect(0, 0, canvas.width, canvas.height);
				let scale = 100/Math.pow(A+B+C,0.6);
				A = (A*scale);
				B = (B*scale);
				C = (C*scale);
				let s = (A+B+C)/2;
				let h = 2/C * Math.sqrt(s*(s-A)*(s-B)*(s-C));
				let x = Math.sqrt(Math.pow(A,2) - Math.pow((h),2));
  				context.beginPath();
				context.moveTo(175-C/2,150+h/2);
  				context.lineTo(175+C/2,150+h/2);
  				context.lineTo((175-C/2)+x,150-h/2);
				context.closePath();
				// the fill color
  				context.fillStyle = "#FF0004";
				context.fill();
			}	
		}
		
	}
}
function isType(A,B,C){
	if(A+B>C&&B+C>A&&A+C>B){
		if(A==B && B==C && A==C){
			return "Equilateral Triangle"
		}
		else if((A==B && B!=C)||(B==C && A!=C)||(A==C && B!=A)){
			return "Isosceles Triangle"
		}
		else if((A*A) == (B*B)+(C*C)||(B*B) == (A*A)+(C*C)||(C*C) == (B*B)+(A*A)){
			return "Right Triangle"
		}
		else{
			return "Scalene Triangle"
		}
	}
	else{
		return "Not Triangle!"
	}
}


function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
// JavaScript Document