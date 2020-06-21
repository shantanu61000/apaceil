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
var settingsSecStatus = false;
var auStatus = true;
slides= ["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8","slide9","slide10","slide11","slide12","slide13","slide14",
"slide15","slide16","slide17"];

slide1Text=[" Fraud Prevention & Internal Control"];

slide2Text=["OBJECTIVE",
            "The main objective of this webinar is to spread awareness about scams and frauds that are prevalent in the financing industry and sharing insights with you to help you. ",
             "identify the fraud",
             "prevent the fraud from happening",
             "report any fraud that is detected or suspected; and",
             "mitigate the risks and losses associated with fraud",
             "Since, observation and reporting by frontline sales and credit people is the most common way to detect fraud. ",
             "We are committed to equip our colleagues with general awareness of fraud and appropriate response to be adopted if such activity is detected or suspected. "];

slide3Text=["Categories of Fraud",
            "On the basis of place of origin and parties involved, we have categorized fraud in two separate categories. ",
            "External Fraud Where the parties involved in the fraud or scam are from outside the organisation. ",
             "Internal Fraud Where the parties involved in the fraud or scam are from inside the organisation and may or may not have colluded with several external parties. "];

slide4Text=["External Fraud",
             "Some types of external frauds are",
             "Title fraud or Title documents fraud",
             "Collusion between vendors or DSAs or Channel partners and customers",
             "Critical document fraud",
             "Own Contribution Money (O c r)"];

slide5Text=[" Title Fraud",
            "Title fraud can be done in various ways such as",
              "Forging the title documents by interfering with contents of the documents such as name of the owner, details of the property etc. ",
             "Duplicating the title documents usually by creating more than one copies. ",
             "Examples",
             "Stamped documents were forged by borrower. ",
             "Creating multiple fake documents of the same property and depositing with multiple institutions. ",
             "Property was sold through duplicate or fake title deeds even though original title documents was with the financing company ",
             "The borrower in collusion with the vendor fabricated the sale deed by mentioning the property address, colony name and photograph of a different property and availed a mortgage loan against this property. ",
             "Release deed submitted to Financing Company were fraudulent and were not registered with concerned sub-registrar. "];

slide6Text=["Mitigants or check-points",
            "Title investigation report from a good lawyer is necessary. ",
             "Always check the authenticity of the title documents. Stamp paper, signatures etc. to be checked if they are genuine or not. ",
             "To check authenticity of a document, try basic checks like checking stamp paper, checking signatures, checking registrar stamps. ",
             "Always get a vetting certificate by empaneled lawyer after mortgage but before disbursement, that the mortgage is valid as per law. ",
             "In case of doubt, get the certified copy of relevant document from the sub-registrar, if it is a registered document. ",
             "It is always advisable to get the relevant document verified by the issuing authority such as approvals or sanction plan etc. ",
             "Proof of possession and ownership of the property, even if we are not getting the mortgage. "];

slide7Text=["Collusion between DSA or channel partners or vendors and customers",
             "Examples",
             "Income documents & property documents submitted by customer were forged by DSA. ",
             "Valuer in collusion with DSA and customer gave inflated valuation which affected the LTV. ",
             "Title search lawyer in collusion with customer and DSA, gave false report without conducting search, where the property was already mortgaged with some other institution. ",
             "Channel partner submitted fake KYC documents of the customer. ",
             "Alliance partner shown the rented or leased shops of the customers as owned premises. ",
             "Mitigants or Checkpoints",
             "At the time of empaneling any vendors or DSAs or external agencies, relevant guidelines or SoPs or Policies to be strictly followed. ",
             "Vendor’s or partner’s background, past behaviour with other institutions to be analysed. ",
              "Feedback from other institutions to be taken periodically where the vendors or channel partners are empaneled. ",
              "Quality of customers suggested or work delivered by vendors or DSA to be regularly monitored and highlighted if there is a concern in the quality. ",
             "Work should be distributed equally amongst all the vendors. "];

slide8Text=["Critical document fraud",
            "Examples",
             "Licenses or Approvals required from government authorities for running restaurant were forged and submitted. This may be applicable for other businesses also, such as hotels,schools etc. ",
             "DSA or alliance partner and customer confirmed that all the approvals for running business is in place. ",
             "It was found that shop was in residential zone and the building was demolished by MCD during ceiling drive in Delhi. ",
             "One of the borrowers denied having signed the loan documents. ",
              "Salary Slip was forged by the borrower",
             "Income documents, ID proofs & property documents submitted by customer were forged. ",
             "The customer produced forged income papers showing as NRI and employed in Singapore. ",
             " Mitigants or Checkpoints",
             "Verification of documents with government websites. ",
             "Verification of salary slips with employer. Salary amount should be compared with Bank Statement. Cross verification of balance sheet. ",
             "Personal discussion with the borrower plays very important role. ",
             "Execution of the loan documents to be done strictly in presence of the APAC official or representative. ",
              "In no scenario the Borrowers should be allowed to take loan documents home or elsewhere for execution. ",
             "Apply the tools, we have at disposal to verify such documents such as Karza, sherlock etc. "];

