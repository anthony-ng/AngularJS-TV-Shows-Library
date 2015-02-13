// 3) First retrieve the app module, then use the controller function to instantiate a new controller
// 1st param: conroller name
// 2nd param: a function to place controller code
angular.module('app').controller("MainController", function() {

  // 5) capture the controller instance to a variable, then assign all controller variable to this object
  var viewModel = this;
  viewModel.title = 'AngularJS Example';
  viewModel.searchInput = '';
  viewModel.shows = [
    {
      title: 'Game of Thrones',
      year: 2011,
      favorite: true
    },
    {
      title: 'Walking Dead',
      year: 2010,
      favorite: false
    },
    {
      title: 'Firefly',
      year: 2002,
      favorite: true
    },
    {
      title: 'Banshee',
      year: 2013,
      favorite: true
    },
    {
      title: 'Greys Anatomy',
      year: 2005,
      favorite: false
    }
  ];
});
