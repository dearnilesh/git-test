import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from '../../services/admin-service.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BatchInterface } from '../../interface/batch-interface';
// import { BatchInterface } from '../../interface/batch-interface';
@Component({
  selector: 'app-batch-year',
  templateUrl: './batch-year.component.html',
  styleUrls: ['./batch-year.component.css']
})
export class BatchYearComponent implements OnInit {
  // Batch: BatchInterface[]=[];
  BatchInterface: BatchInterface = new BatchInterface();
  constructor(public adminService: AdminServiceService) {
  
   }
  batchYearForm: FormGroup = new FormGroup({
    // 'BatchYear': new FormControl ('', Validators.required)
  })

  ngOnInit(): void {
    this.batchYearForm =new FormGroup({
      BatchYear: new FormControl ('', Validators.required) 
    })


  }
  submitBatchYearRecord(data: BatchInterface) {
     debugger;
    console.log(data)
    console.log(BatchInterface)
// return data
    // console.log(postData, "p");
    // const Postdata: userObj = { BatchYear: BatchYear };
      //  this.adminService.saveBatch(postData.BatchYear);
  }


}



