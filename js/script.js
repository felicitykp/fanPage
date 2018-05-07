
var numOfPhotos = 11;
var currentPic = 0;


function hidePhotos() {

	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";

	}
}

function doRightClick() {
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";

	currentPic = currentPic - 1;

	if (currentPic <= 0) {
		currentPic = 10;
	}

	photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";


}

function doLeftClick() {
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display= "none";

	currentPic++;

	if (currentPic >= numOfPhotos) {
		currentPic=0;
	}

	photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";
}


hidePhotos();

