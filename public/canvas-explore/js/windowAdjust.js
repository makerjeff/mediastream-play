/**
 * Created by jefferson.wu on 1/28/16.
 * Window adjustment functions. Adjusts divs dynamically based on window size.
 */


//===== FUNCTIONS ======

//find window height
function findWindowHeight(){
    var h = window.innerHeight;
    console.log(h);
}

//adjust container height
function adjustContainerHeight(div){
    var targetDiv = document.getElementById(div);
    targetDiv.style.height = window.innerHeight.toString() + 'px';
}
