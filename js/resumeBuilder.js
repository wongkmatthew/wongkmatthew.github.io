'use strict';
//Matthew Wong 4/18
//Bio Object

var bio = {
	"name" : "Matthew Wong",
	"role" : "Business Systems Analyst",
	"welcomeMessage" : "Just a person who loves to learn! Thanks for stopping by and checking out my online resume.",
	"contacts" : {
		"mobile" : "Request via Email",
		"email" : "wong.k.matthew@gmail.com",
		"github" : "wongkmatthew",
		"twitter" : "@wongkmatthew",
		"location" : "Santa Clara"
	},
	"skills" : [
		"System Analysis", 
		"MySQL", 
		"System Design", 
		"Agile", 
		"Certified Scrum Master",  
		"Front End Development"
		],
	"biopic" : "images/pic.jpg"
	};

//Append Bio
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedbiopic).append(formattedWelcomeMsg);

//Append Skills

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	}
};
//Work Object

var work = {
	"jobs" : [
	{
		"employer" : "Cisco Systems",
		"title" : "Business Systems Analyst",
		"location" : "San Jose, California",
		"dates" : "November 2014 - Present",
		"description" : "•	System Designer and Project Manager of the Proactive Asset Recovery Tool, responsible for aiding the return process of assets valued from $60M - $100M<br>•	Create Oracle ERP setup automation processes, consolidating a two person role into one<br>•	Maintain production, test, and development Oracle environment setups in the Order Management Module<br>•	Solution ERP upgrades to support new business capabilities in the current system environment, specific operating units include UK and Brazil<br>•	Manage Oracle BR100 documents for country enablement, reducing headcount expense by $200,000 per quarter<br>•	Collaborate with customer service business partners to enable service replenishment orders on new system for Brazil, resulting in cost savings of estimated $400,000<br>•	Mentoring two entry level college graduates and responsible for integrating them into Cisco’s culture and success<br>"
	},
	{
		"employer" : "Cisco Systems",
		"location" : "San Jose, California",
		"title" : "IT Anaylst",
		"dates" : "July 2012 - November 2014",
		"description" : "•	Interacted with business partners to support business operations leading to increased productivity.  Analysis resulted in enhancements to ERP system and an increase in overall user experience<br>•	Delivered technical solutions to business partners based on business requirements and specifications<br>•	Analyzed and resolved system defects to maintain production normalization and prevent downtime<br>•	Managed Oracle ERP test environments to keep testing instances as close to production as possible<br>•	Mentored college graduate assigned to team and helped individual succeed by accelerating ramp up period<br>"
	},
	{
		"employer" : "Cisco Systems",
		"title" : "IT Analyst Intern",
		"location" : "San Jose, California",
		"dates" : "June 2011 - September 2011",
		"description" : "•	Reduced Cisco expense by maintaining and decommissioning SAP accounts equaling $120,000 in savings<br>•	Delivered key organizational highlights and accomplishments via newsletter to a 40+ person organization<br>•	Developed an internal website page for supply chain organization that increased productivity<br>•	Winner of Intern Global Connection Video Competition<br>"
	},
	{
		"employer" : "Santa Clara University",
		"title" : "Student Assitant",
		"location" : "Santa Clara, California",
		"dates" : "July 2010 - April 2011",
		"description" : "•	Maintained data in facility’s asset database responsible for tracking expenses<br>•	Assisted the Technical Specialist in tasks such as new application integration and employee adoption<br>•	Learned basic fundamentals of AutoCad and database management<br>"
	},
	{
		"employer" : "Town and Country Market",
		"title" : "Assistant Store Manager",
		"location" : "Porterville, California",
		"dates" : "July 2005 - August 2008",
		"description" : "•	Learned and experienced the trade on how to run a personal family business<br>•	Developed an understanding of the benefits of good business practices<br>•	Interacted with clientele and provide excellent customer service<br>"
	},
	],
};

//Append Work

work.display = function(){
for (var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").prepend(formattedLocation);
}
};

//Education Object

var education = {
    "schools" : [{
        "name" : "Santa Clara Univeristy",
        "location" : "Santa Clara, California",
        "majors" : [
        	"Operations Management and Information Systems",
        		],
        "dates" : "2008 - 2012",
        "url" : "www.scu.edu"
    },
    ],
    	"onlineCourses" : [{  
      	"title" : "Frontend Developer Nano Degree",
      	"school" : "Udacity",
      	"date" : "January 2016 - Present",
      	"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {  
      	"title" : "How to Use Git and GitHub",
      	"school" : "Udacity",
      	"date" : "January 2016",
      	"url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        ],  
};

//Append Education

education.display = function(){
    for (var school in education.schools) {
     	if (education.schools.hasOwnProperty(school)) {
        	$('#education').append(HTMLschoolStart);
        	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        	var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $('.education-entry:last').append(
            formattedName, formattedDates, formattedMajors);
           	$('.education-entry:last').prepend(
            formattedLocation);
    	}
   	}
   	$("#education").append(HTMLonlineClasses);
   	for (var onlineCourse in education.onlineCourses) {
   			if (education.schools.hasOwnProperty(school)) {
   			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			var schoolTitle = formattedTitle + formattedSchool;
 	
			$(".education-entry:last").append(schoolTitle, formattedDates, formattedURL);
	
		}
	}
};
//Project Object

var projects = {
	"projects" : [
	{
		"title" : "Proactive Asset Recovery Tool (PAR Tool)",
		"dates" : "10/1/2015 - 2/1/2016",
		"description" : "The Proactive Asset Recovery Tool was created to assist a group of users in returning owed hardware to Cisco.  What was once a process that was done manually offline through excel/email has now evolved into an End to End dynamic system.  The tool was designed and developed by a small team of 8 via the Agile Methodology.  Rally tool was used and I was the SCRUM Master.",
		"images" : ["images/parpic1.jpg", "images/parpic.jpg"]
	},
	{	
		"title" : "Config Automation",
		"dates" : "12/1/2015 - 1/15/2016",
		"description" : "Worked to develop a process to automate Oracle ERP setups for new country enablement.  Previously setups could take days to setup for test environments and production go-lives.  With new automation that took days takes minutes and enablement of new operating units are much faster.  Setups are done via interface tables built between front end Oracle form and Oracle back end.",
		"images" : ["images/config1.jpg", "images/config.jpg"]
	},
	{	
		"title" : "Brazil Service Replenishment",
		"dates" : "5/1/2015 - 9/1/2015",
		"description" : "Created solution to enable new order type in Brazil.  Complex nature of Brazil turned what should have been a simple enablement into an intricate challenge.  End result was successful deployment of solution and revenue over 500K to date.  Waterfall Methodology was used here and I was responsible for creating the functional specifications document for this initiative.",
		"images" : ["images/brsr.jpg", "images/brsr1.jpg"]
	},
	],
};

//Append Projects

projects.display = function(){
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0){
			for (var image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};


//Fuction Code

function locationizer(work_obj) {
	var locationArray = [];

	for(var job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

function inName(name) {
	var name = $("#name").html();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

//Click Tracking

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
 });

//Include Functions

bio.display();
work.display();
projects.display();
education.display();

//Everything Else

$("#main").append(internationalizeButton);	
$("#mapDiv").append(googleMap);