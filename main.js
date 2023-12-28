(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 40210:
/*!****************************************************!*\
  !*** ./src/app/app-layout/app-layout.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLayoutComponent": () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6517);






function AppLayoutComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "adf-layout-header", 1);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ADF");
} }
function AppLayoutComponent_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 2)(1, "a", 3)(2, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "vpn_key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppLayoutComponent_ng_template_4_div_4_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6)(6, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "folder_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppLayoutComponent_ng_template_4_div_8_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7)(10, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppLayoutComponent_ng_template_4_div_12_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const isMenuMinimized_r4 = ctx.isMenuMinimized;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
} }
function AppLayoutComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class AppLayoutComponent {
    constructor() {
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(); };
AppLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-root"]], decls: 7, vars: 5, consts: [[3, "sidenavMin", "sidenavMax", "stepOver", "hideSidenav", "expandedSidenav"], ["id", "adf-header", "color", "primary", 3, "title"], [1, "adf-sidenav-linklist"], ["mat-list-item", "", "routerLink", "/login", 1, "adf-sidenav-link"], ["matListIcon", "", 1, "sidenav-menu-icon"], ["class", "sidenav-menu-label", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/documents", 1, "adf-sidenav-link"], ["mat-list-item", "", "adf-logout", "", 1, "adf-sidenav-link"], [1, "sidenav-menu-label"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-sidenav-layout", 0)(1, "adf-sidenav-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppLayoutComponent_ng_template_2_Template, 1, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "adf-sidenav-layout-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppLayoutComponent_ng_template_4_Template, 13, 3, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "adf-sidenav-layout-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppLayoutComponent_ng_template_6_Template, 1, 0, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidenavMin", 70)("sidenavMax", 200)("stepOver", 780)("hideSidenav", false)("expandedSidenav", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.SidenavLayoutHeaderDirective, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.SidenavLayoutContentDirective, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.SidenavLayoutNavigationDirective, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.SidenavLayoutComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.HeaderLayoutComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.LogoutDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListIconCssMatStyler], styles: ["adf-sidenav-layout[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFkZi1zaWRlbmF2LWxheW91dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class AppComponent {
    constructor(translationService, authService, router
    //,private actualLoginStep: any
    ) {
        this.authService = authService;
        this.router = router;
        translationService.use('en');
    }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/login']);
        });
    }
    fnXXX() {
        //console.log("x",this.actualLoginStep);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["name", "overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "router-outlet", 0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["router-outlet[name=overlay] + * {\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb3V0ZXItb3V0bGV0W25hbWU9XCJvdmVybGF5XCJdICsgKiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 48693);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/preview.service */ 19578);
/* harmony import */ var _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-view/file-view.component */ 60236);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_locales_es_419__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/es-419 */ 45242);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents/documents.component */ 55017);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-layout/app-layout.component */ 40210);









// App components



//import { LoginGoogleComponent } from './logingoogle/logingoogle.component';
//import { LoginComponent } from '@alfresco/adf-core';
//import { LoginComponent as LoginComponentAlf} from '@alfresco/adf-core';











(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_es_419__WEBPACK_IMPORTED_MODULE_10__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _services_preview_service__WEBPACK_IMPORTED_MODULE_1__.PreviewService,
        {
            provide: _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_12__.TRANSLATION_PROVIDER,
            multi: true,
            useValue: {
                name: 'app',
                source: 'resources'
            }
        },
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
        /*0701: Missing locale data for the locale "es-419".'*/
        ,
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.LOCALE_ID, useValue: 'es-419' },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes, { initialNavigation: 'enabledNonBlocking', relativeLinkResolution: 'legacy' /*, useHash: true*/ }),
        // ADF modules
        _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_12__.CoreModule.forRoot(),
        _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_16__.ContentModule.forRoot(),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
            loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader, useClass: _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoaderService }
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _documents_documents_component__WEBPACK_IMPORTED_MODULE_7__.DocumentsComponent,
        _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__.AppLayoutComponent,
        _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_2__.FileViewComponent
        //,LoginComponentAlf
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_12__.CoreModule, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_16__.ContentModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule] }); })();


