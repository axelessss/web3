/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// index.js\nconst vacanciesElement = document.getElementById('vacancies');\n\nasync function loadVacancies() {\n  try {\n    const response = await axios.get('https://api.hh.ru/vacancies', {\n      params: {\n        text: 'Developer',\n        area: 4,\n        per_page: 10\n      }\n    });\n\n    const vacancies = response.data.items;\n    vacancies.forEach(vacancy => {\n      const vacancyElement = document.createElement('div');\n      vacancyElement.classList.add('vacancy');\n      vacancyElement.innerHTML = `\n        <h2>${vacancy.name}</h2>\n        <p>${vacancy.employer.name}</p>\n        <p>${vacancy.snippet.requirement}</p>\n        <p>${vacancy.snippet.responsibility}</p>\n      `;\n      vacanciesElement.appendChild(vacancyElement);\n    });\n  } catch (error) {\n    console.error('Error loading vacancies:', error);\n  }\n}\n\nloadVacancies();\n\n//# sourceURL=webpack://weblab3/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;