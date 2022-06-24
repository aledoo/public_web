$(document).ready(function (){
    var classCycle=['image-1'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    $('body').addClass(classToAdd);
});