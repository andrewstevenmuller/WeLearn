angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('error', {
    url: '/error',
    templateUrl: 'templates/error.html',
    controller: 'errorCtrl'
  })

  .state('mainMenu', {
    url: '/mainMenu',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('resourceCentre', {
    url: '/resourceCentre',
    templateUrl: 'templates/resourceCentre.html',
    controller: 'resourceCentreCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('subject', {
    url: '/subject',
    templateUrl: 'templates/subject.html',
    controller: 'subjectCtrl'
  })

  .state('courseMaterials', {
    url: '/courseMaterials',
    templateUrl: 'templates/courseMaterials.html',
    controller: 'courseMaterialsCtrl'
  })

  .state('studyingMaterials', {
    url: '/studyingMaterials',
    templateUrl: 'templates/studyingMaterials.html',
    controller: 'studyingMaterialsCtrl'
  })

  .state('pastPapers', {
    url: '/pastPapers',
    templateUrl: 'templates/pastPapers.html',
    controller: 'pastPapersCtrl'
  })

  .state('collaborativeForum', {
    url: '/collaborativeForum',
    templateUrl: 'templates/collaborativeForum.html',
    controller: 'collaborativeForumCtrl'
  })

  .state('collaborativeForum2', {
    url: '/collaborativeForum2',
    templateUrl: 'templates/collaborativeForum2.html',
    controller: 'collaborativeForum2Ctrl'
  })

$urlRouterProvider.otherwise('/login')

  

});
