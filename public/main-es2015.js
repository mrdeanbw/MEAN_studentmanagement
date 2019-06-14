(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\n<mat-toolbar color=\"primary\" class=\"header\">\n  <div>Student Records</div>\n  <span class=\"nav-tool-items\">\n    <mat-icon (click)=\"sidenav.toggle()\" class=\"hamburger\">menu</mat-icon>\n  </span>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <!-- Sidenav -->\n  <mat-sidenav #sidenav [mode]=\"isBiggerScreen() ? 'over' : 'side'\" [(opened)]=\"opened\" [fixedInViewport]=\"true\"\n    [fixedTopGap]>\n    <mat-nav-list>\n      <a mat-list-item routerLinkActive=\"active\" routerLink=\"/add-student\">\n        <mat-icon>add</mat-icon> Add Student\n      </a>\n      <a mat-list-item routerLinkActive=\"active\" routerLink=\"/students-list\">\n        <mat-icon>format_list_bulleted</mat-icon> View Students\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!-- Main content -->\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-student/add-student.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-student/add-student.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\n<div class=\"title-group\">\n  <h1 class=\"mat-h1\">Add Student</h1>\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\n</div>\n\n<!-- Form -->\n<div class=\"inner-wrapper\">\n  <form [formGroup]=\"studentForm\" (ngSubmit)=\"submitStudentForm()\" #resetStudentForm=\"ngForm\" novalidate>\n    <!-- Left block -->\n    <mat-card>\n      <div class=\"controlers-wrapper\">\n        <!-- Name -->\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Student name\" formControlName=\"student_name\">\n          <mat-error *ngIf=\"handleError('student_name', 'required')\">\n            You must provide a<strong>student name</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Email -->\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Student email\" formControlName=\"student_email\">\n          <mat-error *ngIf=\"handleError('student_email', 'required')\">\n            You must provide a<strong>student email</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Section -->\n        <mat-form-field>\n          <mat-label>Section</mat-label>\n          <mat-select [(value)]=\"selected\" formControlName=\"section\">\n            <mat-option [value]=\"sectioinArray\" *ngFor=\"let sectioinArray of SectioinArray\">{{sectioinArray}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"handleError('section', 'required')\">\n            Section is required\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </mat-card>\n\n    <!-- Right block -->\n    <mat-card>\n      <div class=\"controlers-wrapper\">\n        <!-- Add subjects -->\n        <mat-form-field class=\"multiple-items\">\n          <mat-chip-list #chipList>\n            <mat-chip *ngFor=\"let subjectArray of subjectArray\" [selectable]=\"selectable\" [removable]=\"removable\"\n              (removed)=\"remove(subjectArray)\">\n              {{subjectArray.name}}\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input placeholder=\"Add subject\" [matChipInputFor]=\"chipList\"\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n              (matChipInputTokenEnd)=\"add($event)\">\n          </mat-chip-list>\n          <i class=\"material-icons tooltip-info\" matTooltip=\"Enter subject name and press enter to add subjects\">\n            info\n          </i>\n        </mat-form-field>\n\n        <!-- Date of birth -->\n        <mat-form-field>\n          <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\n            (dateChange)=\"formatDate($event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"handleError('dob', 'required')\">\n            Date of birth is required\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Gender -->\n        <div class=\"misc-bottom-padding\">\n          <mat-label>Gender:</mat-label>\n          <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\n            <mat-radio-button value=\"Male\">Male</mat-radio-button>\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card>\n\n    <!-- Submit & Reset -->\n    <mat-card>\n      <div class=\"full-wrapper button-wrapper\">\n        <div class=\"button-wrapper\">\n          <button mat-flat-button color=\"warn\">Submit</button>\n        </div>\n      </div>\n    </mat-card>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-student/edit-student.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-student/edit-student.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\n<div class=\"title-group\">\n  <h1 class=\"mat-h1\">Add Student</h1>\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\n</div>\n\n<!-- Form -->\n<div class=\"inner-wrapper\">\n  <form [formGroup]=\"studentForm\" (ngSubmit)=\"updateStudentForm()\" #resetStudentForm=\"ngForm\" novalidate>\n    <!-- Left block -->\n    <mat-card>\n      <div class=\"controlers-wrapper\">\n        <!-- Name -->\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Student name\" formControlName=\"student_name\">\n          <mat-error *ngIf=\"handleError('student_name', 'required')\">\n            You must provide a<strong>student name</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Email -->\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Student email\" formControlName=\"student_email\">\n          <mat-error *ngIf=\"handleError('student_email', 'required')\">\n            You must provide a<strong>student email</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Section -->\n        <mat-form-field>\n          <mat-label>Section</mat-label>\n          <mat-select [(value)]=\"selected\" formControlName=\"section\">\n            <mat-option [value]=\"sectioinArray\" *ngFor=\"let sectioinArray of SectioinArray\">{{sectioinArray}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"handleError('section', 'required')\">\n            Section is required\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </mat-card>\n\n    <!-- Right block -->\n    <mat-card>\n      <div class=\"controlers-wrapper\">\n        <!-- Add subjects -->\n        <mat-form-field class=\"multiple-items\">\n          <mat-chip-list #chipList>\n            <mat-chip *ngFor=\"let subjectArray of subjectArray\" [selectable]=\"selectable\" [removable]=\"removable\"\n              (removed)=\"remove(subjectArray)\">\n              {{subjectArray.name}}\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input placeholder=\"Add subject\" [matChipInputFor]=\"chipList\"\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n              (matChipInputTokenEnd)=\"add($event)\">\n          </mat-chip-list>\n          <i class=\"material-icons tooltip-info\" matTooltip=\"Enter subject name and press enter to add subjects\">\n            info\n          </i>\n        </mat-form-field>\n\n        <!-- Date of birth -->\n        <mat-form-field>\n          <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\n            (dateChange)=\"formatDate($event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"handleError('dob', 'required')\">\n            Date of birth is required\n          </mat-error>\n        </mat-form-field>\n\n        <!-- Gender -->\n        <div class=\"misc-bottom-padding\">\n          <mat-label>Gender:</mat-label>\n          <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\n            <mat-radio-button value=\"Male\">Male</mat-radio-button>\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card>\n\n    <!-- Submit & Reset -->\n    <mat-card>\n      <div class=\"full-wrapper button-wrapper\">\n        <div class=\"button-wrapper\">\n          <button mat-flat-button color=\"warn\">Update</button>\n        </div>\n      </div>\n    </mat-card>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/students-list/students-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/students-list/students-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title group  -->\n<div class=\"title-group\">\n  <h1 class=\"mat-h1\">Students List</h1>\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\n</div>\n\n<p *ngIf=\"StudentData.length <= 0\" class=\"no-data\">There is no student added yet!</p>\n\n<div class=\"container\" *ngIf=\"StudentData.length > 0\">\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"_id\">\n        <th mat-header-cell *matHeaderCellDef> Student ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"student_name\">\n        <th mat-header-cell *matHeaderCellDef> Student Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.student_name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"student_email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.student_email}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"section\">\n        <th mat-header-cell *matHeaderCellDef> Section </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.section}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let element; let i = index;\">\n          <button mat-raised-button color=\"primary\" class=\"push-right\"\n            [routerLink]=\"['/edit-student/', element._id]\">Edit</button>\n          <button mat-raised-button color=\"accent\" (click)=\"deleteStudent(i, element)\">Delete</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-student/add-student.component */ "./src/app/components/add-student/add-student.component.ts");
/* harmony import */ var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-student/edit-student.component */ "./src/app/components/edit-student/edit-student.component.ts");
/* harmony import */ var _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/students-list/students-list.component */ "./src/app/components/students-list/students-list.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'add-student' },
    { path: 'add-student', component: _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_3__["AddStudentComponent"] },
    { path: 'edit-student/:id', component: _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__["EditStudentComponent"] },
    { path: 'students-list', component: _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentsListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");



let AppComponent = class AppComponent {
    constructor() {
        this.opened = true;
    }
    ngOnInit() {
        console.log(window.innerWidth);
        if (window.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
        }
        else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
        }
    }
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
        }
        else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
        }
    }
    isBiggerScreen() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < 768) {
            return true;
        }
        else {
            return false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
], AppComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-student/add-student.component */ "./src/app/components/add-student/add-student.component.ts");
/* harmony import */ var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-student/edit-student.component */ "./src/app/components/edit-student/edit-student.component.ts");
/* harmony import */ var _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/students-list/students-list.component */ "./src/app/components/students-list/students-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




