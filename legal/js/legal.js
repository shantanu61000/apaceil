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

//array of text of each slide that needs to be spoken
slide1Text=["Learning Module Legal & Compliance"];

slide2Text=["Importance of Loan and Documentation",
            "Identification of the borrowers, security providers and security",
            "Settlement of terms and conditions",
              "Proving evidence of transactions",
             "Deciding period of limitation",
             "Playing role in the process of recovery"];

slide3Text=["Documentation Process Involves",
              "Drafting the documents",
            "Stamping",
             "Filling up the documents",
            "Execution/Signing",
             "Completing necessary formalities",
             "Safeguarding the documents"];

slide4Text=["Requisites of Proper Documentation",
            "Mention correct name and address of the parties",
             "To be properly Stamped",
             "Filling up the documents",
              "Describe the security, if any",
              "Mention the loan amount",
              "Cover major terms and conditions",
             "Mention the place of execution",
             "Mention the date of execution"];
        
slide5Text=[" Loan Application",
            "Loan Application should be duly filled, with all the mandatory details therein duly filled. ",
            "the photos of the applicants should be cross signed. Loan application shall contain details of all the co-applicants. ",
            "Acknowledgement slip of loan application must be given to the Borrower. "];

slide6Text=["Due Diligance",
           "Articles of Association (AOA), Memorandum of Association (M O A), Certificate of Incorporation (C O I) (in case of a company)/ partnership deed (in case of partnership/LLP)",
           " or trust deed (in case of a trust), rules & regulations and bye-laws (in case of Society) (“Constitution Documents”), to be reviewed/perused,", 
           "to see if the company/firm/trust/society has borrowing powers and powers to create security or not. ",
           "Certified copy (attested by key person in the entity)  of Constitution Documents as mentioned above should be referred always to ascertain that the copy of the Constitution Document is authentic. ",
            "and there is no other parallel document, or any  amendment thereof is made thereon. ",
           "Signing authority shall be determined by the Board/Borrowing Resolution and Authority letter in case of Company and LLP respectively. ",
           "signature of all the Partners in case of Partnership ﬁrm should be obtained. "];

slide7Text=[" Payment of stamp duty ",
            "All Financing Documents (Master Facility Agreement or GTC or undertakings or promissory note, etc.) shall have to be duly stamped as per the relevant stamp act in consultation with legal team. ", 
             "And also it should be filled on or before date of execution of relevant documents. ",
            "This stamp paper forms an integral part of [document name] dated [date] should be mentioned on the stamp paper with pen. ",
           "All documents should be properly stamped on or before execution thereof",
            "An unstamped or insufficiently stamped document will not be admitted in evidence or form the basis of a suit.",
            "Date of stamp paper or payment of stamp duty should be prior to execution of all Financing Documents. "];

slide8Text=["Blank or Corrections or Details filled with Pen. ",
            "All the blanks to be duly filled before the signing or execution of the Financing Documents. ",
            "Cross signatures of all the executing parties to be obtained, wherever details are put in with pen. ",
            "As far as possible corrections or over writing should be avoided. ",
            "If any correction/overwriting is carried out, the same should be authenticated by the executing party before the signing or execution of the documents in consultation with Legal. ",
            "Asset/ Legal heir details in schedule, if provided for (for individual borrower(s))",
            "List of Legal heirs (for individual borrowers and guarantors) and at the relevant places should be properly filled in. ",
            "Asset details (for individual borrowers and guarantors) at the relevant places should be properly filled in. "];

slide9Text=[" Security cheques",
            "Details of UDCs or PDCs to be cross checked and the particulars to be filled in the covering letter",
            "Cross signature to be obtained wherever the details are filled with pen in the covering letter",
             "Cheque should be properly filled with APAC Financial Services Private Limited or APAC Housing Finance Private Limited in the payee column and the cheque shall have to be crossed for account of payee.",
            "Handling of loan and title documents",
            "Copies of title documents should be furnished to the lawyer for title verification and before creation of mortgage. ",
             "the lawyer should verify the original title documents, which should generally be furnished directly to the lawyer by the client. ",
             "R m should avoid taking original title documents before mortgage. ",
             "Title documents should be couriered for custody to Head of Branch on the same day it is received, after creation of mortgage. ",
             "Loan and other documents to be sent with a covering letter for custody to Head of Branch, as soon as execution is complete,make sure the execution is properly done and all the relevant particulars are duly filled. "];

