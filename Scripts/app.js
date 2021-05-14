// IIFE -- Immidiately Invoked Function Expression
"use strict";
(function() {

    function Start()
    {
        let myVaraible = 20;
        console.log("my number is: " + myVaraible);
    }

    window.addEventListener("load",Start);
})();
