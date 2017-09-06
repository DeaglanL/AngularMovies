(function() {

    var MoviesController =  function()
    {
        var vm = this;


        vm.reverse =false;

        vm.movies = [{
            'Title': 'Pacific Rim',
            'Director': 'Guillermo del Toro'
        },
            {
                'Title': 'Watchemen',
                'Director': 'Zack Snyder'
            },
            {
                'Title': 'Sin city',
                'Director': 'Frank Miller'
            }]

        vm.doSort = function()
        {
            vm.sortby = 'Title';
            vm.reverse= !vm.reverse
        };
    };
    angular.module('mov').controller('MovieController', [MoviesController]);
}());