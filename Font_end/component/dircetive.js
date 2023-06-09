var app = angular.module('myApp', ['ngRoute']);
app.directive('iconsearch', () => {
  return {
    restrict: 'E',
    templateUrl: './component/header/search/icon.html',
    controller: () => {
      console.log('load iconsearch');
    },
  };
});
app.directive('formsearch', () => {
  return {
    restrict: 'E',
    templateUrl: './component/header/search/form.html',
    controller: () => {
      console.log('load formsearch');
    },
  };
});
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
  app.directive('category1', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category1.html',
      controller: () => {
        console.log('load category1');
      },
    };
  });
  app.directive('category2', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category2.html',
      controller: () => {
        console.log('load category2');
      },
    };
  });
  app.directive('category3', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category3.html',
      controller: () => {
        console.log('load category3');
      },
    };
  });
  app.directive('category4', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category4.html',
      controller: () => {
        console.log('load category4');
      },
    };
  });
  app.directive('category5', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category5.html',
      controller: () => {
        console.log('load category5');
      },
    };
  });
  app.directive('category6', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category6.html',
      controller: () => {
        console.log('load category6');
      },
    };
  });
  app.directive('category7', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category7.html',
      controller: () => {
        console.log('load category7');
      },
    };
  });
  app.directive('category8', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category8.html',
      controller: () => {
        console.log('load category8');
      },
    };
  });
  app.directive('category9', () => {
    return {
      restrict: 'E',
      templateUrl: './component/header/category/category9.html',
      controller: () => {
        console.log('load category9');
      },
    };
  });