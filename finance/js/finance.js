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
slides= ["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8","slide9","slide10","slide11","slide12","slide13",
      "slide14","slide15","slide16","slide17","slide18","slide19","slide20","slide21","slide22","slide23","slide24","slide25"];
//array of text of each slide that needs to be spoken

slide1Text=["Welcome to Finance Module"];
slide2Text=["How to use a Payment Request Form? ",
            "Step 1 :Enter the description of the expense or the asset purchased. ",,
             "Let’s take an example of Verification of customer files at Virar Branch for Rs. 10,000+1,800  GST (18% of 10,000). ",
            "The vendor is also locally located at Virar Branch. ",
             "The description for this expense will be Verification charges. "];

slide3Text=["Step 2 : The next step is to put in the location from where the expense is raised. ",
            "In the above case the Location will be Virar. "];

slide4Text=["Step 3 : Select the applicable cost centre from the drop-down list in the form. ",
            "The applicable cost centre code is separately provided by HR from time to time in the Employee wise cost centre list. ",
            " For the above example the Cost Centre will be V i r. "];

slide5Text=["Step 4 : Enter the Vendor's name. "];

slide6Text=["Step 5 : Enter the Bank details of the Vendor in which APAC will transfer the payment. "];

slide7Text=["Step 6 : User has to then enter the Invoice number and the Invoice date. This will be  available in the Invoice copy provided by the Vendor. "];

slide8Text=["Step 7: Choose the expense nature from the drop-down list. ",
            "As per the above example the Expense Nature will be Revenue. ",
            "Similarly, if an asset is purchased like computer, furniture etc. the Expense Nature will be Capital. "];

slide9Text=["Step 8: Payment type to choose from the list depends on how the vendor wants the payment to be made to him. ",
            "Cash, Cheque, P o, R t g s ,Swift, Neft. "];

slide10Text=["Step 9: Next is to check whether the Vendor is registered as a MSME or not. ",
            "Please note, that if the vendor is a MSME vendor, then there is a Statutory  requirement to pay him within 45 days from the date of Invoice. ",
            "Therefore, it is  advised to send the bills to the Finance department for payment immediately on  receipt of bills from such vendors. "];

slide11Text=["Step 10 : Write down the Permanent Account Number (PAN) of the Vendor. "];

slide12Text=["If the vendor is registered under GST then the User has to enter the GST number  of the Vendor. ",
             " This is a mandatory field for all GST registered vendors. ",
            "A registered GST vendor may either be from within the State or from any other State in  India. ",
            "Receipt of services or goods within the State will attract CGST and SGST and  received from any other state will attract IGST. ",
             " In the payment form it is therefore important to enter the GST number of the registered  vendor which will determine which tax is applicable to the transaction. ",
             "In the above example, the vendor is from Virar, Maharashtra and therefore the tax applicable is CGST and SGST. ",
             "In case the service is received from Rajasthan, IGST will be applicable. "];

slide13Text=["Step 12 : Enter the expense amount under Service/Product Cost followed by the GST  amount. ",
             "If the Vendor has charged CGST and SGST then enter the same under CGST and  SGST. ",
             "Similarly, if IGST is charged by the vendor then enter the amount under IGST. ",
            "In the above case: The Service or product cost is Rs. 10,000 and since the Vendor is  registered in Virar which is in Maharashtra. ",
             " And he has charged CGST 9% that is Rs. 900 and SGST 9% that is Rs. 900 this has been shown in the previous point. "];

slide14Text=["Step 13 : Next, the user has to choose the Nature of TDS applicable to the expense. ",
              "In the above case, since the vendor has provided professional services the Nature of TDS  will be Fees for professional or technical services. ",
            "Following is the list of TDS rates and its  applicability based on the nature of expense",
             "Particulars TDS Rate in percent",
             "Section 194 C :Payment to contractor or sub-contractors. For HUF or Individuals 1 percent and for Others 2 percent",
             "Section 194 H : Commision of brokerage is 5 percent",
              "Section 194 H :Rent on a Plant & Machinery is 2 percent and Land or building or furniture or fitting is 10 percent",
             "Section 194 J :Any sum paid by way of  Fee for professional services and Fee for technical services is 10 percent "];

slide15Text=["Step 14 : The final step is to take appropriate signatures as per the delegation of authorities",
              "and send the form along with the original invoice copy to the Finance department for  payment. "];


slide16Text=["Questionnaire"]

slideAudioText=[ slide1Text,
                slide2Text,
                slide3Text,
                slide4Text,
                slide5Text,slide6Text,slide7Text,slide8Text,slide9Text,slide10Text,slide11Text,slide12Text,slide13Text,slide14Text,slide15Text,slide16Text];
    correctAns = ["a","b","c","b","a","a","c","d","b"]; 
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
//main function that is being used to play the audio    
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
    playBtn.classList.add("fa-play")
}
}


//when user click next button 
function next(){
    if(slideIndex < slides.length-1){
///disable next and previous button when answering questions
        if(slideIndex >= 15 ){
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