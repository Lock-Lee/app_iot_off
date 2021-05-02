import { Component } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(public service: AppService) {}

  timeSet = (path, data) => {
    this.service.publish(`/${path}`, `${data}`);
  };
}
