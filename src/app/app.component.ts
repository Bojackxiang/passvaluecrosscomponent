import { Component, OnInit } from "@angular/core";
import { SwitchService } from "../app/sharedService/switch.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private switchService: SwitchService) {
    this.status = this.switchService.status;
  }
  title = "app";
  status = "";
  ngOnInit() {
  }

  
}
