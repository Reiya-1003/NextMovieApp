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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        })\n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.SECRET,\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            user && (token.user = user);\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            session.user = token.user;\n            return session;\n        },\n        redirect: async (url, baseurl)=>{\n            if (url === \"/profile\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDQTtBQUt2RCxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCLEVBQWlEO0lBQ2pERyxTQUFTLEVBQUUsQ0FBQztRQUNWRixpRUFBYyxDQUFDLENBQUM7WUFDZEcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGFBQWEsRUFBRSxDQUFDO2dCQUNkQyxNQUFNLEVBQUUsQ0FBQztvQkFDUEMsTUFBTSxFQUFFLENBQVM7b0JBQ2pCQyxXQUFXLEVBQUUsQ0FBUztvQkFDdEJDLGFBQWEsRUFBRSxDQUFNO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRFosaUVBQWMsQ0FBQyxDQUFDO1lBQ2RFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNTLGdCQUFnQjtZQUN4Q1AsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1Usb0JBQW9CO1FBQzlDLENBQUM7SUFHSCxDQUFDO0lBQ0RDLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLFVBQVUsRUFBQyxJQUFJO0lBQ2pCLENBQUM7SUFDREMsTUFBTSxFQUFFZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsTUFBTTtJQUMxQkMsU0FBUyxFQUFDLENBQUM7UUFDVEosR0FBRyxTQUFTLENBQUMsQ0FBQ0ssS0FBSyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7WUFDL0JBLElBQUksS0FBS0QsS0FBSyxDQUFDQyxJQUFJLEdBQUdBLElBQUk7WUFDMUIsTUFBTSxDQUFDRCxLQUFLO1FBQ2hCLENBQUM7UUFDREUsT0FBTyxTQUFTLENBQUMsQ0FBQ0EsT0FBTyxHQUFFRixLQUFLLEVBQUMsQ0FBQyxHQUFLLENBQUM7WUFDdENFLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUk7WUFDekIsTUFBTSxDQUFDQyxPQUFPO1FBQ2xCLENBQUM7UUFDR0MsUUFBUSxTQUFRQyxHQUFHLEVBQUNDLE9BQU8sR0FBRyxDQUFDO1lBQzdCLEVBQUUsRUFBQ0QsR0FBRyxLQUFLLENBQVUsV0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUc7WUFDNUIsQ0FBQztZQUNELE1BQU0sQ0FBQ0QsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBRztRQUM1QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxuICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcbiAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVFxuICAgIH0pXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgICBcbiAgXSxcbiAgand0OiB7XG4gICAgZW5jcnlwdGlvbjp0cnVlLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcbiAgY2FsbGJhY2tzOntcbiAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyIH0pID0+IHtcbiAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKVxuICAgICAgcmV0dXJuIHRva2VuXG4gIH0sXG4gIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyXG4gICAgcmV0dXJuIHNlc3Npb25cbn0sXG4gICAgcmVkaXJlY3Q6IGFzeW5jKHVybCxiYXNldXJsKT0+e1xuICAgICAgaWYodXJsID09PSBcIi9wcm9maWxlXCIpe1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiL1wiKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcIi9cIilcbiAgICB9XG4gIH1cbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJqd3QiLCJlbmNyeXB0aW9uIiwic2VjcmV0IiwiU0VDUkVUIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VyIiwic2Vzc2lvbiIsInJlZGlyZWN0IiwidXJsIiwiYmFzZXVybCIsIlByb21pc2UiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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