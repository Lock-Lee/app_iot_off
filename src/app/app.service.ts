import { Injectable } from "@angular/core";

const _window: any = window;

var microgear = _window.Microgear.create({
  key: "xv4HY6mKMhDkP2a",
  secret: "Dfgf23P2QIqPy7M4tGUVuf6a7",
  alias: "Ionic" /*  optional  */,
});

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor() {
    microgear.connect("NUTTACIT");

    microgear.on("connected", () => {
      microgear.subscribe("/esp/+");
    });
  }

  message = (value) => {
    microgear.on("message", (topic, msg) => {
      value({ topic: topic, message: msg });

      console.log(msg);
      
    });
  };
 

  publish = (topic, message) => {
    microgear.publish("/ionic" + topic, message);
  };
}
