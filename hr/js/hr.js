slideIndex=0;
slides= ["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8","slide9","slide10","slide11","slide12","slide13","slide14",
"slide15","slide16","slide17","slide18","slide19","slide20","slide21","slide22","slide23","slide24","slide25","slide26","slide27","slide28","slide29","slide30","slide31","slide32",
"slide33","slide34","slide35","slide36","slide37","slide38","slide39","slide40","slide41","slide42","slide43","slide44","slide45","slide46","slide47","slide48","slide49"];

///when user click next button
function next(){
    if(slideIndex < slides.length-1){
            document.getElementById(slides[slideIndex]).classList.remove("showSlide");          
            slideIndex++;
            document.getElementById(slides[slideIndex]).classList.add("showSlide");
            console.log("in next slideIndex in next:",slideIndex);
           
           
    }
    else{
        console.log("last slide reached");
        alert("END of all Slides");
    }
}
function prev(){
    if(slideIndex > 0 ){
        document.getElementById(slides[slideIndex]).classList.remove("showSlide");        
        slideIndex--;
        document.getElementById(slides[slideIndex]).classList.add("showSlide");
        console.log("in prev slideIndex in prev:",slideIndex);
       
       
    }
    else{
        alert("This is the first slide");
        console.log("first slide reached");
    }
}