import { Component, OnInit } from "@angular/core";
import { SwitchService } from "../sharedService/switch.service";
@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
})
export class Child2Component implements OnInit {
  receivedString = "";

  constructor(private Child2SwitchService: SwitchService) {
    Child2SwitchService.statusEvent.subscribe(res => {
      if(res === "switch-on"){
        this.receivedString = "open";
      }else{
        this.receivedString = "close";
      }
    });
  }

  ngOnInit() {
    this.receivedString = this.Child2SwitchService.status;
  }
}
