// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
	$.ajax({
		url: "/data/Skills.txt",
		success: function(res) {
			var lines = res.split("\n").slice(1);
			var remove = "11-1011.00	2.A.1.a	";
			var skills = [];

			lines.forEach(function(line) {
					var tmp = line.substr(remove.length);
					tmp = tmp.slice(0, tmp.indexOf("	"));

					if(skills.indexOf(tmp) === -1 && tmp !== "") {
						skills.push(tmp);
					}
			});

			skills.sort(function(a, b){
			    return a.localeCompare(b);
			});

			$(".skills").html("");

			skills.forEach(function(skill) {
				$(".skills").append("<option>" + skill + "</option>");
			});

			$(".skills,.skills option").css("color", "black");
		}
	});
});
