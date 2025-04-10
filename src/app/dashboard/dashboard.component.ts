import { Component } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { PubService } from 'src/services/pub.service';
import { ToolService } from 'src/services/tool.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Nb_members: number = 0;
  Nb_events: number = 0;
  Nb_articles: number = 0;
  Nb_tools: number = 0;

  // Pie chart data
  Nb_students: number = 0;
  Nb_teachers: number = 0;
  chartDataPie: ChartDataset[] = [
    {
      data: []
    }
  ];
  chartLabelsPie: string[] = ['Teachers', 'Students'];
  chartOptionsPie: ChartOptions = {};

  //Doughnut char data

  Nb_Sfax: number = 0;
  Nb_Tunis: number = 0;
  chartDataDoughnut: ChartDataset[] = [
    {
      data: []
    }
  ];
  
  chartLabelsDoughnut: string[] = ['sfax', 'tunis'];
  chartOptionsDoughnut: ChartOptions = {};
  //Line chart data
  tab_events: number[] = [];
  tab_name: string[] = [];
  chartDataLine: ChartDataset[] = [
    {
      data: this.tab_events,
    }
  ];
  chartLabelsLine: string[] = [];
  chartOptionsLine: ChartOptions = {};
 
  /////////

  constructor(private MS: MemberService, private ES: EventService, private PS: PubService, private TS: ToolService) {

    this.MS.GetAllMembers().subscribe((data: any) => {
      //pour  le pie chart
      this.Nb_members = data.length;
      for (let i = 0; i < this.Nb_members; i++) {
        if (data[i].type == 'teacher') this.Nb_teachers++;
        else this.Nb_students++;
      }
      this.chartDataPie[0].data = [this.Nb_teachers, this.Nb_students];

      // pour le line chart
      for (let i = 0; i < this.Nb_members; i++) {
        this.tab_name[i] = data[i].name;
        // this.chartLabelsLine.push(data[i].name); //yzid kol mara element
        console.log("data[i].name", data[i].name);
        this.tab_events[i]= data[i].tabEvents.length;
      }
      this.chartLabelsLine=this.tab_name;
      console.log("chart data line", this.chartLabelsLine);


    }
    );
    this.ES.GetAllEvents().subscribe((data: any) => {
      this.Nb_events = data.length;
      for (let i = 0; i < this.Nb_events; i++) {
        if (data[i].lieu == 'sfax') this.Nb_Sfax++;
        else this.Nb_Tunis++;
      }
      this.chartDataDoughnut[0].data = [this.Nb_Sfax, this.Nb_Tunis];
    }
    );

    this.PS.GetAllPub().subscribe((data: any) => {
      this.Nb_articles = data.length;
    }
    );

    this.TS.GetAllTools().subscribe((data: any) => {
      this.Nb_tools = data.length;
    }
    );
  }
}
