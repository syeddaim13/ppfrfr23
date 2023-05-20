let version = "3.22"
console.log("Version: " + version)

var alwaysOpenInNewTab //global variable to store cookie value
var link //global variable to store link

//hide submit button until all fields are filled
document.getElementById("getpaperbtn").style.display = "none"

//event listeners that check if all fields are filled and shows submit button if they are

document.getElementById("subject").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }
})

document.getElementById("paper").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})

document.getElementById("month").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})

document.getElementById("year").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})

document.getElementById("type").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})

document.getElementById("variant1").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})

document.getElementById("variant2").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})

document.getElementById("variant3").addEventListener("change", function() {
    if (document.getElementById("subject").value !== "" && document.getElementById("paper").value !== "" && document.getElementById("month").value !== "" && document.getElementById("year").value !== "" && document.getElementById("type").value !== "" && (document.getElementById("variant1").checked == true || document.getElementById("variant2").checked == true || document.getElementById("variant3").checked == true)) {
        document.getElementById("getpaperbtn").style.display = ""
    }
    else {
        document.getElementById("getpaperbtn").style.display = "none"
    }

})




function getCookie(name) {
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {   //function to get cookie value
      var cookiePair = cookieArr[i].split("=");
      if (cookiePair[0] === name) {
        return cookiePair[1];
      }
    }
    return null;
  }

//event listener that selects variant 2 if march is picked and locks it

document.getElementById("month").addEventListener("change", function() {
    if (document.getElementById("month").value == "march") {
        document.getElementById("variant2").checked = true
        document.getElementById("variant1label").style.display = "none" //hide it
        document.getElementById("variant3label").style.display = "none"

        document.getElementById("variantfieldset").style.opacity = "0.5";
    }
    else if (document.getElementById("type").value == "gt" || document.getElementById("type").value == "er") {
        document.getElementById("variantfieldset").style.opacity = "0.5" 
    }
    else {
        document.getElementById("variant1label").style.display = "" //show it
        document.getElementById("variant3label").style.display = "" 
        document.getElementById("variant1").checked = true
        document.getElementById("variantfieldset").style.opacity = "";
    }
})

//event listener to lock paper and variant if gt or er is picked
document.getElementById("type").addEventListener("change", function() {
    if (document.getElementById("type").value == "gt" || document.getElementById("type").value == "er") {
        
        document.getElementById("paper").disabled = true
        document.getElementById("variant1").disabled = true
        document.getElementById("variant2").disabled = true
        document.getElementById("variant3").disabled = true
        document.getElementById("paper").disabled = true
        

        document.getElementById("variantfieldset").style.opacity = "0.5";
        document.getElementById("paperfieldset").style.opacity = "0.5";
    }
    else if (document.getElementById("month").value !== "march") {
        document.getElementById("variantfieldset").style.opacity = "0.5"
        document.getElementById("variant1label").style.display = "" //show it
        document.getElementById("variant3label").style.display = "" 
        document.getElementById("variant1").checked = true
        document.getElementById("variantfieldset").style.opacity = "";


        document.getElementById("paper").disabled = false
        document.getElementById("variant1").disabled = false
        document.getElementById("variant2").disabled = false
        document.getElementById("variant3").disabled = false
        document.getElementById("paper").disabled = false
        
        document.getElementById("variantfieldset").style.opacity = "";
        document.getElementById("paperfieldset").style.opacity = "";
    }
    else {
        document.getElementById("paper").disabled = false
        document.getElementById("variant1").disabled = false
        document.getElementById("variant2").disabled = false
        document.getElementById("variant3").disabled = false
        document.getElementById("paper").disabled = false
        
        document.getElementById("variantfieldset").style.opacity = "";
        document.getElementById("paperfieldset").style.opacity = "";
    }
})

//event listener that saves all values as cookies when they are changed
document.getElementById("subject").addEventListener("change", function() {
    document.cookie = "subject=" + document.getElementById("subject").value
    console.log("Subject Cookie set to: " + document.getElementById("subject").value)
})

document.getElementById("paper").addEventListener("change", function() {
    document.cookie = "paper=" + document.getElementById("paper").value
    console.log("Paper Cookie set to: " + document.getElementById("paper").value)
})

