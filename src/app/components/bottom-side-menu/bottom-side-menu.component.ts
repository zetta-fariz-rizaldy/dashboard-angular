import { Component, OnInit } from "@angular/core";
import { items } from "../../arrays/bottomSideMenuArray";

@Component({
  selector: "app-bottom-side-menu",
  templateUrl: "./bottom-side-menu.component.html",
  styleUrls: ["./bottom-side-menu.component.sass"],
})
export class BottomSideMenuComponent implements OnInit {
  items = items;
  constructor() {}

  ngOnInit() {}
}