/***/ }),

/***/ 48693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents/documents.component */ 55017);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-layout/app-layout.component */ 40210);
/* harmony import */ var _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-view/file-view.component */ 60236);
/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






const appRoutes = [
    { path: 'files/:nodeId/view', component: _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_4__.FileViewComponent, canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.AuthGuardEcm], outlet: 'overlay' },
    {
        path: '',
        component: _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_3__.AppLayoutComponent,
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            },
            {
                path: 'documents',
                component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_2__.DocumentsComponent,
                canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.AuthGuardEcm]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    }
];


/***/ }),

/***/ 50384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class AuthService {
    constructor(http) {
        this.http = http;
    }
    loginAlfresco(googleToken) {
        console.log("loginAlfresco -> tk: ", googleToken);
        //var url = "http://localhost:8080/alfresco/service/domain/testws/";
        var url = "http://localhost:8080/alfresco/service/domain/domaingoogleoauth2/";
        //var url = "http://127.0.0.1/miguel2/tempo/testLoginAlf.php";
        //"miguel2/tempo/testLogin.php";
        const headerDict = {
            'extTK': googleToken
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(headerDict),
        };
        return this.http.get(url, requestOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55017:
/*!**************************************************!*\
  !*** ./src/app/documents/documents.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsComponent": () => (/* binding */ DocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/preview.service */ 19578);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);




const _c0 = ["documentList"];
const _c1 = function () { return [5, 10, 15, 20]; };
//import { AlfrescoAuthenticationService } from '@alfresco/adf-core';
class DocumentsComponent {
    constructor(notificationService, preview
    //, private authService: AlfrescoAuthenticationService
    ) {
        this.notificationService = notificationService;
        this.preview = preview;
        this.showViewer = false;
        this.nodeId = null;
        this.currentUserName = null;
        //console.log("contentService: ",this.documentList.contentService);	
        this.currentUserName = localStorage.ACS_USERNAME;
    }
    uploadSuccess() {
        this.notificationService.openSnackMessage('File uploaded');
        this.documentList.reload();
    }
    showPreview(event) {
        const entry = event.value.entry;
        if (entry && entry.isFile) {
            this.preview.showResource(entry.id);
        }
    }
}
DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) { return new (t || DocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_preview_service__WEBPACK_IMPORTED_MODULE_0__.PreviewService)); };
DocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocumentsComponent, selectors: [["app-documents"]], viewQuery: function DocumentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.documentList = _t.first);
    } }, inputs: { showViewer: "showViewer" }, decls: 10, vars: 9, consts: [["root", "Personal Files", 1, "files-breadcrumb", 3, "target", "folderNode"], [1, "adf-toolbar--spacer"], [3, "rootFolderId", "adf-check-allowable-operation", "success"], ["currentFolderId", "-root-", 3, "preview"], ["documentList", ""], [3, "target", "supportedPageSizes", "pagination"]], template: function DocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "adf-toolbar")(2, "adf-toolbar-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "adf-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "adf-upload-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("success", function DocumentsComponent_Template_adf_upload_button_success_5_listener() { return ctx.uploadSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "adf-document-list", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("preview", function DocumentsComponent_Template_adf_document_list_preview_6_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "adf-pagination", 5)(9, "adf-file-uploading-dialog");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Usuario: ", ctx.currentUserName, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", _r0)("folderNode", _r0.folderNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rootFolderId", _r0.currentFolderId || "-root-")("adf-check-allowable-operation", "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", _r0)("supportedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1))("pagination", 10);
    } }, dependencies: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.ToolbarComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.ToolbarTitleComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.DocumentListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.UploadButtonComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.FileUploadingDialogComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.CheckAllowableOperationDirective], encapsulation: 2 });


/***/ }),

/***/ 60236:
/*!**************************************************!*\
  !*** ./src/app/file-view/file-view.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileViewComponent": () => (/* binding */ FileViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