document.getElementById("month").addEventListener("change", function() {
    document.cookie = "month=" + document.getElementById("month").value
    console.log("Month Cookie set to: " + document.getElementById("month").value)
})

document.getElementById("year").addEventListener("change", function() {
    document.cookie = "year=" + document.getElementById("year").value
    console.log("Year Cookie set to: " + document.getElementById("year").value)
})

document.getElementById("type").addEventListener("change", function() {
    document.cookie = "type=" + document.getElementById("type").value
    console.log("Type Cookie set to: " + document.getElementById("type").value)
})

document.getElementById("variant1").addEventListener("change", function() {
    document.cookie = "variant1=" + document.getElementById("variant1").checked
    console.log("V1 Cookie set to: " + document.getElementById("variant1").checked)
})

document.getElementById("variant2").addEventListener("change", function() {
    document.cookie = "variant2=" + document.getElementById("variant2").checked
    console.log("V2 Cookie set to: " + document.getElementById("variant2").checked)
})

document.getElementById("variant3").addEventListener("change", function() {
    document.cookie = "variant3=" + document.getElementById("variant3").checked
    console.log("V3 Cookie set to: " + document.getElementById("variant3").checked)
})

document.getElementById("newTabCheckbox").addEventListener("change", function() {
    document.cookie = "newTabCheckboxVal=" + document.getElementById("newTabCheckbox").checked
    console.log("newtabcheckbox Cookie set to: " + document.getElementById("newTabCheckbox").checked)
})

//read cookies using getCookie function and set values when page loads if cookie present

window.onload = function() {
    document.getElementById("subject").value = getCookie("subject")
    document.getElementById("paper").value = getCookie("paper")
    document.getElementById("month").value = getCookie("month")
    document.getElementById("year").value = getCookie("year")
    document.getElementById("type").value = getCookie("type")
    document.getElementById("variant1").checked = getCookie("variant1") == "true"
    document.getElementById("variant2").checked = getCookie("variant2") == "true"
    document.getElementById("variant3").checked = getCookie("variant3") == "true"

    if (document.getElementById("month").value == "march") {
        document.getElementById("variant2").checked = true
        document.getElementById("variant1label").style.display = "none" //hide it
        document.getElementById("variant3label").style.display = "none"

        document.getElementById("variantfieldset").style.opacity = "0.5";
    }
}

  
function run() {

    var cookieValue = getCookie("alwaysOpenInNewTab"); //check if cookie exists

    if (cookieValue !== "true" && cookieValue !== "false") { //cookie doesn't exist, show modal
    
    // Show the modal
    var modal = document.getElementById("dialogbox");
    modal.showModal();

    modal.addEventListener("click", e => {  //mechanism to close modal when clicked outside
        const dialogDimensions = modal.getBoundingClientRect()
        if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
        ) {
        modal.close()
        }
    })

    // Get the modal button and checkbox
    var newTabCheckbox = document.getElementById("newTabCheckbox");
    var RememberCheckbox = document.getElementById("RememberCheckbox");
    var modalButton = document.getElementById("modalButton");

    // Set the checkbox value to the value of the cookie of newTabCheckboxVal
    newTabCheckbox.checked = getCookie("newTabCheckboxVal") == "true";

    // Save the checkbox value as a cookie when the modal button is clicked
    modalButton.onclick = function () {
      alwaysOpenInNewTab = newTabCheckbox.checked;
      if (RememberCheckbox.checked) {
        document.cookie = "alwaysOpenInNewTab=" + alwaysOpenInNewTab;
        console.log("Remember new tab always Cookie set to: " + alwaysOpenInNewTab);
      }



        modal.close(); //close modal, even if error occurs
        startSort()
    };
  }
    else {
        alwaysOpenInNewTab = cookieValue;
        console.log("Cookie found: " + alwaysOpenInNewTab); //cookie found, no need to show modal
        startSort()
    }


}


