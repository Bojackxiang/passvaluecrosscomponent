import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class SwitchService {
  constructor() {}

  statusEvent = new EventEmitter<string>();

  status = "off";
}
