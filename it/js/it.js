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
"slide15","slide16","slide17","slide18","slide19","slide20","slide21","slide22","slide23","slide24","slide25"];

slide1Text=[" INFORMATION TECHNOLOGY"];

slide2Text=["THE FOUNDER",
            "APAC is promoted by Mr. Gunit Chadha , who after leading Deutsche Bank’s franchise in 16 countries across Asia Pacific returned to the financial services industry in India in a new entrepreneurial avatar. ",
            "As Founder of APAC Financial Services, a broad-spectrum credit lending platform across Micro, Small & Medium Enterprises.",
            "He has been awarded “Banker of the Year” and many other honours during his banking stint. ",
             "And has been credited for launching several new businesses for Deutsche Bank and I d b i Bank like Consumer Finance, Mortgages, MSME Financing, Structured Finance, Asset Management and Investment Banking."];

slide3Text=[" WHY IT IS IMPORTANT IN FINANCIAL SECTOR ?"];

slide4Text=["VALUES OF APAC GROUP AND I T TEAM",
           "APAC GROUP",
            "VALUES",
             "TEAM  i t",
             "Not just in letter but in spirit. ",
             "Governance",
             "The process that monitors and control key i t decisions that might have an impact - positive or negative - on business results. ",
             "I t Governance acts upon the old saying of ,trust but verify!",
             "Always asking “Is there a better way?",
             "Innovation & Excellence. ",
              "I t innovation in an enterprise involves using technology in new ways to create a more efficient organization and improve alignment between technology initiatives and business goals. ",
              "Technical excellence is a mix of extreme programming, TDD and solid principles. ",
              "These principles improve software quality and allow for efficient response times to both customer and business demands. ",
             "Innovation & Excellence is required to keep up with people’s changing needs & interest in the world of technology. ",
              "For our customers & our employees",
              "Empowerment",
             "Digital empowerment is the digital convenience and access you offer your customers and employees. ",
              "It means creating touch points across digital channels for your users, whether those users are employees, partners, or clients. ",
             "Fairness for our customers, employees and stakeholders. ",
              "Respect & Integrity",
             "Confidentiality refers to protecting information from being accessed by unauthorized parties. ",
             "Integrity refers to ensuring the authenticity of information—that information is not altered, and that the source of the information is genuine.",
              "Availability means that information is accessible by authorized users. ",
              "Partner to win",
              "Collaboration",
              "In I t, the term may be used in ways that fit the definition of using technology to achieve a specified goal. ",
              "Some refer to collaboration as a recursive process, where multiple steps produce incremental progress. "];

slide5Text=["TEAM I t",
             "SOLUTION ARCHITECT",
             "BUSINESS ANALYST",
             "DATA ANALYST",
              "ANDROID DEVELOPER",
             "SOFTWARE ENGINEERS"];

slide6Text=["DATABASE & SERVER MANAGEMENT ",
             "APAC has partnered with NTT-Net magic  SOLUTIONS for database & Sever management. ",
             "Data center : NTT-N m is one of the India’s leading provider of hyper scale, high density & managed infra structure services. ",
             "Multi-cloud : Its cloud management platform lets you deploy and manage your multi cloud strategy through a single consolidated interface. ",
             "SD-WAN : SD-WAN is an acronym for software-defined networking in a wide area network. It lets you set up a secure, centrally managed and enterprise class WAN using cloud infrastructure. ",
             "Managed security : It helps by reducing complexity and building a robust, agile and highly responsive security position for our enterprise with an end to end suite of fully managed services. ",
              "NM helps in minimizing risks, protect critical information and adapt to an everchanging threat environment. ",
             "NTT-NM’s comprehensive suite of D r Services, backed by world-class infrastructure and end-to-end managed services. ",
             " And it also ensures that your mission critical systems continue to be available and responsive under the most adverse of circumstances. "];

