import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { _MatTableDataSource } from '@angular/material/table';
import { Event } from 'src/modals/Event';
import { EventService } from 'src/service/event.service';
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  constructor(private ES: EventService, private dialog: MatDialog) { }
  eventGlobal !: Event;

  //dataSource = new _MatTableDataSource(this.ES.tab);
  dataSource: Event[] = this.ES.tab;
  displayedColumns: string[] = ["id", "titre", "dateDebut", "dateFin", "actions"];
  //GLOBAL.db.members;

  onOpen(id: string): void {
    this.ES.DetailsEventById(id).subscribe((x) => { this.eventGlobal = x })

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: this.eventGlobal.id,
      titre: this.eventGlobal.titre,
      dateDebut: this.eventGlobal.dateDebut,
      dateFin: this.eventGlobal.dateFin
    };

    

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);



    dialogRef.afterClosed().subscribe(() => {
      this.dataSource=this.ES.tab
       
      });



  }


}
