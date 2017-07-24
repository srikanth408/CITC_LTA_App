import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from '../app.service';
import { EmpDataService } from '../app.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { holidayService } from '../app.holidayservice';
import { ToasterContainerComponent, ToasterService, Toast, ToasterConfig } from 'angular2-toaster';




@Component({
    selector: 'leave',
    templateUrl: '/app.leave.component.html',
    providers: [EmployeedataService, holidayService]

})

export class LeaveComponent {
    private leaveHistory: any;
    public employees: any = {};
    private data: Observable<any>;
    newEntry: any = {};
    private leave: any = {};
    private leaves;
    private holidays: any;
    private empid: string;
    private reqType: string = "NA";
    private todate_errorMsg: any;
    private leaves_errorMsg: any;
    private valid: boolean = false;


    constructor(private routes: Router,
        private _service: EmployeedataService,
        private empDataSr: EmpDataService,
        private _hservice: holidayService,
        private toasterService: ToasterService) {

    }

    ngOnInit() {
        //this.data =  new Observable<EmpDataService>((observer: Observer<EmpDataService>) =>{
        this.employees = this.empDataSr.getEmpInfo();
        //});

        //     let subscription = this.data.subscribe(
        //       value => {this.employees = value; console.log(value)}
        //   );
        this.getholidaysList();
        this.getleavesHistory();


    }


    OnSubmit(value: any, opt: any) {
        this.empDataSr.loading = true;
        this._service.LeaveRetur(value)
            .subscribe((res) => {
                if (res.header && res.header == 'Ok') {
                    this.getleavesHistory();
                    opt.resetForm();
                    this.empDataSr.loading = false;
                    this.popToastSuccess();
                } else if (res.header && res.header !== 'Ok') {
                    this.empDataSr.loading = false;
                    this.popToastFailed();
                }
            });


    }
    popToastSuccess() {
        var toast: Toast = {
            type: 'success',
            title: 'You are applied leave successfully',
            body: 'Thank you'
        };

        this.toasterService.pop(toast);
    }
    popToastFailed() {
        var toast: Toast = {
            type: 'error',
            title: 'error while appling leave',
            body: 'Thank you'
        };

        this.toasterService.pop(toast);
    }




    getleavesHistory() {
        this._service.getLeaves(this.employees.empCode, this.reqType)
            .subscribe(data => this.leaveHistory = data);

    }
    getholidaysList() {
        this._hservice.getHolidays()
            .subscribe(data => this.holidays = data);

    }
    get isAdmin() {
        return this.empDataSr.isAdmin;
    }
    onChange(value: any) {
        var fromdate = this.leave.fromdate;
        var todate = this.leave.todate;
        var leavetype = this.leave.leavetype;
        fromdate = new Date(fromdate);
        todate = new Date(todate);

        let date1_unixtime = fromdate.getTime() / 1000;
        let date2_unixtime = todate.getTime() / 1000;
        var timeDifference = date2_unixtime - date1_unixtime;
        var timeDifferenceInHours = timeDifference / 60 / 60;
        var timeDifferenceInDays = timeDifferenceInHours / 24 + 1;
        if (leavetype === "CL") {
            this.leaves = timeDifferenceInDays;
        } else if ((leavetype === "SL") || (leavetype === "PL")) {
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

            for (let i = 0; i < this.holidays.length; i++) {
                var holiday = new Date(this.holidays[i]);

                if ((this.holidays[i] <= date2 && this.holidays[i] >= date1) && (holiday.getDay() !== 0 && holiday.getDay() !== 6)) {
                    count++;

                }

            }
            this.leaves = timeDifferenceInDays - totalWeekdays - count;
        }
        var today = new Date();
        if (todate.getTime() < fromdate.getTime()) {
            this.valid = true;
            this.todate_errorMsg = " * Todate can't be Lessthan Fromdate";
        } else {
            this.todate_errorMsg = "";
            this.valid = false;
        }
        if (leavetype === "CL" && this.empDataSr.getEmpInfo().numOfCL < this.leaves) {
             this.valid = true;
            this.leaves_errorMsg = " * No of leaves exceeded";
        } else if(leavetype === "SL" && this.empDataSr.getEmpInfo().numOfSL < this.leaves) {
            this.valid = true;
            this.leaves_errorMsg = " * No of leaves exceeded";
        }else if ( leavetype === "PL" && this.empDataSr.getEmpInfo().numOfPL < this.leaves) {
             this.valid = true;
            this.leaves_errorMsg = " * No of leaves exceeded";
        } else {
            this.leaves_errorMsg = "";
            this.valid = false;
        }
           

    }


}