slide7Text=["ROLE OF I t TEAM",
             "Project Management",
             "Creating Project Plan",
             "Provide regular update to senior management or investor",
             "Gather requirements from business units or users",
              "Documentation of technical and business requirements",
              "Automate processes for teams like sales, operation, finance",
             "Creating best practices for faster development and execution",
             "Test solutions to validate objectives",
             "Monitor, manage and improve the efficiency of support services such as I t, H r, Accounts and Finance",
             "Researching new technologies and alternative methods of efficiency",
             "Setting and reviewing budgets and managing cost."];

slide8Text=["APAC IS IN PARTNERSHIP WITH below companies"];

slide9Text=["VENDOR and its features",
            "Net magic",
            "Database, Server & Infra Management",
            "Multi bureau",
            "Financial institutions use Credit Bureau score along with alternate data to assess the credit behavior of an individual.",
            "Fin bit",
             "This solution helps in analyzing  large amounts of financial data like bank statements and transactions and make sense of large data sets through meaningful insights and visual reports",
             "HUNTER - EXPERIAN",
             "Hunter screens for, and highlights potentially fraudulent applications, enabling fraudsters to be stopped before they become a customer,increasing fraud savings and assisting in management and control of bad debt.",
             "SHERLOCK - CRIF",
             "Sherlock lending, CRIFs anti-fraud solution is empowered with advance features to detect and investigate application and identify fraud",
             "ALFRESCO",
             "Document management software helps to store, access,  manage, control and track electronic documents and electronic images. ",
               " And also that of paper-based information that has been captured through document scanning technology.",
             "C k y c",
             "C KYC is a centralized depository of KYC records of customers engaged in various financial market segments. ",
             "The uniqueness of c KYC isthat once a person or investor completes his KYC process with a financial entity like a bank, Mutual Fund, or insurance company, he need not  enter a KYC norm again."];

slide10Text=["VENDOR and its features",
              "CERSAI",
             "CERSAI was formed with the primary intention of maintaining a centralized registry of equitable mortgages.",
             "In more recent times, CERSAI’s objectives were further extended to include registration of all kinds of mortgages prevalent in India. ",
              "as well as registration of any security interests that are created on assets not deemed to be tangible, such as book debt for example. ",
             "As per directives issued by the government, all lenders (banks, financial institutions etc) are required to register all information with regards to security interests that they have been created. ",
              "Registration must be completed within a period of 30 days of the creation of security interests. ",
             "DE-DUPLICATION",
             "Deduplication logic enables early detection of both existing customers and previous applicants early in the process to prevent costly rejections by detecting previously rejected prospects at the initial stage.",
             "KARZA",
              "Cloud-based tool and APIs actively used by banks and insurers to read, authenticate, score and enrich 15+ KYC documents in real time through government databases.",
             "CREDIWATCH",
             "CrediWatch is a ‘Data Insights-as-a-service’ company that provides lenders, businesses with actionable credit intelligence on private entities they need to improve trust and increase their lending and trading activity."];

slide11Text=[" LENDING SOLUTION",
             "APAC HAS PARTNERED WITH QUALTECH CONSULTANTS & ENCORE THEME FOR LENDING SOLUTION",
             "QUALTECH CONSULTANTS : Founded in 2003 as an I t solutions company, Qualtech is recognized as a leading provider of innovative software products  and services for disruptive startups and enterprises. ",
             "MIFIN : miFIN™ Lending Suite is a mobile lending technology platform designed for banking and financial services companies to completely automatethe ecosystem- from client solicitation to underwriting, disbursals, servicing, client service, credit management, collections, revenue and expense booking, regulatory compliance, etc. ",
             "PRODUCTS : HL or LAP or MELAP or BILL DISCOUNTING or S m e b"];

slide12Text=["LENDING SOLUTION",
               "ENCORE THEME : Encore Theme is a technology specialist in the Banking and Financial services sector catering to the dynamic needs of the financiers in the lending segment. ",
               "THEMEPRO : ThemePro is the next-generation SaaS and Cloud-based intelligent software solution bringing together business, customer and banks to deliver agile, collaborative, transparent and optimized solutions. ",
              "PRODUCT : LOAN AGAINST P o s RECEIVABLES (L a p r)"];

