angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(function($routeProvider) {
   $routeProvider
   .when('/home',{ templateUrl:'pages/home.html', controller:'homeCtrl'})
   .when('/aboutus', { templateUrl:'pages/aboutus.html'})
   .when('/contactus', { templateUrl:'pages/contactus.html'});
});

angular.module('myApp').controller('HeaderController', ['$scope', '$location', function($scope, $location) {
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);


angular.module('myApp').controller('validateCtrl', ['$scope', function($scope) {
    $scope.user = '';
    $scope.password = '';
}]);

angular.module('myApp').controller('homeCtrl', ['$scope', function($scope){
   $scope.lists = [
   {
   type:"earn",
 image : "images/portfolio/thumb/item1.jpg" ,
           title:  "The white Bengal tiger",
           description: "The white Bengal tigers are distinctive due to the color of their fur. The white fur caused by a lack of the pigment pheomelanin, which is found in Bengal tigers with orange color fur. When compared to Bengal tigers, the white Bengal tigers tend to grow faster and heavier than the orange Bengal tiger. They also tend to be somewhat bigger at birth, and as fully grown adults. White Bengal tigers are fully grown when they are 2–3 years of age. White male tigers reach weights of 200 to 230 kilograms and can grow up to 3 meters in length.",
},
{
 type:"save",
     image:"images/portfolio/thumb/item2.jpg", 
                    title: "Should I interfere when my cats are fighting?",
                    description:"I have two eight month old kittens. Mostly they get along great - they snuggle and sleep together, and they play-fight sometimes, though not as frequently as they used to. Sometimes this lil guy, Res, harasses this lil girl, Essie, and I don't know if, or when, I should step in.I can definitely tell the difference between play fighting, which is mostly silent with an occasional meow, and Res harassing Essie, which results in Essie hissing at Res. Essie will run away from Res, Res will follow her and bother her, and she'll hiss and swipe at him. "
},
{
 type:"earn",
image: "images/portfolio/thumb/item3.jpg",
                    title:"Fox Cubs, Kits and Pups",
                   description:"Known for being slightly smaller than a domestic dog, and for it’s long snout, perked up ears, and bushy tail, the fox is a creature that can be found all over the world. Although there are over 30 species of canines that are considered foxes, only 12 are considered ‘true foxes’; the fox that is most commonly recognized is known as the ‘red fox‘. The fox is an omnivores creature than generally lives in harmony with humans; an experiment in Russia even proved that the ‘silver fox’, a close relative of the red fox, can be successfully domesticated over generations."      
},
{
 type:"save",
 image :"images/portfolio/thumb/item4.jpg",
                    title:"Omaha police have announce death of station squirrel",
                  description:"Police say the squirrel, which went by OPDSquirrel on the social media site, was found dead in the police headquarters' parking lot in downtown Omaha.A post by Omaha Officer Michael Bossman on Tuesday announced the death, accompanied by a picture of a dead squirrel outlined with chalk.The squirrel's Twitter account, however, remains active. The rodent's nearly 350 followers have been treated to follow-up tweets from friends and family - including one from Mrs. OPDSquirrel, who thanked everyone for their kind words and said 'he will be sorely missed by our 35 children and I.'"      
},
{
 type:"recent",
  image: "images/portfolio/thumb/item5.jpg" ,
                    title:"Baby trtle care",
                   description:"If you’re planning to take care of a baby turtle as a pet, you have to know and understand how to effectively care for it until it grow. Turtles are not the most popular pet, but they are cute and adorable that people get easily attracted to them. The most common pet baby turtles are the ones with green shells, such as the snapping turtles, the painted turtles, the cooter﻿s, and the baby sliders.Though it’s easy to buy a pet turtle in a pet store, Baby Turtle Care can be a little meticulous and sensitive.Taking care of baby turtles is different from taking care of adult turtles,"
},
{
 type:"save",
  image: "images/portfolio/thumb/item6.jpg",
                    title:"how to raise a white mice",
                    description:"White mice are the most common type in pet stores. These sociable little rodents typically live just 1 to 3 years even if they're raised and cared for properly. They weigh an ounce or less, they get stressed out easily, and they need to be handled gently -- so they're not ideal for young children who lack the understanding and even the motor skills to treat them delicately. If you do have young children, supervise them at all times when they interact with your mice.Wire cages with multiple levels allow for more movement and exploration, but don't get one that's too tall; mice easily fall and can get hurt."        
                  
},

];

}]);
