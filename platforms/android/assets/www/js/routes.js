angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('error', {
    url: '/page4',
    templateUrl: 'templates/error.html',
    controller: 'errorCtrl'
  })

  .state('mainMenu', {
    url: '/page5',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })

  .state('profile', {
    url: '/page6',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('resourceCentre', {
    url: '/page8',
    templateUrl: 'templates/resourceCentre.html',
    controller: 'resourceCentreCtrl'
  })

  .state('settings', {
    url: '/page9',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('subject', {
    url: '/page10',
    templateUrl: 'templates/subject.html',
    controller: 'subjectCtrl'
  })

  .state('courseMaterials', {
    url: '/page11',
    templateUrl: 'templates/courseMaterials.html',
    controller: 'courseMaterialsCtrl'
  })

  .state('studyingMaterials', {
    url: '/page12',
    templateUrl: 'templates/studyingMaterials.html',
    controller: 'studyingMaterialsCtrl'
  })

  .state('pastPapers', {
    url: '/page13',
    templateUrl: 'templates/pastPapers.html',
    controller: 'pastPapersCtrl'
  })

  .state('collaborativeForum', {
    url: '/page14',
    templateUrl: 'templates/collaborativeForum.html',
    controller: 'collaborativeForumCtrl'
  })

  .state('collaborativeForum2', {
    url: '/page15',
    templateUrl: 'templates/collaborativeForum2.html',
    controller: 'collaborativeForum2Ctrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});