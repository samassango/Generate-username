import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  username: string;
  generateUsername(firstname: string, lastname: string) {
    console.log(lastname, firstname);
    this.username =
      firstname.toLowerCase() +
      "_" +
      lastname.toLowerCase() +
      "_" +
      this.getRandomRange(1, 9);
  }
  getRandomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
