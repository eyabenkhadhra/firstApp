
import {MatCardModule} from '@angular/material/card';
import { Component, OnInit, Inject } from '@angular/core';
import { MemberService } from 'src/service/member.service';
import { EventService } from 'src/service/event.service';
import { ArticleService } from 'src/service/article.service';

import { ChartDataset, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  nb_Members: number=0;
  nb_Event: number=0;
  nb_Article: number=0;
  nb_Tools: number=0;
  MemberByArt!: number[];
  constructor (private MS:MemberService,private ES:EventService,  private AS:ArticleService){}
  ngOnInit(): void {
    this.nb_Members=this.MS.tab.length;
    this.nb_Event=this.ES.tab.length;
    this.nb_Article=this.AS.tabArticles.length;
  }
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: this.getNumber()
      
    }
  ];
 
  chartLabels: string[] = [ '2016 Revenue', '2017 Revenue', '2018 Revenue', '2019 Revenue', '2020 Revenue', '2021 Revenue' ];
  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: false,

    // ⤵️ Remove the grids
    scales: {
      xAxis: {
        display: false,
        grid: {
          //drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: false
      }
    },

    // ⤵️ Remove the main legend
    plugins: {
      legend: {
        display: true
      }
    }

    

  }
  chartDataPie: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: this.getTeacherStudent()
      
    }
  ];
  chartLabelsPie: string[] = ["teachers", "students"];
  
  TeacherStudent:number[]=[];
  
  getTeacherStudent(): number[]{
    this.MS.getTeacherStudent().subscribe((x)=>{
      this.TeacherStudent=x;
    })
    console.log("ST", this.TeacherStudent);
    return this.TeacherStudent;
  }
  
  getNumber(): number[]{
    this.MemberByArt=[];
    this.AS.getNbArticlesByMember().subscribe((x)=>
    this.MemberByArt=x)
    return this.MemberByArt
  }
}
