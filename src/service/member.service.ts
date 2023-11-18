import { GLOBAL } from './../app/app.config';
import { Member } from './../modals/Member';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private httpClient: HttpClient) { }
  public tab: Member[] = GLOBAL.db.members;
  saveMember(MemberTosave: any): Promise<void> {//te5o fil accrocher kif eli 9balha   link houwa l port mte3ik 8080
    //partie backend
    //return this.httpClient.post<void>('link', MemberTosave).toPromise()//version jdida ylacy wahdo l thread heka aleh ychatabhaa
    //fi west l link thot adresse ip
    const NewMember = {
      ...MemberTosave,
      id: MemberTosave.id??(Math.ceil(Math.random() * 1000).toString()),//.ceil ta3mel round };
      createdDate: MemberTosave.createdDate??new Date().toISOString(),
    };
    this.tab = [NewMember, ...this.tab.filter(item => item.id != NewMember.id)];//filter ki yebda different al member jdid ythabet c nn yna7iih
    return new Promise(resolve => resolve()); //reject  erreur hya l catch
    //constructor() { }
  }



  DeleteMemberById(id: string): Promise<void> {
    this.httpClient.delete<void>('link').toPromise();
    this.tab = this.tab.filter(item => item.id != id);//bech ye5ouhom l kol illa eli kif kif la 
    return new Promise(resolve => resolve());
  }

 /* EditMemberById(id: string): Promise<void> {
    this.httpClient.put<void>('link').toPromise();
    this.tab = this.tab.filter(item => item.id != id);//bech ye5ouhom l kol illa eli kif kif la 
    return new Promise(resolve => resolve());
  }*/

  getMemberbyId(id: string): Promise<Member>{
//bech ye5ouhom l kol bech yrajali id eli hachty byh

return new Promise(resolve => resolve(

   this.tab.filter(item => item.id == id) [0]??null //ken 9aha behc yhotha fil icon loula mtaa tab o ken ma9itouch rajli null
));
  // return this.httpClient.get<Member>('link').toPromise();


  }
  
  count:number= 0;
  count2:number=0;
  teacherStudent:number[]=[];
  getTeacherStudent():Observable<number[]>{
    this.teacherStudent=[]
    for(let i=0; i<this.tab.length;i++){
      if(this.tab[i].type=="teacher")
      this.count++;
    }
    console.log(this.count);
    this.teacherStudent.push(this.count);
    this.count2 = this.tab.length=this.count;
    this.teacherStudent.push(this.count2);
    return new Observable(observer=>observer.next(this.teacherStudent));
  }
}