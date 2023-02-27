var app = angular.module('lesson12', ['ngRoute', 'ngStorage'])
    .config(function ($routeProvider, $httpProvider) {

    $routeProvider.when('/welcome',
    {
    templateUrl:'welcomeTemplate.html',
    controller:'welcomeController',
    controllerAs:'welcome'
    })
    .when('/login',
    {
    templateUrl:'loginTemplate.html',
    controller:'loginController',
    controllerAs:'login'
    })
    .when('/registration',
    {
    templateUrl:'registrationTemplate.html',
    controller:'registrationController',
    controllerAs:'registration'
    })
    .when('/authority',
    {
    templateUrl:'authorityTemplate.html',
    controller:'authorityController',
    controllerAs:'authority'
    })
    .when('/navigation',
    {
    templateUrl:'navigationTemplate.html',
    controller:'navigationController',
    controllerAs:'navigation'
    })
    .when('/profile',
    {
    templateUrl:'profileTemplate.html',
    controller:'profileController',
    controllerAs:'profile'
    })
    .when('/cart',
    {
    templateUrl:'cartTemplate.html',
    controller:'cartController',
    controllerAs:'cart'
    })
    .when('/products',
    {
    templateUrl:'productTemplate.html',
    controller:'productController',
    controllerAs:'products'
    })
    .when('/users',
    {
    templateUrl:'usersTemplate.html',
    controller:'usersController',
    controllerAs:'users'
    })
    .otherwise({
    redirectTo: 'welcome'
    });

//    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});