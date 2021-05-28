import { Component, OnInit } from "@angular/core";
import { items } from "../../arrays/menuArray";

@Component({
  selector: "app-menus",
  templateUrl: "./menus.component.html",
  styleUrls: ["./menus.component.sass"],
})
export class MenusComponent implements OnInit {
  items = items;
  constructor() {}

  ngOnInit() {}
}