slide9Text=["Own Contribution Money (O c r)",
            "Own contribution money is a part of the price or expenses incurred in connection with the purchase or construction of real estate, which is not financed by the financing institution. ",
             "This means that it must be contributed by the borrower. Own contribution money in loan also underline the financial commitment of the borrower to the property and it also shows the intention of the borrower to own the property. ",
             "Examples",
              "OCR was transferred by seller through some other persons account to suppress the clear trail. ",
              "Customer fabricated the narration of OCR transfer in banks statement to hide source of funds. ",
             "Seller being a friend of customer transferred OCR through some other person’s account to customer’s account.",
             "To suppress the clear trail, customer fabricated the narrations of OCR transfer in bank statement to hide source of funds. ",
             "Mitigants or Checkpoints",
              "Verification of the source of funds to be done through Bank statement. ",
              "Huge cash deposits (if any) to be verified. "];

slide10Text=["There can be various other different types of frauds. Things we can do to prevent these kind of frauds:",
             "Be vigilant and attentive all the time while doing due diligence",
             "Know and strictly adhere to the policies of the Company",
             "Stay updated on the frauds being perpetrated in local markets",
             "Do not succumb to target pressure and do your due-diligence",
             "Pre disbursement welcome call is important",
             "Personal discussion with the borrower plays a very important role",
             "While meeting the borrower personally, we can assess the intention or commitment of the borrower for the availment and repayment of the loan. "];

slide11Text=["Internal Fraud",
              "Some examples of internal fraud are :",
             "Kickback ",
              "Expense claim frauds",
             "rauds pertaining to documents of the Company",
             "Loss of intellectual property",
              "Frauds pertaining to assets",
              "Fraudulent financial reporting",
             "Embezzlement"];

slide12Text=["Kickbacks :",
              "Permitting special prices or privileges to customers, or granting business to favoured suppliers for benefits. ",
             "Receipt of excessive gifts or accepting or seeking anything of material value from vendors or DSAs or channel partners or persons providing services/materials to the Company. ",
             "Expense claim frauds :",
             "Inflated or bogus travel, employee reimbursement and other expense claims",
             "claims for services or goods not actually availed",
             "paying false (or inflated) invoices, either self-prepared or obtained through collusion with suppliers",
             "Frauds pertaining to documents of the Company ",
              "Forging or altering documents or accounts belonging to the company",
             "Forging or altering of any document relating to loan such as sanction letter, loan documents, mortgage documents etc..",
             "Forging of alteration of cheques, bank drafts or any other financial instrument",
             "Forging or altering any document further resulting in financial losses etc..",
             "Mis-using letterheads of the company. "];

slide13Text=["Disclosing Confidential Information",
             "Disclosing confidential and proprietary information or business activities of the company to an outsider or competitor. ",
             "Unauthorized or illegal use of confidential information ( For example taking advantage for personal gains as a result of insider knowledge of company activities). ",
             "Disclosing business tactics, product policy to an outsider or competitor. ",
             "Asset Misappropriation Fraud",
             "Company has given several assets such as laptops or PCs, phones etc. and equipped its offices with various furnitures and fixtures to enable its employees to perform their work smoothly. ",
             " Destruction, removal or inappropriate use of such items tantamount to fraud.",
             "Theft or mis-use of assets given by Company",
             "Use of company’s assets for own use",
             "Embezzlement ",
             "Misappropriation of company's money, security, supplies, property, or other assets",
             "Utilizing company funds for personal purposes",
             "Reporting and claiming of fictitious damage or loss. "];

slide14Text=["APACs stand on Fraud",
              "APAC and its management shall always endeavour to be a fraud free zone. It shall always encourage its employees or representatives or partners to practice fair dealing and transparency. ",
             "APAC has a zero tolerance policy on fraud.",
              "If it is detected and established that any of the employees or staffs or vendors are indulged in any kind of fraud against the organisation, strict disciplinary and legal action shall be taken against the person so involved. "];

slide15Text=["Reporting",
             "Any employee, in any role, as soon as they come to know of any fraud or suspect or administer any fraud or any other fraudulent activity external or internal. ",
             "They must report such incident to their respective branch managers or credit managers or supervisor, as per the policy in place. ",
             "If in case, a person is not comfortable to report to their seniors about the fraud, APAC has a Whistle blower policy in place. ",
             "If needed, anyone can raise a concern directly to the highest authority in the Company by writing to whistleblower@apacfin.com. "];

slide16Text=["Conclusion",
             "Fraud is inevitable and inherent, but a strong fraud prevention and detection program not only curb losses suffered due to fraud but will also boost the confidence. ",
              "And also the trust that APACs investors, auditors, shareholders, lenders will have in its ability to control its fate. ",
             "APACs demonstrated efforts to reduce the risks of fraud, both internally and externally. ",
              "And also make it a better financial service provider, business partner, better place to work, a better investment and shall also help it to be included in one of the most respected and admired financial institutions. "];

slide17Text=["Thank You !",
             "Be alert and be careful"];

             
slideAudioText=[slide1Text,
    slide2Text,
    slide3Text,
    slide4Text,
    slide5Text,slide6Text,slide7Text,slide8Text,slide9Text,slide10Text,slide11Text,slide12Text,slide13Text,slide14Text,slide15Text,
    slide16Text,slide17Text];
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
            document.getElementById(slides[slideIndex]).classList.remove("showSlide");           
            synth.cancel(); //to cancel the current speech
            slideIndex++;
            document.getElementById(slides[slideIndex]).classList.add("showSlide");
            console.log("in next slideIndex in next:",slideIndex);
            speach();       
    }
   
    else{
        console.log("last slide reached");
        alert("END of all Slides");
    }
}
function prev(){
    if(slideIndex > 0 ){
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

