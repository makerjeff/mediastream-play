/**
 * Created by jefferson.wu on 1/28/16.
 * Wrapping getUserMedia into a module.
 */

/**
 * Initialize the Camera
 */
function initializeCamera() {

    // set div width and height
    var width = 1280;
    var height = 0;

    // init variables (should really be in the global scope...)
    var streaming = false;
    var video = null;
    var tiny_video = null;
    var canvas = null;
    var photo = null;
    var startbutton = null;

    // define variables
    video = document.getElementById('video');
    tiny_video = document.getElementById('tiny_video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo_01');
    startbutton = document.getElementById('startbutton');

    //get media stream
    navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia );


    navigator.getMedia({video: true, audio: false}, function(stream){
        if(navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
            tiny_video.mozSrcObject = stream;
        } else {
            var vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(stream);

            tiny_video.src = window.URL.createObjectURL(stream);
        }

        video.play();

    }, function(error){
        console.log('an error occured' + error );
    });
}