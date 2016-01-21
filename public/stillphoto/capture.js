/**
 * Created by jefferson.wu on 1/20/16.
 * Copied from mdn/samples-server/s/webrtc-capturestill/
 */


// ===== GLOBAL VARIABLES =====

var width = 320;    //scale the photo to this
var height = 0;     //computed based on input stream

//are we streaming? chances are 'no' before we've started
var streaming = false;

//basic elements, set by startup() function later
var video = null;
var canvas = null;
var photo = null;
var startbutton = null;

//instead of a self-running function like in the example, we'll use DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(event){
    console.log(event);
    console.log(event.timeStamp);

    //RUN!
    startup();
});//END -- DOMContentLoaded



// ==== HELPER FUNCTIONS ====

/**
 * Startup Function Definition, ran at startup.
 */
function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    //grab and wrap proper navigator.getUserMedia
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    //ask for video permission
    navigator.getMedia({video:true, audio:false}, function(stream) {

        //for MOZILLA FIREFOX
        if(navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
        }
        //for WEBKIT
        else {
            var vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(stream);
        }
        //play the video (no need to set autoplay in html)
        video.play();

    }, function(err){
        console.log('An error occurred: ' + err);
    });

    video.addEventListener('canplay', function(event){
        if(!streaming) {
            height = video.videoHeight / (video.videoWidth/width);

            //work around firefox bug
            if(isNaN(height)) {
                height = width / (4/3);
            }

            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    startbutton.addEventListener('click', function(event){
        takepicture();
        event.preventDefault();
    }, false);
}

// = CLEAR PHOTO =
function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0,0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
}

// = TAKE PHOTO =
function takepicture() {
    var context = canvas.getContext('2d');

    if(width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0,width, height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }
    else {
        clearphoto();
    }

}


