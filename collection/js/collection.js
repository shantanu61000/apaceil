    //slide index represents the current slide -1
    slideIndex=0;

    const synth =  window.speechSynthesis;

    var speakText; 

    var inputForm = document.querySelector('form');
    var voiceSelect = document.querySelector('select');

    var pitch = document.querySelector('#pitch');
    var pitchValue = document.querySelector('.pitch-value');
    var rate = document.querySelector('#rate');
    var rateValue = document.querySelector('.rate-value');
    var settingsSec = document.querySelector('.settings');
    var playBtn = document.querySelector('.playBtn');
    var nextBtn = document.getElementById("next")
    var prevBtn = document.getElementById("prev");
    var submitBtn = document.getElementById("submitAns");
    var form = document.getElementById("form");
    var selectedAns;
    var settingsSecStatus = false;
    var auStatus = true;

    questionIndex = 0; 
    //array of slides div element with particular id
    slides= ["slide1","slide2","slide3","slide4","slide5","slide6"];

    //array of text of each slide that needs to be spoken
    slide1Text = ["Welcome to Collection Module. "];

    slide2Text =["The EIL portfolio  of APAC has to be managed effectively to ensure profitability and lower NPA.", 
                "For this it is very essential to have a strong collection infrastructure within APAC.",
                "This critical function ensures that overall delinquencies are low.",
                "To minimize delayed payment post due date (or bounce rate of PDC/ECS) leading to zero delinquent portfolio.",
                "To educate customer the benefit of prompt payment, impact on bureau scores and consequence of non-payment legal action.",
                "To ensure collection cost is under control with an effort to minimize cost to revenue.",
                "To provide inputs to credit policy based on collection experience, resulting in improved origination & portfolio quality.",
                "To arrange Inter domain meeting with sales, credit legal and other stake holder for developing our strategy", 
                "And to maintain such existing customers."];

    slide3Text=["Key Points for Zero Delinquency",
                "Flawless Sourcing",
                "Awareness calling to the clients before the EMI cycle date",
                "Be in constant touch with the clients to know their updates",
                "Constant followup in case of EMI bounce",
                "Client visit if the payment is delayed by more than 7 days"];

    slide4Text = ["Questionnaire"];
    
    
    slideAudioText=[slide1Text,
                    slide2Text,
                    slide3Text,
                    slide4Text];

    correctAns = ["d","f"];
    ///get voices 
       ///get voices 
       var allVoices = [];
       let selectedVoice; 
       function populateVoiceList() {
           allVoices = synth.getVoices();
           console.log(allVoices);
   
           for(i = 0; i < allVoices.length ; i++) {
               var option = document.createElement('option');
               option.textContent = allVoices[i].name + ' (' + allVoices[i].lang + ')';
               
               if(allVoices[i].name.search("UK") > 0 && allVoices[i].name.search("Female") > 0) {
                 option.textContent += ' -- DEFAULT';
                 selectedVoice = allVoices[i];
                 option.style.fontWeight="bolder";
               }
           
               option.setAttribute('data-lang', allVoices[i].lang);
               option.setAttribute('data-name', allVoices[i].name);
               voiceSelect.appendChild(option);
           }
       }
       
       populateVoiceList();
   
       if (speechSynthesis.onvoiceschanged !== undefined) {
           speechSynthesis.onvoiceschanged = populateVoiceList;
       }
   
   
       function saveSettings(){
           var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
           for(i = 0; i < allVoices.length ; i++) {
               if(allVoices[i].name === selectedOption) {
                 selectedVoice = allVoices[i];
                 console.log(selectedVoice);
               }
             }
             console.log(selectedVoice);
       }
       //main function that is being used to play thr audio    
       function speach(){
   
   
           for (i = 0; i < (slideAudioText[slideIndex]).length ; i++){            
               speakText =  new SpeechSynthesisUtterance(slideAudioText[slideIndex][i]);
               speakText.voice = selectedVoice;
               speakText.pitch = pitch.value;
               speakText.rate = rate.value;
               console.log(" inside speech functon ! the selected voice is ",selectedVoice,"pitch is: ",speakText.pitch,"rate is: ",speakText.rate); 
               console.log(speakText);
               playBtn.classList.remove("fa-play");
               playBtn.classList.add("fa-pause");
               synth.speak(speakText);
           }
          
           speakText.onend = e =>{          
               console.log("done speaking"); 
               playBtn.classList.remove("fa-pause");
   
           }
   
           
       }
   
           pitch.onchange = function() {
               console.log("pitch value changed : ",pitch.value);
               pitchValue.textContent = pitch.value;
           }
         
         rate.onchange = function() {
           console.log("rate value changed : ",rate.value);
           rateValue.textContent = rate.value;
         }
         
         form.addEventListener("submit", e => {
             e.preventDefault();
         })
   //to play for the first time when the page is loaded
   $(document).ready(function(){
       speach();
   });
   
   ///palay and pause function dpending on  the audio flag
   const playPause = () => {
       console.log("inside play pause func");
       if(auStatus == false){
           console.log("resume")
           synth.resume();
           auStatus = true;
           playBtn.classList.remove("fa-play");
           playBtn.classList.add("fa-pause")
   
       }
       else if(auStatus == true){
           console.log("pause")
           synth.pause();
           auStatus = false;
           playBtn.classList.remove("fa-pause");
           playBtn.classList.add("fa-play");
       }
   }
   
   
   ///when user click next button 
       function next(){
           if(slideIndex < slides.length-1){
       ///disable next and previous button when answering questions
               if(slideIndex >= 3 ){
                   nextBtn.style.display="none";
                   prevBtn.style.display="none";
                   submitBtn.style.display="inline";
                   questionIndex++;
                   console.log("question index is ",questionIndex)
                   document.getElementById(slides[slideIndex]).classList.remove("showSlide");           
                   synth.cancel(); //to cancel the current speech
                   slideIndex++;
                   document.getElementById(slides[slideIndex]).classList.add("showSlide");
                   console.log("in next slideIndex in next:",slideIndex);
               }
               
               else{
                   document.getElementById(slides[slideIndex]).classList.remove("showSlide");           
                   synth.cancel(); //to cancel the current speech
                   slideIndex++;
                   document.getElementById(slides[slideIndex]).classList.add("showSlide");
                   console.log("in next slideIndex in next:",slideIndex);
                   speach();
               }
              
           }
          
           else{
               console.log("last slide reached");
               alert("END of all Slides");
           }
       }
       function prev(){
           if(slideIndex > 0 ){
       ///disable next and previous button when answering questions
               document.getElementById(slides[slideIndex]).classList.remove("showSlide");         
               synth.cancel(); //to cancel the current speech
               slideIndex--;
               document.getElementById(slides[slideIndex]).classList.add("showSlide");
               console.log("in prev slideIndex in prev:",slideIndex);
               speach();
               
           }
           else{
               alert("This is the first slide");
               console.log("first slide reached");
           }
       }
   
   function submitAns(){
       console.log("in submit func");
       currentQuestion = "q".concat(questionIndex);
       currentAnsPara = "correctAnsPara".concat(questionIndex);
       document.getElementsByName(currentQuestion).forEach(radio => {
           if(radio.checked == true){
               selectedAns = radio.value;
               console.log("selected ans is : ",selectedAns);
           }
       });
       if(selectedAns == undefined){
           alert("please select an option");
       }
       else if(selectedAns == correctAns[questionIndex-1]){
           submitBtn.style.display="none";
           nextBtn.style.display="inline";
           document.getElementById(currentAnsPara).style.color = "green";
           document.getElementById(currentAnsPara).style.fontWeight= "bold";
           document.getElementById(currentAnsPara).innerHTML = "Corrent Answer"
           console.log("correct ans");
       }
       else{
           document.getElementById(currentAnsPara).style.color= "red";
           document.getElementById(currentAnsPara).innerHTML = "Wrong Answer. Try Again"
           console.log("wrong ans")
       }
       selectedAns = undefined;
   }