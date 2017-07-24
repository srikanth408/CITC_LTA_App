import { Component } from '@angular/core';
import { EmployeedataService } from '../app.service';
import { EmpDataService } from '../app.model';
import { ToasterContainerComponent, ToasterService, Toast, ToasterConfig } from 'angular2-toaster';




@Component({
    templateUrl: '/app.admin.component.html',
    providers: [EmployeedataService]
})

export class AdminComponent {
    private employee: any;
    private editedIndex: boolean;
    private EmployeeId: any = {};
    private leaveHistory: any;


    constructor(private _service: EmployeedataService,
        private empDataSr: EmpDataService,
        private toasterService: ToasterService) {

    }
    ngOnInit() {
        this.EmployeeId = this.empDataSr.getEmpInfo();
        this.getLeaveRequests();
        this.getLeaveRequestHistory();
    }
    approveRejectAction(index: any, status) {
        this.empDataSr.loading = true;
        this._service.ApproveRejectLeave(status, this.employee[index].reqId)
            .subscribe((res) => {
                if (res.header && res.header == 'Ok') {
                    this.getLeaveRequests();
                    this.getLeaveRequestHistory();
                    this.empDataSr.loading = false;
                    this.popToastSuccess();
                }else if(res.header && res.header !== 'Ok'){
                     this.empDataSr.loading = false;
                     this.popToastFailed();
                }
            });
    }
    cancelLeaveAction(index: any, status){
          this.empDataSr.loading = true;
        this._service.ApproveRejectLeave(status, this.leaveHistory[index].reqId)
            .subscribe((res) => {
                if (res.header && res.header == 'Ok') {
                    this.getLeaveRequests();
                    this.getLeaveRequestHistory();
                    this.empDataSr.loading = false;
                    this.popToastSuccess();
                }else if(res.header && res.header !== 'Ok'){
                     this.empDataSr.loading = false;
                     this.popToastFailed();
                }
            });

    }

    getLeaveRequests() {
        this._service.getLeaves(this.EmployeeId.empCode, "A")
            .subscribe(data => this.employee = data);
    }

    getLeaveRequestHistory() {
        this._service.getLeavesApproveReject(this.EmployeeId.empCode, "A")
            .subscribe(data => this.leaveHistory = data);
    }
    popToastSuccess() {
        var toast: Toast = {
            type: 'success',
            title: 'You request as been done successfully',
            body: 'Thank you'
        };

        this.toasterService.pop(toast);
    }
    popToastFailed() {
        var toast: Toast = {
            type: 'error',
            title: 'error in your request',
            body: 'Thank you'
        };

        this.toasterService.pop(toast);
    }

}
