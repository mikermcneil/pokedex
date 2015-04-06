angular.module('pokedex', [
  'famous.angular'
]);



angular.module('pokedex')
.controller('PokedexCtrl', function($scope, $famous, $timeout, $http) {
  var Transitionable = $famous['famous/transitions/Transitionable'];


  // Show loading state
  // $scope.loading = true;
  var t = new Transitionable(0);
  t.set(0);
  t.set(Math.PI * 2.0, {duration: 1750, curve: 'linear'}, function whenDone(){});
  $scope.getRotateY = function whenUIWantsToKnowTheYRotationAngleInRadians(){
    return t.get();
  };

  // Hide loading state
  // $timeout(function (){
  //   $scope.loading = false;
  // }, 500);

  // Default starting pokemon to bulbasaur
  $scope.pokemonId = 1;

  $scope.$watch('pokemonId', function whenTextInputChanges() {

    // Ignore new pokemon id if it is not valid.
    if (!(+$scope.pokemonId > 0)) {
      return;
    }

    $scope.error = '';
    $scope.loading = true;
    $http.get('/pokemon/' + $scope.pokemonId)
    .then(function(res){
      $scope.pokemon = res.data;
    })
    .catch(function(res){
      $scope.error = res.data;
    })
    .finally(function(){
      $scope.loading = false;
    });
  });

});
//   // var Transform = $famous['famous/core/Transform'];
//   var Transitionable = $famous['famous/transitions/Transitionable'];
//   var Easing = $famous['famous/transitions/Easing'];

//   var tile = {
//     width: 300,
//     height: 115,
//     margin: {
//       left: 10,
//       bottom: 10
//     },
//     countPerColumn: 4,
//     columnCount: 2
//   };
//   $scope.tile = tile;

//   var tileGrid = {
//     margin: {
//       left: 30
//     }
//   };


// /*--------------------------------------------------------------*/

//   $scope.pokemons = [];

//   $timeout(function (){
//      $scope.pokemons = [
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat1.png',
//         name: 'Rocco',
//         location: 'Seattle, WA',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat2.png',
//         name: 'Tabby',
//         location: 'Phoenix, AR',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat3.png',
//         name: 'Meiska',
//         location: 'Reston, VA',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat4.png',
//         name: 'Fat Max',
//         location: 'San Francisco, CA',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat5.png',
//         name: 'Izzy',
//         location: 'Atlanta, GA',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat6.png',
//         name: 'Powder',
//         location: 'Seattle, WA',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat7.png',
//         name: 'David',
//         location: 'Salem, OR',
//         t: new Transitionable(0)
//       },
//       {
//         picture: 'https://famo.us/integrations/angular/img/cats/cat8.png',
//         name: 'Maggie',
//         location: 'Sarasota, FL',
//         t: new Transitionable(0)
//       }
//     ];

//   }, 750);


//   $scope.catTile = {
//     translate: function(catT, $index) {
//       var totalWidth = tile.width + tile.margin.left;
//       var x = $index >= tile.countPerColumn ? totalWidth : 0;

//       var totalHeight = tile.height + tile.margin.bottom;
//       var y = ($index % tile.countPerColumn) * totalHeight;

//       var z = 0;

//       return [x, y, z];
//     },
//     rotateX: $timeline([
//       [0, -Math.PI / 2, Easing.outElastic],
//       [0.99, 0, Easing.inQuart],
//       [1.99, -Math.PI / 2]
//     ])
//   };

//   $scope.catEnter = function(t, $done) {
//     t.set(1, { duration: 1500 }, $done);
//   };

//   $scope.catLeave = function(t, $done) {
//     t.halt();
//     t.set(2, { duration: 100 }, function() {
//       t.set(0, { duration: 1 });
//       $done();
//     });
//   };



// });
































































































































// .run(function($rootScope, $media) {
//   $rootScope.isMobile = function() {
//     return !$media.$query('sm');
//   };

//   $rootScope.isDesktop = function() {
//     return $media.$query('sm');
//   };
// });