slide13Text=["MOBILITY BY QUALTECH",
             "Qualtech has developed mobile app through which relation ship officer can login cases from mobile",
             "The app is enabled with features like Geo-Tagging & bureau check.",
             "This enables in quick TAT on loan processing and  better customer experience.",
              "Demo video for training the RO’s on usage of App is here."];

slide14Text=["MIFIN"];

slide15Text=["MIFIN PROCESS MANUAL(L o s)"];

slide16Text=["MIFIN PROCESS MANUAL(L m s)"];

slide17Text=["THEMEPRO"];

slide18Text=["THEME PRO PROCESS MANUAL"];

slide19Text=["URL'S READY RECKONER",
              "MIFIN",
             "HFC",
              "Production",
              "http://124.153.83.218/mifin/",
              "UAT ",
              "http://124.153.83.216/mifin/",
              "NBFC",
             "Production",
              "http://124.153.83.219/mifin/",
              "UAT",
               "http://124.153.83.240/mifin/",
               "ENCORE THEME",
              "Production",
               "http://52.172.26.29/ThemePro_LSW/",
               "UAT",
                "http://13.71.120.188:6065/ThemePro_LSW/"];

slide20Text=["ID CREATION",
            "ID CREATION",
            "System Email ID",
              "miFIN",
               "selva.thibagar@apacfin.com",
              "Encore themes : Credit/Sales",
               "ankur.somani@apacfin.com",
             "Encore themes : Operations",
              "pathik.shah@apacfin.com",
             "For Email ID /Hardware/Software related queries please mail to  helpdesk@apacfin.com"];

slide21Text=["SMEB ONE",
             "SMEB ONE IS THE CREDIT AUTOMATION TOOL DEVELOPED BY INHOUSE TECH TEAM OF APAC. THIS TOOL HAS AUTOMATED THE MANUAL PROCESS OF, ",
             "CREDIT MEMO PREPARATION",
             "APPROVAL PROCESS",
             "SANCTION LETTER GENERATION",
             "PROCESS NOTE IS ATTACHED FOR REFERENCE"];

slide22Text=["F a q",
              "Question 1",
               "Karza portal not working on user's machine",
              "Answer is, Users face this issue when they try to use Karza on Internet explorer. Karza API's works best on Google chrome",
              "Question 2",
               "User is unable to perform any activity on miFIN. All the fields are freezed",
              "Answer is, Users try to edit a case from viewer tab. Viewer tab is only for view purpose. Go to LOS > Stage > Search the case",
              "Question 3",
               "Insurance amount not getting displayed at cash flow screen",
               "Answer is, This happens when loan details page is not saved in miFIN. Rollback the case to Loan details page-> Re-check the details-> save",
              "Question 4 ",
               "miFIN app is not showing product & branch",
              "Answer is, After installing the app for the first time, the app takes a little time to sync up with database", 
              "User need to wait for some time (half an hour max)",
              "In this duration database gets synced with the app and all the values start populating."];

slide23Text=["DO'S AND DON'TS",
              "DO's",
               "DON'Ts",
             "Password to be changed by the user, the moment ID is created and shared by I t team. ",
              "Don’t share your password with anyone. ",
              "Keep deleting your cache files on timely basis. It makes the system fast and avoids unnecessary system bugs. ",
               "The chances are one must be viewing at stale data if cache is not cleared on system. ",
              "At times, internet bandwidth is low. Due to which system takes time to move from one tab to another. Be patient. ",
              "Multiple clicks when system is slow, or buffering makes system throw some unexpected errors. "];

slide24Text=["DIGITIZING THE CUSTOMER JOURNEY"];

slide25Text=["DIGITIZATION & INNOVATIONS WILL CONTINUE",
           "THANK YOU !"];


slideAudioText=[slide1Text,
    slide2Text,
    slide3Text,
    slide4Text,
    slide5Text,slide6Text,slide7Text,slide8Text,slide9Text,slide10Text,slide11Text,slide12Text,slide13Text,slide14Text,slide15Text,
    slide16Text,slide17Text,slide18Text,slide19Text,slide20Text,slide21Text,slide22Text,slide23Text,slide24Text,slide25Text,];
////get voices
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

