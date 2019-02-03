import { Component, OnInit } from "@angular/core";
import { EventData } from 'tns-core-modules/data/observable';
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    counter:number = 0;

    constructor() {
    }

    onTap(args:EventData) {
        let button = <Button>args.object;
        this.counter++;
        alert("クリック : " + this.counter + " 回");
    }
    

    ngOnInit(): void {
        console.log("Button UIです！");
    }
}
