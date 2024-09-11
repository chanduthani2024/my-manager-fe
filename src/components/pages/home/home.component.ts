import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  totalAmount:number = 0;
  amountToDeduct:number = 0;
  afterDeductions:number = 0;
  amountSpent:number = 0;
  progress:String = '';
  status:String = '';
  spendingReason:String = '';
  spendingDetails:any = [];

  constructor(private modalService: NgbModal) { }

  calculateAfterDeductions(){
    this.afterDeductions = this.totalAmount - this.amountToDeduct;
    this.spendingDetails = [...this.spendingDetails, {amountToDeduct: this.amountToDeduct, 
      spendingReason: this.spendingReason, status: this.status,amountSpent:this.amountSpent,progress:this.progress}];
    this.modalService.dismissAll();
  }
  openModel(spendingItem:any){
    this.modalService.open(spendingItem, {
      size: 'md',
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'Heat_submission-class'
    })
  }
}
