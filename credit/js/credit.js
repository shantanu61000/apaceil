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
slides= ["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8","slide9","slide10","slide11","slide12","slide13","slide14","slide15","slide16","slide17","slide18","slide19","slide20","slide21","slide22","slide23","slide24","slide25","slide26","slide17","slide28","slide29","slide30","slide31","slide32","slide33","slide34","slide35","slide36","slide37"];

//array of text of each slide that needs to be spoken
slide1Text = ["Welcome to Credit and Risk module"];

slide2Text = ["Origination or Pre-Login. ",
              "The Sales Manager shall identify the educational institute. ",
              "Schedule a Sales meeting. ",
              "Understand the financial requirement of the institution. "];

slide3Text = ["During Sales visit to the clients location: ",
              "Collect the duly filled Loan application form from the client. ",
              "Prepare a sales visit report. ",
              "Collect all the documents as per requirement list. "];

slide4Text = ["Documents required: ",
              "1. Application form Duly filled with photographs & signature. ",
              "2. Sales Visit Login Report. ",
              "3. KYC documents as mentioned above of all Co-applicants with OSV by Sales Manager or officer. ",
              "4. Bank statement of Educational Institute , Trust /Society and that of  individuals for last 12 months. ",
              "5. Constitution documents such as Trust Deed, M.O.A.or AOA, Society Bye laws and the latest amended trust deeds if any. ",
              "6. School recognition Certificates. ",
              "7. Audited Financial & ITR. ",
              "8. Sanction letter of all existing loans along with loan track availed by Entity and as well as individuals. ",
              "9. Student-strength and fee particulars on the society letter head. ",
              "10. Property documents copies. "];

slide5Text = ["Key points to adhere in sales visit: ",
              "Adherence to APAC’s code of conduct. ",
              "You shall understand the client’s requirement. ",
              "You shall build report with the client. ",
              "You shall observe the school premises and students. ",
              "You shall explain the client our product and our procedures. "];

slide6Text = ["Fair Practice Codes: ",
              "1. Not accepting cash. ",
              "2. Acknowledgment of loan application form to be given back to clients. ",
              "3. Giving red carpet treatment to clients! ",
              "4. Keeping transparency in charges and Fees. "];

slide7Text = ["KYC policy. ",
              "1. KYC policy for Individual. ",
              "PAN or Form Number 60. ",
              "Aadhar Card (Redact or blackout Aadhaar number from hard copy obtained). ",
              "Valid passport. ",
              "Voter’s Identity card. ",
              "Valid driving license. ",
              "2. KYC Policy for Companies. ",
              "Certificate of Incorporation and Memorandum and Articles of Association. ",
              "Pan. ",
              "List of latest shareholding patterns and latest directors list. ",
              "KYC docs for Individual Signatory/POA Holder or Beneficial Owner. ",
              "Resolution of the Board of Directors for Authorised Signatory. ",
              "3. KYC Policy for Partnership Firm. ",
              "Registration Certificate. ",
              "Partnership deed. ",
              "Pan. ",
              "KYC documents for Individual Partner as Signatory or, P.O.A. Holder or, Beneficial Owner. ",
              "Telephone bill in the name of firm and or partners. ",
              "Power of Attorney granted to a partner or an employee of the firm to transact business on its behalf. ",
              "Any officially valid document identifying the partners and the persons holding the Power of Attorney and their addresses. ",
              "4. KYC policy for trusts and foundations. ",
              "PAN or Form number 60. ",
              "Certificate of registration. ",
              "Trust Deed. ",
              "Resolution of the managing body of the foundation or association. ",
              "Power of attorney granted to transact business on its behalf. ",
              "5. KYC policy for sole proprietary firm. ",
              "Registration Certificate. ",
              "Pan. ",
              "Certificate or licence issued by the municipal authorities under Shop and Establishment Act. ",
              "Complete Income Tax Return in the name of Proprietary Firm. ",
              "GST Certificate (Provisional or Final). ",
              "6. KYC policy for Unincorporated Association. ",
              "PAN. ",
              "Resolution of the managing body of such association. ",
              "Power of attorney granted to him to transact on its behalf. ",
              "An officially valid document in respect of the person holding an attorney to transact on its behalf. ",
              "7. KYC policy for Eligible F.P.I. under P.I.S. ",
              "PAN. ",
              "Proof of address. ",
              "Sebi registration certificate. ",
              "Senior management list. ",
              "Authorised signatories list, and,",
              "Constitutive documents. " ];

slide8Text = ["Further Process: ",
              "Credit Team shall carry the Cibil checks and if Cibil check is positive, then ",
              "the Sales Manager shall then schedule a PD for the client else the proposal would be dropped. ", 
              "credit manager will understand the background, history of institution, cashflow, Bank account, constitution of society, ",
              "student strength verification, attendance register, fee receipts etc in order to prepare Cam. ", 
              "After PD, nominal fee of Rsupees 10000 for Loan upto Rupees 1 crore and Rupees 20000 for Loan more than 1 crore is to be collected towards legal & valuation expenses. ",
              "Credit Manager will then prepare Cam, and will parallelly initiate Legal, Technical, F.I. & R.C.U. with empanelled vendors of Apac. "];

slide9Text = ["Credit Manager to focus on: ",
              "Income assessment is the most critical & needs to be captured in Cam. ",
              "Required reference checks to be done. ",
              "Existing Track record and Eligibility Criteria. ",
              "Cam will be decisioned as per the delegation matrix and will put up to the approving authority. ",
              "Generate the sanction letter once the case is approved. "];
            
slide10Text = ["Sanction Letter: ",
               "Sales Manager must get it signed by applicant & co-applicantS for acceptance of sanction. ",
               "One copy will be given to the Client . ",
               "One copy will be kept in the loan file. "];

slide11Text =["Questionnaire"];


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
                slide11Text];

correctAns = ["a","a","b","c","d","a","j","e","a","a","h","f","b","d","a","b","b","a","a","a","a","c","b","c","a","c"];
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
            if(slideIndex >= 10 ){
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