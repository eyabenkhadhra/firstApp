import { ArticleService } from './../../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from './../../modals/Member';
import { Component } from '@angular/core';
import { MemberService } from 'src/service/member.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent {
 

  constructor(private MS: MemberService, private AS: ArticleService, private router: Router, private activatedRoute: ActivatedRoute){}
  selectedValue!: string;//initialiser a null
  currentId_article!: string;

  tab:Member[]=this.MS.tab;

  affect(selectedValue:string):void{

    //recuperer id artcile a partir de url snapchot
    this.currentId_article= this.activatedRoute.snapshot.params['id'];
    this.AS.affect(this.currentId_article,selectedValue).then(()=>{
      this.router.navigate(['/articles']);
    })

    }
    
  

}
