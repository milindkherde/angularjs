  function Cntl1($scope){
    $scope.name = 'World';

    $scope.greet = function() {
      alert('Hello ' + $scope.name);
    };
  }