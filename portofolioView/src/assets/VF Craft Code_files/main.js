"use strict";
(self["webpackChunkportofolioView"] = self["webpackChunkportofolioView"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);


class AppComponent {
  constructor() {
    this.title = 'portofolioView';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
    }
  },
  dependencies: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_home_first_screen_first_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/first-screen/first-screen.component */ 1438);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 3064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_home_first_screen_first_screen_component__WEBPACK_IMPORTED_MODULE_3__.FirstScreenComponent, _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 3064:
/*!***********************************************************!*\
  !*** ./src/app/components/general/menu/menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MenuComponent {}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)();
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 15,
  vars: 0,
  consts: [[1, "menu"], [1, "internalMenu"], [1, "subInternalMenu"], [1, "logo", 2, "margin-right", "1%"], ["src", "./../../../../assets/icons/angular.png"], [1, "linksMenu"], ["href", "#home"], ["href", "#aboutMe"], ["href", "#skills"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "li")(7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sobre Mim");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".menu[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  background-color: black;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  opacity: 70%;\n  z-index: 50000000000;\n  margin-top: 0rem;\n}\n\n.internalMenu[_ngcontent-%COMP%] {\n  display: flex;\n  position: sticky;\n\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  opacity: 100%;\n\n  margin-left: 10rem;\n  margin-right: 10rem;\n\n  align-items: center;\n\n  margin-top: 0rem;\n}\n\n.subInternalMenu[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n\n  justify-content: space-between;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  height: min-content;\n\n  padding: 0rem;\n  margin: 0;\n}\n\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 0rem;\n  padding-right: 1rem;\n  top: 50%;\n  transform: translate(0%, -50%);\n}\n\n\n\na[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  color: aliceblue;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCOztFQUVoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsbUJBQW1COztFQUVuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVzs7RUFFWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgb3BhY2l0eTogNzAlO1xuICB6LWluZGV4OiA1MDAwMDAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cblxuLmludGVybmFsTWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgb3BhY2l0eTogMTAwJTtcblxuICBtYXJnaW4tbGVmdDogMTByZW07XG4gIG1hcmdpbi1yaWdodDogMTByZW07XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuXG4uc3ViSW50ZXJuYWxNZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuXG4gIHBhZGRpbmc6IDByZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lbnUgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMHJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbn1cblxuLyogLmxpbmtzTWVudSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0gKi9cblxuYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1438:
/*!************************************************************************!*\
  !*** ./src/app/components/home/first-screen/first-screen.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstScreenComponent": () => (/* binding */ FirstScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FirstScreenComponent {}
