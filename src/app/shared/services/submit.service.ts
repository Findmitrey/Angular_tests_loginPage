import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';


@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  constructor(private http : HttpClient, public dialog: MatDialog) { }

  onSubmit(url: string, data : any){
    return this.http.post(url, data);
  }

  
  openDialog(data): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data
    });
  }
}