slide10Text=["Execution or Signing of Documents",
             "Stamp and signatures of all borrowers and co-borrowers should be obtained on all the pages of all the documents. ",
             "All documents must be signed in the presence of the officer of APAC or alliance partner or channel partners or third party representing APAC mandatorily. ",
             "It is advisable to have full signature at the bottom of each page of a document and at the execution page as well. ",
             "and against each change or inscription or deletion or overwritings or alterations made in the document so as to avoid any kind of dispute",
             "Compilance",
             "Necessary R o c (in case of Company and LLPs) and CERSAI entry to be filed within 30 days from the execution for any security documents. ",
              "or in case any security clause is stipulated in any of the Financing Documents so executed. ",
             "In case of corporate entities, necessary resolutions need to be obtained. ",
             "Financial information (Clause 3 (13), I b c, 2016) and information relating to assets in relation to which any security interest has been created",
             " And it Should be filed with Information utility on immediate basis. "];

slide11Text=["Types of security interest",
             "General stipulated security interest",
             "Charge on current assets",
             "Charge on specific movables such as equipment or machinery",
             "Mortgage on immoveable fixed assets/properties",
             "Pledge on shares, units of mutual funds",
             "Mortgage or charge or assignment by way of security over/of rights under project/commercial documents/contracts. ",
             "Assignment or charge by way of security of Intellectual Property Rights. ",
             "Lien or pledge on or of Term Deposits",
             "Guarantees",
              "Other forms of national securities",
             "PDC or UDC; Note: This should not be mentioned as security in Sanction letter due to certain legal complications. ",
             "In case of corporate entities, necessary resolutions need to be obtained. ",
             "Letter of Comfort. Note: Its enforceability depends on the contents stated therein based on commercial understanding."];
        
slide12Text=["Hypothecation",
             "Moveable assets can be either hypothecated by way of charge or mortgage. ",
             "Generally, the mode or form of creation of security on moveable fixed assets, specific machinery, current assets, receivables, is by way of hypothecation. ",
             "There is no delivery of the assets r delivery of possession of the assets or properties by the security provider to the hypothecatee that is person in whose favour the security is created. ",
             "A “fixed charge” is a charge where specific identified moveables are secured in favour of the lender (example specific item of machinery/equipment, vehicle etc.)",
              "In the case of a fixed charge, the property charged must be described, and the information of the existence of the charge thereon must be specified on the property itself or place. ",
             " the property is installed/stored/lying, example by affixing a board/notice thereon. ",
             "A “floating charge” is an equitable charge on the assets for the time being of a going concern. ",
             "It attaches to the subject charged in the varying condition in which it happens to be from time to time. ",
             "An essential term of such charge is that the security provider may continue to use its assets in the ordinary way until the charge is crystallized, whenit fastens on the underlying assets. ",
             "The charge, so to say, is kept latent and dormant, till it crystallizes by the happening of some event which fixes the charge. ",
             "For example liquidation or bankruptcy or insolvency of the security provider or the appointment of a receiver for taking possession of the charged property. ",
             "or default by the security provider or borrower, which would entitle its holder to take action for the enforcement of the security."];

slide13Text=[" Pledge",
             "Pledge is a kind of bailment where an asset is delivered as security for the repayment of a debt. ",
             "The person who offers the security is called the pawner or pledgor",
             " and the bailee is called the pawnee or pledgee. ",
              " The ingredients of a pledge are the delivery of the properties or assets being pledged to the pledgee with the intention of creating security thereon. ",
              "Or coupled with the authority to deal with or dispose of the said property. ",
              "A pledge can be created in respect of any tangible moveable property like goods, stocks, jewellery, etc. ",
             "In case of shares or securities held in physical form, the deposit of the relevant certificate along with duly signed blank transfer formswill be required to be made to the pledgee. ",
              "Blank transfer is valid only for 3 months, hence the same needs to be revalidated",
             "It must also be noted that certain securities may not be pledgeable for example certain types of units, etc.",
              "or certain specific approvals may be required for example shares of a special purpose vehicle (SPV) where the Memorandum of such SPV restrict transferability, etc.",
             "or certain conditions may be required to be met for the same for example shares under lock-in, etc.",
             " If an equity for the project is brought in stages, the same need to be tracked and ensured pledge cover is maintained by execution of additional pledge documents. ",
             "for execution of additional pledge same process such as availability of corporate resolutions, filing form W etc. to be completed. ",
             "Capital structure of the company (whose shares are taken as security) need to be verified and ensure that security cover is maintained at all times. ",
             "If capital is in the form of preference, CCDS etc., pledge of the same need to be explored by credit and business. "];

