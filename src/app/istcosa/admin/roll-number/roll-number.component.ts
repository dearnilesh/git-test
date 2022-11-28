import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { FormControl, FormBuilder, FormGroup, FormControlName } from '@angular/forms';
import { RollNumberInterface } from '../../interface/roll-number-interface';
import { BatchInterface } from '../../interface/batch-interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-roll-number',
  templateUrl: './roll-number.component.html',
  styleUrls: ['./roll-number.component.css']
})
export class RollNumberComponent implements OnInit {
  [x: string]: any;
  // RollNumberInterface!: RollNumberInterface
   RollNumberInterface :RollNumberInterface = new RollNumberInterface();
   BatchInterface:BatchInterface=new BatchInterface()
  rollNumberForm = new FormGroup({
    RollNumber1: new FormControl(""),
    BatchYear:new FormControl("0"),
    BatchID: new FormControl("")
  })
  allbatchYear: any[] = [];
  postRollNo: any[] = [];
  
  constructor(private apiService: AdminServiceService, private http: HttpClient, private fb: FormBuilder,private route:ActivatedRoute) {
    this.route.queryParams.subscribe((res: any) => {
      this.RollNumberInterface.BatchID = res['allowEmp']
      console.log()
    });
    // this.RollNumberInterface = new RollNumberInterface();
    apiService.getBatchYear().subscribe((batchYear: any) => {
      // this.b =batchYear.BatchID;
     return this.allbatchYear = batchYear;
       
     
      // this.allbatchYear = BatchID;
    });
  }
  

  ngOnInit(): void {
     }
  submitRollNumberRecord(batchYear:any) {

   
    // debugger;

     console.log(batchYear,"r")
    // this.rollNumberInterface.Active = true;
    // this.rollNumberInterface.RollNumber1 = rollNumberForm.RollNumber1;
    // this.rollNumberInterface.BatchID = rollNumberForm.BatchID;
    // this.apiService.postRollNnmber(this.rollNumberInterface).subscribe(data => {
    //   debugger;
    //   console.log(data)
    // })  
  }
  getId(id:any){
    let sid= id
    console.log(sid,"s")
    return sid
    
  }
}
