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
    slides= ["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8","slide9","slide10","slide11","slide12","slide13","slide14","slide15","slide16","slide17","slide18","slide19","slide20","slide21","slide22","slide23","slide24","slide25","slide26"];

    //array of text of each slide that needs to be spoken
    slide1Text = ["E.I.L. Product: Introduction"];

    slide2Text = ["Objective. ",
                 "To provide insights for the newly joined sales manager on the Apac’s E.I.L product and processes. ",
                 "To maximize the productivity of the sales manager from day one. ",
                 "To make sales manager understand the end to end processes, that is, from sourcing to post disbursement monitoring. ",
                 "To make the sales manager understand the Apac’s code of conduct. "];

    slide3Text = ["Introduction. Apac’s E.I.L. product  offers finance to the following segment.",
                  "1. Schools recognized by Board of Education in respective state, C.B.S.E, I.C.S.E, I.B or I.G recognized or any other recognized affiliation schools.",
                  "2. Established & recognized Play group with decent track record of students getting admission in established schools."];
    
    slide4Text = ["Purpose. ",
                  "1. To cover Construction cost of new/additional building. ",
                  "2. Carrying repairs/alterations/additions to the existing building. ",
                  "3. Purchase of land for School playground or for new school building that is existing school expanding to new building. ",
                  "4. Expansion of School by adding new branch. ",
                  "5. Purchase of infrastructure such as furniture, benches, desks, smart class, computers, labs equipments, etc. ",
                  "6. Repayment of current high cost loan and consolidation of debt. ",
                  "7. Upgrade or creation of educational infrastructure facilities such as auditorium, activity room, or any other facility. "];

    slide5Text = ["there are three sectors in the Indian Education Industry, which are as follows: ",
                  "1. Pre-primary Schools. 2. K12 Education. 3.  Colleges, and institutions"];

    slide6Text = ["What is K12 education? ",
                  "The K-12 education is the term used to denote the education imparted in the primary and secondary phases of school life, including K or kindergarten to 12 which stands for the 12th standard. ",
                  "This system covers education from kindergarten till the 12th grade."];

    slide7Text = ["Why are we focusing on K12 Sector? ",
                  "Because, K-12 education is highly regulated at Central and state government levels in India ",
                  "Regulatory framework as per the affiliated board (CBSE, ICSE, IB, etc.) ",
                  "And also, because of lower delinquency in this sector as seen by other lenders"];
    
    slide8Text = ["Apac's program lending for educational institutions. "];

    slide9Text = ["Our targeted market is K12 Market. ",
                  "Our industry is Educational Industry. ",
                  "The Loan amount should be between 25 Lakhs to 300 Lakhs. ",
                  "Loan tenure must be upto 84 months, and, average tenure is 5 years. ",
                  "The interest rate charged is between 16% to 18% per annumm. ",
                  "Our processing fees is 1 % to 2 % of loan amount. ",
                  "LTV. School Property, Upto 45 % of Market Value of the Property. ",
                  "Residential, Upto 70 % of Market Value of the Property. ",
                  "Commercial, Upto 60 % of Market Value of the Property. ",
                  "Note: All the properties shall be of Non Agri in nature, and, Vacant commercial property is not accepted. "];

    slide10Text = ["Some important criteria: 1. The minimum number of student strength is 500. ",
                  "2. Foier: 60 % including all obligations. Foier Definition = (Fixed Monthly Obligations + Proposed EMI). ",
                  "3. Area of operation is 200 kilometers from SM location. ",
                  "4. 12 Months Banking credits to fee receipts ratio should be at least 50 % . ",
                  "5. Average Bank Balance A.B.B. to Apac’s EMI, to be minimum 1.5 times. ",
                  "6. Minimum Vintage for institution is 4 years, and, for pre-school is 3 years. ",
                  "7. Average fees per student must be minimum 12000 per annum. ",
                  "8. There should be clean repayment track record for last 1 months. "];
    
    slide11Text = ["Let us learn about, life cycle of a loan. ",
                  "Here are the steps involved in a loan life cycle. ",
                  "1. Origination. ",
                  "2. Sales Visit. ",
                  "3. Loan Application form. ",
                  "4. Login Documents. ",
                  "5. Bureau Check. ",
                  "6. Personal Discussion. ",
                  "7. Collection of Documents.",
                  "8. Legal Technical & Collateral Valuation. ",
                  "9. Mifin Entries and SMEB Cam. ",
                  "10. Approving Authority. ",
                  "11. Sanction issue  + Client acceptance. ",
                  "12. Execution of Disbursement Documents.  ",
                  "13. Mifin Entries. ",
                  "14. Disbursement. ",
                  "15. Post Disbursement monitoring and Loan Servicing. "];

    slide12Text = ["Questionnaire."];

    slideAudioText=[slide1Text,
                    slide2Text,
                    slide3Text,
                    slide4Text,
                    slide5Text,
                    slide6Text,
                    slide7Text,
                    slide8Text,
                    slide9Text,
                    slide10Text,
                    slide11Text,
                    slide12Text];
    correctAns = ["a","b","b","e","c","b","d","c","b","a","c","a","b","b"];
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
             if(slideIndex >= 11 ){
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