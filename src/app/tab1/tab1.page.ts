import { Component } from "@angular/core";
import { AppService } from "../app.service";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
status ='OFF'
  public useDefault = false;
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
  ];
  public barChartType = "line";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
  ];

  public phSetting = { lower: 0, upper: 6 };
  public humiSetting = { lower: 0, upper: 100 };
  public tempShow = "0";
  public humiShow = "0";

  constructor(public service: AppService) {
    this.service.message((val) => {
      if (val.topic == "/IONICAPP/esp/th") {
        this.tempShow = `${val.message}`.split(",")[0];
        this.humiShow = `${val.message}`.split(",")[1];
      }
    });
   
  }
  
  onChange(event) {
    console.log(event);
   if(event.checked == true){
     this.status ='ON'
   }
   else{
     this.status ='OFF'
   }
  } 
  phChange = () => {
    this.service.publish(
      "/ph",
      `${this.phSetting.lower},${this.phSetting.upper}`
    );
  };

  humiChange = () => {
    this.service.publish(
      "/humi",
      `${this.humiSetting.lower},${this.humiSetting.upper}`
    );
  };
}
