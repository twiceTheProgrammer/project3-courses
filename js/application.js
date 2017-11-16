var course = {

   id : 0 ,
   image : 'images/software_engineering.jpg' ,
   title : "Software engineering",
   length : 140 ,
   languages : ['java' ,'Fortran'],
   description : "Introduction to structured numeric programming" ,
   difficulty : "Beginner" ,
   cost : 24500

}
function newCourse(data){

     this.title = data.title ;
     this.length = data.length ;
     this.languages = data.languages ;
     this.description = data.description ;
     this.difficulty = data.difficulty ;

}
var Software_engineering_course_data = {

     id : 1 ,
     image : 'images/software_engineering.png' ,
     title : "Software engineering" ,
     length : 72 ,
     languages : ['Java' , 'C'],
     description : "Learning how to build basic softwares for desktops and small devices",
     difficulty : "Intermediate" ,
     cost : 27500
};
var game_design_data = {

     id : 2 ,
     image : 'images/game_design.jpg' ,
     title : "Game design" ,
     length : 65 ,
     languages : ['Visual basic' , 'Swift' , 'C#'],
     description : "Intermediate game design introduction" ,
     difficulty : "beginner" ,
     cost : 17345
};
var machine_learning_data = {

     id : 3 ,
     image : 'images/machine_learning.jpg' ,
     title : "Introduction to Machine Learning" ,
     length : 67 ,
     languages : ['python3'],
     description : "Learning how machines make decisions using complex algorithms and logic trees" ,
     difficulty : "Advanced" ,
     cost : 15678
};
var compiler_design_data = {

     id : 4 ,
     image : 'images/compiler_design.jpg' ,
     title : "Advanced Compiler design",
     length : 102 ,
     languages : ['c'],
     description : "Designing Gcc compilers" ,
     difficulty : "Intermediate" ,
     cost : 23240
};
var Software_engineering_course = new newCourse(Software_engineering_course_data);
var compiler_design_course = new newCourse(compiler_design_data);
var machine_learning_course = new newCourse(machine_learning_data);
var game_design_course = new newCourse(game_design_data);
var courses = [machine_learning_course];

$(document).ready(function(){
   var index = 0 , title ;
   for (index ; index < courses.length ; index++){
 }
});
