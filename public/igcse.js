function run() {
    subject = document.getElementById("subject").value
    paper = document.getElementById("paper").value
    month = document.getElementById("month").value
    year = document.getElementById("year").value
    type = document.getElementById("type").value
    variant = document.getElementById("variant").value
    papervalue = parseInt(paper)

    switch (subject) {
        case "igAccounting":
            subjectcode = "0452"
            subjectlink = "Accounting%20(0452)"
            maxpapers = 2
            break;
        case "igArabic":
            subjectcode = "0508"
            subjectlink = "Arabic%20-%20First%20Language%20(0508)"
            maxpapers = 2
            // work required
            break;
        case "igBiology":
            subjectcode = "0610"
            subjectlink = "Biology%20(0610)"
            maxpapers = 6
            break;
        case "igBusiness":
            subjectcode = "0450"
            subjectlink = "Business%20Studies%20(0450)"
            maxpapers = 2
            break;
        case "igChemistry":
            subjectcode = "0620"
            subjectlink = "Chemistry%20(0620)"
            maxpapers = 6
            break; 
        case "igCSci":
            subjectcode = "0478"
            subjectlink = "Computer%20Science%20(0478)"
            maxpapers = 2
            break;
        case "igEconomics":
            subjectcode = "0455"
            subjectlink = "Economics%20(0455)"
            maxpapers = 2
            break;
        case "igEnglish":
            subjectcode = "0510"
            subjectlink = "English%20as%20a%20Second%20Language%20(Speaking%20endorsement)%20(0510)"
            maxpapers = 5 //add listening mp3 source files and speaking prompts
            break;
        case "igICT":
            subjectcode = "0417"
            subjectlink = "Information%20and%20Communication%20Technology%20(0417)"
            maxpapers = 3
            break; //fix sf
        case "igMath":
            subjectcode = "0580"
            subjectlink = "Mathematics%20(0580)"
            maxpapers = 4
            break;
        case "igPhysics":
            subjectcode = "0625"
            subjectlink = "Physics%20(0625)"
            maxpapers = 6
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
//paper validation
    if (papervalue > maxpapers) {
        alert("The chosen subject does not have a paper pertaining to this value."+" The maximum value for "+subject+" is "+maxpapers+".")
    }
//paper validation end
    // special cases
    else if (type == "sf" && subject == "IT" && year == "17" && monthcode == "m") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+year+'_'+"SF"+'_'+paper+'.zip'; //link for sf 2017 march
    }
// end special cases
    else if (type == "sf" && subject != "igICT") {
        alert("Source files are not available for this subject.")  //check if not ICT & sf picked
    }

    else if (subject == "IT" && monthcode == "m" && variant != "2") {
        alert("You're an IG ICT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }

    else if (type == "sf") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.zip'; //link for sf
    }

    else if (subject == "IT" && paper == "4" && type == "qp" && year == "17") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf';
        //link for IT p4 qp in 2017
    }
    else if (subject == "IT" && paper == "4" && type == "qp") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'04'+'.pdf';
        //link for IT p4 qp after 2017
    }

    else if (subject == "IT" && paper == "4" && type == "ms") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+'4'+'.pdf'; //link for IT p4 ms
    }

    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("Please select variant 2 to retrieve March papers. For now, we're redirecting you to variant 2 anyway. If this is a mistake, please report it.")
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf';
    } else {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf';
    }
    
    
}

// change to window.open() for newtab()