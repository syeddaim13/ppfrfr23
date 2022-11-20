const { type } = require("superagent/lib/utils")

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
            subjectlink = "Mathematics%20(9709)"
            break;
        case "IT":
            subjectcode = "9626"
            subjectlink = "Information%20Technology%20(9626)"
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
// special cases
    if (type == "sf" && subject == "IT" && year == "17" && monthcode == "m") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+year+'_'+"SF"+'_'+paper+'.zip'; //link for sf 2017 march
    }
// end special cases
    else if (type == "sf" && subject != "IT") {
        alert("uhh....are you sure you want SOURCE FILES? smh non IT ppl.")  //check if not IT & sf picked
    }

    else if (subject == "IT" && monthcode == "m" && variant != "2") {
        alert("You're an IT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }

    else if (type == "sf" && year == "17") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'.zip'; //link for sf 2017 june/nov
    }
    else if (type == "sf") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"0"+paper+'.zip'; //link for sf
    }

    else if (subject == "IT" && paper == "4" && type == "qp" && year == "17") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf';
        //link for IT p4 qp in 2017
    }
    else if (subject == "IT" && paper == "2" && type == "qp" && year == "17") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'2'+'.pdf';
        //link for IT p2 qp in 2017
    }
    else if (subject == "IT" && paper == "4" && type == "qp") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'04'+'.pdf';
        //link for IT p4 qp after 2017
    }
    else if (subject == "IT" && paper == "2" && type == "qp") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'02'+'.pdf';
        //link for IT p2 qp after 2017
    }
    else if (subject == "IT" && paper == "4" && type == "ms") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf'; //link for IT p4 ms
    }
    else if (subject == "IT" && paper == "2" && type == "ms") {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'2'+'.pdf'; //link for IT p2 ms
    }
    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("You want a March paper, yet picked a variant that is not equal to 2. This is shameful. We're redirecting you to variant 2 anyway.")
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf';
    } else {
        window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf';
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
            subjectlink = "Mathematics%20(9709)"
            break;
        case "IT":
            subjectcode = "9626"
            subjectlink = "Information%20Technology%20(9626)"
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
// special cases
    if (type == "sf" && subject == "IT" && year == "17" && monthcode == "m") {
    window.location.href = 'https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+year+'_'+"SF"+'_'+paper+'.zip'; //link for sf 2017 march
    }
// end special cases
    else if (type == "sf" && subject != "IT") {
        alert("uhh....are you sure you want SOURCE FILES? smh non IT ppl.")  //check if not IT & sf picked
    }

    else if (subject == "IT" && monthcode == "m" && variant != "2") {
        alert("You're an IT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }

    else if (type == "sf" && year == "17") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'.zip'); //link for sf 2017 june/nov
    }

    else if (type == "sf" && paper == "2" || paper == "4 ") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+"0"+paper+'.zip'); //link for sf
    }

    else if (subject == "IT" && paper == "4" && type == "qp" && year == "17") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf');
        //link for IT p4 qp in 2017
    }
    else if (subject == "IT" && paper == "2" && type == "qp" && year == "17") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'2'+'.pdf');
        //link for IT p2 qp in 2017
    }

    else if (subject == "IT" && paper == "4" && type == "qp") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'04'+'.pdf'); //link for IT p4 qp
    }
    else if (subject == "IT" && paper == "2" && type == "qp") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'02'+'.pdf');
        //link for IT p2 qp after 2017
    }

    else if (subject == "IT" && paper == "4" && type == "ms") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf'); //link for IT p4 ms
    }
    else if (subject == "IT" && paper == "2" && type == "ms") {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'2'+'.pdf'); //link for IT p2 ms
    }
    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("You want a March paper, yet picked a variant that is not equal to 2. This is shameful. We're redirecting you to variant 2 anyway.")
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf');
    } else {
        window.open('https://papers.gceguide.com/A%20Levels/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf');
    }
    
    
}