var app = angular.module('myApp', ['ngRoute']);
app.directive('logohome', () => {
    return {
      restrict: 'E',
      templateUrl: './component/logo.html',
      controller: () => {
        console.log('load homelogo');
      },
    };
  });
app.directive('navlogo', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/logo.html',
      controller: () => {
        console.log('load logo');
      },
    };
  });
app.directive('navbar', () => {
  return {
    restrict: 'E',
    templateUrl: './component/header/nav.html',
    controller: () => {
      console.log('load navbar');
    },
  };
});
app.directive('navdiscount', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/discount.html',
      controller: () => {
        console.log('load discount');
      },
    };
  });
  app.directive('navcart', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/cart.html',
      controller: () => {
        console.log('load navcart');
      },
    };
  });
  app.directive('navsocial', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/social.html',
      controller: () => {
        console.log('load social');
      },
    };
  });
  app.directive('category', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category.html',
      controller: () => {
        console.log('load category');
      },
    };
  });
  app.directive('textletter', () => {
    return {
      restrict: 'E',
      templateUrl: './component/new-letter/text.html',
      controller: () => {
        console.log('load text');
      },
    };
  });
  app.directive('formletter', () => {
    return {
      restrict: 'E',
      templateUrl: './component/new-letter/form.html',
      controller: () => {
        console.log('load form');
      },
    };
  });
  app.directive('logofooter', () => {
    return {
      restrict: 'E',
      templateUrl: './component/footer/left/logo.html',
      controller: () => {
        console.log('load leftfooter');
      },
    };
  });
  app.directive('rightfooter', () => {
    return {
      restrict: 'E',
      templateUrl: './component/footer/right/nav_footer.html',
      controller: () => {
        console.log('load rightfooter ');
      },
    };
  });