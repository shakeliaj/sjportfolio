angular.module('sjportfolio')
    .controller('SidebarController', SidebarController);

//include any dependencies inside the parentheses
function SidebarController($state, $location) {
    var sideCtrl = this;

    //list of dropdown items
    sideCtrl.dropdownList = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];

    //TODO if on the home or splash page, hide the sidebar
    // if($location.path() == '/' || $location.path() == '/home'){
    //   document.getElementById('sidebar').style.display = 'none';
    // }


    //TODO hide sidebar when window is scrolled
    // window.onscroll = function() {
    //   sidebar.style.display = 'none';
    // };

}