slide14Text=["Pledge of demat securities",
             "In the case of shares held in dematerialized form, the procedure stipulated under the Depositories Act, 1996 must be followed. ",
             "Filing of the relevant form by the Pledgor with his Depository Participant (DP) containing details of the DP account, the shares pledged, the details of the pledgee’s DP account, etc. ",
             "The details are then forwarded by the Pledgor’s DP to the central depository service (NSDL or CSDL), who seek confirmation from the pledgee’s DP. ",
             "Upon  the pledgee’s DP accepting or confirming the pledge, the shares held in the Pledgor’s DP account are locked in favour of the pledgee’s DP account. ",
              "In case of other securities, such as units, etc. for which no certificates are issued and the same are not held in DP accounts, the specific procedure for pledge or creation of charge in each case would need to be examined. ",
             "When the goods are pledged with the Lender, it can sell them after giving reasonable notice to the borrower or sue for the amount. ",
              "And retain theat pledged goods as collateral security as per section 176 of the Indian Contract Act, 1872. "];

slide15text=["Equitable Mortage versus Registered Mortage",
             "Equitable Mortage and  Registered Mortage",
             "Delivery of title documents with intention to create equitable mortage.",
             "Delivery of title documents is not manadatory",
              "Equitable mortage can be created only at notified places, Not mandatory",
              "No document or instrument is required to be executed for creation of mortgage by deposit of title deeds",
              "The general practice of the lenders is to record the mortgage transaction under Memorandum of Entry (MoE) on the day immediately next to the date of creation of equitable mortage",
              "A declaration from the security provider or mortgagor is also taken on the same day as creation of mortgage",
              "Mortgage deed is required",
             "Registration or payment of stamp duty or both are required in certain states",
              "Mortgage deed is registered. Stamp duty and registration fees are to be paid",
             "Some states requires filing of Notice of Information to the Sub-Registrar",
              "Remedy is sale of property through a court of law",
              "Under section 96 of the Transfer of Property Act, 1882 ('Act'), the provisions of the act which apply to a simple mortgage shall apply to a mortgage by deposit of title deeds also"];

slide16text=["Title Search Report",
              "The property to be mortgaged must be properly investigated through empanelled solicitors or advocates as per the standard format. ",
              "and only after the same is certified to be clear, marketable and free from encumbrances, mortgage should be permitted to be created. ",
              "The empanelled advocates are required to investigate the mortgagor’s title to the property, including by search of the relevant land records. ", 
              "and report on the chain of title, transactions or encumbrances or charges on the property, certificates or clearances or permissions required. ", 
              "Also list of title deeds to be deposited with the lenders or their agent or trustee, detailed description of the property, etc.",
               "If any defects are pointed out by the aforesaid solicitors or advocates in the title report. ",
              "the same should be rectified and got certified by them. ",
              "If mortgage is created pending such rectification with approval of appropriate authorities, then a suitable undertaking cum indemnity should be obtained. "];

slide17text=["Empanelment of legal vendors. ",
             "Clear guidelines are laid down for empanelment of lawyers for title search and other litigation matter. ",
             "All empanelment should be done in accordance with the guidelines. ",
             "Guidelines for empanelment of external advocates. "];

slideAudioText=[slide1Text,
    slide2Text,
    slide3Text,
    slide4Text,
    slide5Text,slide6Text,slide7Text,slide8Text,slide9Text,slide10Text,slide11Text,slide12Text,slide13Text,slide14Text,slide15text,
    slide16text,slide17text];
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
    playBtn.classList.add("fa-play")
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