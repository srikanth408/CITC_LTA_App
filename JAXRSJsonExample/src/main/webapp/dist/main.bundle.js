webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(_service, empDataSr, toasterService) {
        this._service = _service;
        this.empDataSr = empDataSr;
        this.toasterService = toasterService;
        this.EmployeeId = {};
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.EmployeeId = this.empDataSr.getEmpInfo();
        this.getLeaveRequests();
        this.getLeaveRequestHistory();
    };
    AdminComponent.prototype.approveRejectAction = function (index, status) {
        var _this = this;
        this.empDataSr.loading = true;
        this._service.ApproveRejectLeave(status, this.employee[index].reqId)
            .subscribe(function (res) {
            if (res.header && res.header == 'Ok') {
                _this.getLeaveRequests();
                _this.getLeaveRequestHistory();
                _this.empDataSr.loading = false;
                _this.popToastSuccess();
            }
            else if (res.header && res.header !== 'Ok') {
                _this.empDataSr.loading = false;
                _this.popToastFailed();
            }
        });
    };
    AdminComponent.prototype.cancelLeaveAction = function (index, status) {
        var _this = this;
        this.empDataSr.loading = true;
        this._service.ApproveRejectLeave(status, this.leaveHistory[index].reqId)
            .subscribe(function (res) {
            if (res.header && res.header == 'Ok') {
                _this.getLeaveRequests();
                _this.getLeaveRequestHistory();
                _this.empDataSr.loading = false;
                _this.popToastSuccess();
            }
            else if (res.header && res.header !== 'Ok') {
                _this.empDataSr.loading = false;
                _this.popToastFailed();
            }
        });
    };
    AdminComponent.prototype.getLeaveRequests = function () {
        var _this = this;
        this._service.getLeaves(this.EmployeeId.empCode, "A")
            .subscribe(function (data) { return _this.employee = data; });
    };
    AdminComponent.prototype.getLeaveRequestHistory = function () {
        var _this = this;
        this._service.getLeavesApproveReject(this.EmployeeId.empCode, "A")
            .subscribe(function (data) { return _this.leaveHistory = data; });
    };
    AdminComponent.prototype.popToastSuccess = function () {
        var toast = {
            type: 'success',
            title: 'You request as been done successfully',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    AdminComponent.prototype.popToastFailed = function () {
        var toast = {
            type: 'error',
            title: 'error in your request',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__(170),
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_model__["a" /* EmpDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=app.admin.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdituserComponent = (function () {
    function EdituserComponent(_service, route, empDataSr, toasterService) {
        this._service = _service;
        this.route = route;
        this.empDataSr = empDataSr;
        this.toasterService = toasterService;
        this.Save = false;
        this.Edit = true;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        this.getEmployeeData();
    };
    EdituserComponent.prototype.getEmployeeData = function () {
        var _this = this;
        this._service.getEmployeeData()
            .subscribe(function (resEmployeeData) { return _this.employee = resEmployeeData; });
    };
    EdituserComponent.prototype.edit = function (document, i) {
        this.editedIndex = i;
        this.Save = true;
        this.Edit = false;
    };
    EdituserComponent.prototype.save = function (i) {
        var _this = this;
        this.editedIndex = false;
        this.Save = false;
        this.Edit = true;
        this.empDataSr.loading = true;
        var savedata = this.employee[i];
        this._service.savedata(savedata)
            .subscribe(function (res) {
            if (res.header && res.header == 'Ok') {
                _this.getEmployeeData();
                _this.empDataSr.loading = false;
                _this.popToastSuccess();
            }
            else if (res.header && res.header !== 'Ok') {
                _this.empDataSr.loading = false;
                _this.popToastFailed();
            }
        });
    };
    EdituserComponent.prototype.delete = function (i) {
        var _this = this;
        if (window.confirm("Are you sure want to delete")) {
            this.empDataSr.loading = true;
            var deletedata = this.employee[i];
            this._service.deletedata(deletedata)
                .subscribe(function (res) {
                if (res.header && res.header == 'Ok') {
                    _this.getEmployeeData();
                    _this.empDataSr.loading = false;
                    _this.popToastSuccess();
                }
                else if (res.header && res.header !== 'Ok') {
                    _this.empDataSr.loading = false;
                    _this.popToastFailed();
                }
            });
        }
    };
    EdituserComponent.prototype.popToastSuccess = function () {
        var toast = {
            type: 'success',
            title: 'You request has been submitted successfully',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    EdituserComponent.prototype.popToastFailed = function () {
        var toast = {
            type: 'error',
            title: 'error while submitting your request',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    return EdituserComponent;
}());
EdituserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__(171),
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], EdituserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.edituser.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(route, _restfull, empDataSr, toasterService) {
        this.route = route;
        this._restfull = _restfull;
        this.empDataSr = empDataSr;
        this.toasterService = toasterService;
        /* private manager_list: any[] = [
             { name: 'Gokul Janarthanan', Id: '0012', department: "QA" },
             { name: 'Rajdeep Biswas', Id: '0013', department: "IT" },
             { name: 'Venkat', Id: '0014', department: "Developement" }
         ];*/
        this.selectedPerson = {};
        this.showId = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getmanagersList();
        this.getonsiteManagersList();
    };
    SignupComponent.prototype.getmanagersList = function () {
        var _this = this;
        this._restfull.getManagers()
            .subscribe(function (data) { return _this.managerslist = data; });
    };
    SignupComponent.prototype.getonsiteManagersList = function () {
        var _this = this;
        this._restfull.getOnsiteManagers()
            .subscribe(function (data) { return _this.onsitemanagerslist = data; });
    };
    SignupComponent.prototype.onSubmit = function (value, opt) {
        var _this = this;
        this.empDataSr.loading = true;
        this._restfull.saveRetur(value)
            .subscribe(function (res) {
            if (res.header && res.header == 'Ok') {
                opt.resetForm();
                _this.empDataSr.loading = false;
                _this.popToastSuccess();
            }
            else if (res.header && res.header !== 'Ok') {
                _this.empDataSr.loading = false;
                _this.popToastFailed();
            }
        });
    };
    SignupComponent.prototype.popToastSuccess = function () {
        var toast = {
            type: 'success',
            title: 'You submitted record successfully',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    SignupComponent.prototype.popToastFailed = function () {
        var toast = {
            type: 'error',
            title: 'error while submitting record',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    SignupComponent.prototype.onChanged = function ($event) {
        var match = this.managerslist.find(function (x) { return x.empCode === $event; });
        this.selectedPerson.dept = match.dept;
        console.log(this.managerslist);
    };
    SignupComponent.prototype.onchange = function ($event) {
        if ($event === "2") {
            this.showId = false;
        }
        else {
            this.showId = true;
            this.selectedPerson.dept = null;
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'signup',
        template: __webpack_require__(172),
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.signup.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_holidayservice__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeaveComponent = (function () {
    function LeaveComponent(routes, _service, empDataSr, _hservice, toasterService) {
        this.routes = routes;
        this._service = _service;
        this.empDataSr = empDataSr;
        this._hservice = _hservice;
        this.toasterService = toasterService;
        this.employees = {};
        this.newEntry = {};
        this.leave = {};
        this.reqType = "NA";
        this.valid = false;
    }
    LeaveComponent.prototype.ngOnInit = function () {
        //this.data =  new Observable<EmpDataService>((observer: Observer<EmpDataService>) =>{
        this.employees = this.empDataSr.getEmpInfo();
        //});
        //     let subscription = this.data.subscribe(
        //       value => {this.employees = value; console.log(value)}
        //   );
        this.getholidaysList();
        this.getleavesHistory();
    };
    LeaveComponent.prototype.OnSubmit = function (value, opt) {
        var _this = this;
        this.empDataSr.loading = true;
        this._service.LeaveRetur(value)
            .subscribe(function (res) {
            if (res.header && res.header == 'Ok') {
                _this.getleavesHistory();
                opt.resetForm();
                _this.empDataSr.loading = false;
                _this.popToastSuccess();
            }
            else if (res.header && res.header !== 'Ok') {
                _this.empDataSr.loading = false;
                _this.popToastFailed();
            }
        });
    };
    LeaveComponent.prototype.popToastSuccess = function () {
        var toast = {
            type: 'success',
            title: 'You are applied leave successfully',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    LeaveComponent.prototype.popToastFailed = function () {
        var toast = {
            type: 'error',
            title: 'error while appling leave',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    LeaveComponent.prototype.getleavesHistory = function () {
        var _this = this;
        this._service.getLeaves(this.employees.empCode, this.reqType)
            .subscribe(function (data) { return _this.leaveHistory = data; });
    };
    LeaveComponent.prototype.getholidaysList = function () {
        var _this = this;
        this._hservice.getHolidays()
            .subscribe(function (data) { return _this.holidays = data; });
    };
    Object.defineProperty(LeaveComponent.prototype, "isAdmin", {
        get: function () {
            return this.empDataSr.isAdmin;
        },
        enumerable: true,
        configurable: true
    });
    LeaveComponent.prototype.onChange = function (value) {
        var fromdate = this.leave.fromdate;
        var todate = this.leave.todate;
        var leavetype = this.leave.leavetype;
        fromdate = new Date(fromdate);
        todate = new Date(todate);
        var date1_unixtime = fromdate.getTime() / 1000;
        var date2_unixtime = todate.getTime() / 1000;
        var timeDifference = date2_unixtime - date1_unixtime;
        var timeDifferenceInHours = timeDifference / 60 / 60;
        var timeDifferenceInDays = timeDifferenceInHours / 24 + 1;
        if (leavetype === "CL") {
            this.leaves = timeDifferenceInDays;
        }
        else if ((leavetype === "SL") || (leavetype === "PL")) {
            var month = fromdate.getMonth() + 1;
            month = month < 10 ? '0' + month : month;
            var day = fromdate.getDate();
            day = day < 10 ? '0' + day : day;
            var year = fromdate.getFullYear();
            var date1 = month + "/" + day + "/" + year;
            var month = todate.getMonth() + 1;
            month = month < 10 ? '0' + month : month;
            var day = todate.getDate();
            day = day < 10 ? '0' + day : day;
            var year = todate.getFullYear();
            var date2 = month + "/" + day + "/" + year;
            var startDate = new Date(fromdate);
            var endDate = new Date(todate);
            var totalWeekdays = 0;
            for (var i = startDate; i <= endDate;) {
                if (i.getDay() == 0 || i.getDay() == 6) {
                    totalWeekdays++;
                }
                i.setTime(i.getTime() + 1000 * 60 * 60 * 24);
            }
            var count = 0;
            for (var i_1 = 0; i_1 < this.holidays.length; i_1++) {
                var holiday = new Date(this.holidays[i_1]);
                if ((this.holidays[i_1] <= date2 && this.holidays[i_1] >= date1) && (holiday.getDay() !== 0 && holiday.getDay() !== 6)) {
                    count++;
                }
            }
            this.leaves = timeDifferenceInDays - totalWeekdays - count;
        }
        var today = new Date();
        if (todate.getTime() < fromdate.getTime()) {
            this.valid = true;
            this.todate_errorMsg = " * Todate can't be Lessthan Fromdate";
        }
        else {
            this.todate_errorMsg = "";
            this.valid = false;
        }
        if (leavetype === "CL" && this.empDataSr.getEmpInfo().numOfCL < this.leaves) {
            this.valid = true;
            this.leaves_errorMsg = " * No of leaves exceeded";
        }
        else if (leavetype === "SL" && this.empDataSr.getEmpInfo().numOfSL < this.leaves) {
            this.valid = true;
            this.leaves_errorMsg = " * No of leaves exceeded";
        }
        else if (leavetype === "PL" && this.empDataSr.getEmpInfo().numOfPL < this.leaves) {
            this.valid = true;
            this.leaves_errorMsg = " * No of leaves exceeded";
        }
        else {
            this.leaves_errorMsg = "";
            this.valid = false;
        }
    };
    return LeaveComponent;
}());
LeaveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'leave',
        template: __webpack_require__(173),
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */], __WEBPACK_IMPORTED_MODULE_4__app_holidayservice__["a" /* holidayService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_holidayservice__["a" /* holidayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_holidayservice__["a" /* holidayService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]) === "function" && _e || Object])
], LeaveComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.leave.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPasswordComponent = (function () {
    function SetPasswordComponent(_restfull, empDataSr, toasterService) {
        this._restfull = _restfull;
        this.empDataSr = empDataSr;
        this.toasterService = toasterService;
    }
    SetPasswordComponent.prototype.onSubmit = function (value, opt) {
        var _this = this;
        this.empDataSr.loading = true;
        this._restfull.resetPassword(value.oldpassword, value.password)
            .subscribe(function (res) {
            if (res.header && res.header == 'Ok') {
                opt.resetForm();
                _this.empDataSr.loading = false;
                _this.popToastSuccess();
            }
            else if (res.header && res.header !== 'Ok') {
                _this.empDataSr.loading = false;
                _this.popToastFailed();
            }
        });
    };
    SetPasswordComponent.prototype.popToastSuccess = function () {
        var toast = {
            type: 'success',
            title: 'You password resetting successfully',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    SetPasswordComponent.prototype.popToastFailed = function () {
        var toast = {
            type: 'error',
            title: 'error while password resetting',
            body: 'Thank you'
        };
        this.toasterService.pop(toast);
    };
    return SetPasswordComponent;
}());
SetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'set-password',
        template: __webpack_require__(174),
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* EmployeedataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_model__["a" /* EmpDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], SetPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=app.setpassword.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, _service, empDataSr) {
        this.router = router;
        this._service = _service;
        this.empDataSr = empDataSr;
        this.employees = {};
        this.errorMsg = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSubmit = function (value) {
        var _this = this;
        var screen = '';
        this._service.getEmployees(value)
            .subscribe(function (resEmployeeData) {
            // for (let item of resEmployeeData) {
            //     if (item.username === value.username && item.password === value.password) {
            //this.employees = item;
            localStorage.setItem("app_data", JSON.stringify(value));
            _this.empDataSr.setEmpInfo(resEmployeeData.body);
            if (resEmployeeData.body.email) {
                _this.empDataSr.loggedIn = true;
                switch (resEmployeeData.body.userRole) {
                    case 0: {
                        screen = 'leave';
                        _this.empDataSr.isAdmin = false;
                        _this.router.navigate([screen]);
                        break;
                    }
                    case 1: {
                        screen = 'admin';
                        _this.empDataSr.isAdmin = true;
                        _this.router.navigate([screen]);
                        break;
                    }
                    case 2: {
                        screen = 'admin';
                        _this.empDataSr.isAdmin = true;
                        _this.router.navigate([screen]);
                        break;
                    }
                }
            }
            else {
                _this.errorMsg = 'Username or password is incorrect';
            }
            // }
            // if (item.username != value.username && item.password != value.password) {
            //     this.errorMsg = 'Username or password is incorrect';
            // }
            // else {
            //     this.router.navigate([screen]);
            // }
            // }
        });
        // for (let i = 0; i < this.employees.length; i++) {
        //     if (this.employees[i].username === value.username && this.employees[i].password === value.password && this.employees[i].usertype === "user") {
        //         this.router.navigate(['leave']);
        //     }
        //     else if (this.employees[i].username === value.username && this.employees[i].password === value.password && this.employees[i].usertype === "admin") {
        //         this.router.navigate(['admin']);
        //     } else {
        //         this.errorMsg = 'Username or password is incorrect';
        //     }
        // }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'login',
        template: __webpack_require__(175),
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* EmployeedataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_model__["a" /* EmpDataService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=app.login.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, empDataSr, _service, toasterService) {
        this.router = router;
        this.empDataSr = empDataSr;
        this._service = _service;
        this.toasterService = toasterService;
        this.title = 'app works!';
        this.config1 = new __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterConfig */]({
            positionClass: 'toast-top-center'
        });
    }
    AppComponent.prototype.popToast = function () {
        var toast = {
            type: 'info',
            title: 'Here is a Toast Title',
            body: 'Here is a Toast Body'
        };
        this.toasterService.pop(toast);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onRefresh();
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.empDataSr.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "name", {
        get: function () {
            return this.empDataSr.empInfo.firstName + " " + this.empDataSr.empInfo.lastName;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.Home = function () {
        var screen = '';
        switch (this.empDataSr.empInfo.userRole) {
            case 0: {
                screen = 'leave';
                this.empDataSr.isAdmin = false;
                this.router.navigate([screen]);
                break;
            }
            case 1: {
                screen = 'admin';
                this.empDataSr.isAdmin = true;
                this.router.navigate([screen]);
                break;
            }
            case 2: {
                screen = 'admin';
                this.empDataSr.isAdmin = true;
                this.router.navigate([screen]);
                break;
            }
        }
    };
    Object.defineProperty(AppComponent.prototype, "reload", {
        get: function () {
            return this.empDataSr.loading;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.empDataSr.logout();
        this.router.navigate(['']);
        localStorage.setItem('app_data', '');
    };
    AppComponent.prototype.setpassword = function () {
        this.router.navigate(['setpassword']);
    };
    AppComponent.prototype.onRefresh = function () {
        var _this = this;
        console.log("Just testing !!!!!!!!!!");
        var dt = localStorage.getItem("app_data");
        if (dt) {
            var value_1 = JSON.parse(dt);
            this._service.getEmployees(value_1)
                .subscribe(function (resEmployeeData) {
                for (var _i = 0, resEmployeeData_1 = resEmployeeData; _i < resEmployeeData_1.length; _i++) {
                    var item = resEmployeeData_1[_i];
                    if (item.username === value_1.username && item.password === value_1.password) {
                        //this.employees = item;
                        _this.empDataSr.setEmpInfo(item);
                        _this.empDataSr.loggedIn = true;
                        switch (item.usertype) {
                            case 'U': {
                                //screen = 'leave'
                                _this.empDataSr.isAdmin = false;
                                break;
                            }
                            case 'A': {
                                //screen = 'admin'
                                _this.empDataSr.isAdmin = true;
                                break;
                            }
                        }
                    }
                    ;
                }
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(176),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_model__["a" /* EmpDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_model__["a" /* EmpDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* EmployeedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* EmployeedataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return holidayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var holidayService = (function () {
    function holidayService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this._url = '/copartLTA/rest/api/v1/lta/holidays';
    }
    holidayService.prototype.getHolidays = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json().body; });
    };
    return holidayService;
}());
holidayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _b || Object])
], holidayService);

var _a, _b;
//# sourceMappingURL=app.holidayservice.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_model__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_toaster__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* RoutingComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_8_angular2_toaster__["a" /* ToasterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* routingModuleComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_model__["a" /* EmpDataService */], __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* EmployeedataService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmpDataService = (function () {
    function EmpDataService() {
        this.loading = false;
    }
    EmpDataService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    EmpDataService.prototype.setEmpInfo = function (data) {
        this.empInfo = data;
    };
    EmpDataService.prototype.getEmpInfo = function () {
        return this.empInfo;
    };
    EmpDataService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    return EmpDataService;
}());
EmpDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], EmpDataService);

//# sourceMappingURL=app.model.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeedataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeedataService = (function () {
    function EmployeedataService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this._url = '/copartLTA/rest/api/v1/lta/login'; // <replace json file URL with rest api URL for auth>
        this._baseUrl = '/copartLTA/rest/api/v1/lta';
        this._addUrl = '/copartLTA/rest/api/v1/lta/addUser';
        this._saveUrl = '/copartLTA/rest/api/v1/lta/editUser';
        this._empdataUrl = '/copartLTA/rest/api/v1/lta/listUser';
        this._ApplyLeaveUrl = '/copartLTA/rest/api/v1/lta/applyLeave';
        this._ApproveRejectLeaveUrl = '/copartLTA/rest/api/v1/lta/aprroveReject';
        this._DeleteuserUrl = '/copartLTA/rest/api/v1/lta/deleteUser';
        this._ApproveRejectListUrl = '/copartLTA/rest/api/v1/lta/ApproveRejectList';
        this._ManagersListUrl = '/copartLTA/rest/api/v1/lta/managers';
        this._OnsiteManagersListUrl = '/copartLTA/rest/api/v1/lta/onsitemanagers';
        this._ResetPasswordUrl = '/copartLTA/rest/api/v1/lta/resetPassword';
    }
    EmployeedataService.prototype.getEmployees = function (opt) {
        //Change the following method to post for server authentication.
        return this._http.post(this._url, opt)
            .map(function (response) { return response.json(); });
    };
    EmployeedataService.prototype.saveRetur = function (data) {
        console.log('Finished');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(data);
        return this._http.post(this._addUrl, data, headers)
            .map(function (res) { return res.json(); });
    };
    EmployeedataService.prototype.LeaveRetur = function (data) {
        console.log('Finished');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(data);
        return this._http.post(this._ApplyLeaveUrl, data, headers)
            .map(function (res) { return res.json(); });
    };
    EmployeedataService.prototype.savedata = function (data) {
        console.log('Finished');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(data);
        return this._http.post(this._saveUrl, data, headers)
            .map(function (res) { return res.json(); });
    };
    EmployeedataService.prototype.deletedata = function (data) {
        console.log('Finished');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(data);
        return this._http.post(this._DeleteuserUrl, data, headers)
            .map(function (res) { return res.json(); });
    };
    EmployeedataService.prototype.getLeaves = function (empid, reqType) {
        return this._http.get(this._baseUrl + "/listLeavesApplied?empId=" + empid + "&requestType=" + reqType)
            .map(function (response) { return response.json().body; });
    };
    EmployeedataService.prototype.getEmployeeData = function () {
        return this._http.get(this._empdataUrl)
            .map(function (response) { return response.json().body; });
    };
    EmployeedataService.prototype.ApproveRejectLeave = function (status, reqId) {
        console.log('Finished');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._ApproveRejectLeaveUrl + "?reqId=" + reqId + "&status=" + status, headers)
            .map(function (res) { return res.json(); });
    };
    EmployeedataService.prototype.getLeavesApproveReject = function (empid, reqType) {
        return this._http.get(this._ApproveRejectListUrl + "?empId=" + empid + "&requestType=" + reqType)
            .map(function (response) { return response.json().body; });
    };
    EmployeedataService.prototype.resetPassword = function (oldpassword, password) {
        console.log('Finished');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._ResetPasswordUrl + "?oldpassword=" + oldpassword + "&password=" + password, headers)
            .map(function (res) { return res.json(); });
    };
    EmployeedataService.prototype.getManagers = function () {
        return this._http.get(this._ManagersListUrl)
            .map(function (response) { return response.json().body; });
    };
    EmployeedataService.prototype.getOnsiteManagers = function () {
        return this._http.get(this._OnsiteManagersListUrl)
            .map(function (response) { return response.json().body; });
    };
    return EmployeedataService;
}());
EmployeedataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _b || Object])
], EmployeedataService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #369 !important;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px !important;\r\n}\r\nh2, h3 {\r\n  color: #369 !important;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n  font-size: 20px !important;\r\n}\r\n\r\n.login{\r\n  position:fixed;\r\n    left:500px;\r\n    top:100px;\r\n\r\n}\r\n\r\n.my-container{\r\n    padding-right: 3em;\r\n    padding-left: 3em;\r\n}\r\n.mytable{\r\n \r\n  min-height: 180px !important;\r\n  height: 30px !important;\r\n  overflow: auto !important;\r\n  \r\n}\r\n\r\n.mytable_full{\r\n  min-height: 180px !important;\r\n  height: 90% !important;\r\n}\r\n.navbar-inverse {\r\n    background-color: #337ab7 !important;\r\n    border-color: #286090 !important;\r\n}\r\n.text{\r\n  color:white !important;\r\n}\r\n.navbar-inverse .navbar-nav>li>a {\r\n    color: #f5f5f5 !important;\r\n}\r\n\r\nbody{\r\n  font-size: 13px !important;\r\n}\r\n.btn {\r\n    font-size: 13px !important;\r\n}\r\n.form-group {\r\n    margin-bottom: 5px !important;\r\n}\r\nbutton,input,submit,label{\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\r\n}\r\na{\r\n  cursor: pointer;\r\n}\r\ninput{\r\n  width:140px;\r\n}\r\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\r\n    background-color: white !important;\r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a routerLink=\"/admin\" routerLinkActive=\"active\">Dashboard</a></li>\n    <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Add User</a></li>\n    <li><a routerLink=\"/leave\" routerLinkActive=\"active\">Apply Leave</a></li>\n    <li><a routerLink=\"/edit\" routerLinkActive=\"active\">Edit User</a></li>\n</ul>\n<br>\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Leave requests </div>\n    <div class=\"panel-body table-responsive mytable\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Sno</th>\n                    <th>EmployeeId</th>\n                    <th>Resource ManagerId</th>\n                    <th>No of CL's</th>\n                    <th>No of SL's</th>\n                    <th>No of PL's </th>\n                    <th>Leaves applied</th>\n                    <th>From Date</th>\n                    <th>To date</th>\n                    <th>Leave Type</th>\n                    <th>Reason</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let employees of employee;let i = index;\">\n                    <td>{{i+1}}</td>\n                    <td>{{employees.employeeId}}</td>\n                    <td>{{employees.approver}}</td>\n                    <td>{{employees.numOfCL}}</td>\n                    <td>{{employees.numOfSL}}</td>\n                    <td>{{employees.numOfPL}}</td>\n                    <td>{{employees.leavesApplied}}</td>\n                    <td>{{employees.fromDate}}</td>\n                    <td>{{employees.toDate}}</td>\n                    <td>{{employees.leaveType}}</td>\n                    <td>{{employees.reason}}</td>\n                    <td>{{employees.status}}</td>\n                    <button type=\"button\" class=\"btn btn-mini btn-success\" (click)=\"approveRejectAction(i, 'Approved')\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n                        <button type=\"button\" class=\"btn btn-mini btn-danger\" (click)=\"approveRejectAction(i, 'Rejected')\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<br>\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Leave History</div>\n    <div class=\"panel-body table-responsive mytable\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Sno</th>\n                    <th>EmployeeId</th>\n                    <th>Resource ManagerId</th>\n                    <th>Leaves applied</th>\n                    <th>From Date</th>\n                    <th>To date</th>\n                    <th>Leave Type</th>\n                    <th>Reason</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let History of leaveHistory;let i = index;\">\n                    <td>{{i+1}}</td>\n                    <td>{{History.employeeId}}</td>\n                    <td>{{History.approver}}</td>\n                    <td>{{History.leavesApplied}}</td>\n                    <td>{{History.fromDate}}</td>\n                    <td>{{History.toDate}}</td>\n                    <td>{{History.leaveType}}</td>\n                    <td>{{History.reason}}</td>\n                    <td>{{History.status}}</td>\n                    <button type=\"button\" class=\"btn btn-mini btn-danger\" (click)=\"cancelLeaveAction(i, 'Cancelled')\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li><a routerLink=\"/admin\" routerLinkActive=\"active\">Dashboard</a></li>\n    <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Add User</a></li>\n    <li><a routerLink=\"/leave\" routerLinkActive=\"active\">Apply Leave</a></li>\n    <li class=\"active\"><a routerLink=\"/edit\" routerLinkActive=\"active\">Edit User</a></li>\n</ul>\n<br>\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Welcome to Employees list of Copart</div>\n    <div class=\"panel-body table-responsive mytable\">\n        <table class=\"table table-striped\" id=\"mytable\">\n            <thead>\n                <tr>\n                    <th>First Name</th>\n                    <th>Middle Name</th>\n                    <th>Last Name</th>\n                    <th>Email</th>\n                    <th>Resource Manager Id</th>\n                    <th>Onsite Manager Id</th>\n                    <th>Director</th>\n                    <th>Phone</th>\n                    <th>Department</th>\n                    <th>Emp Code</th>\n                    <th>User Role</th>\n                    <th>Edit/Save/Delete</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let employees of employee;let i = index;\">\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.firstName}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.firstName\" value={{employees.firstName}} *ngIf=\"editedIndex === i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.middleName}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.middleName\" value={{employees.middleName}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.lastName}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.lastName\" value={{employees.lastName}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.email}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.email\" value={{employees.email}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.resourceManager}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.resourceManager\" value={{employees.resourceManager}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.onsiteManager}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.onsiteManager\" value={{employees.onsiteManager}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.director}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.director\" value={{employees.director}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.phone}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.phone\" value={{employees.phone}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.dept}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.dept\" value={{employees.dept}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.empCode}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.empCode\" value={{employees.empCode}} *ngIf=\"editedIndex===i\"></td>\n                    <td>\n                        <span *ngIf=\"editedIndex !== i\">{{employees.userRole}}</span>\n                        <input type=\"text\" [(ngModel)]=\"employees.userRole\" value={{employees.userRole}} *ngIf=\"editedIndex===i\"></td>\n\n                    <button *ngIf=\"Edit\" (click)=\"edit(employees,i)\" type=\"button\" class=\"btn btn-default btn\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                    <button *ngIf=\"editedIndex === i && Save\" (click)=\"save(i)\" type=\"submit\" class=\"btn btn-default btn\"><i class=\"glyphicon glyphicon-ok\"></i></button>\n                    <button (click)=\"delete(i)\" type=\"submit\" class=\"btn btn-default btn\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li><a routerLink=\"/admin\" routerLinkActive=\"active\">Dashboard</a></li>\n    <li class=\"active\"><a routerLink=\"/signup\" routerLinkActive=\"active\">Add User</a></li>\n    <li><a routerLink=\"/leave\" routerLinkActive=\"active\">Apply Leave</a></li>\n    <li><a routerLink=\"/edit\" routerLinkActive=\"active\">Edit User</a></li>\n</ul>\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Add new user here </div>\n                <div class=\"panel-body\">\n                    <form name=\"myform\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value,userForm)\" novalidate>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>First Name</label>\n                                    <input type=\"text\" #fnameRef=\"ngModel\" pattern=\"^[A-Z][a-z]*\" required class=\"form-control\" name=\"firstName\" ngModel>\n                                    <div *ngIf=\"fnameRef.errors &&(fnameRef.dirty||fnameRef.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!fnameRef.errors.required\">\n                                            Please enter your Name\n                                        </div>\n                                        <div [hidden]=\"!fnameRef.errors.pattern\">\n                                            please enter name with starting catpitol letter\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>Middle Name</label>\n                                    <input type=\"text\" #middleRef=\"ngModel\" pattern=\"^[A-Z][a-z]*\" class=\"form-control\" name=\"middleName\" ngModel>\n                                    <div *ngIf=\"middleRef.errors &&(middleRef.dirty||middleRef.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!middleRef.errors.required\">\n                                            Please enter your last Name\n                                        </div>\n                                        <div [hidden]=\"!middleRef.errors.pattern\">\n                                            please enter name with starting catpitol letter\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>Last Name</label>\n                                    <input type=\"text\" #lnameRef=\"ngModel\" pattern=\"^[A-Z][a-z]*\" required class=\"form-control\" name=\"lastName\" ngModel>\n                                    <div *ngIf=\"lnameRef.errors &&(lnameRef.dirty||lnameRef.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!lnameRef.errors.required\">\n                                            Please enter your last Name\n                                        </div>\n                                        <div [hidden]=\"!lnameRef.errors.pattern\">\n                                            please enter name with starting catpitol letter\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>Email</label>\n                                    <input type=\"text\" #emailRef=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required class=\"form-control\"\n                                        name=\"email\" ngModel>\n                                    <div *ngIf=\"emailRef.errors &&(emailRef.dirty)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!emailRef.errors.required\">\n                                            please enter your email address\n                                        </div>\n                                        <div [hidden]=\"!emailRef.errors.pattern\">\n                                            please enter valid email with '@' and '.'\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>Emp Code</label>\n                                    <input type=\"text\" #empRef=\"ngModel\" pattern=\"^[0-9]{4}$\" required class=\"form-control\" name=\"empCode\" ngModel>\n                                    <div *ngIf=\"empRef.errors &&(empRef.dirty)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!empRef.errors.required\">\n                                            please enter your emp code\n                                        </div>\n                                        <div [hidden]=\"!empRef.errors.pattern\">\n                                            please enter empcode with starting number between 0 to 9 and max 4\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>Phone</label>\n                                    <input #phoneRef=\"ngModel\" type=\"text\" pattern=\"^[0-9]{10}$\" required class=\"form-control\" name=\"phone\" ngModel>\n                                    <div *ngIf=\"phoneRef.errors &&(phoneRef.dirty)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!phoneRef.errors.required\">\n                                            please enter your phone number\n                                        </div>\n                                        <div [hidden]=\"!phoneRef.errors.pattern\">\n                                            please enter 10 digit phone number\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=col-sm-6>\n                                <div class=\"form-group\">\n                                    <label>User Role</label>\n                                    <select ngModel name=\"userRole\" class=\"form-control\" required (change)=\"onchange($event.target.value)\">\n                                <option value=\"2\">On-site Manager</option>\n                                <option value=\"1\">Admin</option>\n                                <option value=\"0\">Employee</option>\n                                   </select>\n                                </div>\n                            </div>\n                            <div *ngIf=\"showId\" class=col-sm-6>\n                                <div class=\"form-group\">\n                                    <label>Resource Manager</label>\n                                    <select name=\"resourceManager\" ngModel class=\"form-control\" required (change)=\"onChanged($event.target.value)\">\n                                            <option *ngFor=\"let p of managerslist\" value={{p.empCode}}>{{p.firstName}}</option>\n                                         </select>\n                                </div>\n                            </div>\n                            <div *ngIf=\"showId\" class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>Department</label>\n                                    <input class=\"form-control\" name=\"dept\" required ngModel [(ngModel)]=\"selectedPerson.dept\" readonly>\n                                </div>\n                            </div>\n                            <div *ngIf=\"showId\" class=col-sm-6>\n                                <div class=\"form-group\">\n                                    <label>Onsite Manager</label>\n                                    <select class=\"form-control\" name=\"onsiteManager\" required ngModel>\n                                            <option *ngFor=\"let p of onsitemanagerslist\" value={{p.empCode}}>{{p.firstName}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div *ngIf=\"showId\" class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label>Director</label>\n                                    <input type=\"text\" #dirRef=\"ngModel\" class=\"form-control\" name=\"director\" required ngModel pattern=\"^[A-Z][a-z]*\">\n                                    <div *ngIf=\"dirRef.errors &&(dirRef.dirty||dirRef.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!dirRef.errors.required\">\n                                            Please enter your Director Name\n                                        </div>\n                                        <div [hidden]=\"!dirRef.errors.pattern\">\n                                            please enter name with starting catpitol letter\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <button [disabled]=\"!userForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li *ngIf=\"isAdmin\"><a routerLink=\"/admin\" routerLinkActive=\"active\">Dashboard</a></li>\n    <li *ngIf=\"isAdmin\"><a routerLink=\"/signup\" routerLinkActive=\"active\">Add User</a></li>\n    <li class=\"active\"><a routerLink=\"/leave\" routerLinkActive=\"active\">Apply Leave</a></li>\n    <li *ngIf=\"isAdmin\"><a routerLink=\"/edit\" routerLinkActive=\"active\">Edit User</a></li>\n</ul>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Welcome to Leave Tracking Application of Copart</div>\n            <div class=\"panel-body table-responsive mytable\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>Resource Manager</th>\n                            <th>Onsite Manager</th>\n                            <th>No of CL's</th>\n                            <th>No of SL's</th>\n                            <th>No of PL's</th>\n                            <th>No of Leaves</th>\n                            <th>Director</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>{{employees.resourceManagerName}}</td>\n                            <td>{{employees.onsiteManagerName}}</td>\n                            <td>{{employees.numOfCL}}</td>\n                            <td>{{employees.numOfSL}}</td>\n                            <td>{{employees.numOfPL}}</td>\n                            <td>{{employees.numOfLeaves}}</td>\n                            <td>{{employees.director}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Leave history</div>\n            <div class=\"panel-body table-responsive mytable\">\n                <table class=\"table table-striped \">\n                    <thead>\n                        <tr>\n                            <th>Leave Type</th>\n                            <th>Fromdate</th>\n                            <th>Todate</th>\n                            <th>No of days</th>\n                            <th>Reason</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of leaveHistory\">\n                            <td>{{item.leaveType}}</td>\n                            <td>{{item.fromDate}}</td>\n                            <td>{{item.toDate}}</td>\n                            <td>{{item.leavesApplied}}</td>\n                            <td>{{item.reason}}</td>\n                            <td>{{item.status}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Leave application form </div>\n    <div class=\"panel-body\">\n        <form #leaveform=\"ngForm\" (ngSubmit)=\"OnSubmit(leaveform.value, leaveform)\" novalidate>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div>\n                                <label>From Date: </label>\n                                <input type=\"date\" ngModel name=\"fromDate\" class=\"form-control\" required [(ngModel)]=\"leave.fromdate\" (change)=\"onChange($event.target.value)\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div>\n                                <label>To Date: </label> <span style=\"color:red; font-size:14px;\">{{todate_errorMsg}}</span>\n                                <input type=\"date\" ngModel name=\"toDate\" class=\"form-control\" required [(ngModel)]=\"leave.todate\" (change)=\"onChange($event.target.value)\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div>\n                                <label>Leave type: </label>\n                                <select ngModel name=\"leaveType\" class=\"form-control\" required [(ngModel)]=\"leave.leavetype\" (change)=\"onChange($event.target.value)\"> \n                                    <option disabled>Select Leave type</option>\n                                    <option value=\"CL\">Casual leave</option>\n                                    <option value=\"SL\">Sick Leave</option>\n                                    <option value=\"PL\">Planed Leave</option>\n                                  </select>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div>\n                                <label>No of days</label><span style=\"color:red; font-size:14px;\">{{leaves_errorMsg}}</span>\n                                <input ngModel name=\"leavesApplied\" class=\"form-control\" required [(ngModel)]=\"leaves\" readonly>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <label>Reason for Leave</label>\n                    <textarea class=\"form-control\" rows=\"4\" cols=\"10\" style=\"width:100%;\" ngModel name=\"reason\" required></textarea>\n                </div>\n            </div>\n            <br>\n            <button [disabled]=\"!leaveform.form.valid || valid\" type=\"submit\" class=\"btn btn-primary pull-right\">Submit</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">Leave History</div>\r\n                <div class=\"panel-body table-responsive \">\r\n                    <form name=\"set_password_form\" #set_password_form=\"ngForm\" (ngSubmit)=\"onSubmit(set_password_form.value,set_password_form)\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label>Enter Old Password</label>\r\n                            <input required name=\"oldpassword\" type=\"text\" class=\"form-control\" [(ngModel)]=\"oldpassword\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Enter New Password</label>\r\n                            <input required name=\"password\" type=\"text\" class=\"form-control\" [(ngModel)]=\"password\">\r\n                            <label>Confirm New Password</label>\r\n                            <input required name=\"repeatPassword\" type=\"password\" class=\"form-control\" [(ngModel)]=\"repeatPassword\">\r\n                            <div [hidden]=\"password == repeatPassword\">Passwords do not match!</div>\r\n                        </div>\r\n                        <button [disabled]=\"!set_password_form.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-2\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Welcome to login Portal of Copart</div>\n                <div class=\" panel-body\">\n                    <form #lgForm=\"ngForm\" (ngSubmit)=\"loginSubmit(lgForm.value)\">\n                        <div class=\"input-group form-group\">\n                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                            <input type=\"text\" name=\"email\" ngModel class=\"form-control\" placeholder=\"Email\" required />\n                        </div>\n                        <div class=\"input-group form-group\">\n                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                           <input type=\"password\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required  />\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" name=\"action\">Login</button>\n                        <span>{{errorMsg}}</span>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar text\">\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <img src=\"dist/assets/images/Copart.png\" style=\"width:150px;height:50px;\">\n            </div>\n            <div *ngIf=\"isLoggedIn\" class=\"dropdown nav navbar-nav navbar-right\">\n                <button class=\"dropbtn btnClass\">{{name}}\n                <span class=\"glyphicon glyphicon-user\"></span></button>\n                <div class=\"dropdown-content\">\n                    <a (click)=\"Home()\"><span class=\"glyphicon glyphicon-home\"></span> Home</a>\n                    <a (click)=\"setpassword()\"><span class=\"glyphicon glyphicon-wrench\"></span> Change Password </a>\n                    <a (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Logout</a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>\n<div class=\"reload-bg\" [hidden]=\"!reload\"><img class=\"reload\" src=\"dist/assets/images/spinner.gif\"/></div>\n<div class=\"my-container\">\n     <toaster-container [toasterconfig]=\"config1\"></toaster-container>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_app_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_app_leave_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Admin_app_signup_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Admin_app_edituser_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Admin_app_admin_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_app_setpassword__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__Login_app_login_component__["a" /* LoginComponent */] },
    { path: 'leave', component: __WEBPACK_IMPORTED_MODULE_3__Home_app_leave_component__["a" /* LeaveComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__Admin_app_admin_component__["a" /* AdminComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__Admin_app_signup_component__["a" /* SignupComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_5__Admin_app_edituser_component__["a" /* EdituserComponent */] },
    { path: 'setpassword', component: __WEBPACK_IMPORTED_MODULE_7__Home_app_setpassword__["a" /* SetPasswordComponent */] },
];
var RoutingComponent = (function () {
    function RoutingComponent() {
    }
    return RoutingComponent;
}());
RoutingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], RoutingComponent);

var routingModuleComponent = [__WEBPACK_IMPORTED_MODULE_2__Login_app_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_3__Home_app_leave_component__["a" /* LeaveComponent */], __WEBPACK_IMPORTED_MODULE_6__Admin_app_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__Admin_app_edituser_component__["a" /* EdituserComponent */], __WEBPACK_IMPORTED_MODULE_4__Admin_app_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__Home_app_setpassword__["a" /* SetPasswordComponent */]];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.bundle.js.map