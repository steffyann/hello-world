var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index1');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
        templateUrl: 'home2.html',
        controller: 'mycntrl'
    })

    .state('employee', {
        url: '/employee',
        templateUrl: 'employee.html',
        controller: 'mycntrl'
    })

    // nested list with custom controller
    .state('leaveappln', {
        url: '/leaveappln',
        templateUrl: 'leaveappln.html',
        controller: 'mycntrl'
    })

    // nested list with just some random string data
    /*.state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
        
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        url: '/about',
        views: {
            '': { templateUrl: 'partial-about.html' },
            'columnOne@about': { template: 'Look I am a column!' },
            'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }
        
    });*/
    .state('Employeelog', {
        url: '/Employeelog',
        templateUrl: 'Employeelog.html',
        controller: 'mycntrl'
    })

    .state('EmpTask', {
        url: '/EmpTask',
        templateUrl: 'EmpTask.html',
        controller: 'mycntrl'
    });



});


routerApp.controller('mycntrl', function($scope, $http) {
    $scope.get = function() {
        $http({
            method: 'GET',
            url: 'http://0.0.0.0:3000/api/Employees/'
        }).then(function successCallback(response) {
            $scope.details = response.data;
            console.log($scope.details)
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.ge = function() {
        $http({
            method: 'GET',
            url: 'http://0.0.0.0:3000/api/LeaveApplns/'
        }).then(function successCallback(response) {
            $scope.details = response.data;
            console.log($scope.details)
        }, function errorCallback(response) {

        });
    }
    $scope.gett = function() {
        $http({
            method: 'GET',
            url: 'http://0.0.0.0:3000/api/EmployeeLogs/'
        }).then(function successCallback(response) {
            $scope.details = response.data;
            console.log($scope.details)
        }, function errorCallback(response) {

        });
    }
    $scope.getti = function() {
        $http({
            method: 'GET',
            url: 'http://0.0.0.0:3000/api/EmpTasks/'
        }).then(function successCallback(response) {
            $scope.details = response.data;
            console.log($scope.details)
        }, function errorCallback(response) {

        });
    }
    $scope.post = function(user) {
        console.log(user)
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/Employees ",
            data: {
                'name': user.name,
                'designation': user.designation,
                'dob': user.dob,
                'joindate': user.joindate
            }

        }).then(function successCallback(response) {
            console.log("aa", response)
        }, function errorCallback(response) {

        });
    }

    $scope.abc = function(use) {
        console.log(use)
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/LeaveApplns ",
            data: {
                'emp_id': use.emp_id,
                'leave_appliedon': use.leave_appliedon,
                'leave_applied_for_date': use.leave_applied_for_date,
                'date_of_return': use.date_of_return,
                'reason_for_leave': use.reason_for_leave,
                'is_approved': use.is_approved
            }

        }).then(function successCallback(response) {
            console.log("bb", response)
        }, function errorCallback(response) {

        });
    }
    $scope.def = function(us) {
        console.log(us)
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/EmployeeLogs ",
            data: {
                'emp_id': us.emp_id,
                'date': us.date,
                'status': us.status

            }

        }).then(function successCallback(response) {
            console.log("cc", response)
        }, function errorCallback(response) {

        });
    }
    $scope.xyz = function(u) {
        console.log(u)
        $http({
            method: 'POST',
            url: "http://0.0.0.0:3000/api/EmpTasks",
            data: {
                'name': u.name,
                'designation': u.designation,
                'emp_id': u.emp_id,
                'from_date': u.from_date,
                'due_date': u.due_date,
                'assigned_by': u.assigned_by
            }

        }).then(function successCallback(response) {
            console.log("dd", response)
        }, function errorCallback(response) {

        });
    }

    $scope.delete = function(id) {
        console.log($scope.id)
        $http({
            method: 'DELETE',
            url: ' http://0.0.0.0:3000/api/Employees/ ' + $scope.id,
        }).then(function successCallback(response) {
            $scope.delete = response.data;
            console.log($scope.delete)
        }, function errorCallback(response) {

        });


    }
    $scope.delet = function(id) {
        console.log($scope.id)
        $http({
            method: 'DELETE',
            url: ' http://0.0.0.0:3000/api/Employeelogs/ ' + $scope.id,
        }).then(function successCallback(response) {
            $scope.delete = response.data;
            console.log($scope.delete)
        }, function errorCallback(response) {

        });


    }
    $scope.dele = function(id) {
        console.log($scope.id)
        $http({
            method: 'DELETE',
            url: ' http://0.0.0.0:3000/api/EmpTasks/ ' + $scope.id,
        }).then(function successCallback(response) {
            $scope.delete = response.data;
            console.log($scope.delete)
        }, function errorCallback(response) {

        });


    }
    $scope.del = function(id) {
        console.log($scope.id)
        $http({
            method: 'DELETE',
            url: ' http://0.0.0.0:3000/api/LeaveApplns/ ' + $scope.id,
        }).then(function successCallback(response) {
            $scope.delete = response.data;
            console.log($scope.delete)
        }, function errorCallback(response) {

        });


    }

    $scope.message = "Have a nice day";

})

