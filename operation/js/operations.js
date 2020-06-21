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
slides= ["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8","slide9","slide10","slide11","slide12","slide13","slide14","slide15","slide16","slide17","slide18","slide19","slide20","slide21","slide22"];

//array of text of each slide that needs to be spoken
slide1Text = ["Welcome to Operations Module"];


slide2Text =  ["Validity of sanction letter. ",
                "Sanction letter will be valid for 30 days. ",
                "Extendable by another 15 days. ",
                "Post completion of 45 days, the file will be re-approved with latest financials and further updates. "];

slide3Text = ["S.M. will ensure that the following documents are collected for the disbursement: ",
               "Original Facility agreement duly signed by both the Applicant & the Co-applicant. ",
               "The legal team will draft the Facility Agreement, for Execution by the Sales Manager. ",
               "Loan disbursement request letter & account details in which the loan amount is to be credited. ",
               "Resolution from the Society or Trust for availing the loan from Apac and, ",
               "specifying the authorized signatory to sign the loan documents on behalf of the Society or Trust."];

slide4Text = ["Other Pre Disbursement Documents: ",
               "Original Property documents as per the legal opinion and Vetting Report by the Empaneled Lawyer. ",
               "Deposit of title deeds for equitable mortgage or MOE for registered mortgage as per the legal opinion of each state as per the case requirement. ",
               "Additional documents or, conditions as per the Sanction Letter. ",
               "End use letter as per the format duly signed by the Applicant & the Co-applicant. ",
               "Architect estimate with time frame and the cost at each construction stage. "];

slide5Text = ["Other Pre Disbursement Documents: ",
               "N.A.C.H. or E.C.S. mandate form to be collected for repayment account. ",
               "Four Undated Cheques  from the Trust or Society account covering EMI amount  in three of the  cheques, and,",
               "the remaining cheque for  covering the loan amount, and an additional cancelled cheque shall also be required which is to be annexed to disbursement request letter.",
               "3 undated Cheque from the Individuals Applicant & Co-applicant covering the EMI in 2 cheques and the Loan amount in 1 cheque. "];

slide6Text = ["Precautions while filling disbursement kit: ",
               "1. Disbursement kit that was  drafted by legal team shall be used for Execution by the Sales Manager. ",
               "2. All the applicable fields are appropriately filled. ",
               "3. Client must sign next to any manual correction. ",
               "4. Borrowing Resolution must be signed by the authorized person only. ",
               "5. Ensure all School/Society details are printed on the Society Letter Head. "];

slide7Text = ["Other Precautions while filling disbursement kit: ",
               "1. For NACH activation, Society Stamp is mandatory, else it will be rejected. ",
               "2. If the Birth year is different in Adhaar or PAN, undertaking for correct birth year from applicant is necessary. ",
               "3. Pre disbursement checklist must be filled and sent along with the Loan file, else it will not be processed. "];

slide8Text = ["Next Steps: ",
               "1. The loan file must be couriered to Operations team at HO in order to transfer the funds. ",
               "2. The Physical file must contain all the documents along with duly filled checklist. ", 
               "3. State Business Manager/SM shall email the list of documents to Ops team  that was sent to Mumbai. ", 
               "4. Courier receipt must be sent in order to track the file."];

slide9Text = ["Ops review: ", 
               "1. Operations team to ensure that the EMI amount is as per the EMI calculator and, list out documents taken as OTC or PDD and the same needs to be tracked as per the approval authority. ", 
               "2. In all under construction cases, there must be technical valuation report mentioning the amount of work done and amount which can be partly disbursed in each stage. ","Each tranche of disbursement would require approval by Credit team. ","Credit team will ensure that before approval at each stage that there is a visit by himself along with the sale team to ensure that, ", "the work is completed to the level as per the Technical report for which the earlier part disbursement was done. ",
               "3. Property offered as collateral is insured if the same is part of the Sanction condition and check whether the policy is assigned to Apac."];

slide10Text = [ "If the disbursement is for the construction purpose, then ensure that the CAM mentions the stage of the disbursement in traches and, there is an Estimate, or, Quotation along with the copy of plan for the construction work in the file. ",
                "All the appropriate documents as per the Sanction letter are collected. ",
                "Ops shall ensure that all the financing documents are properly filled and shall take the consent from the legal team. "];

slide11Text = ["Congratulations for your Disbursement !!"];

slide12Text = ["Post Disbursement Monitoring",
                  "Operations will send a letter to customer containing the details like the Date of disbursement, Loan amount sanctioned, Amount disbursed, Tenure, EMI amount, Date of commencement of EMI. ",
                  "Operations team will ensure that all the documents marked as OTC or PDD are tracked and reminders sent to the business team on the pendency.",
                  "In all under construction cases, it is mandatory of Sales and Credit team to visit the site where the construction is being undertaken. ",
                  "Then ensure that the same is reported to HO through visit report documenting the utilization of funds for the purpose.",
                  "Cases where loan amount is greater than 2 Crore, there will be a Quarterly visits done by the Sales and Credit team." ];

slide13Text =["Quarterly visit report to be submitted and monitored by the Operation team",
                "In case of any adverse or negative comment then the same should be highlighted by the Operations team.",
                "Business Team needs to ensure that all the EMIs are received on the EMI date", 
                "in case of delay in EMI, Business team will accord priority to the collection and ensure that the EMIs are collected.",
                "After 60 days past due (DPD), customer will be handed to collection team.",
                "The central collections team along with the branch collections team would engage with the customer and adopt the approved collections process.", 
                "Where necessary, an external collection agency and/or Legal agency (lawyer) would get engaged.",
                "Risk Management team will be publishing the daily report on disbursement, collections and another report on risk management aspect"];

slide14text = ["Questionnaire"];

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
                slide12Text,
                slide13Text,
                slide14text];

    correctAns = ["h","a","b","c","e","a","b","b"]; 
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
               if(slideIndex >= 13 ){
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