angular.module('sjportfolio')
    .controller('SidebarController', SidebarController);

//include any dependencies inside the parentheses
function SidebarController($state, $location) {
    var sideCtrl = this;
    sideCtrl.showSidebar = true;

    //list of dropdown items
    sideCtrl.dropdownList = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];

    //TODO if on the home or splash page, hide the sidebar
     if($location.path() == '/' || $location.path() == '/home'){
        sideCtrl.showSidebar = false;
     }
    else {
      sideCtrl.showSidebar = true;
    }
    console.log(sideCtrl.showSidebar);


    //TODO hide sidebar when window is scrolled for media devices 960px and larger
    // window.onscroll = function() {
    //   sidebar.style.display = 'none';
    // };

}
