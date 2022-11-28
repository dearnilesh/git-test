import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RollNumberInterface } from '../interface/roll-number-interface';
import { BatchInterface } from '../interface/batch-interface';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
    batchYearApi = 'http://pshrcchd-001-site3.dtempurl.com/api/api/Batch';
  rollNumberApi = 'http://pshrcchd-001-site3.dtempurl.com/api/api/RollNumber';
  constructor(private http: HttpClient ) {
  }
  getBatchYear(): any {
    return this.http.get(this.batchYearApi);
  }
  postBatchYear() {
    return this.http.get<[batchNumber: number,]>(this.batchYearApi)
  }
  postRollNnmber(rollNumberApi: RollNumberInterface): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(rollNumberApi);
    console.log(body, "body")
    return this.http.post(this.rollNumberApi, body, { 'headers': headers })
  }
  // BatchInterface: BatchInterface = new BatchInterface();
  RollNumberInterface: RollNumberInterface = new RollNumberInterface();
    getBatch() {
    return this.http.get<[batchNumber: number]>(this.batchYearApi);
  }
  saveBatch(BatchYear: number) {
      const postData: BatchInterface = { BatchYear: BatchYear, Active: true }
   return this.http.post(this.batchYearApi, postData).subscribe((res: any) => {
     console.log(res);
    })
  }
}




