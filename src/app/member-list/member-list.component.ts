import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { MemberService } from './../../service/member.service';
import { Member } from './../../modals/Member';
import { GLOBAL } from './../app.config';
import { Component } from '@angular/core';
import { _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  constructor(private MS: MemberService, private router: Router, private dialog: MatDialog) { }
  //base donne ponite sur le table sans mise a jour
  //dataSource: Member[] = this.MS.tab;
  //nahineha 5ater bech na3mlo casting
  //GLOBAL.db.members;

  //ponit la fonction en datasource 5aterha bech tetbadel 
  ondelete(id: string) {
    //1ouvrir la boite de dialogue 
    //const lancitha be 5chdemt aliha l thread
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {

      });
    //2tester le retour par un thread 5atro ya93ad yestanna fil listinner bech yara shno l retour
    //subscribe hya thread
    dialogRef.afterClosed().subscribe((x) => {

      if (x)
        this.MS.DeleteMemberById(id).then(() => {
          this.dataSource.data = this.MS.tab //nsoubou fyha les donnees . data
        })
    });
    //3 thread observebale retour positive

  }



  displayedColumns: string[] = ["id", "cin", "name", "createdDate", "cv", "type", "actions"];

  dataSource = new _MatTableDataSource(this.MS.tab);//kenet table de member taw lezemni ncastihom ala mattabledatasorurce donc 
  //nessa3 instance o na3tihom valeur de depart

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
