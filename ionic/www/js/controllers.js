angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  .controller('ClienteCtrl', function ($scope, $stateParams) {
    $scope.cliente = "";
    var clientes = [
      {nombre: 'Raquel', apellido: 'Romez', email: 'raquel@gmail.com', id: 1},
      {nombre: 'Fran', apellido: 'Forl', email: 'raquel@gmail.com', id: 2},
      {nombre: 'Ana', apellido: 'Nuñez', email: 'Ana@gmail.com', id: 3},
      {nombre: 'Amparo', apellido: 'Alcantara', email: 'Amparo@gmail.com', id: 4},
      {nombre: 'Rosa', apellido: 'Neidar', email: 'Rosa@gmail.com', id: 5},
      {nombre: 'Nao', apellido: 'Pulgar', email: 'Nao@gmail.com',  id: 6}
    ];
    console.log($stateParams.id);
    var encontrar = true;
    var i = 0;
    while(encontrar && i < clientes.length){
      if (clientes[i].id == $stateParams.id){
        $scope.cliente = clientes[i];
        i = 0;
        encontrar = false;
      }
      i++;
    }

  })

  .controller('ClientesCtrl', function ($scope) {
    $scope.clientes = [
      {nombre: 'Raquel', apellido: 'Romez', email: 'raquel@gmail.com', id: 1},
      {nombre: 'Fran', apellido: 'Forl', email: 'raquel@gmail.com', id: 2},
      {nombre: 'Ana', apellido: 'Nuñez', email: 'Ana@gmail.com', id: 3},
      {nombre: 'Amparo', apellido: 'Alcantara', email: 'Amparo@gmail.com', id: 4},
      {nombre: 'Rosa', apellido: 'Neidar', email: 'Rosa@gmail.com', id: 5},
      {nombre: 'Nao', apellido: 'Pulgar', email: 'Nao@gmail.com',  id: 6}
    ];
  });
