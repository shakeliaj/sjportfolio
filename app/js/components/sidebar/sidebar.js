angular.module('sjportfolio')
    .controller('SidebarController', SidebarController);

//include any dependencies inside the parentheses
function SidebarController($state, $location) {
    var sideCtrl = this;
    sideCtrl.showSidebar = false;
    
    //list of dropdown items
    sideCtrl.dropdownList = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];

    //var to hold list showing at any particular time
    sideCtrl.showThisList = [];

    //vars to hold each individual list
    sideCtrl.homeList = [];
    sideCtrl.aboutList = ['about1', 'about2', 'about3'];
    sideCtrl.portfolioList = ['portfolio1', 'portfolio2', 'portfolio3'];
    sideCtrl.resumeList = ['resume1', 'resume2', 'resume3'];
    sideCtrl.contactList = [];

    //TODO if on the home or splash page, hide the sidebar
    //  if($location.path() == '/' || $location.path() == '/home'){
    //     sideCtrl.showSidebar = false;
    //  }
    // else {
    //   sideCtrl.showSidebar = true;
    // }

    sideCtrl.setDropdownList = function(navItem) {
      sideCtrl.showThisList = [];
        switch (navItem) {
            case 'Home':
                sideCtrl.showThisList = sideCtrl.homeList;
                break;
            case 'About':
                sideCtrl.showThisList = sideCtrl.aboutList;
                break;
            case 'Portfolio':
                sideCtrl.showThisList = sideCtrl.portfolioList;
                break;
            case 'Resume':
                sideCtrl.showThisList = sideCtrl.resumeList;
                break;
            case 'Contact':
                sideCtrl.showThisList = sideCtrl.contactList;
                break;
            case 'default':
                sideCtrl.showThisList = [];
                break;
        }
        return sideCtrl.showThisList;
    };


    //TODO hide sidebar when window is scrolled for media devices 960px and larger
    // window.onscroll = function() {
    //   sidebar.style.display = 'none';
    // };

}
