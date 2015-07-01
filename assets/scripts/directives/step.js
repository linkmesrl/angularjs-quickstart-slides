'use strict';

applause.directive('step', function(Appdata, $location) {

  var linkFn = function(scope, elem, attr) {

    if($location.search().pdf === true){
      scope.isPreview = true;
    }

    scope.thisStep = attr.step;
     if(Appdata.data.isPreviewMode) {
      scope.isPreview = true;
     }
  };

  return {
    template: '<article ng-show="slideList[$storage.currentSlide - 1].currentStep >= thisStep || isPreview" ng-transclude></article>',
    restrict: 'A',
    transclude: true,
    replace: true,
    scope: true,
    link: linkFn
  };
});
