import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/service/event.service';
import { Router } from '@angular/router';
import { _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  //nhoto une ptite boite de dialog  fil constructeru bech aamel forsage de type 

  form!: FormGroup;
  description!: string;
  id!:string;
  titre!: string;
  dateDebut!:string;
  dateFin!:string;
  eventGlobal!:Event;
 

  constructor(
    private ES: EventService,
    private router: Router,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
   ,@Inject(MAT_DIALOG_DATA) data:any)
  {
    this.id=data.id,
    this.titre = data.titre;
    this.dateDebut = data.dateDebut;
    this.dateFin = data.dateFin;
  }

  

  ngOnInit() {
    this.form = this.fb.group({
      //bechy y3abi les champs mtaa l forms b fonction detailgetId
      description: [this.description, []],
      id: [this.id, []],
      titre :[this.titre, []],
      dateDebut : [this.dateDebut, []],
      dateFin :[this.dateFin, []]
      });
  }
  dataSource = new _MatTableDataSource(this.ES.tab);
  save() {
    console.log(this.form.value)
const event = {...this.eventGlobal,...this.form.value};

this.ES.saveEvent(event).subscribe(()=>{
  this.router.navigate(['/events'])
}) ;


   this.dialogRef.close(this.form.value);
    

    

  }

  close() {
    this.save.name;
    this.dialogRef.close();
  }



}
