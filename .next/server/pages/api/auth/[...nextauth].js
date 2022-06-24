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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: \"Iv1.deb2b4d5483aedfb\",\n            clientSecret: \"90436a6d97e8edf2108633e2bc02a95552fc5df5\"\n        })\n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.secret,\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            user && (token.user = user);\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            session.user = token.user;\n            return session;\n        },\n        redirect: async (url, baseurl)=>{\n            if (url === \"/profile\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDQTtBQUt2RCxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCLEVBQWlEO0lBQ2pERyxTQUFTLEVBQUUsQ0FBQztRQUNWRixpRUFBYyxDQUFDLENBQUM7WUFDZEcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGFBQWEsRUFBRSxDQUFDO2dCQUNkQyxNQUFNLEVBQUUsQ0FBQztvQkFDUEMsTUFBTSxFQUFFLENBQVM7b0JBQ2pCQyxXQUFXLEVBQUUsQ0FBUztvQkFDdEJDLGFBQWEsRUFBRSxDQUFNO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRFosaUVBQWMsQ0FBQyxDQUFDO1lBQ2RFLFFBQVEsRUFBRSxDQUFzQjtZQUNsQ0ksWUFBWSxFQUFFLENBQTBDO1FBQ3hELENBQUM7SUFHSCxDQUFDO0lBQ0RPLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLFVBQVUsRUFBQyxJQUFJO0lBQ2pCLENBQUM7SUFDREMsTUFBTSxFQUFDWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1csTUFBTTtJQUN6QkMsU0FBUyxFQUFDLENBQUM7UUFDVEgsR0FBRyxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7WUFDL0JBLElBQUksS0FBS0QsS0FBSyxDQUFDQyxJQUFJLEdBQUdBLElBQUk7WUFDMUIsTUFBTSxDQUFDRCxLQUFLO1FBQ2hCLENBQUM7UUFDREUsT0FBTyxTQUFTLENBQUMsQ0FBQ0EsT0FBTyxHQUFFRixLQUFLLEVBQUMsQ0FBQyxHQUFLLENBQUM7WUFDdENFLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUk7WUFDekIsTUFBTSxDQUFDQyxPQUFPO1FBQ2xCLENBQUM7UUFDR0MsUUFBUSxTQUFRQyxHQUFHLEVBQUNDLE9BQU8sR0FBRyxDQUFDO1lBQzdCLEVBQUUsRUFBQ0QsR0FBRyxLQUFLLENBQVUsV0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUc7WUFDNUIsQ0FBQztZQUNELE1BQU0sQ0FBQ0QsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBRztRQUM1QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxuICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcbiAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IFwiSXYxLmRlYjJiNGQ1NDgzYWVkZmJcIixcbiAgICBjbGllbnRTZWNyZXQ6IFwiOTA0MzZhNmQ5N2U4ZWRmMjEwODYzM2UyYmMwMmE5NTU1MmZjNWRmNVwiXG4gICAgfSlcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICAgIFxuICBdLFxuICBqd3Q6IHtcbiAgICBlbmNyeXB0aW9uOnRydWUsXG4gIH0sXG4gIHNlY3JldDpwcm9jZXNzLmVudi5zZWNyZXQsXG4gIGNhbGxiYWNrczp7XG4gICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcilcbiAgICAgIHJldHVybiB0b2tlblxuICB9LFxuICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlclxuICAgIHJldHVybiBzZXNzaW9uXG59LFxuICAgIHJlZGlyZWN0OiBhc3luYyh1cmwsYmFzZXVybCk9PntcbiAgICAgIGlmKHVybCA9PT0gXCIvcHJvZmlsZVwiKXtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcIi9cIilcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIvXCIpXG4gICAgfVxuICB9XG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiR2l0SHViUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwiand0IiwiZW5jcnlwdGlvbiIsInNlY3JldCIsImNhbGxiYWNrcyIsInRva2VuIiwidXNlciIsInNlc3Npb24iLCJyZWRpcmVjdCIsInVybCIsImJhc2V1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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