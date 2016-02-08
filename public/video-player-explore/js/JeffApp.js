/**
 * Created by jeffersonwu on 2/7/16.
 *
 * Jeff Applications module v0.0.1
 */

//==== JeffApps' namespaced functions ====
var JeffApp = {
    //this == JeffApp;
    id: 0,
    /**
     * Adds the value to 'id'
     * @param value Amount to add.
     */
    add_value: function(value){
        this.id = this.id + value;
        return console.log(this.id);
    },


    /**
     * Subtracts the value to 'id'
     * @param value Amount to Subtract.
     */
    sub_value: function(value){
        this.id = this.id - value;
        return console.log(this.id);
    },

    /**
     * Creates a random number based on the 'max' amount.
     * @param max Maximum number in random.
     */
    randomize: function(max) {
        this.value = Math.ceil(Math.random() * max);
        return console.log(this.value);
    }
};

/**
 * Creates a random number based on the 'max' amount.
 * @param max Maximum number in random.
 */
JeffApp.randomize2 = function(max) {
    this.value2 = Math.ceil(Math.random() * max);
    return console.log(this.value2);
}

JeffApp.adjustVideo = function(target){
    var div = document.getElementById(target);
    div.width = window.innerWidth;
};