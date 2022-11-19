function run() {
    subject = document.getElementById("subject").value
    paper = document.getElementById("paper").value
    month = document.getElementById("month").value
    year = document.getElementById("year").value
    type = document.getElementById("type").value
    variant = document.getElementById("variant").value

    switch (subject) {
        case "Math":
            subjectcode = "9709"
            break;
        case "IT":
            subjectcode = "9626"
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

    if (type == "sf" && subject != "IT") {
        alert("uhh....are you sure you want SOURCE FILES? smh non IT ppl.")  //check if not IT & sf picked
    }

    else if (subject == "IT" && monthcode == "m" && variant != "2") {
        alert("You're an IT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }

    else if (type == "sf") {
        window.location.href = '/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"04"+'.zip'; //link for sf
    }

    else if (subject == "IT" && paper == "4" && type == "qp") {
        window.location.href = '/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"04"+'.pdf'; //link for IT p4 qp
    }

    else if (subject == "IT" && paper == "4" && type == "ms") {
        window.location.href = '/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"4"+'.pdf'; //link for IT p4 ms
    }

    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("You want a March paper, yet picked a variant that is not equal to 2. This is shameful. We're redirecting you to variant 2 anyway.")
        window.location.href = '/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf';
    } else {
        window.location.href = '/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf';
    }
    
    
}

function newtab() {
    subject = document.getElementById("subject").value
    paper = document.getElementById("paper").value
    month = document.getElementById("month").value
    year = document.getElementById("year").value
    type = document.getElementById("type").value
    variant = document.getElementById("variant").value

    switch (subject) {
        case "Math":
            subjectcode = "9709"
            break;
        case "IT":
            subjectcode = "9626"
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

    if (type == "sf" && subject != "IT") {
        alert("uhh....are you sure you want SOURCE FILES? smh non IT ppl.")  //check if not IT & sf picked
    }

    else if (subject == "IT" && monthcode == "m" && variant != "2") {
        alert("You're an IT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }

    else if (type == "sf") {
        window.open('/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"04"+'.zip'); //link for sf
    }

    else if (subject == "IT" && paper == "4" && type == "qp") {
        window.open('/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"04"+'.pdf'); //link for IT p4 qp
    }

    else if (subject == "IT" && paper == "4" && type == "ms") {
        window.open('/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"4"+'.pdf'); //link for IT p4 ms
    }

    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("You want a March paper, yet picked a variant that is not equal to 2. This is shameful. We're redirecting you to variant 2 anyway.")
        window.open('/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf');
    } else {
        window.open('/'+subject+'/'+paper+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf');
    }
    
    
}