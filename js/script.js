 var course = {
  title: "Software engineering",
  length: 140,
  languages: ['java', 'Fortran'],
  description: "Introduction to structured numeric programming",
  difficulty: "Beginner",
  cost: 24500
};

function Course(data) {
  'use strict';
  this.id = data.id;
  this.title = data.title;
  this.length = data.length;
  this.languages = data.languages;
  this.description = data.description;
  this.difficulty = data.difficulty;
  this.cost = data.cost;

}
var Software_engineering_course_data = {
  id: 1,
  title: "Software engineering",
  length: 72,
  languages: ['Java', 'C'],
  description: "Learning how to build basic softwares for desktops and small devices",
  difficulty: "Intermediate",
  cost: 27500
};
var game_design_data = {

  id: 2,
  title: "Game design",
  length: 65,
  languages: ['Visual basic', 'Swift', 'C#'],
  description: "Intermediate game design introduction",
  difficulty: "beginner",
  cost: 17345
};
var machine_learning_data = {

  id: 3,
  title: "Machine Learning",
  length: 67,
  languages: ['python3'],
  description: "Learning how machines make decisions using complex algorithms and logic trees",
  difficulty: "Advanced",
  cost: 15678
};
var compiler_design_data = {

  id: 4,
  title: "Compiler design",
  length: 102,
  languages: ['C'],
  description: "Designing compilers using C ",
  difficulty: "Intermediate",
  cost: 23240
};
var computer_systems_data = {

  id: 5,
  title: "computer systems",
  length: 34,
  languages: ['C', 'java'],
  description: "Undertanding how computers software and networks work together",
  difficulty: "Intermediate",
  cost: 15240
};
var Software_engineering_course = new Course(Software_engineering_course_data);
var compiler_design_course = new Course(compiler_design_data);
var machine_learning_course = new Course(machine_learning_data);
var game_design_course = new Course(game_design_data);
var computer_systems_course = new Course(computer_systems_data);
var courses = [compiler_design_course, machine_learning_course, game_design_course];

var cart = {
      course_titles : [],
      course_languages : [],
      total_costs : [],
      };
function Checkout(item){

      this.course_title = item.title;
      this.course_languages = item.languages;
      this.cost = item.cost;

};
function calculateCost(items_cost){
      let total_cost = 0 ;
      for (var i = 0; i < items_cost.length; i++){
          total_cost += items_cost[i] ;
      };
      return total_cost ;
};
$(document).ready(function() {
  'use strict';
  var course_id;
  for (var index = 0; index < courses.length; index++) {
    $("#course").prepend($('<div class="col-xm-4"><div class="card mr-1 mb-2 text-center" id="course" data-course-information="it works" style="width : 250px;"><h3 class="card-title">' +
      courses[index].title +
      '</h3><p class="card-text">' + courses[index].description +
      '<hr>' + '<br>' +
      'Course Duration : ' + courses[index].length + ' Hours' +
      '<br>' + 'Cost : R ' + courses[index].cost +
      '<br>' + 'Programming languages : ' + courses[index].languages +
      '<br>' + 'Difficulty : ' + courses[index].difficulty +
      '</p>' +
      '<button type="button" class="btn btn-dark btn-block join"  data-course-data=' +
      courses[index].id +
      '>Apply</button></div></div>'));
  };
  $('.join').on('click', function() {
         var course_id = $(this).data("course-data");
         addToCart(course_id);
  });

  function addToCart(key){
      let item ;
      for (var index = 0 ; index < courses.length ; index++ ){
          if ( courses[index].id == key ){
              item = new Checkout(courses[index]);
              cart.course_titles.push(item.course_title);
              cart.course_languages.push(item.course_languages);
              cart.total_costs.push(item.cost);
          };
      };
  };
});
