
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(work["position"]);
$("#main").append(education.name);

//var awesomeThoughts = "I am Matthew Wong and I am AWESOME";
//var funThoughts = awesomeThoughts.replace("AWESOME","fun");
//console.log(awesomeThoughts);
//console.log(funThoughts);
//console.log(formattedRole);

var role = "Business Systems Analyst";
var formattedName = HTMLheaderName.replace("%data%", "Matthew Wong");
var formattedRole = HTMLheaderRole.replace("%data%", role);

var education = {};
education["name"] = "Santa Clara University";
education["major"] = "Operations Management and Information Systems";
education["years"] = "2008 -2012";
education["city"] = "Santa Clara, CA, US";

var projects = {};
projects["Portfolio"] = "Portfolio";
projects["Project X"] = "Project X";

/*
for(var i>0, i=0, i--){
	$("#workExperience").append(HTMLworkStart);

	var variable = HTMLworkStart.replace("%data%", work.jobs[i]);
}
*/