/**
 * Created by jefferson.wu on 1/28/16.
 * Window adjustment functions. Adjusts divs dynamically based on window size.
 */


//===== FUNCTIONS ======

/**
 * Reports the window height to the console.
 */
function findWindowHeight(){
    var h = window.innerHeight;
    console.log(h);
}

/**
 * Adjusts the target div container to the window height.
 * @param {string} div The target div you want to adjust to the window height.
 */
function adjustContainerHeight(div){
    var targetDiv = document.getElementById(div) || document;
    targetDiv.style.height = window.innerHeight.toString() + 'px';
}
