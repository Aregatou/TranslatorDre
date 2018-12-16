'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', function($scope, $http) {



var sentence = 'I\'m in the cribs they\'re round 6 bliss';
console.log(sentence)
var arr = sentence.split(' ');
console.log(arr);
  for(var i = 0; i <= arr.length; i++) {
    var r = nlp(arr[i]);
    if(r.contractions().out() !== "") {
      var exp = r.contractions().expand().out();
      arr.splice(i,1, exp);
    }
  }
  var news = arr.join(" ");
  console.log(news)



  $http.get('assets/converted.json').then(function(data) {
    var dreData = data.data;
    parseDre(dreData);
  });

  function parseDre(list) {
    var quoteList = [];
    for(var i = 0; i < list.length; i++) {
      quoteList.push(list[i]['So many options'])
    }
    // console.log(quoteList);
    $scope.quote = quoteList[Math.floor(Math.random() * quoteList.length)];
  }


});