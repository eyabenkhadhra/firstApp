
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/modals/Event';
import { GLOBAL } from './../app/app.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private httpClient: HttpClient) { }
  public tab: Event[] = GLOBAL.db.events;

  //observable: te5o any traja observable houwa eli yebath
  saveEvent(EventTosave: any): Observable<Event> {
    //pour la partie bbackend
    //c'est micro service bech declancher le service de backend
    //9bal manebatho lezemninesn3o
    const NewEvent = {
     ...EventTosave,
      id: EventTosave.id??(Math.ceil(Math.random() * 1000).toString())
    };
    //si le subscribe est vide lezem void 
   // return this.HttpClient.post<Event('http:localhost:8080/api/Events',NewEvent);
   //si il ya la requete post l'abservable construit par defaut
    this.tab = [NewEvent, ...this.tab.filter(item => item.id != NewEvent.id)];//filter ki yebda different al member jdid ythabet c nn yna7iih
    return new Observable((observer)=>{observer.next(NewEvent)}); 
    //lezemni nhot observable bech nrajah fyh l varible 5ater l subscribe
  }

 /* DetailsEventById(id: string): Promise<void> {
    this.httpClient.get<void>('link').toPromise();
    this.tab = this.tab.filter(item => item.id != id);//bech ye5ouhom l kol illa eli kif kif la 
    return new Promise(resolve => resolve());
  }*/
  DetailsEventById(id: string): Observable<Event> {
    return new Observable(observer => {observer.next(this.tab.filter(item=>item.id==id)[0]??null)});
  }

}
