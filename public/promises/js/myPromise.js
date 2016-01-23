/**
 * Created by jefferson.wu on 1/22/16.
 */

var myPromise = function(){
    return new Promise(function(resolve, reject){
        var something = Math.ceil(Math.random() * 20);

        if(something <= 10) {
            resolve('Your number '+ something + ' is below 10!');
        }
        else {
            reject(Error('Eh-R0r! Your number ' + something + ' is over 11!'));
        }
    });
};


// GET DATA FUNCTION
function getData(url) {
    return new Promise(function(resolve, reject) {

        //new XHR object
        var xhr = new XMLHttpRequest();

        //open
        xhr.open('GET', url);

        //same as readyStateChange
        xhr.onload = function() {
            if(xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(Error(xhr.statusText));
            }
        };

        //handle network errors
        xhr.onerror = function() {
            reject(Error("Network error"));
        };

        //fire the lasers!
        xhr.send();
    });
}

