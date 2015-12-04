angular.module('4UPApp', [])
  .controller('MainController', [ '$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {

    console.log('Entrei.');

    $scope.method = 'GET';
    $scope.url = 'https://gist.githubusercontent.com/rnbr/957129f61a52624a2eba/raw/05e19b30ef0060b4c4fb10bcd2dcddafa301794f/messages.json';

    function getData() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          $scope.listMessages = response.data.messages;
          console.log('STATUS ', $scope.status)
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
    };

    getData();


    function copyToClip() {
      document.execCommand('copy');
    }

}]);