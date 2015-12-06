angular.module('ModCpApp', ['angular-clipboard'])
    .controller('MainController', [ '$scope', '$http', '$templateCache',
      function($scope, $http, $templateCache) {

    $scope.method = 'GET';
    $scope.get_url = {};
    $scope.has_url = false;
    $scope.url = null;

    function getData(url) {

      $http({method: $scope.method, url: url, cache: $templateCache}).
        then(function(response) {
          if(response){
            $scope.listMessages = response.data.messages;
            $scope.has_url = true;
          }
        }, function(response) {
          if(response.data){
            $scope.data = response.data
          } else {
            $scope.data = "Não foi possivel obter as mensagens.";
            $scope.has_url = false;
          }
      });
    };

    //https://gist.githubusercontent.com/rnbr/957129f61a52624a2eba/raw/05e19b30ef0060b4c4fb10bcd2dcddafa301794f/messages.json
    $scope.setUrlMessages = function(url){
      console.log('VENDO OS CHANGE', url);
      if(url){
        getData(url);
      }
    }

    $scope.$watch('get_url.content', function(newValue, oldValue) {
      console.log('OLD', oldValue)
      console.log('NEW', newValue)
    });

    $scope.success = function () {
      //console.log('Copiado!');
    };

    $scope.fail = function (err) {
      //console.error('Erro ao selecionar mensagem.', err);
    };


}]);