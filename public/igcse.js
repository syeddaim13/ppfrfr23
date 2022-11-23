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
            maxpapers = 5
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
    yearval = parseInt(year)
    if (monthcode == "m" && yearval < 17) {
        alert("March papers weren't fully available before 2017, and are therefore not supported.")
    }
    if (year == "22" && monthcode == "w") {
        alert("November papers aren't available yet.")
    }
//paper validation end
// special cases
    
// end special cases
   
    //ict
    else if (type == "sf" && subject != "igICT" && subject != "igEnglish") {
        alert("Source files are not available for this subject.")  //check if not ICT & sf picked
    }

    else if (subject == "igICT" && monthcode == "m" && variant != "2") {
        alert("You're an IG ICT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }
  

    else if (subject == "igICT" && paper != "1") {
        alert("We're sorry but you'll have to get this file yourself. Cambridge keeps changing the paper format. We're redirecting you to the year page.")
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year; //giveup.jpg
    }

    //ict end

    //english

    else if (subject == "igEnglish" && monthcode == "m" && variant != "2") {
        alert("Please select variant 2 for March. Thanks.") //check if picked march and non 1 variant
    }
    else if (subject == "igEnglish" && type == "sf" && paper == "3") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"sf"+'_'+paper+variant+'.mp3'; //link for p3/4 audio
    }
    else if (subject == "igEnglish" && type == "sf" && paper == "4") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"sf"+'_'+paper+variant+'.mp3'; //link for p3/4 audio
    }

    else if (subject == "igEnglish" && type == "sf" && paper != "4" ) {
        alert("Audio files aren't available for this paper.")
    }
    else if (subject == "igEnglish" && type == "sf" && paper != "3" ) {
        alert("Audio files aren't available for this paper.")
    }
  
    else if (subject == "igEnglish" && paper == "5") {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"rp"+'_'+paper+variant+'.pdf'; //link for p5 speaking
    }



    //english end







    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("Please select variant 2 to retrieve March papers. For now, we're redirecting you to variant 2 anyway. If this is a mistake, please report it.")
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf';
    } else {
        window.location.href = 'https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf';
    }
    
    
}

// change to window.open() for newtab()
function newtab() {
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
            maxpapers = 5
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
    yearval = parseInt(year)
    if (monthcode == "m" && yearval < 17) {
        alert("March papers weren't fully available before 2017, and are therefore not supported.")
    }
    if (year == "22" && monthcode == "w") {
        alert("November papers aren't available yet.")
    }
//paper validation end
// special cases
    
// end special cases
   
    //ict
    else if (type == "sf" && subject != "igICT" && subject != "igEnglish") {
        alert("Source files are not available for this subject.")  //check if not ICT & sf picked
    }

    else if (subject == "igICT" && monthcode == "m" && variant != "2") {
        alert("You're an IG ICT student, but can't read the menu that TELLS YOU TO PICK VARIANT TWO FOR MARCH. try again.") //check if sf picked with march and non 1 variant
        location.reload()
    }
  

    else if (subject == "igICT" && paper != "1") {
        alert("We're sorry but you'll have to get this file yourself. Cambridge keeps changing the paper format. We're redirecting you to the year page.")
        window.open('https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year); //giveup.jpg
    }

    //ict end

    //english

    else if (subject == "igEnglish" && monthcode == "m" && variant != "2") {
        alert("Please select variant 2 for March. Thanks.") //check if picked march and non 1 variant
    }
    else if (subject == "igEnglish" && type == "sf" && paper == "3") {
        window.open('https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"sf"+'_'+paper+variant+'.mp3'); //link for p3/4 audio
    }
    else if (subject == "igEnglish" && type == "sf" && paper == "4") {
        window.open('https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"sf"+'_'+paper+variant+'.mp3'); //link for p3/4 audio
    }

    else if (subject == "igEnglish" && type == "sf" && paper != "4" ) {
        alert("Audio files aren't available for this paper.")
    }
    else if (subject == "igEnglish" && type == "sf" && paper != "3" ) {
        alert("Audio files aren't available for this paper.")
    }
  
    else if (subject == "igEnglish" && paper == "5") {
        window.open('https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+"rp"+'_'+paper+variant+'.pdf'); //link for p5 speaking
    }



    //english end







    else if (monthcode == "m" && variant != "2") { //validate march variant
        alert("Please select variant 2 to retrieve March papers. For now, we're redirecting you to variant 2 anyway. If this is a mistake, please report it.")
        window.open('https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+'2'+'.pdf');
    } else {
        window.open('https://papers.gceguide.com/Cambridge%20IGCSE/'+subjectlink+'/20'+year+'/'+subjectcode+'_'+monthcode+year+'_'+type+'_'+paper+variant+'.pdf');
    }
    
    
}

