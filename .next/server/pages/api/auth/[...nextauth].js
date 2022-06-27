"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        })\n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            user && (token.user = user);\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            session.user = token.user;\n            return session;\n        },\n        redirect: async (url, baseurl)=>{\n            if (url === \"/profile\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDQTtBQUV2RCxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCLEVBQWlEO0lBQ2pERyxTQUFTLEVBQUUsQ0FBQztRQUNWRixpRUFBYyxDQUFDLENBQUM7WUFDZEcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGFBQWEsRUFBRSxDQUFDO2dCQUNkQyxNQUFNLEVBQUUsQ0FBQztvQkFDUEMsTUFBTSxFQUFFLENBQVM7b0JBQ2pCQyxXQUFXLEVBQUUsQ0FBUztvQkFDdEJDLGFBQWEsRUFBRSxDQUFNO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRFosaUVBQWMsQ0FBQyxDQUFDO1lBQ2RFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNTLGdCQUFnQjtZQUN0Q1AsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1Usb0JBQW9CO1FBQ2hELENBQUM7SUFFSCxDQUFDO0lBQ0RDLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLFVBQVUsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREMsTUFBTSxFQUFFZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsZUFBZTtJQUNuQ0MsU0FBUyxFQUFFLENBQUM7UUFDVkosR0FBRyxTQUFTLENBQUMsQ0FBQ0ssS0FBSyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7WUFDL0JBLElBQUksS0FBS0QsS0FBSyxDQUFDQyxJQUFJLEdBQUdBLElBQUk7WUFDMUIsTUFBTSxDQUFDRCxLQUFLO1FBQ2QsQ0FBQztRQUNERSxPQUFPLFNBQVMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVGLEtBQUssRUFBQyxDQUFDLEdBQUssQ0FBQztZQUN0Q0UsT0FBTyxDQUFDRCxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSTtZQUN6QixNQUFNLENBQUNDLE9BQU87UUFDaEIsQ0FBQztRQUNEQyxRQUFRLFNBQVNDLEdBQUcsRUFBRUMsT0FBTyxHQUFLLENBQUM7WUFDakMsRUFBRSxFQUFFRCxHQUFHLEtBQUssQ0FBVSxXQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBRztZQUM1QixDQUFDO1lBQ0QsTUFBTSxDQUFDRCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFHO1FBQzVCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHByb21wdDogXCJjb25zZW50XCIsXG4gICAgICAgICAgYWNjZXNzX3R5cGU6IFwib2ZmbGluZVwiLFxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbiAgand0OiB7XG4gICAgZW5jcnlwdGlvbjogdHJ1ZSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIGNhbGxiYWNrczoge1xuICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIgfSkgPT4ge1xuICAgICAgdXNlciAmJiAodG9rZW4udXNlciA9IHVzZXIpO1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgcmVkaXJlY3Q6IGFzeW5jICh1cmwsIGJhc2V1cmwpID0+IHtcbiAgICAgIGlmICh1cmwgPT09IFwiL3Byb2ZpbGVcIikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiL1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIvXCIpO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiR2l0SHViUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwiR0lUSFVCX0NMSUVOVF9JRCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiand0IiwiZW5jcnlwdGlvbiIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInRva2VuIiwidXNlciIsInNlc3Npb24iLCJyZWRpcmVjdCIsInVybCIsImJhc2V1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();