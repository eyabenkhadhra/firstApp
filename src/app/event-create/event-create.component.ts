import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/service/event.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {

  constructor(private ES: EventService, private router: Router){}
  form!: FormGroup;
  event_recuper!: Event;
  range = new FormGroup({
    titre: new FormControl(null,[]),
    dateDebut: new FormControl<Date | null>(null),
    dateFin: new FormControl<Date | null>(null),
  });

  onsub(): void {
    console.log(this.range.value); //l fomulaire esmeha range
    const EventTosave = this.range.value;
    
    this.ES.saveEvent(EventTosave).subscribe(() => {
     this.router.navigate(['/events']);

    })
  }
}
