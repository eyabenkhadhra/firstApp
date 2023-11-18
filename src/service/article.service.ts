import { Member } from './../modals/Member';
import { MemberService } from 'src/service/member.service';
import { Article } from './../modals/Article';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../app/app.config';



import { HttpClient } from '@angular/common/http';
import { Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private MS: MemberService, ) { }
  count !: number;
  public tabArticles: Article[] = GLOBAL.db.articles;
  member!: Member;
  //fonction affect dans 
  affect(currentId_article: string, selectedValue: string): Promise<void> {
    //redcuper member a partir son id
    //il faut stocker dans un variable global bech baad najem n3aytlo l barra"member"
    this.MS.getMemberbyId(selectedValue).then((m) => { this.member = m });
    //recuper l'article a travers son id
    this.getArticleById(currentId_article).then((a) => { a.auteur = this.member.name })
    //article.author=membre.name
    return (new Promise(resolve => resolve()));

  }
  getArticleById(id: string): Promise<Article> {
    //bech ye5ouhom l kol bech yrajali id eli hachty byh

    return new Promise(resolve => resolve(

      this.tabArticles.filter(item => item.id == id)[0] ?? null //ken 9aha behc yhotha fil icon loula mtaa tab o ken ma9itouch rajli null
    ));
    // return this.httpClient.get<Member>('link').toPromise();


  }
  getNbArticlesByMember(): Observable<number[]>{
    var tabMemberByArt :number[]=[];
    //var count!: number;// ki tabda lbara ma8ir var
    for(let i=0; i<this.MS.tab.length; i++){
      this.count=0;
      for(let j=0; j<this.tabArticles.length; j++){
        if(this.tabArticles[j].auteur==this.MS.tab[i].name){
          this.count++
        }}
        tabMemberByArt.push(this.count)}
    return new Observable(observer=>observer.next(tabMemberByArt))
    

  }
}
