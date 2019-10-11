function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar></navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Shipping Form</h3>\n\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <shipping-form></shipping-form>\n  </div>\n  <div class=\"col-md-4\">\n    <order-summary></order-summary>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/order-summary/order-summary.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/order-summary/order-summary.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutOrderSummaryOrderSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Order Summary</h5>\n      <p class=\"card-text\">You have {{ cartCount }} items in your shopping cart.</p>\n      <ul class=\"list-group list-group-flush\">\n        <li *ngFor=\"let item of cart\" class=\"list-group-item\">\n          {{ item.quantity }} x {{ item.title }}\n          <div class=\"float-right\">\n            {{ item.quantity * item.price | currency:'USD':true }}\n          </div>\n        </li>\n        <li class=\"list-group-item font-weight-bold\">\n          Total\n          <div class=\"float-right\">\n            {{ totalPrice | currency:'USD':true }}\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  \n  <form class=\"card p-2\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n      <div class=\"input-group-append\">\n        <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n      </div>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/shipping-form/shipping-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/shipping-form/shipping-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutShippingFormShippingFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #f=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"firstName\">First name</label>\n        <input  #fname=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"fname\" required>\n        <div class=\"invalid-feedback\">\n          Valid first name is required.\n        </div>\n      </div>\n  \n      <div class=\"col-md-6 mb-3\">\n        <label for=\"lastName\">Last name</label>\n        <input #lname=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"lname\" required>\n        <div class=\"invalid-feedback\">\n          Valid last name is required.\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"mb-3\">\n      <label for=\"email\">Email\n      </label>\n      <input #email=\"ngModel\" ngModel type=\"email\" class=\"form-control form-rounded\" name=\"email\" required>\n      <div class=\"invalid-feedback\">\n        Please enter a valid email address for shipping updates.\n      </div>\n    </div>\n  \n    <div class=\"mb-3\">\n      <label for=\"address1\">Address</label>\n      <input #address1=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"address1\"  required>\n      <div class=\"invalid-feedback\">\n        Please enter your shipping address.\n      </div>\n    </div>\n  \n    <div class=\"mb-3\">\n      <label for=\"address2\">Address 2\n        <span class=\"text-muted\">(Optional)</span>\n      </label>\n      <input #address2=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"address2\">\n    </div>\n  \n    <div class=\"row\">\n      <div class=\"col-md-5 mb-3\">\n        <label for=\"country\">Country</label>\n        <input #country=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"country\" required>\n        <div class=\"invalid-feedback\">\n          Please select a valid country.\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"state\">State</label>\n        <input #state=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"state\" required>\n        <div class=\"invalid-feedback\">\n          Please provide a valid state.\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"zip\">Zip</label>\n        <input #zip=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" id=\"zip\" name=\"zip\" required>\n        <div class=\"invalid-feedback\">\n          Zip code required.\n        </div>\n      </div>\n    </div>\n  \n  <!--   <hr class=\"mb-4\">\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n      <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n      <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n    </div>\n    <hr class=\"mb-4\"> \n  \n     <h4 class=\"mb-3\">Payment</h4>\n  \n    <div class=\"d-block my-3\">\n      <div class=\"custom-control custom-radio\">\n        <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n        <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n        <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n        <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n      </div>\n    </div>\n  \n    <div class=\"row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"cc-name\">Name on card</label>\n        <input type=\"text\" class=\"form-control form-rounded\" id=\"cc-name\" placeholder=\"\" required>\n        <small class=\"text-muted\">Full name as displayed on card</small>\n        <div class=\"invalid-feedback\">\n          Name on card is required\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"cc-number\">Credit card number</label>\n        <input type=\"text\" class=\"form-control form-rounded\" id=\"cc-number\" placeholder=\"\" required>\n        <div class=\"invalid-feedback\">\n          Credit card number is required\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"cc-expiration\">Expiration</label>\n        <input type=\"text\" class=\"form-control form-rounded\" id=\"cc-expiration\" placeholder=\"\" required>\n        <div class=\"invalid-feedback\">\n          Expiration date required\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"cc-expiration\">CVV</label>\n        <input type=\"text\" class=\"form-control form-rounded\" id=\"cc-cvv\" placeholder=\"\" required>\n        <div class=\"invalid-feedback\">\n          Security code required\n        </div>\n      </div>\n    </div>\n    <hr class=\"mb-4\"> -->\n    <button \n    [disabled]=\"!f.valid\"\n    (click)=\"placeOrder(f)\"\n    class=\"btn btn-success\"> Confirm Order\n    </button>\n  </form>\n  <br>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container\">\n      <span class=\"text-muted\">&copy; 2019 Organic Shop; Desinged and developed by Girish Godage</span>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"../../assets/images/banner1.jpg\" alt=\"First slide\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h1>SAVE ON ALL PRODUCTS</h1>\n          <h2>45% OFF</h2>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../../assets/images/banner2.jpg\" alt=\"Second slide\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h1>BEST PRODUCTS</h1>\n          <h2>BIG SALE</h2>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../../assets/images/banner3.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  \n  <div class=\"heading\">\n    <h3>Best Sellers</h3>\n  </div>\n  \n  <div class=\"row best-sellers\">\n    <div class=\"col-md-3\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/images/apple.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4>Apple</h4>\n          <h5>$3</h5>\n          <p class=\"card-text\">It is a long established fact that a reader will be distracted </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/images/banana.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4>Banana</h4>\n          <h5>$2</h5>\n          <p class=\"card-text\">It is a long established fact that a reader will be distracted </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/images/grapes.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4>Grapes</h4>\n          <h5>$1.5</h5>\n          <p class=\"card-text\">It is a long established fact that a reader will be distracted </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../assets/images/orange.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4>Orange</h4>\n          <h5>$3</h5>\n          <p class=\"card-text\">It is a long established fact that a reader will be distracted </p>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"logInMessage && customLoginClass\" [ngClass]=\"customLoginClass\" role=\"alert\">\n  {{ logInMessage }}\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n\n    <div class=\"text-center\">\n      <h1 class=\"h4 text-gray-900 mb-4\">Welcome Back!</h1>\n    </div>\n    <form class=\"form\" #f=\"ngForm\">\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-user form-control-feedback\"  style=\"color:#c1d62e;\"></span>\n        <input #email=\"ngModel\" ngModel type=\"text\" name=\"email\" class=\"form-control form-rounded\" required\n          placeholder=\"Enter Email Address..\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-lock form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #password=\"ngModel\" ngModel type=\"password\" name=\"password\" class=\"form-control form-rounded\" required\n          placeholder=\"Password\">\n      </div>\n      <button id=\"sign-in-btn\" class=\"btn btn-success\" (click)=\"login(f)\" type=\"submit\"> Sign in</button>\n\n      <a class=\"btn btn-primary\" routerLink=\"/register\">Create Account</a>\n\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-order/manage-order.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-order/manage-order.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageOrderManageOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-space\">\n    <h2>All Orders</h2>\n    <p>You have {{ ordersCount }} orders to manage</p>\n  </div>\n  \n  <button id=\"counter\" type=\"button\" class=\"btn btn-success\">\n      Completed <span class=\"badge badge-light\">{{ completedCount }}</span>\n  </button>\n  \n  <button id=\"counter\" type=\"button\" class=\"btn btn-danger\">\n      Pending <span class=\"badge badge-light\">{{ pendingCount }}</span>\n  </button>\n  \n  <div *ngFor=\"let order of orders\" class=\"card card-space\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n          <div class=\"card-body\">\n              <div class=\"float-right\">\n                {{ order.datePlaced | date }}\n              </div>\n              <div class=\"detail\">\n                <p>Name: {{ order.fname }} {{ order.lname }}</p>\n              </div>\n              <div class=\"detail\">\n                <p>Address: {{ order.address1 }}, {{ order.address2 }}</p>\n              </div>\n              <div class=\"detail\">\n                <p>State: {{ order.state }} , {{ order.country }}</p>\n              </div>\n              <div class=\"detail\">\n                <p>Zip Code: {{ order.zip }}</p>\n              </div>\n  \n              <br>\n              <div *ngIf=\"order.completed == 'false'\">\n                <button class=\"btn btn-success\"\n                (click)=\"dispatchOrder(order)\"\n                > Dispatch Order\n                </button>\n              </div>\n              <div class=\"alert alert-secondary\" role=\"alert\" *ngIf=\"order.completed != 'false'\">\n                  Order Completed\n              </div>\n              \n            </div>\n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                <ul class=\"list-group list-group-flush\">\n                  <li *ngFor=\"let item of order.cart\" class=\"list-group-item\">\n                    {{ item.quantity }} x {{ item.title }}\n                    <div class=\"float-right\">\n                      {{ item.quantity * item.price | currency:'USD':true }}\n                    </div>\n                  </li>\n                  <li class=\"list-group-item font-weight-bold\">\n                    Total\n                    <div class=\"float-right\">\n                      {{ cartPrice(order.cart) | currency:'USD':true }}\n                    </div>\n                  </li>\n                </ul>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-product/manage-product.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-product/manage-product.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageProductManageProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n  \n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n        {{ message }}\n      </div>\n      <div *ngIf=\"success != null && !success\" class=\"alert alert-danger\" role=\"alert\">\n        {{ message }}\n      </div>\n  \n      <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input #title=\"ngModel\" ngModel name=\"title\" id=\"title\" type=\"text\" class=\"form-control form-rounded\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"discription\">Discription</label>\n          <textarea #discription=\"ngModel\" ngModel name=\"discription\" id=\"discription\" type=\"text\" class=\"form-control form-rounded\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"price\">Price</label>\n          <div class=\"form-group has-icon\">\n              <span class=\"form-control-feedback\" style=\"font-size:24px; color:#c1d62e;\">$</span>\n            <input #price=\"ngModel\" ngModel name=\"price\" id=\"price\" type=\"number\" class=\"form-control form-rounded\">\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"category\">Category</label>\n          <select ngModel name=\"category\" id=\"category\" class=\"form-control form-rounded\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let c of categories\" [value]=\"c.categoryName\">{{ c.categoryName }}</option>\n          </select>\n        </div>\n  \n  \n        <div class=\"form-group\">\n          <label for=\"stock\">Stock</label>\n          <input #stock=\"ngModel\" ngModel name=\"stock\" id=\"stock\" type=\"number\" class=\"form-control form-rounded\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"imageUrl\">Image URL</label>\n          <input #imageurl=\"ngModel\" ngModel name=\"imageurl\" id=\"imageurl\" type=\"text\" class=\"form-control form-rounded\">\n        </div>\n        <button class=\"btn btn-success\">Save Product</button>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n  \n      <form class=\"form\" #c=\"ngForm\">\n  \n        <label for=\"category\">Category Name</label>\n        <input #category=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"category\" required>\n  \n        <button id=\"create-btn\" [disabled]=\"!c.valid\" class=\"btn btn-success btn-sm\" (click)=\"addCategory(c)\" type=\"submit\">Add New Category</button>\n  \n      </form>\n  \n      <div class=\"col-md-8 my-3\">\n        <div class=\"card\">\n          <img *ngIf=\"imageurl.value\" src=\"../../assets/images/{{ imageurl.value }}\" class=\"card-img-top\" alt=\"product image\">\n          <div class=\"card-body\">\n            <span class=\"badge badge-warning\" *ngIf=\"stock.value && stock.value < 15\">Low Stock</span>\n            <h5 class=\"card-title\">{{ title.value }}</h5>\n            <p class=\"card-text card-price\">{{ price.value | currency:'USD':true }}</p>\n            <button id=\"circle-btn\" class=\"btn btn-info btn-sm\">\n              ❤\n            </button>\n          </div>\n          <div class=\"card-footer\">\n            <button id=\"detail-btn\" class=\"btn btn-secondary btn-sm\">\n              See Details\n            </button>\n            <button  id=\"add-cart-btn\" class=\"btn btn-secondary mx-2 btn-sm\">\n              <i class=\"fa fa-shopping-cart\"></i>  Add to Cart  \n            </button>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyOrdersMyOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-space\">\n    <h4>Your Orders</h4>\n  </div>\n  <div *ngFor=\"let order of orders\">\n    <div *ngIf=\"email == order.email\" class=\"card card-space\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card-body\">\n            <div class=\"float-right\">\n              {{ order.datePlaced | date }}\n            </div>\n            <div class=\"detail\">\n              <p>Name: {{ order.fname }} {{ order.lname }}</p>\n            </div>\n            <div class=\"detail\">\n              <p>Address: {{ order.address1 }}, {{ order.address2 }}</p>\n            </div>\n            <div class=\"detail\">\n              <p>State: {{ order.state }} , {{ order.country }}</p>\n            </div>\n            <div class=\"detail\">\n              <p>Zip Code: {{ order.zip }}</p>\n            </div>\n  \n            <br>\n            <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"order.completed == 'false'\">\n                Order Pending\n              </div>\n            <div class=\"alert alert-secondary\" role=\"alert\" *ngIf=\"order.completed != 'false'\">\n              Order Completed\n            </div>\n  \n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <ul class=\"list-group list-group-flush\">\n                <li *ngFor=\"let item of order.cart\" class=\"list-group-item\">\n                  {{ item.quantity }} x {{ item.title }}\n                  <div class=\"float-right\">\n                    {{ item.quantity * item.price | currency:'USD':true }}\n                  </div>\n                </li>\n                <li class=\"list-group-item font-weight-bold\">\n                  Total\n                  <div class=\"float-right\">\n                    {{ cartPrice(order.cart) | currency:'USD':true }}\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <i class=\"fa fa-leaf\"></i>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/product/all\">Shop Now</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" *ngIf=\"admin != null\">\n            <a class=\"nav-link\" routerLink=\"/product-wishlist\">\n              <i class=\"fa fa-heart\"></i>\n              <span class=\"badge badge-danger badge-pill\">\n                {{ wishCount }}\n              </span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/product-cart\">\n              <i class=\"fa fa-shopping-cart\"></i>\n              <span class=\"badge  badge-pill\" style=\" background-color: orangered;color: white\">\n                {{ cartCount }}\n              </span>\n            </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"admin == null\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n          <li *ngIf=\"admin != null\" ngbDropdown class=\"nav-item dropdown\">\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ username }}</a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n              <a *ngIf=\"admin == 'true'\" class=\"dropdown-item\" routerLink=\"/product-list\">Product List</a>\n              <a *ngIf=\"admin == 'true'\" class=\"dropdown-item\" routerLink=\"/manage-product\">Manage Product</a>\n              <a *ngIf=\"admin != null\" class=\"dropdown-item\" routerLink=\"/my-orders\">My Orders</a>\n              <a *ngIf=\"admin == 'true'\" class=\"dropdown-item\" routerLink=\"/manage-order\">Manage Orders</a>\n              <button class=\"dropdown-item\" id=\"logout\" (click)=\"logoutUser()\">Log Out</button>\n            </div>\n          </li>\n        </ul>\n      </div>\n  \n    </div>\n  </nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderSuccessOrderSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Thank you!</h1>\n\n<p>We have recieved your order and we will process it withing the next 24 hours.</p>\n<p>You will get a confirmation mail for your order</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-cart/product-cart.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-cart/product-cart.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductCartProductCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Shopping Cart</h1>\n\n<div class=\"row col-10\">\n  <p>You have {{ cartCount }} items in your shopping cart\n    <button (click)=\"clearCart()\" class=\"btn btn-sm\" style=\"background-color:black;color: white;\">Clear Shopping Cart</button>\n  </p>\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th class=\"text-center\" style=\"width: 230px\">Quantity</th>\n        <th class=\"text-right\" style=\"width: 200px\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let c of cart\">\n        <td>\n          <div [style.backgroundImage]=\" 'url(' + '../../assets/images/' + c.imageurl + ')'\" class=\"thumbnail\"> </div>\n        </td>\n        <td>\n          {{ c.title }}\n        </td>\n        <td>\n          <div class=\"row no-gutters\">\n            <div class=\"col-3\">\n              <button id=\"btn_dec\" (click)=\"dec(c)\" \n              class=\"btn btn-secondary btn-block\" \n              [disabled]=\"c.quantity < 2\">\n             <i class=\"fa fa-cart-arrow-down\" style=\"font-size:24px\"></i>\n            </button>\n            </div>\n            <div class=\"col text-center\">\n              {{ c.quantity }}\n            </div>\n            <div class=\"col-3\">\n              <button id=\"btn_inc\" (click)=\"inc(c)\" class=\"btn btn-secondary btn-block\"><i class=\"fa fa-cart-plus\" style=\"font-size:24px;color:orangered\"></i></button>\n            </div>\n          </div>\n        </td>\n        <td class=\"text-right\">\n          {{ c.price * c.quantity | currency:'USD':true }}\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td class=\"text-right\">\n          <b>{{ totalPrice | currency:'USD':true }}</b>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <button class=\"btn btn-success\" \n  (click)=\"saveCart(cart)\" \n  [disabled]=\"!cartCount\">Check Out</button>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailProductDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div *ngFor=\"let product of products\">\n      <div class=\"row\" *ngIf=\"product._id == id\">\n        <div class=\"col-md-4\">\n          <img class=\"card-img-top img-fluid\" src=\"../../assets/images/{{ product.imageurl }}\" alt=\"\">\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">{{ product.title }}</h3>\n            <h4>{{ product.price | currency:'USD':true }}</h4>\n            <p class=\"card-text\">{{ product.discription }}</p>\n            <span class=\"text-warning\">&#9733; &#9733; &#9733; &#9733; &#9734;</span>\n            4.0 stars\n          </div>\n          <div class=\"card card-outline-secondary my-4\">\n            <div class=\"card-header\">\n              Product Reviews\n            </div> \n            <div class=\"card-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus\n                neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae\n                sint natus.</p>\n              <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n              <hr>\n              <a href=\"#\" class=\"btn btn-success\">Leave a Review</a>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>You have {{ productCount }} products in your inventory</h4>\n<div class=\"form-group has-icon\">\n    <span class=\"fa fa-search form-control-feedback\" style=\"color:#c1d62e;\"></span>\n    <input class=\"form-control form-rounded search-box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search...\">\n</div>\n<br>\n<table class=\"table\">\n  <tr>\n    <th>Product Name</th>\n    <th>Category</th>\n    <th>Price</th>\n    <th>Stock</th>\n    <th></th>\n    <th></th>\n  </tr>\n  <tr *ngFor=\"let p of product | filter:term\">\n    <th>{{ p.title }}</th>\n    <td>{{ p.category }}</td>\n    <td>{{ p.price | currency:'USD':true }}</td>\n    <td>{{ p.stock }}</td>\n    <td>\n      <button\n        class=\"btn btn-sm btn-danger\" \n        (click)=\"deleteProduct(p)\">\n        <i class=\"fa fa-trash\" ></i> Delete \n      </button>\n    </td>\n    <td>\n      <button\n        class=\"btn btn-sm btn-info\" \n        (click)=\"updateProduct(p)\">\n        <i class=\"fa fa-edit\"></i> Update \n      </button> \n    </td>\n  </tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-update/product-update.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-update/product-update.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductUpdateProductUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n  \n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n        {{ message }}\n      </div>\n      <div *ngIf=\"success != null && !success\" class=\"alert alert-danger\" role=\"alert\">\n        {{ message }}\n      </div>\n  \n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input #title=\"ngModel\" [(ngModel)]=\"productTitle\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control form-rounded\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"discription\">Description</label>\n          <textarea rows=\"50\" #discription=\"ngModel\" [(ngModel)]=\"productDiscription\" name=\"discription\" id=\"discription\" type=\"text\" class=\"form-control form-rounded\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"price\">Price</label>\n          <div class=\"form-group has-icon\">\n              <span class=\"form-control-feedback\" style=\"font-size:24px; color:#c1d62e;\">$</span>\n          \n            <input #price=\"ngModel\" [(ngModel)]=\"productPrice\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control form-rounded\" required>\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"category\">Category</label>\n          <select ngModel name=\"category\" id=\"category\" class=\"form-control form-rounded\" required>\n            <option value=\"\"></option>\n            <option *ngFor=\"let c of categories\" [value]=\"productCategory\">{{ c.categoryName }}</option>\n          </select>\n        </div>\n  \n  \n        <div class=\"form-group\">\n          <label for=\"stock\">Stock</label>\n          <input #stock=\"ngModel\" [(ngModel)]=\"productStock\" name=\"stock\" id=\"stock\" type=\"number\" class=\"form-control form-rounded\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"imageUrl\">Image URL</label>\n          <input #imageurl=\"ngModel\" [(ngModel)]=\"productImageurl\" name=\"imageurl\" id=\"imageurl\" type=\"text\" class=\"form-control form-rounded\" required>\n        </div>\n        <button \n        class=\"btn btn-success\"\n        (click)=\"save(f.value)\"\n        [disabled]=\"!f.valid\"\n        >Update Product</button>\n      </form>\n    </div>\n    <div class=\"col-md-6\">  \n\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <img src=\"../../assets/images/{{ imageurl.value }}\" class=\"card-img-top\" alt=\"product image\">\n          <div class=\"card-body\">\n            <span class=\"badge badge-warning\" *ngIf=\"stock.value && stock.value < 15\">Low Stock</span>\n            <h5 class=\"card-title\">{{ title.value }}</h5>\n            <p class=\"card-text card-price\">{{ price.value | currency:'USD':true }}</p>\n            <button id=\"circle-btn\" class=\"btn btn-info btn-sm\">\n              ❤\n            </button>\n          </div>\n          <div class=\"card-footer\">\n            <button id=\"detail-btn\" class=\"btn btn-secondary btn-sm\">\n              See Details\n            </button>\n            <button id=\"add-cart-btn\" class=\"btn btn-secondary mx-2 btn-sm\">\n                <i class=\"fa fa-shopping-cart\"></i>  Add to Cart  \n            </button>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-wishlist/product-wishlist.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-wishlist/product-wishlist.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductWishlistProductWishlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h5>You have {{ wishCount }} products in your wishlist.</h5>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let w of wish\">\n        <div class=\"card\">\n            <img src=\"../../assets/images/{{ w.imageurl }}\" class=\"card-img-top\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{ w.title }}</h5>\n                <button \n                id=\"remove-btn\"\n                (click)=\"removeFromWishlist(w)\"\n                class=\"btn btn-light btn-sm\">\n                    Remove \n                </button>\n                <p class=\"card-text\">{{ w.price | currency:'USD':true }}</p>\n            </div>\n            <div class=\"card-footer\">\n                <button id=\"detail-btn\"\n                (click)=\"seeDetails(w._id)\"\n                class=\"btn btn-secondary btn-sm\">\n                    See Details\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-2\">\n        <div class=\"sticky-top\">\n            <div class=\"list-group\">\n                <button (click)=\"setItem('')\" class=\"list-group-item list-group-item-action\" [class.active]=\"!term\"\n                    routerLink=\"/product\">All Categories</button>\n\n                <button *ngFor=\"let c of categories\" (click)=\"setItem(c.categoryName)\"\n                    [class.active]=\"c.categoryName === term\"\n                    class=\"list-group-item list-group-item-action\">{{ c.categoryName }}</button>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"col-md-10\">\n        <div class=\"container\">\n            <div class=\"form-group has-icon\">\n                <span class=\"fa fa-search form-control-feedback\" style=\"color:#c1d62e;\"></span>\n                <input class=\"form-control form-rounded search-box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search...\">\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\" *ngFor=\"let p of products | filter:term\">\n                    <div class=\"card\">\n                        <img src=\"../../assets/images/{{ p.imageurl }}\" class=\"card-img-top\">\n                        <div class=\"card-body\">\n                            <span class=\"badge badge-warning\" *ngIf=\"p.stock < 15\">Low Stock</span>\n                            <h5 class=\"card-title\">{{ p.title }}</h5>\n                            <p class=\"card-text card-price\">{{ p.price | currency:'USD':true }}</p>\n                            <button (click)=\"addToWishlist(p)\" id=\"circle-btn\" class=\"btn btn-info btn-sm\">\n                                ❤\n                            </button>\n                        </div>\n                        <div class=\"card-footer\">\n                            <button id=\"detail-btn\" (click)=\"seeDetails(p._id)\" class=\"btn btn-secondary btn-sm\">\n                                See Details\n                            </button>\n\n                            <button id=\"add-cart-btn\" (click)=\"addToCart(p)\" class=\"btn btn-secondary mx-2 btn-sm\">\n                                <i class=\"fa fa-shopping-cart\"></i> Add to Cart\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6\">\n\n    <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n      {{ message }}\n    </div>\n    <div *ngIf=\"success != null && !success\" class=\"alert alert-danger\" role=\"alert\">\n      {{ message }}\n    </div>\n\n    <div class=\"text-center\">\n      <h1 class=\"h4 text-gray-900 mb-4\">Create Account</h1>\n    </div>\n    <form class=\"form\" #f=\"ngForm\">\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-user form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #fname=\"ngModel\" ngModel type=\"text\" name=\"fname\" class=\"form-control form-rounded\" required\n          placeholder=\"First Name\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-user-circle form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #lname=\"ngModel\" ngModel type=\"text\" name=\"lname\" class=\"form-control form-rounded\" required\n          placeholder=\"Last Name\">\n      </div>\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-envelope form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #email=\"ngModel\" ngModel type=\"email\" name=\"email\" class=\"form-control form-rounded\" required\n          placeholder=\"Email Address\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-key form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #password=\"ngModel\" ngModel type=\"password\" name=\"password\" class=\"form-control form-rounded\" required\n          placeholder=\"Password\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-phone form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #contact=\"ngModel\" ngModel type=\"number\" name=\"contact\" class=\"form-control form-rounded\" required\n          placeholder=\"Contact Number\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-globe form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #country=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"country\" required\n          placeholder=\"Country\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa-map-marker form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #state=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"state\" required\n          placeholder=\"State\">\n      </div>\n\n      <div class=\"form-group has-icon\">\n        <span class=\"fa fa fa-map-signs form-control-feedback\" style=\"color:#c1d62e;\"></span>\n        <input #zip=\"ngModel\" ngModel type=\"text\" class=\"form-control form-rounded\" name=\"zip\" required\n          placeholder=\"Zip Code\">\n      </div>\n      <button id=\"create-btn\" [disabled]=\"!f.valid\" class=\"btn btn-success\" (click)=\"register(f)\" type=\"submit\"> Create\n        Account</button>\n\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist-detail/wishlist-detail.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist-detail/wishlist-detail.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistDetailWishlistDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div *ngFor=\"let w of wishlist\">\n      <div class=\"row\" *ngIf=\"w._id == id\">\n        <div class=\"col-md-4\">\n          <img class=\"card-img-top img-fluid\" src=\"../../assets/images/{{w.imageurl }}\" alt=\"\">\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">{{ w.title }}</h3>\n            <h4>{{ w.price | currency:'USD':true }}</h4>\n            <p class=\"card-text\">{{ w.discription }}</p>\n            <span class=\"text-warning\">&#9733; &#9733; &#9733; &#9733; &#9734;</span>\n            4.0 stars\n          </div>\n          <div class=\"card card-outline-secondary my-4\">\n            <div class=\"card-header\">\n              Product Reviews\n            </div>\n            <div class=\"card-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus\n                neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae\n                sint natus.</p>\n              <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n              <hr>\n              <a href=\"#\" class=\"btn btn-success\">Leave a Review</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'clientapp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _services_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/admin-auth-guard.service */
    "./src/app/services/admin-auth-guard.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _services_register_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/product-detail/product-detail.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./manage-product/manage-product.component */
    "./src/app/manage-product/manage-product.component.ts");
    /* harmony import */


    var _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./manage-order/manage-order.component */
    "./src/app/manage-order/manage-order.component.ts");
    /* harmony import */


    var _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./product-update/product-update.component */
    "./src/app/product-update/product-update.component.ts");
    /* harmony import */


    var _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./product-cart/product-cart.component */
    "./src/app/product-cart/product-cart.component.ts");
    /* harmony import */


    var _product_wishlist_product_wishlist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./product-wishlist/product-wishlist.component */
    "./src/app/product-wishlist/product-wishlist.component.ts");
    /* harmony import */


    var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./my-orders/my-orders.component */
    "./src/app/my-orders/my-orders.component.ts");
    /* harmony import */


    var _wishlist_detail_wishlist_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./wishlist-detail/wishlist-detail.component */
    "./src/app/wishlist-detail/wishlist-detail.component.ts");
    /* harmony import */


    var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./order-success/order-success.component */
    "./src/app/order-success/order-success.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _checkout_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./checkout/order-summary/order-summary.component */
    "./src/app/checkout/order-summary/order-summary.component.ts");
    /* harmony import */


    var _checkout_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./checkout/shipping-form/shipping-form.component */
    "./src/app/checkout/shipping-form/shipping-form.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_25__["ProductListComponent"], _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_26__["ManageProductComponent"], _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_27__["ManageOrderComponent"], _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_28__["ProductUpdateComponent"], _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_29__["ProductCartComponent"], _product_wishlist_product_wishlist_component__WEBPACK_IMPORTED_MODULE_30__["ProductWishlistComponent"], _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_31__["MyOrdersComponent"], _wishlist_detail_wishlist_detail_component__WEBPACK_IMPORTED_MODULE_32__["WishlistDetailComponent"], _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_33__["OrderSuccessComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__["CheckoutComponent"], _checkout_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_35__["OrderSummaryComponent"], _checkout_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_36__["ShippingFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([//  { path: '', component: HomeComponent },
      {
        path: '',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"]
      }, {
        path: 'product/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"]
      }, {
        path: 'product-detail/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailComponent"]
      }, {
        path: 'product-cart',
        component: _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_29__["ProductCartComponent"]
      }, {
        path: 'wishlist-detail/:id',
        component: _wishlist_detail_wishlist_detail_component__WEBPACK_IMPORTED_MODULE_32__["WishlistDetailComponent"]
      }, {
        path: 'product-wishlist',
        component: _product_wishlist_product_wishlist_component__WEBPACK_IMPORTED_MODULE_30__["ProductWishlistComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"]
      }, {
        path: 'shipping-form',
        component: _checkout_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_36__["ShippingFormComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
      }, {
        path: 'order-success',
        component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_33__["OrderSuccessComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
      }, {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__["CheckoutComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
      }, {
        path: 'my-orders',
        component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_31__["MyOrdersComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
      }, {
        path: 'manage-product',
        component: _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_26__["ManageProductComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuardService"]]
      }, {
        path: 'product-list',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_25__["ProductListComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuardService"]]
      }, {
        path: 'product-update',
        component: _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_28__["ProductUpdateComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuardService"]]
      }, {
        path: 'manage-order',
        component: _manage_order_manage_order_component__WEBPACK_IMPORTED_MODULE_27__["ManageOrderComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuardService"]]
      }])],
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_16__["ProductService"], _services_order_service__WEBPACK_IMPORTED_MODULE_15__["OrderService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_14__["CartService"], _services_wishlist_service__WEBPACK_IMPORTED_MODULE_13__["WishlistService"], _services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"], _services_register_service__WEBPACK_IMPORTED_MODULE_12__["RegisterService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuardService"], _services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.component.css":
  /*!*************************************************!*\
    !*** ./src/app/checkout/checkout.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/checkout/checkout.component.ts ***!
    \************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckoutComponent =
    /*#__PURE__*/
    function () {
      function CheckoutComponent() {
        _classCallCheck(this, CheckoutComponent);
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.css */
      "./src/app/checkout/checkout.component.css")).default]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/checkout/order-summary/order-summary.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/checkout/order-summary/order-summary.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutOrderSummaryOrderSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/checkout/order-summary/order-summary.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/checkout/order-summary/order-summary.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderSummaryComponent */

  /***/
  function srcAppCheckoutOrderSummaryOrderSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function () {
      return OrderSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderSummaryComponent =
    /*#__PURE__*/
    function () {
      function OrderSummaryComponent(cartService, productService) {
        var _this = this;

        _classCallCheck(this, OrderSummaryComponent);

        this.cartService = cartService;
        this.productService = productService;
        this.cart = {};
        this.cartCount = 0;
        this.totalPrice = 0;
        cartService.getCart().subscribe(function (cart) {
          _this.cart = cart;
          _this.cartCount = _this.cart.length;

          _this.cartPrice();
        });
      }

      _createClass(OrderSummaryComponent, [{
        key: "cartPrice",
        value: function cartPrice() {
          for (var i in this.cart) {
            this.totalPrice += this.cart[i]['price'] * this.cart[i]['quantity'];
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderSummaryComponent;
    }();

    OrderSummaryComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }];
    };

    OrderSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'order-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/order-summary/order-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-summary.component.css */
      "./src/app/checkout/order-summary/order-summary.component.css")).default]
    })], OrderSummaryComponent);
    /***/
  },

  /***/
  "./src/app/checkout/shipping-form/shipping-form.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/checkout/shipping-form/shipping-form.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutShippingFormShippingFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L3NoaXBwaW5nLWZvcm0vc2hpcHBpbmctZm9ybS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/checkout/shipping-form/shipping-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/checkout/shipping-form/shipping-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ShippingFormComponent */

  /***/
  function srcAppCheckoutShippingFormShippingFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function () {
      return ShippingFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/services/order.service.ts");

    var ShippingFormComponent =
    /*#__PURE__*/
    function () {
      function ShippingFormComponent(router, navbarService, orderService, cartService) {
        var _this2 = this;

        _classCallCheck(this, ShippingFormComponent);

        this.router = router;
        this.navbarService = navbarService;
        this.orderService = orderService;
        this.cartService = cartService;
        this.cart = {};
        this.totalPrice = 0;
        cartService.getCart().subscribe(function (cart) {
          _this2.cart = cart;

          _this2.cartPrice();
        });
      }

      _createClass(ShippingFormComponent, [{
        key: "placeOrder",
        value: function placeOrder(info) {
          var _this3 = this;

          this.pay();
          this.cartService.getCart().subscribe(function (cart) {
            _this3.cart = cart;
            info.value.date = new Date().getTime();
            info.value.cart = _this3.cart;
            info.value.completed = 'false', _this3.orderService.saveOrder(info.value).subscribe(function (data) {
              _this3.navbarService.cartClear();
            });
          });
          this.cartService.clearCart().subscribe(function (data) {});
        }
      }, {
        key: "pay",
        value: function pay() {
          var _this4 = this;

          var handler = window.StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function token(_token) {}
          });
          handler.open({
            name: 'Organic Shop',
            amount: this.totalPrice * 100,
            closed: function closed() {
              _this4.router.navigate(['/order-success']);
            }
          });
        }
      }, {
        key: "cartPrice",
        value: function cartPrice() {
          for (var i in this.cart) {
            this.totalPrice += this.cart[i]['price'] * this.cart[i]['quantity'];
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShippingFormComponent;
    }();

    ShippingFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }];
    };

    ShippingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'shipping-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipping-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/shipping-form/shipping-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipping-form.component.css */
      "./src/app/checkout/shipping-form/shipping-form.component.css")).default]
    })], ShippingFormComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\r\n    background-color: #e6e6e6;\r\n    margin-top: 20px;\r\n    padding: 30px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carousel-item img {\r\n    height: 500px !important;\r\n}\r\n\r\n.card img {\r\n    height:180px !important;\r\n}\r\n\r\n.card {\r\n    width: 240px;\r\n}\r\n\r\n.heading {\r\n    margin: 25px 0;\r\n}\r\n\r\n.carousel-caption h1 {\r\n    float: top;\r\n    color: #28a745;\r\n    text-shadow: 4px 0 0 #000, -4px 0 0 #000, 0 4px 0 #000, 0 -4px 0 #000, 3px 3px #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000;\r\n    font-size: 80px;\r\n    font-weight: 900;\r\n}\r\n\r\n.carousel-caption h2 {\r\n    color: yellow;\r\n    text-shadow: 4px 0 0 #000, -4px 0 0 #000, 0 4px 0 #000, 0 -4px 0 #000, 3px 3px #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000;\r\n    font-size: 100px;\r\n    font-weight: 900;\r\n}\r\n\r\n.best-sellers {\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsdUlBQXVJO0lBQ3ZJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUlBQXVJO0lBQ3ZJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgICBoZWlnaHQ6MTgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBtYXJnaW46IDI1cHggMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24gaDEge1xyXG4gICAgZmxvYXQ6IHRvcDtcclxuICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCAwIDAgIzAwMCwgLTRweCAwIDAgIzAwMCwgMCA0cHggMCAjMDAwLCAwIC00cHggMCAjMDAwLCAzcHggM3B4ICMwMDAsIC0zcHggLTNweCAwICMwMDAsIDNweCAtM3B4IDAgIzAwMCwgLTNweCAzcHggMCAjMDAwO1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24gaDIge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIHRleHQtc2hhZG93OiA0cHggMCAwICMwMDAsIC00cHggMCAwICMwMDAsIDAgNHB4IDAgIzAwMCwgMCAtNHB4IDAgIzAwMCwgM3B4IDNweCAjMDAwLCAtM3B4IC0zcHggMCAjMDAwLCAzcHggLTNweCAwICMwMDAsIC0zcHggM3B4IDAgIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uYmVzdC1zZWxsZXJzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#sign-in-btn {\r\n    margin: 15px;\r\n    width: 250px;\r\n}\r\n\r\n\r\ninput {\r\n    font-size: .8rem;\r\n    padding: 1.2rem 1rem;   \r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.alert-success {\r\n    color: #155724;\r\n    background-color: #d4edda;\r\n    border-color: #c3e6cb;\r\n}\r\n\r\n\r\n.alert-danger {\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWduLWluLWJ0biB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcblxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgcGFkZGluZzogMS4ycmVtIDFyZW07ICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYWxlcnQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, route, navbarSerivce, loginService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.route = route;
        this.navbarSerivce = navbarSerivce;
        this.loginService = loginService;
        this.user = {};
        localStorage.clear();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(info) {
          var _this5 = this;

          this.loginService.getUser(info.value).subscribe(function (user) {
            _this5.user = user;

            if (_this5.user != null) {
              if (_this5.user.password == info.value.password) {
                _this5.logInMessage = "Logged In Successfully";
                _this5.customLoginClass = "alert alert-success";
                localStorage.setItem('email', _this5.user.email);
                localStorage.setItem('admin', _this5.user.isAdmin);
                localStorage.setItem('username', _this5.user.fname + ' ' + _this5.user.lname);

                _this5.navbarSerivce.loginUser(_this5.user.isAdmin);

                var returnUrl = _this5.route.snapshot.queryParamMap.get('returnUrl') || '/';
                setTimeout(function () {
                  _this5.router.navigateByUrl(returnUrl);
                }, 1000);
              } else {
                _this5.logInMessage = "Invalid Password";
                _this5.customLoginClass = "alert alert-danger";
              }
            } else {
              _this5.logInMessage = "Invalid Email";
              _this5.customLoginClass = "alert alert-danger";
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/manage-order/manage-order.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/manage-order/manage-order.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageOrderManageOrderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-space {\r\n    margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  padding: 0;\r\n  margin: 4px;\r\n  font-weight: 600;\r\n}\r\n\r\n.detail {\r\n    margin-bottom: 0;\r\n}\r\n\r\n#counter {\r\n    margin-left: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLW9yZGVyL21hbmFnZS1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLW9yZGVyL21hbmFnZS1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc3BhY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZGV0YWlsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNjb3VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/manage-order/manage-order.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/manage-order/manage-order.component.ts ***!
    \********************************************************/

  /*! exports provided: ManageOrderComponent */

  /***/
  function srcAppManageOrderManageOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageOrderComponent", function () {
      return ManageOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/order.service */
    "./src/app/services/order.service.ts");

    var ManageOrderComponent =
    /*#__PURE__*/
    function () {
      function ManageOrderComponent(orderService) {
        _classCallCheck(this, ManageOrderComponent);

        this.orderService = orderService;
        this.orders = {};
        this.ordersCount = 0;
        this.pendingCount = 0;
        this.completedCount = 0;
      }

      _createClass(ManageOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.orderService.getOrder().subscribe(function (orders) {
            _this6.orders = orders;
            _this6.ordersCount = _this6.orders.length;

            for (var order in orders) {
              if (orders[order].completed == 'false') {
                _this6.pendingCount += 1;
              }
            }

            _this6.completedCount = _this6.ordersCount - _this6.pendingCount;
          });
        }
      }]);

      return ManageOrderComponent;
    }();

    ManageOrderComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    ManageOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-order/manage-order.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-order.component.css */
      "./src/app/manage-order/manage-order.component.css")).default]
    })], ManageOrderComponent);
    /***/
  },

  /***/
  "./src/app/manage-product/manage-product.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/manage-product/manage-product.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageProductManageProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#create-btn {\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n.card {\r\n    margin-top: 50px;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n.card-footer{\r\n    border-radius: 2rem;\r\n  }\r\n\r\n\r\n#circle-btn {\r\n    border: none;\r\n    border-radius: 50%;\r\n    float: right;\r\n}\r\n\r\n\r\n#detail-btn {\r\n    margin-left: 24px;\r\n}\r\n\r\n\r\n.badge {\r\n    float: right;\r\n}\r\n\r\n\r\n.card-price{\r\n    float: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXByb2R1Y3QvbWFuYWdlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQjs7O0FBQ0Y7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXByb2R1Y3QvbWFuYWdlLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjcmVhdGUtYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgfVxyXG4jY2lyY2xlLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNkZXRhaWwtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC1wcmljZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/manage-product/manage-product.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/manage-product/manage-product.component.ts ***!
    \************************************************************/

  /*! exports provided: ManageProductComponent */

  /***/
  function srcAppManageProductManageProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageProductComponent", function () {
      return ManageProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageProductComponent =
    /*#__PURE__*/
    function () {
      function ManageProductComponent(router, categoryService, productService) {
        var _this7 = this;

        _classCallCheck(this, ManageProductComponent);

        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories = {};
        this.dataProduct = {};
        this.categoryService.getCategory().subscribe(function (categories) {
          _this7.categories = categories;
        });
      }

      _createClass(ManageProductComponent, [{
        key: "save",
        value: function save(info) {
          var _this8 = this;

          var product = {
            title: info.title,
            discription: info.discription,
            price: info.price,
            category: info.category,
            quantity: 1,
            stock: info.stock,
            imageurl: info.imageurl
          };
          this.productService.registerProduct(product).subscribe(function (data) {
            _this8.dataProduct = data;
            _this8.success = _this8.dataProduct.success;
            _this8.message = _this8.dataProduct.message;

            if (_this8.success) {
              setTimeout(function () {
                _this8.router.navigate(['/product-list']);
              }, 2000);
            }
          });
        }
      }, {
        key: "addCategory",
        value: function addCategory(category) {
          this.categoryService.addCategory(category.value).subscribe(function (data) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageProductComponent;
    }();

    ManageProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ManageProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-manage-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-product/manage-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-product.component.css */
      "./src/app/manage-product/manage-product.component.css")).default]
    })], ManageProductComponent);
    /***/
  },

  /***/
  "./src/app/my-orders/my-orders.component.css":
  /*!***************************************************!*\
    !*** ./src/app/my-orders/my-orders.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyOrdersMyOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-space {\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc3BhY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/my-orders/my-orders.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/my-orders/my-orders.component.ts ***!
    \**************************************************/

  /*! exports provided: MyOrdersComponent */

  /***/
  function srcAppMyOrdersMyOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function () {
      return MyOrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/order.service */
    "./src/app/services/order.service.ts");

    var MyOrdersComponent =
    /*#__PURE__*/
    function () {
      function MyOrdersComponent(orderService) {
        var _this9 = this;

        _classCallCheck(this, MyOrdersComponent);

        this.orderService = orderService;
        this.orders = {};
        this.orderService.getOrder().subscribe(function (orders) {
          _this9.orders = orders;
          _this9.email = localStorage.getItem('email') || null;
        });
      }

      _createClass(MyOrdersComponent, [{
        key: "cartPrice",
        value: function cartPrice(cart) {
          var totalPrice = 0;

          for (var i in cart) {
            totalPrice += cart[i]['price'] * cart[i]['quantity'];
          }

          return totalPrice;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyOrdersComponent;
    }();

    MyOrdersComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-orders.component.css */
      "./src/app/my-orders/my-orders.component.css")).default]
    })], MyOrdersComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-light .navbar-brand {\r\n    color: #c1d62e;\r\n}\r\n\r\n.dropdown-toggle, #logout {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICNjMWQ2MmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUsICNsb2dvdXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/cart.service */
    "./src/app/services/cart.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(cartService, navbarService, wishListService) {
        var _this10 = this;

        _classCallCheck(this, NavbarComponent);

        this.cartService = cartService;
        this.navbarService = navbarService;
        this.wishListService = wishListService;
        this.dataCart = {};
        this.dataWishlist = {};
        this.wishCount = 0;
        this.cartCountSubscription = navbarService.cartCount$.subscribe(function (cartCount) {
          _this10.cartCount = cartCount;
        });
        this.wishCountSubscription = navbarService.wishCount$.subscribe(function (wishCount) {
          _this10.wishCount = wishCount;
        });
        this.loginSubscription = navbarService.login$.subscribe(function (isAdmin) {
          _this10.admin = isAdmin || null;
          _this10.username = localStorage.getItem('username') || null;
        });
        this.logoutSubscription = navbarService.logout$.subscribe(function (isAdmin) {
          _this10.admin = isAdmin;
        });
        this.clearCartSubscription = navbarService.clearCart$.subscribe(function (value) {
          _this10.cartCount = 0;
        });
        this.admin = localStorage.getItem('admin') || null;
        this.username = localStorage.getItem('username') || null;
        this.cartService.getCart().subscribe(function (cart) {
          _this10.dataCart = cart;
          _this10.cartCount = _this10.dataCart.length;
          /* for(let c in cart) {
            this.cartCount += cart[c].quantity;
          }   */
        });
        this.wishListService.getWishlist().subscribe(function (wishlist) {
          _this10.dataWishlist = wishlist;
          _this10.wishCount = _this10.dataWishlist.length;
        });
      }

      _createClass(NavbarComponent, [{
        key: "logoutUser",
        value: function logoutUser() {
          localStorage.clear();
          this.navbarService.logoutUser();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
      }, {
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/order-success/order-success.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/order-success/order-success.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderSuccessOrderSuccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/order-success/order-success.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/order-success/order-success.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrderSuccessComponent */

  /***/
  function srcAppOrderSuccessOrderSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function () {
      return OrderSuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderSuccessComponent =
    /*#__PURE__*/
    function () {
      function OrderSuccessComponent() {
        _classCallCheck(this, OrderSuccessComponent);
      }

      _createClass(OrderSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderSuccessComponent;
    }();

    OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-success',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-success.component.css */
      "./src/app/order-success/order-success.component.css")).default]
    })], OrderSuccessComponent);
    /***/
  },

  /***/
  "./src/app/product-cart/product-cart.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/product-cart/product-cart.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductCartProductCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n#btn_dec\r\n{\r\n    background-color: black;    \r\n}\r\n\r\n#btn_inc\r\n{\r\n    background-color: white;    \r\n}\r\n\r\n.btn-success {\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jYXJ0L3Byb2R1Y3QtY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBQ0E7O0lBRUksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1jYXJ0L3Byb2R1Y3QtY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2J0bl9kZWNcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAgIFxyXG59XHJcbiNidG5faW5jXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcclxufVxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product-cart/product-cart.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-cart/product-cart.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductCartComponent */

  /***/
  function srcAppProductCartProductCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCartComponent", function () {
      return ProductCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");

    var ProductCartComponent =
    /*#__PURE__*/
    function () {
      function ProductCartComponent(router, cartService, productService) {
        var _this11 = this;

        _classCallCheck(this, ProductCartComponent);

        this.router = router;
        this.cartService = cartService;
        this.productService = productService;
        this.cart = {};
        this.cartCount = 0;
        this.totalPrice = 0;
        this.quantity = 1;
        this.cartService.getCart().subscribe(function (cart) {
          _this11.cart = cart;
          _this11.cartCount = _this11.cart.length;

          _this11.cartPrice();
        });
      }

      _createClass(ProductCartComponent, [{
        key: "cartPrice",
        value: function cartPrice() {
          for (var i = 0; this.cart[i]; i++) {
            this.totalPrice += this.cart[i]['price'] * this.cart[i]['quantity'];
          }
        }
      }, {
        key: "inc",
        value: function inc(product) {
          product.quantity += 1;
          this.cartService.updateCart(product).subscribe(function (data) {});
          this.totalPrice += product.price;
        }
      }, {
        key: "dec",
        value: function dec(product) {
          product.quantity -= 1;
          this.cartService.updateCart(product).subscribe(function (data) {});
          this.totalPrice -= product.price;
        }
      }, {
        key: "saveCart",
        value: function saveCart(cart) {
          var _this12 = this;

          this.cartService.getCart().subscribe(function (cart) {
            _this12.cart = cart;
          });
          this.router.navigate(['/checkout']);
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          this.cartService.clearCart().subscribe(function (data) {});
          this.router.navigate(['/']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductCartComponent;
    }();

    ProductCartComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }];
    };

    ProductCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-product-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-cart/product-cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-cart.component.css */
      "./src/app/product-cart/product-cart.component.css")).default]
    })], ProductCartComponent);
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/product-detail/product-detail.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailProductDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-img-top {\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/product-detail/product-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductDetailComponent =
    /*#__PURE__*/
    function () {
      function ProductDetailComponent(route, productService) {
        _classCallCheck(this, ProductDetailComponent);

        this.route = route;
        this.productService = productService;
        this.getDetail();
      }

      _createClass(ProductDetailComponent, [{
        key: "getDetail",
        value: function getDetail() {
          var _this13 = this;

          this.obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.productService.getProducts(), this.route.params]);
          this.obs.subscribe(function (res) {
            _this13.products = res[0];
            _this13.id = res[1]['id'];
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }];
    };

    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-product-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-detail.component.css */
      "./src/app/product-detail/product-detail.component.css")).default]
    })], ProductDetailComponent);
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/product-list/product-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search-box {\r\n    width: 400px;\r\n    margin: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYm94IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(router, productService) {
        _classCallCheck(this, ProductListComponent);

        this.router = router;
        this.productService = productService;
        this.product = {};
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initComponent();
        }
      }, {
        key: "initComponent",
        value: function initComponent() {
          var _this14 = this;

          this.productService.getProducts().subscribe(function (product) {
            _this14.product = product;
            _this14.productCount = _this14.product.length;
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(product) {
          var _this15 = this;

          this.productService.deleteProduct(product).subscribe(function (data) {
            _this15.ngOnInit();
          });
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          localStorage.setItem('product-title', product.title);
          localStorage.setItem('product-stock', product.stock);
          localStorage.setItem('product-price', product.price);
          localStorage.setItem('product-category', product.category);
          localStorage.setItem('product-discription', product.discription);
          localStorage.setItem('product-imageurl', product.imageurl);
          this.router.navigate(['/product-update']);
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }];
    };

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/product-list/product-list.component.css")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/product-update/product-update.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/product-update/product-update.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductUpdateProductUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#create-btn {\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n.card {\r\n    margin-top: 50px;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n.card-footer{\r\n    border-radius: 2rem;\r\n  }\r\n\r\n\r\n#circle-btn {\r\n    border: none;\r\n    border-radius: 50%;\r\n    float: right;\r\n}\r\n\r\n\r\n#detail-btn {\r\n    margin-left: 24px;\r\n}\r\n\r\n\r\n.badge {\r\n    float: right;\r\n}\r\n\r\n\r\n.card-price{\r\n    float: left;\r\n}\r\n\r\n\r\n#discription {\r\n    height: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC11cGRhdGUvcHJvZHVjdC11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQjs7O0FBRUY7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXVwZGF0ZS9wcm9kdWN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NyZWF0ZS1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB9XHJcblxyXG4jY2lyY2xlLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNkZXRhaWwtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC1wcmljZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jZGlzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product-update/product-update.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/product-update/product-update.component.ts ***!
    \************************************************************/

  /*! exports provided: ProductUpdateComponent */

  /***/
  function srcAppProductUpdateProductUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function () {
      return ProductUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductUpdateComponent =
    /*#__PURE__*/
    function () {
      function ProductUpdateComponent(router, productService, categoryService) {
        var _this16 = this;

        _classCallCheck(this, ProductUpdateComponent);

        this.router = router;
        this.productService = productService;
        this.categoryService = categoryService;
        this.categories = {};
        this.dataRes = {};
        this.categoryService.getCategory().subscribe(function (categories) {
          _this16.categories = categories;
        });
        this.getProductInfo();
      }

      _createClass(ProductUpdateComponent, [{
        key: "getProductInfo",
        value: function getProductInfo() {
          this.productTitle = localStorage.getItem('product-title');
          this.productPrice = localStorage.getItem('product-price');
          this.productStock = localStorage.getItem('product-stock');
          this.productCategory = localStorage.getItem('product-category');
          this.productDiscription = localStorage.getItem('product-discription');
          this.productImageurl = localStorage.getItem('product-imageurl');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save(info) {
          var _this17 = this;

          this.productService.updateProduct(info).subscribe(function (res) {
            _this17.dataRes = res;
            _this17.success = _this17.dataRes.success;
            _this17.message = _this17.dataRes.message;
            localStorage.removeItem('product-title');
            localStorage.removeItem('product-price');
            localStorage.removeItem('product-stock');
            localStorage.removeItem('product-category');
            localStorage.removeItem('product-discription');
            localStorage.removeItem('product-imageurl');

            if (_this17.success) {
              setTimeout(function () {
                _this17.router.navigate(['/product-list']);
              }, 2000);
            }
          });
        }
      }]);

      return ProductUpdateComponent;
    }();

    ProductUpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
      }];
    };

    ProductUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-product-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-update/product-update.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-update.component.css */
      "./src/app/product-update/product-update.component.css")).default]
    })], ProductUpdateComponent);
    /***/
  },

  /***/
  "./src/app/product-wishlist/product-wishlist.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/product-wishlist/product-wishlist.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductWishlistProductWishlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n#remove-btn {\r\n    background-color: black;\r\n    color:white;\r\n    float: right;\r\n}\r\n\r\n.card-footer{\r\n    border-radius: 2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC13aXNobGlzdC9wcm9kdWN0LXdpc2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtd2lzaGxpc3QvcHJvZHVjdC13aXNobGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jcmVtb3ZlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/product-wishlist/product-wishlist.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/product-wishlist/product-wishlist.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductWishlistComponent */

  /***/
  function srcAppProductWishlistProductWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductWishlistComponent", function () {
      return ProductWishlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductWishlistComponent =
    /*#__PURE__*/
    function () {
      function ProductWishlistComponent(router, navbarService, wishListService) {
        var _this18 = this;

        _classCallCheck(this, ProductWishlistComponent);

        this.router = router;
        this.navbarService = navbarService;
        this.wishListService = wishListService;
        this.wish = {};
        this.wishCount = 0;
        this.wishListService.getWishlist().subscribe(function (wish) {
          _this18.wish = wish;
          _this18.wishCount = _this18.wish.length;
        });
      }

      _createClass(ProductWishlistComponent, [{
        key: "seeDetails",
        value: function seeDetails(id) {
          this.router.navigate(['wishlist-detail', id]);
        }
      }, {
        key: "removeFromWishlist",
        value: function removeFromWishlist(product) {
          this.wishListService.removeFromWishlist(product).subscribe(function (data) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductWishlistComponent;
    }();

    ProductWishlistComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
      }, {
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]
      }];
    };

    ProductWishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-product-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-wishlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-wishlist/product-wishlist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-wishlist.component.css */
      "./src/app/product-wishlist/product-wishlist.component.css")).default]
    })], ProductWishlistComponent);
    /***/
  },

  /***/
  "./src/app/product/product.component.css":
  /*!***********************************************!*\
    !*** ./src/app/product/product.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n.search-box {\r\n    width: 400px;\r\n    margin: 2px;\r\n}\r\n\r\n#circle-btn {\r\n    border: none;\r\n    border-radius: 50%;\r\n    float: right;\r\n}\r\n\r\n.card-footer{\r\n    border-radius: 2rem;\r\n  }\r\n\r\n.badge {\r\n    float: right;\r\n}\r\n\r\n.card-price{\r\n    float: left;\r\n}\r\n\r\n.list-group-item {\r\n   \r\n    cursor: pointer;\r\n}\r\n\r\n.list-group-item.active {\r\n    z-index: 2;\r\n    color: #fff;\r\n    background-color: #c1d62e;\r\n    border-color: #c1d62e;\r\n}\r\n\r\n.sticky-top {\r\n    top: 80px;\r\n}\r\n\r\n/* .green {\r\n    color: green;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksU0FBUztBQUNiOztBQUVBOzs7Ozs7Ozs7O0dBVUciLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4jY2lyY2xlLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgfVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNhcmQtcHJpY2V7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFkNjJlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzFkNjJlO1xyXG59XHJcblxyXG5cclxuLnN0aWNreS10b3Age1xyXG4gICAgdG9wOiA4MHB4O1xyXG59XHJcblxyXG4vKiAuZ3JlZW4ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(router, route, cartService, navbarService, categoryService, wishListService, productService) {
        var _this19 = this;

        _classCallCheck(this, ProductComponent);

        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.navbarService = navbarService;
        this.categoryService = categoryService;
        this.wishListService = wishListService;
        this.productService = productService;
        this.products = {};
        this.categories = {};
        this.dataWish = {};
        this.dataCart = {};
        this.productService.getProducts().subscribe(function (product) {
          _this19.products = product;

          _this19.getCategories();
        });
        this.route.params.subscribe(function (data) {
          _this19.term = data['id'];
          if (_this19.term == 'all') _this19.term = '';
        });
      }

      _createClass(ProductComponent, [{
        key: "getCategories",
        value: function getCategories() {
          var _this20 = this;

          this.categoryService.getCategory().subscribe(function (categories) {
            _this20.categories = categories;
          });
        }
      }, {
        key: "seeDetails",
        value: function seeDetails(id) {
          this.router.navigate(['product-detail', id]);
        }
      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          var _this21 = this;

          this.wishListService.addToWishlist(product).subscribe(function (data) {
            _this21.wishListService.getWishlist().subscribe(function (wish) {
              _this21.dataWish = wish;

              _this21.navbarService.wishCount(_this21.dataWish.length);
            });
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var _this22 = this;

          this.cartService.addToCart(product).subscribe(function (data) {
            _this22.cartService.getCart().subscribe(function (cart) {
              _this22.dataCart = cart;

              _this22.navbarService.cartCount(_this22.dataCart.length);
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/product/product.component.css")).default]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#create-btn {\r\n    margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n    font-size: .8rem;\r\n    padding: 1.2rem 1rem;\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjcmVhdGUtYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBwYWRkaW5nOiAxLjJyZW0gMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/register.service */
    "./src/app/services/register.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, registerService) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.registerService = registerService;
        this.dataRegister = {};
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register(info) {
          var _this23 = this;

          this.registerService.addUser(info.value).subscribe(function (data) {
            _this23.dataRegister = data;
            _this23.success = _this23.dataRegister.success;
            _this23.message = _this23.dataRegister.message;
            console.log(_this23.success);
            console.log(_this23.message);

            if (_this23.success) {
              setTimeout(function () {
                _this23.router.navigate(['/login']);
              }, 2000);
            }
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/admin-auth-guard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/admin-auth-guard.service.ts ***!
    \******************************************************/

  /*! exports provided: AdminAuthGuardService */

  /***/
  function srcAppServicesAdminAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function () {
      return AdminAuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminAuthGuardService =
    /*#__PURE__*/
    function () {
      function AdminAuthGuardService(router) {
        _classCallCheck(this, AdminAuthGuardService);

        this.router = router;
      }

      _createClass(AdminAuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          this.isAdmin = localStorage.getItem('admin');
          if (this.isAdmin == 'true') return true;
          return false;
        }
      }]);

      return AdminAuthGuardService;
    }();

    AdminAuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminAuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminAuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          this.email = localStorage.getItem('email');

          if (this.email) {
            return true;
          } else {
            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CartService =
    /*#__PURE__*/
    function () {
      //domain = "http://localhost:3000";
      function CartService(http) {
        _classCallCheck(this, CartService);

        this.http = http;
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.NavbarComponent = this.cartSubject.asObservable();
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(product) {
          return this.http.post('api/cart', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          /* this.cartSubject.next(<NavbarComponent>); */
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.http.get('api/cart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "updateCart",
        value: function updateCart(product) {
          return this.http.put('api/cart', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          return this.http.delete('api/clearCart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CategoryService =
    /*#__PURE__*/
    function () {
      // domain = "http://localhost:3000";
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "addCategory",
        value: function addCategory(category) {
          return this.http.post('api/category', category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return this.http.get('api/category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      //domain = "http://localhost:3000";
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "getUser",
        value: function getUser(user) {
          return this.http.post('api/findUser', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/services/navbar.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/navbar.service.ts ***!
    \********************************************/

  /*! exports provided: NavbarService */

  /***/
  function srcAppServicesNavbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarService", function () {
      return NavbarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NavbarService =
    /*#__PURE__*/
    function () {
      function NavbarService() {
        _classCallCheck(this, NavbarService);

        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.cartCount$ = this.cart.asObservable();
        this.wish = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.wishCount$ = this.wish.asObservable();
        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('false');
        this.login$ = this.login.asObservable();
        this.logout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('false');
        this.logout$ = this.logout.asObservable();
        this.clearCart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.clearCart$ = this.logout.asObservable();
      }

      _createClass(NavbarService, [{
        key: "cartCount",
        value: function cartCount(_cartCount) {
          this.cart.next(_cartCount);
        }
      }, {
        key: "wishCount",
        value: function wishCount(_wishCount) {
          this.wish.next(_wishCount);
        }
      }, {
        key: "loginUser",
        value: function loginUser(isAdmin) {
          this.login.next(isAdmin);
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          var isAdmin = null;
          this.logout.next(isAdmin);
        }
      }, {
        key: "cartClear",
        value: function cartClear() {
          this.clearCart.next(0);
        }
      }]);

      return NavbarService;
    }();

    NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavbarService);
    /***/
  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      //domain = "http://localhost:3000";
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
      }

      _createClass(OrderService, [{
        key: "saveOrder",
        value: function saveOrder(order) {
          return this.http.post('api/Order', order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          return this.http.get('api/Order').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "dispatchOrder",
        value: function dispatchOrder(order) {
          return this.http.put('api/dispatchOrder', order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
    /***/
  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductService =
    /*#__PURE__*/
    function () {
      // domain = "http://localhost:3000";
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "registerProduct",
        value: function registerProduct(product) {
          return this.http.post('api/register', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.http.get('api/register').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }, {
        key: "getProductByName",
        value: function getProductByName(productName) {
          return this.http.post('api/findProduct', productName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(product) {
          return this.http.post('api/deleteProduct', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          return this.http.put('api/updateProduct', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
          ;
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/services/register.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/register.service.ts ***!
    \**********************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegisterService =
    /*#__PURE__*/
    function () {
      // domain = "http://localhost:3000";
      function RegisterService(http) {
        _classCallCheck(this, RegisterService);

        this.http = http;
      }

      _createClass(RegisterService, [{
        key: "addUser",
        value: function addUser(user) {
          return this.http.post('api/user', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegisterService);
    /***/
  },

  /***/
  "./src/app/services/wishlist.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/wishlist.service.ts ***!
    \**********************************************/

  /*! exports provided: WishlistService */

  /***/
  function srcAppServicesWishlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistService", function () {
      return WishlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var WishlistService =
    /*#__PURE__*/
    function () {
      //domain = "http://localhost:3000";
      function WishlistService(http) {
        _classCallCheck(this, WishlistService);

        this.http = http;
      }

      _createClass(WishlistService, [{
        key: "addToWishlist",
        value: function addToWishlist(product) {
          return this.http.post('api/wishlist', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getWishlist",
        value: function getWishlist() {
          return this.http.get('api/wishlist').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "removeFromWishlist",
        value: function removeFromWishlist(product) {
          return this.http.post('api/removeFromWishlist', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return WishlistService;
    }();

    WishlistService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WishlistService);
    /***/
  },

  /***/
  "./src/app/wishlist-detail/wishlist-detail.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/wishlist-detail/wishlist-detail.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistDetailWishlistDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0LWRldGFpbC93aXNobGlzdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/wishlist-detail/wishlist-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/wishlist-detail/wishlist-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: WishlistDetailComponent */

  /***/
  function srcAppWishlistDetailWishlistDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistDetailComponent", function () {
      return WishlistDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var WishlistDetailComponent =
    /*#__PURE__*/
    function () {
      function WishlistDetailComponent(route, wishListService) {
        _classCallCheck(this, WishlistDetailComponent);

        this.route = route;
        this.wishListService = wishListService;
        this.getDetail();
      }

      _createClass(WishlistDetailComponent, [{
        key: "getDetail",
        value: function getDetail() {
          var _this24 = this;

          this.obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.wishListService.getWishlist(), this.route.params]);
          this.obs.subscribe(function (res) {
            _this24.wishlist = res[0];
            _this24.id = res[1]['id'];
          });
        }
      }]);

      return WishlistDetailComponent;
    }();

    WishlistDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"]
      }];
    };

    WishlistDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-wishlist-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist-detail/wishlist-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist-detail.component.css */
      "./src/app/wishlist-detail/wishlist-detail.component.css")).default]
    })], WishlistDetailComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\NodeProjects\meanEcomApp\clientapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map