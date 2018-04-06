import { Component, OnInit } from "@angular/core";
import { SwitchService } from "../sharedService/switch.service";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  constructor(private switchService: SwitchService) {}

  ngOnInit() {}

  status: string = "switch-on";
  child1ButtonClicked() {
    if (this.status === "switch-on") {
      this.status = "switch-off";
      this.switchService.statusEvent.emit("siwtch-off");
    } else {
      this.status = "switch-on";
      this.switchService.statusEvent.emit("switch-on");
    }
  }
}