// .config(function($mediaProvider, $famousProvider) {
//   var $famous = $famousProvider.$get();
//   var Timer = $famous['famous/utilities/Timer'];

//   var FAMOUS_FIELD_HANDLERS = [
//       {
//         field: 'transform',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.transformFrom(payloadFn);
//         }
//       },
//       {
//         field: 'size',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.sizeFrom(payloadFn);
//         }
//       },
//       {
//         field: 'origin',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.originFrom(payloadFn);
//         }
//       },
//       {
//         field: 'align',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.alignFrom(payloadFn);
//         }
//       },
//       {
//         field: 'opacity',
//         handlerFn: function(element, payloadFn){
//           var isolate = $famous.getIsolate(angular.element(element).scope());
//           isolate.modifier.opacityFrom(payloadFn);
//         }
//       },
//       {
//         field: 'options',
//         handlerFn: function(element, payloadFn){
//           //TODO:  support
//           throw new Error('unimplemented: cannot yet set options through Sheets');
//           //we need to angular $watch this one, since
//           //options doesn't support functional assignment
//           //Need to make sure to clean up watchers when this gets re-called
//         }
//       },
//   ];

//   angular.forEach(FAMOUS_FIELD_HANDLERS, function(fieldHandler) {
//     $mediaProvider.$registerFieldHandler(fieldHandler.field, fieldHandler.handlerFn);
//   });


// })

// ;




/*--------------------------------------------------------------*/

  // $scope.enter = function($done) {
  //   stateTransitions.enter(t, function() {
  //     playAnimation();
  //     $done();
  //   });
  // };

  // function playAnimation() {
  //   var repeatAutoplay = $interval(function() {
  //     if ($scope.data.repeatCount + 1 >= 9) {
  //       $interval.cancel(repeatAutoplay);
  //       return;
  //     }
  //     $scope.data.repeatCount++;
  //   }, 100);
  // }

  // $scope.leave = function($done) {
  //   stateTransitions.leave(t, function() {
  //     $done();
  //   });
  // };

  // $scope.entireView = {
  //   translate: $timeline([
  //     [0, [0, 0, 0]],
  //     [1, [0, 0, 0], Easing.inQuart],
  //     [2, [0, 0, 150]],
  //   ]),
  //   opacity: $timeline([
  //     [0, 0],
  //     [0.3, 1],
  //     [1, 1],
  //     [2, 0],
  //   ])
  // };

/*--------------------------------------------------------------*/

  // $media.$sheet('State3Sheet', {

  //   xs: {
  //     '#left-column': {
  //       transform: function() {
  //         var translate = $timeline([
  //           [0, [40, 920, 0]],
  //         ])(t.get());
  //         return Transform.translate.apply(this, translate);
  //       }
  //     },
  //     '#right-column': {
  //       transform: function() {
  //         var translate = $timeline([
  //           [0, [50, 250, 0]]
  //         ])(t.get());
  //         return Transform.translate.apply(this, translate);
  //       },
  //     },
  //     '#code': {
  //       opacity: function() {
  //         return 0;
  //       },
  //     }
  //   },


  //   sm: {
  //     '#left-column': {
  //       transform: function() {
  //         var translate = $timeline([
  //           [0, [250, 150, 0]],
  //         ])(t.get());
  //         return Transform.translate.apply(this, translate);
  //       },
  //     },
  //     '#right-column': {
  //       transform: function() {
  //         var translate = $timeline([
  //           [0, [980, 170, 0]]
  //         ])(t.get());
  //         return Transform.translate.apply(this, translate);
  //       },
  //     },
  //     '#code': {
  //       transform: function() {
  //         var translate = $timeline([
  //           [0.2, [0, 220, 0], Easing.inOutQuart],
  //           [0.6, [0, 170, 0]]
  //         ])(t.get());
  //         return Transform.translate.apply(this, translate);
  //       },
  //       opacity: function() {
  //         return $timeline([
  //           [0.2, 0, Easing.inOutQuart],
  //           [0.6, 1]
  //         ])(t.get());
  //       },
  //     }
  //   }

  // });

