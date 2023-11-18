import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Article } from './../../modals/Article';
import { ArticleService } from './../../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  constructor(private AS: ArticleService) { }
  displayedColumns: string[] = ["id1", "titre", "type", "dateApparition", "sourcePdf", "auteur", "link", "actions"];
  dataSource: Article[] = this.AS.tabArticles;

}
