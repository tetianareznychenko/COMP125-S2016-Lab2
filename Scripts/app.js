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
    paragraphs[0] = "My contacts: tetiana.reznychenko@outlook.com";
    paragraphs[1] = "The largest project, in which I was envolved, was the replacement of the cement production technology at one of the Ukrainian plants. Also I am an author of few published articles about investitions and one detective novel";
    paragraphs[2] = "Hi, I am Tetiana. I am a student of Centennial College. My program is Software Engineering Technician. I am from Ukraine. I am 23 years old. Previously I studied at Kiev National Economic University. I have a Master degree in Economics and I worked in a transport company for few years as a Project manager.";

    
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