FirstScreenComponent.ɵfac = function FirstScreenComponent_Factory(t) {
  return new (t || FirstScreenComponent)();
};
FirstScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FirstScreenComponent,
  selectors: [["app-first-screen"]],
  decls: 152,
  vars: 0,
  consts: [["id", "home", 1, "subBody", "defaultFont"], [1, "firstDiv", "defaultFont"], [1, "myName"], [1, "abstract"], ["id", "aboutMe", 1, "secondDiv"], [1, "internalSecondDiv"], [1, "col100", "aboutMeCol"], [1, "contentBox"], [1, "col100"], [1, "textContent", "defaultFont"], [1, "col100", "inline-flex"], [1, "col85", "block", "paddingRight2rem"], [1, "title", 2, "margin-bottom", "1rem", "margin-left", "0rem", "padding-left", "0rem", "text-align", "left"], [1, "defaultFont"], ["id", "skills", 1, "treeDiv"], [1, "internalTreeDiv"], [1, "col50", 2, "text-align", "center"], [1, "softSkills", "paddingRighttrem"], [1, "title", "colorBlack", 2, "margin-bottom", "0.9rem"], [1, "textContent", "textIndent", "defaultFont", "paddingRight2rem"], [1, "highlightText"], [1, "ulSoftSkills"], [1, "col50"], [1, "hardSkills", "paddingLeftrem"], [1, "title", "colorBlack", 2, "margin-bottom", "0.4rem"], [1, "icon", "col10"], ["src", "./../../../../assets/icons/formato-html.png"], [1, "subText"], ["src", "./../../../../assets/icons/css-3.png"], ["src", "./../../../../assets/icons/bootstrap.png"], ["src", "./../../../../assets/icons/script-java.png"], ["src", "./../../../../assets/icons/typescript.png"], ["src", "./../../../../assets/icons/angular.png"], ["src", "./../../../../assets/icons/nodejs.png"], ["src", "./../../../../assets/icons/linux.png"], ["src", "./../../../../assets/icons/data-storage.png"], ["src", "./../../../../assets/icons/nginx.png"], ["src", "./../../../../assets/icons/apache.png"], ["src", "./../../../../assets/icons/postgre.png"]],
  template: function FirstScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "r\u00F4ney fischer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desenvolvedor (Front-end e back-end)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sobre Mim");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13)(20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ol\u00E1,");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br")(23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fico muito feliz de receber sua visita.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br")(27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Realizo trabalho de desenvolvimento, focado especialmente em sistemas web comerciais back-end, mas tamb\u00E9m realizo servi\u00E7os de front-end.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br")(31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Prezo por realizar um excelente alinhamento dos requisitos pedidos pelo cliente, para entregar o resultado esperado.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br")(35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " No tocante \u00E0 parte t\u00E9cnica, prezo por utilizar os m\u00E9todos mais importantes \u00E0 cada servi\u00E7o, como o uso de parad\u00EDgima funcional, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "POO, Patterns, Clean Code, Clean Architecture, DDD");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ", etc. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br")(42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Para conhecer um pouco mais sobre mim e meu servi\u00E7o, entre em contato pelos meios dispon\u00EDveis no final desta p\u00E1gina. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14)(46, "div", 15)(47, "div", 16)(48, "div", 17)(49, "div", 18)(50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Soft Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19)(53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Acredito que o conhecimento t\u00E9cnico n\u00E3o \u00E9 o suficiente para garantir um bom trabalho. H\u00E1 muitas outras vari\u00E1veis subjetivas, que chamamos de ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Soft Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ". S\u00E3o caracter\u00EDsticas pessoais e predominantemente subjetivas, que s\u00E3o aplicadas para o sucesso do conhecimento t\u00E9cnico. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br")(59, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Em meus trabalhos, procuro utilizar e aprimorar: a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Comunica\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " (clareza na transmiss\u00E3o de informa\u00E7\u00F5es), o bom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Relacionamento Interpessoal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " (bom e agrad\u00E1vel conv\u00EDvio), a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Solu\u00E7\u00E3o de Problemas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "(entrega do resultado esperado), a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "An\u00E1lise Cr\u00EDtica");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " (que visa avaliar a qualidade e adequa\u00E7\u00E3o da solu\u00E7\u00E3o e do meio), a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Resili\u00EAncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " (visto que muitos problemas s\u00E3o complexos e exigem estudo e dedica\u00E7\u00E3o por um longo per\u00EDdo de tempo), e a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Intelig\u00EAncia Emocional");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ", (por estar ligada \u00E0 resiliencia e ao bom relacionamento interpessoal).");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br")(81, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 21)(83, "div", 22)(84, "ul")(85, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Comunica\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Relacionamento Interpessoal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Solu\u00E7\u00E3o de Problemas");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22)(92, "ul")(93, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "An\u00E1lise Cr\u00EDtica");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Resili\u00EAncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Intelig\u00EAncia Emocional");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22)(100, "div", 23)(101, "div", 24)(102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Hard Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Html");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Bootstrap");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Javascript");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Typescript");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "NodeJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Linux");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "AWS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "NGINX");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Apache");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "PostgreSQL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: [".subBody[_ngcontent-%COMP%] {\n  background-image: url('pcCoffeBlack.png');\n  background-attachment: fixed;\n  height: 100vh;\n  width: 100vw;\n\n  margin: 0;\n  padding: 0;\n}\n\n.firstDiv[_ngcontent-%COMP%] {\n  position: relative;\n\n  opacity: 100%;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  animation: kick-y 3s;\n}\n\n.myName[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-transform: uppercase;\n  height: min-content;\n  width: max-content;\n  top: 50%;\n  left: 35%;\n  transform: translate(-50%, -50%);\n\n  font-weight: bold;\n  color: #e7d8c9;\n  font-size: 50px;\n}\n\n.abstract[_ngcontent-%COMP%] {\n  font-size: 25px;\n\n  padding-top: 1rem;\n}\n\n.secondDiv[_ngcontent-%COMP%] {\n  background-color: #5a13ac;\n  color: #fffeeb;\n\n  padding: 10000000rem;\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.aboutMeCol[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n  animation: go-back-x 1s 1 alternate;\n}\n\n.internalSecondDiv[_ngcontent-%COMP%] {\n  animation-name: fa;\n  display: inline-flex;\n  padding-left: 30rem;\n  padding-right: 30rem;\n  padding-top: 10rem;\n}\n\n.treeDiv[_ngcontent-%COMP%] {\n  background-color: #fffeeb;\n  padding: 10000000rem;\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.internalTreeDiv[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding-left: 10rem;\n  padding-right: 10rem;\n  padding-top: 10rem;\n  color: black;\n}\n\n.profileImg[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 10rem;\n  top: 50%;\n  transform: translate(0%, 50%);\n}\n\n.hardSkills[_ngcontent-%COMP%] {\n  display: block;\n\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n\n  border-width: 0.1rem;\n\n  border: 0;\n  border-left: 0.2rem;\n  border-style: solid;\n  border-color: rgb(0, 0, 0, 50%);\n\n  text-align: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-flexbox;\n  background-color: hwb(214 66% 0%);\n\n  color: rgb(46, 45, 45);\n\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  padding: 1rem;\n  margin: 0.8rem;\n  text-align: center;\n\n  font-weight: bold;\n  text-transform: uppercase;\n\n  width: 6rem;\n}\n\n.icon[_ngcontent-%COMP%]:hover {\n  \n  background-color: hwb(214 47% 3%);\n\n  color: rgb(0, 0, 0);\n\n  transition: all 0s;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.subText[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 0.2rem;\n\n  text-align: center;\n  font-size: 15px;\n}\n\n.h100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.padding12RemBlock[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 2rem;\n}\n\n.softSkills[_ngcontent-%COMP%] {\n  display: block;\n\n  width: 100%;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n\n  border-width: 0.1rem;\n\n  padding-bottom: 2rem;\n\n  text-align: center;\n}\n\n.ulSoftSkills[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n  align-items: center;\n  align-content: center;\n}\n\nul[_ngcontent-%COMP%] {\n  display: block;\n  list-style: none;\n\n  font-size: 22px;\n  padding-left: 5rem;\n  text-align: justify;\n\n  width: min-content;\n  white-space: nowrap;\n  padding: 0rem;\n  padding-right: 1rem;\n  margin-left: 50%;\n  transform: translate(-50%, 0);\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('checkBox.png');\n  background-repeat: no-repeat;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2ZpcnN0LXNjcmVlbi9maXJzdC1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUE4RDtFQUM5RCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7O0VBRVosU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDOztFQUVoQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjOztFQUVkLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7RUFFcEIsb0JBQW9COztFQUVwQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwrQkFBK0I7O0VBRS9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQ0FBaUM7O0VBRWpDLHNCQUFzQjs7RUFFdEIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7O0VBRWxCLGlCQUFpQjtFQUNqQix5QkFBeUI7O0VBRXpCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixpQ0FBaUM7O0VBRWpDLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7RUFFcEIsb0JBQW9COztFQUVwQixvQkFBb0I7O0VBRXBCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7O0VBRWhCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQ0FBZ0U7RUFDaEUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViQm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL3BjQ29mZmVCbGFjay5wbmdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5maXJzdERpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBvcGFjaXR5OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGFuaW1hdGlvbjoga2ljay15IDNzO1xufVxuXG4ubXlOYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDM1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZTdkOGM5O1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5hYnN0cmFjdCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcblxuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnNlY29uZERpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTEzYWM7XG4gIGNvbG9yOiAjZmZmZWViO1xuXG4gIHBhZGRpbmc6IDEwMDAwMDAwcmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWJvdXRNZUNvbCB7XG4gIHBhZGRpbmctdG9wOiAwcmVtO1xuICBhbmltYXRpb246IGdvLWJhY2steCAxcyAxIGFsdGVybmF0ZTtcbn1cblxuLmludGVybmFsU2Vjb25kRGl2IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAzMHJlbTtcbiAgcGFkZGluZy1yaWdodDogMzByZW07XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnRyZWVEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWViO1xuICBwYWRkaW5nOiAxMDAwMDAwMHJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmludGVybmFsVHJlZURpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9maWxlSW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xufVxuXG4uaGFyZFNraWxscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcblxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcblxuICBib3JkZXI6IDA7XG4gIGJvcmRlci1sZWZ0OiAwLjJyZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDAsIDUwJSk7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBod2IoMjE0IDY2JSAwJSk7XG5cbiAgY29sb3I6IHJnYig0NiwgNDUsIDQ1KTtcblxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLyogd29yZC13cmFwOiBicmVhay13b3JkOyAqL1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDAuOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIHdpZHRoOiA2cmVtO1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIlwiKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogaHdiKDIxNCA0NyUgMyUpO1xuXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG5cbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3ViVGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmgxMDAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGFkZGluZzEyUmVtQmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uc29mdFNraWxscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG5cbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udWxTb2Z0U2tpbGxzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAwcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxudWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NoZWNrQm94LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _first_screen_first_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-screen/first-screen.component */ 1438);
/* harmony import */ var _general_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/menu/menu.component */ 3064);



class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 2,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu")(1, "app-first-screen");
    }
  },
  dependencies: [_first_screen_first_screen_component__WEBPACK_IMPORTED_MODULE_0__.FirstScreenComponent, _general_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
  styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map