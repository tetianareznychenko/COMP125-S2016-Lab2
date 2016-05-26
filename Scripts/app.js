/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    var paragraphOne = document.getElementById("paragraphOne");
    var paragraphTwo = document.getElementById("paragraphTwo");
    var paragraphThree = document.getElementById("paragraphThree");
    
    //define paragraphs array
    var paragraphs = [];
    
    //data for my pages
    paragraphs[0] = "This is my 1 paragraph. It is only visiable on 1 page";
    paragraphs[1] = "This is my 2 paragraph. It is only visiable on 2 page";
    paragraphs[2] = "This is my 3 paragraph. It is only visiable on 3 page";
    
    // check to see if paragraph one exists
    if (paragraphOne){
        paragraphOne.textContent = paragraphs[0];

    }
    
    if (paragraphTwo){
        paragraphTwo.textContent = paragraphs[1];

    }
    
    if (paragraphThree){
        paragraphThree.textContent = paragraphs[2];

    }

    
    
})();