/* Angular 8 components */



/* Angular material */



/* Angular 8 http service */

/* Angular 8 CRUD services */

/* Reactive form services in Angular 8 */

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_4__["AddStudentComponent"],
            _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_5__["EditStudentComponent"],
            _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_6__["StudentsListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
        providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-student/add-student.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-student/add-student.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXN0dWRlbnQvYWRkLXN0dWRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-student/add-student.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-student/add-student.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AddStudentComponent = class AddStudentComponent {
    constructor(fb, router, ngZone, studentApi) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.studentApi = studentApi;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.subjectArray = [];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = (controlName, errorName) => {
            return this.studentForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.submitBookForm();
    }
    /* Reactive book form */
    submitBookForm() {
        this.studentForm = this.fb.group({
            student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            student_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            subjects: [this.subjectArray],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            gender: ['Male']
        });
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.subjectArray.length < 5) {
            this.subjectArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.subjectArray.indexOf(subject);
        if (index >= 0) {
            this.subjectArray.splice(index, 1);
        }
    }
    /* Date */
    formatDate(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.studentForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    /* Submit book */
    submitStudentForm() {
        if (this.studentForm.valid) {
            this.studentApi.AddStudent(this.studentForm.value).subscribe(res => {
                this.ngZone.run(() => this.router.navigateByUrl('/students-list'));
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddStudentComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddStudentComponent.prototype, "myNgForm", void 0);
AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-student',
        template: __webpack_require__(/*! raw-loader!./add-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-student/add-student.component.html"),
        styles: [__webpack_require__(/*! ./add-student.component.css */ "./src/app/components/add-student/add-student.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddStudentComponent);



/***/ }),

/***/ "./src/app/components/edit-student/edit-student.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-student/edit-student.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-student/edit-student.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-student/edit-student.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function() { return EditStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let EditStudentComponent = class EditStudentComponent {
    constructor(fb, router, ngZone, actRoute, studentApi) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.studentApi = studentApi;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.subjectArray = [];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = (controlName, errorName) => {
            return this.studentForm.controls[controlName].hasError(errorName);
        };
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.studentApi.GetStudent(id).subscribe(data => {
            console.log(data.subjects);
            this.subjectArray = data.subjects;
            this.studentForm = this.fb.group({
                student_name: [data.student_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                student_email: [data.student_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                section: [data.section, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                subjects: [data.subjects],
                dob: [data.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                gender: [data.gender]
            });
        });
    }
    ngOnInit() {
        this.updateBookForm();
    }
    /* Reactive book form */
    updateBookForm() {
        this.studentForm = this.fb.group({
            student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            student_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            subjects: [this.subjectArray],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            gender: ['Male']
        });
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.subjectArray.length < 5) {
            this.subjectArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.subjectArray.indexOf(subject);
        if (index >= 0) {
            this.subjectArray.splice(index, 1);
        }
    }
    /* Date */
    formatDate(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.studentForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    /* Update book */
    updateStudentForm() {
        console.log(this.studentForm.value);
        var id = this.actRoute.snapshot.paramMap.get('id');
        if (window.confirm('Are you sure you want to update?')) {
            this.studentApi.UpdateStudent(id, this.studentForm.value).subscribe(res => {
                this.ngZone.run(() => this.router.navigateByUrl('/students-list'));
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditStudentComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetStudentForm', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditStudentComponent.prototype, "myNgForm", void 0);
EditStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-student',
        template: __webpack_require__(/*! raw-loader!./edit-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-student/edit-student.component.html"),
        styles: [__webpack_require__(/*! ./edit-student.component.css */ "./src/app/components/edit-student/edit-student.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], EditStudentComponent);



/***/ }),

/***/ "./src/app/components/students-list/students-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMtbGlzdC9zdHVkZW50cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students-list/students-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let StudentsListComponent = class StudentsListComponent {
    constructor(studentApi) {
        this.studentApi = studentApi;
        this.StudentData = [];
        this.displayedColumns = ['_id', 'student_name', 'student_email', 'section', 'action'];
        this.studentApi.GetStudents().subscribe(data => {
            this.StudentData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.StudentData);
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
            }, 0);
        });
    }
    ngOnInit() { }
    deleteStudent(index, e) {
        if (window.confirm('Are you sure')) {
            const data = this.dataSource.data;
            data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
            this.dataSource.data = data;
            this.studentApi.DeleteStudent(e._id).subscribe();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], StudentsListComponent.prototype, "paginator", void 0);
StudentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-students-list',
        template: __webpack_require__(/*! raw-loader!./students-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/students-list/students-list.component.html"),
        styles: [__webpack_require__(/*! ./students-list.component.css */ "./src/app/components/students-list/students-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
], StudentsListComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");




















let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"]
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"]
        ],
        providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        // endpoint: string = 'http://localhost:4000/api';
        this.endpoint = '/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Add student
    AddStudent(data) {
        let API_URL = `${this.endpoint}/add-student`;
        return this.http.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all students
    GetStudents() {
        return this.http.get(`${this.endpoint}`);
    }
    // Get student
    GetStudent(id) {
        let API_URL = `${this.endpoint}/read-student/${id}`;
        return this.http.get(API_URL, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Update student
    UpdateStudent(id, data) {
        let API_URL = `${this.endpoint}/update-student/${id}`;
        return this.http.put(API_URL, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete student
    DeleteStudent(id) {
        var API_URL = `${this.endpoint}/delete-student/${id}`;
        return this.http.delete(API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/digambersingh/Documents/Angular/angular8-meanstack-angular-material/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map