function FileViewComponent_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-info-drawer", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "adf-info-drawer-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "adf-comments", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "adf-info-drawer-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "adf-content-metadata-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "adf-info-drawer-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card")(11, "mat-card-content")(12, "adf-version-manager", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("uploadError", function FileViewComponent_ng_container_0_ng_template_1_Template_adf_version_manager_uploadError_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onUploadError($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const node_r3 = ctx.node;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, "APP.INFO_DRAWER.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "APP.INFO_DRAWER.COMMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeId", ctx_r2.nodeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "APP.INFO_DRAWER.PROPERTIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "APP.INFO_DRAWER.VERSIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
} }
function FileViewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileViewComponent_ng_container_0_ng_template_1_Template, 13, 15, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "adf-viewer", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showViewerChange", function FileViewComponent_ng_container_0_Template_adf_viewer_showViewerChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onViewerVisibilityChanged()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "adf-viewer-toolbar-actions")(5, "button", 3)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "backup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "bug_report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeId", ctx_r0.nodeId);
} }
class FileViewComponent {
    constructor(router, route, snackBar, nodeApiService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.nodeApiService = nodeApiService;
        this.nodeId = null;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params.nodeId;
            if (id) {
                this.nodeApiService.getNode(id).subscribe((node) => {
                    if (node && node.isFile) {
                        this.nodeId = id;
                        return;
                    }
                    this.router.navigate(['/files', id]);
                }, () => this.router.navigate(['/files', id]));
            }
        });
    }
    onUploadError(errorMessage) {
        this.snackBar.open(errorMessage, '', { duration: 4000 });
    }
    onViewerVisibilityChanged() {
        const primaryUrl = this.router
            .parseUrl(this.router.url)
            .root.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET].toString();
        this.router.navigateByUrl(primaryUrl);
    }
}
FileViewComponent.ɵfac = function FileViewComponent_Factory(t) { return new (t || FileViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.NodesApiService)); };
FileViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileViewComponent, selectors: [["app-file-view"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["sidebarTemplate", ""], [3, "nodeId", "showViewerChange"], ["mat-icon-button", ""], [3, "title"], [3, "label"], [3, "nodeId"], [3, "node"], [3, "node", "uploadError"]], template: function FileViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileViewComponent_ng_container_0_Template, 14, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nodeId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.ViewerToolbarActionsComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.ViewerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.CommentsComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.InfoDrawerTabComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_5__.InfoDrawerComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.ContentMetadataCardComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.VersionManagerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".adf-viewer__sidebar {\n  width: 380px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoiZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZi12aWV3ZXJfX3NpZGViYXIge1xuICB3aWR0aDogMzgwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a feature in the app menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 50384);

//import { LoginModule } from '@alfresco/adf-core';






const _c0 = ["loginADF"];
class LoginComponent {
    constructor(loginMod, router, authGoogle, apiService, appConfig, _ngZone) {
        this.loginMod = loginMod;
        this.router = router;
        this.authGoogle = authGoogle;
        this.apiService = apiService;
        this.appConfig = appConfig;
        this._ngZone = _ngZone;
        this.handleCredentialResponse = (response) => {
            //handleCredentialResponse(response:any) {
            var tokenGoogle = response.credential;
            //console.log("handle 111 this.userService = ",this.userService);
            console.log("xxxEncoded JWT ID token: " + tokenGoogle);
            this.doAlfrescoLogin(tokenGoogle);
            /*this.userService.loginAlfresco(tokenGoogle).subscribe((data) => {
              console.log("Alfresco Response: ",data);
            });
            
              } */
        };
        this.googleLoginBtnClick = () => {
            // @ts-ignore
            google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", size: "large" } // customization attributes
            );
            //google.accounts.id.prompt(); // also display the One Tap dialog
        };
        this.googleLoginBtnClickTest = () => {
            //this.router.navigate(["home"]);
            console.log("this.successRoute  : ", this.loginADF.successRoute);
            var tokenGoogle = "tooooo";
            this.authGoogle.loginAlfresco(tokenGoogle).subscribe((data) => {
                console.log("Alfresco Response :::: ", data);
            });
            console.log("this.loginADF : ", this.loginADF);
            console.log("actualLoginStep: ", this.loginADF.actualLoginStep);
            /*
            const fnOK_alf = (ticketResponse_) => {
                this.loginADF.userPreferences.setStoragePrefix("admin");
        
                console.log("this.appConfig : ",this.loginADF.appConfig);
                console.log("AppConfigValues.PROVIDERS : ",AppConfigValues.PROVIDERS  );
                //this.appConfig.get(AppConfigValues.PROVIDERS)
                console.log("type : ", this.appConfig.get(AppConfigValues.PROVIDERS) );
                console.log("userPreferences: ",this.loginADF.userPreferences);
        
                var token_ = {
                          type: this.appConfig.get(AppConfigValues.PROVIDERS),
                          ticket: ticketResponse_
                      };
        
                console.log("token_ : ",token_);
                this.loginADF.success.emit(new LoginSuccessEvent(token_, "miguel.lam017@gmail.com", null));
              
                this.router.navigate(["home"]);
        
            };
        
            this.apiService.getInstance().login("miguel.lam017@gmail.com","MiguelGoogle123").then(result => {
                console.log("Apilogin: ",result); fnOK_alf(result);}
            );
            */
            const fnOK_alf = (ticketResponse_) => {
                this.loginADF.userPreferences.setStoragePrefix("admin");
                console.log("this.appConfig : ", this.loginADF.appConfig);
                console.log("AppConfigValues.PROVIDERS : ", _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigValues.PROVIDERS);
                //this.appConfig.get(AppConfigValues.PROVIDERS)
                console.log("type : ", this.appConfig.get(_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigValues.PROVIDERS));
                console.log("userPreferences: ", this.loginADF.userPreferences);
                var token_ = {
                    type: this.appConfig.get(_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigValues.PROVIDERS),
                    ticket: ticketResponse_
                };
                console.log("token_ : ", token_);
                this.loginADF.success.emit(new _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LoginSuccessEvent(token_, "miguel.lam017@gmail.com", null));
                this.router.navigate(["home"]);
            };
            this.apiService.getInstance().login("miguel.lam017@gmail.com", "MiguelGoogle123").then(result => {
                console.log("Apilogin: ", result);
                fnOK_alf(result);
            });
            //    	var x =  this.doAlfLogin();
            //	console.log("x" ,x);
            /*
              
            // @ts-ignore
            google.accounts.id.renderButton(
                    document.getElementById("buttonDiv"),
                    { theme: "outline", size: "large" }  // customization attributes
                  );
            //google.accounts.id.prompt(); // also display the One Tap dialog
              
            //alert(2);
            */
        };
        console.log("loginMod ", loginMod);
    }
    ngOnInit() {
        console.log("this.actualLoginStep : ", this.loginMod.actualLoginStep);
        // @ts-ignore
        console.log(google);
        // @ts-ignore    
        google.accounts.id.initialize({
            client_id: "802730121474-ldml1okbmi7vpuidhfvv21nl31oqaq4m.apps.googleusercontent.com",
            callback: this.handleCredentialResponse
        });
        // @ts-ignore
        google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", size: "large" } // customization attributes
        );
        // @ts-ignore
        google.accounts.id.prompt(); // also display the One Tap dialog
    }
    doAlfrescoLogin(tokenGoogle) {
        const fnOK_alf = (ticketInfoAlfresco_) => {
            this.loginADF.userPreferences.setStoragePrefix(ticketInfoAlfresco_.Data.userInfo.email);
            console.log("this.loginADF.authService : ", this.loginADF.authService);
            console.log("this.appConfig : ", this.loginADF.appConfig);
            console.log("AppConfigValues.PROVIDERS : ", _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigValues.PROVIDERS);
            //this.appConfig.get(AppConfigValues.PROVIDERS)
            console.log("type : ", this.appConfig.get(_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigValues.PROVIDERS));
            console.log("userPreferences: ", this.loginADF.userPreferences);
            console.log("ticketInfoAlfresco_: ", ticketInfoAlfresco_);
            this.loginADF.authService.onLogin.next(ticketInfoAlfresco_.Data.ticketToken);
            localStorage.setItem('ACS_USERNAME', ticketInfoAlfresco_.Data.userInfo.email);
            localStorage.setItem('USER_PROFILE', ticketInfoAlfresco_.Data.userInfo.email);
            localStorage.setItem('ticket-ECM', ticketInfoAlfresco_.Data.ticketToken);
            console.log("loginADFF ", this.loginADF);
            //this.apiService.getInstance().config.ticketEcm = ticketInfoAlfresco_.ticketToken;
            this.loginADF.alfrescoApiService.getInstance().config.ticketEcm = ticketInfoAlfresco_.Data.ticketToken;
            console.log("this.apiService.getInstance().config ", this.apiService.getInstance().config);
            //this.loginADF.authService.onLogin.next(ticketInfoAlfresco_.ticketToken);
            var token_ = {
                type: this.appConfig.get(_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigValues.PROVIDERS),
                ticket: ticketInfoAlfresco_.Data.ticketToken
            };
            this.loginADF.actualLoginStep = this.loginADF.LoginSteps.Welcome;
            console.log("token_ : ", token_); //name email ticketInfoAlfresco_.email
            this.loginADF.success.emit(new _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LoginSuccessEvent(token_, ticketInfoAlfresco_.Data.userInfo.email, null));
            console.log("alfrescoApi.getInstance() > ", this.loginADF.authService.alfrescoApi.getInstance());
            //esto valida el ticket generado x fuera;
            this.loginADF.authService.alfrescoApi.getInstance().loginTicket(ticketInfoAlfresco_.Data.ticketToken, null);
            //console.log(".isLoggedIn: ",
            //	this.apiService.getInstance().isLoggedIn() );
            console.log(".isLoggedIn AAA: ", this.loginADF.alfrescoApiService.getInstance().isLoggedIn());
            console.log(".isLoggedIn BBB: ", this.loginADF.authService.isLoggedIn());
            //
            //this.router.navigate(["documents"]);
            /*this._ngZone.run(()=>{
                //this.router.navigate(["documents"]);
                //this.router.navigateByUrl("documents");
            });*/
            //document.location.href = 'documents';
            //document.location.href = '';
            this.loginADF.authService.setRedirect(null);
            //document.location.href =  './documents';
            //this.router.navigateByUrl("/documents");
            //this.router.navigate(["documents"]);
            //this.loginADF.router.navigate(["/documents"]);
            this._ngZone.run(() => {
                this.router.navigate(["documents"]);
                //this.router.navigateByUrl("documents");
            });
        };
        //var tokenGoogle = "tooooo";
        this.authGoogle.loginAlfresco(tokenGoogle).subscribe((googleLoginResponse) => {
            console.log("Alfresco Response googleLoginResponse :::: ", googleLoginResponse);
            //if(googleLoginResponse.sessionOK){
            if (googleLoginResponse.Status == 0 && googleLoginResponse.Data) {
                fnOK_alf(googleLoginResponse);
                //alert(1);
                //this.router.navigate(["documents"]);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LoginComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AlfrescoApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AppConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginADF = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LoginComponent])], decls: 5, vars: 0, consts: [["copyrightText", "\u00A9 2017 Alfresco Software, Inc. All Rights Reserved.", "successRoute", "/documents"], ["loginADF", ""], ["id", "buttonDiv"], ["type", "button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "adf-login", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_3_listener() { return ctx.googleLoginBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "[Ingresar con Google]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], encapsulation: 2 });


/***/ }),

/***/ 19578:
/*!*********************************************!*\
  !*** ./src/app/services/preview.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewService": () => (/* binding */ PreviewService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class PreviewService {
    constructor(router) {
        this.router = router;
        this.content = null;
        this.name = null;
    }
    showResource(resourceId) {
        this.router.navigate([{ outlets: { overlay: ['files', resourceId, 'view'] } }]);
    }
    showBlob(name, content) {
        this.name = name;
        this.content = content;
        this.router.navigate([{ outlets: { overlay: ['preview', 'blob'] } }]);
    }
}
PreviewService.ɵfac = function PreviewService_Factory(t) { return new (t || PreviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PreviewService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreviewService, factory: PreviewService.ɵfac });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 24654:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map