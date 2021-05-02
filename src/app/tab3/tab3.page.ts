import { Component } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  constructor(public service: AppService) {}

  timeSet = (path, data) => {
    this.service.publish(`/${path}`, `${data}`);
  };
}