function startSort() {


    subject = document.getElementById("subject").value
    paper = document.getElementById("paper").value
    month = document.getElementById("month").value
    year = document.getElementById("year").value
    type = document.getElementById("type").value
    variant = document.querySelector('input[name="variant"]:checked').value;
    maxpapers = 5
    papervalue = parseInt(paper)
    yearvalue = parseInt(year)
    sfeligible = false
    

    switch (subject) {
        case "Math":
            subjectcode = "9709"
            subjectlink = "Mathematics%20(9709)"
            break;
        case "IT":
            subjectcode = "9626"
            subjectlink = "Information%20Technology%20(9626)"
            maxpapers = 4
            sfeligible = true
            break;
        case "Chemistry":
            subjectcode = "9701"
            subjectlink = "Chemistry%20(9701)"
            break;
        case "Physics":
            subjectcode = "9702"
            subjectlink = "Physics%20(9702)"
            break;
        case "Biology":
            subjectcode = "9700"
            subjectlink = "Biology%20(9700)"
            break;
        case "Business":
            subjectcode = "9609"
            subjectlink = "Business%20(9609)"
            maxpapers = 3
            sfeligible = true 
            break;
        case "Sociology":
            subjectcode = "9699"
            subjectlink = "Sociology%20(9699)"
            maxpapers = 4
            break;
        default:
            alert("Error in switch. Please report this.");
    }
    switch (month) {
        case "june":
            monthcode = "s"
            break;
        case "november":
            monthcode = "w"
            break;
        case "march":
            monthcode = "m"
            break;
        default:
            alert("Error in month switch. Please report this.");
    }
    console.log(subjectcode)
//paper validation and grade thresholds
    if (papervalue > maxpapers) {
        alert("Please select a valid paper. ("+subject+" only has "+maxpapers+" papers.)") 
        // delete link variable if already set so that it kills the function
        link = undefined
    }

    else if (type == "gt") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"gt.pdf"; //link for gt
    }

    else if (type == "er") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"er.pdf"; //link for er
    }


//paper validation and grade thresholds end
    // special cases
    else if (type == "sf" && subject == "IT" && year == "17" && monthcode == "m") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+year+'_'+"SF"+'_'+paper+'.zip'; //link for sf 2017 march
    }
// end special cases

    //IT
    else if (type == "sf" && sfeligible == false ) {
        alert("Source files and/or insert files aren't available for "+subject+".")  //validate sf subject
        link = undefined
    }

    else if (subject == "IT" && monthcode == "m" && variant != "2") {
        alert("Please select Variant 2.") //check if sf picked with march and non 1 variant
        link = undefined
    }

    else if (type == "sf" && subject == "IT") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.zip'; //link for sf
    }

    else if (subject == "IT" && paper == "4" && type == "qp" && year == "17") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf';
        //link for IT p4 qp in 2017
    }
    else if (subject == "IT" && paper == "4" && type == "qp") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'04'+'.pdf';
        //link for IT p4 qp after 2017
    }

    else if (subject == "IT" && paper == "4" && type == "ms") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf'; //link for IT p4 ms
    }
    //IT END

    //Business
    else if(subject == "Business" && paper != "3" && type == "sf") {
        alert("Inserts are only available for paper 3.")
    }
    
    else if(subject == "Business" && paper == "3" && type == "sf" && yearvalue <= 17) {
        alert("Inserts weren't available in this year.")
    }
    
    else if (subject == "Business" && paper == "3" && type == "sf" && monthcode == "m" && variant != '2') {
        alert("Please pick variant 2.")
    }

    else if (subject == "Business" && paper == "3" && type == "sf") {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+'in'+'_'+paper+variant+'.pdf';
    }
    //Business END

    else if (monthcode == "m" && variant != "2") { //validate march variant
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf';
    } else {
        link = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf';
    }
    
    openLink()
    
}

function openLink() {

    var cookieValue = getCookie("alwaysOpenInNewTab");
    console.log("Cookie value: " + cookieValue);

    var newTabCheckbox = document.getElementById("newTabCheckbox");


    if (cookieValue === "true" || newTabCheckbox.checked) { //if cookie is true or checkbox is checked
        window.open(link);
    } else {
        window.open(link, "_self");
    }
}

