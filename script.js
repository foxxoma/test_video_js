var lat;
var lng;
let aC;
let rad;
var cornerAz;
const descriptionTextrea = document.getElementById('description_textrea');
const descriptionNameMountain = document.getElementById('description_name_mountain');
const nameMountain = document.getElementById('name_mountain');
const name = document.getElementById('name');
const description = document.getElementById("description");
const descriptionMenu = document.getElementById("description_menu");


navigator.geolocation.getCurrentPosition(function(position) {

        // Текущие координаты.
        lat = position.coords.latitude;
       lng = position.coords.longitude;
       

});

var video = document.getElementById('video');
var front = false;
// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	var myConstraints = {  video: { facingMode: (front? "user" : "environment")} }; 
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia(myConstraints).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}




if ('ondeviceorientationabsolute' in window) { 
		
			window.ondeviceorientationabsolute = function(event) {
				rad = event.alpha;
				cornerAz = 360 - event.alpha;
			};
		
		} 

		else if ('ondeviceorientation' in window) { 
			
			window.ondeviceorientationabsolute = function(event) {

       			rad = event.alpha;
       			cornerAz = 360 - event.alpha;

			};
		
		}

		else{
				alert("error");
		}

let  MyM, f;


MyM = [[42.9034,43.97759,"m1","m1-dfdggfgfgfgfgfg"],
[42.9391,44.59806,"m2","m2-dfdggfgfgfgfgfg"]];



setInterval(function() {
	for ( f = 0; f < MyM.length; f++){
	checkNavigation(MyM[f][1], MyM[f][0], lat, lng, cornerAz);
}
}, 20);
    


function checkNavigation(xM, yM, y, x, az){
	let corner1, corner2;
	let a, b, c;
	b = x;
	c = 90 - y;
	a = Math.sqrt( Math.pow(b,2) + Math.pow(c,2) );
	corner1 = Math.acos( (Math.pow(a,2) + Math.pow(c,2) - Math.pow(b,2)) / (2*a*c)) *(180/Math.PI);
	
let aM, bM, cM;


let s;

	
if (yM > y && xM > x){


aM = yM - y;
bM = xM - x;
cM = Math.sqrt( Math.pow(bM,2) + Math.pow(aM,2) );
corner2 = Math.acos( (Math.pow(aM,2) + Math.pow(cM,2) - Math.pow(bM,2)) / (2*aM*cM)) *(180/Math.PI);

 s = corner1 + corner2;

}

else if (yM < y && xM > x){


bM = y - yM;
aM = xM - x;
cM = Math.sqrt( Math.pow(bM,2) + Math.pow(aM,2) );
corner2 = Math.acos( (Math.pow(aM,2) + Math.pow(cM,2) - Math.pow(bM,2)) / (2*aM*cM)) *(180/Math.PI);

 s = corner1 + 90 + corner2;

}

else if (yM < y && xM < x){


aM = y - yM;
bM = x - xM;
cM = Math.sqrt( Math.pow(bM,2) + Math.pow(aM,2) );
corner2 = Math.acos( (Math.pow(aM,2) + Math.pow(cM,2) - Math.pow(bM,2)) / (2*aM*cM)) *(180/Math.PI);

 s = corner1 + 90 + 90 + corner2;

}

else if (yM > y && xM < x){


bM = yM - y;
aM = x - xM;
cM = Math.sqrt( Math.pow(bM,2) + Math.pow(aM,2) );
corner2 = Math.acos( (Math.pow(aM,2) + Math.pow(cM,2) - Math.pow(bM,2)) / (2*aM*cM)) *(180/Math.PI);

 s = corner1 + 90 + 90 + 90 + corner2;

if(s > 360) 
{
	s = s - 360;
}


}


 
if(window.orientation  == 90 || window.orientation == -90){
 	az = az + 90;
 		if (az > 360) {
 			az = az - 360;
 		}
 }

s = s.toFixed(0);
az = az.toFixed(0);



if(Math.abs(az - s) < 10 ){
descriptionNameMountain.textContent = MyM[f][2];
descriptionTextrea.textContent = MyM[f][3];
nameMountain.textContent = MyM[f][2];

}
/*else {
	descriptionH.textContent = "*****";
	descriptionText.textContent = "*****";
	nameMo.textContent = "*****";
}
*/




}




































let Mchek = 0;


descriptionMenu.addEventListener('click', function(e){
if (Mchek == 0){
description.style.display = "table"; Mchek = 1;
}
else {
 description.style.display = "none"; Mchek = 0;
}
 });


if(window.orientation  == 90 || window.orientation == -90){
name.style.height = "30%";
name.style.top = "-15%";
}