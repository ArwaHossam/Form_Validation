import { Component } from "@angular/core";
import { User } from "./user";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  topics = ["Angular", "React", "Vue"];
  topicHasError = true;
  submitted = false;
  errorMsg;

  constructor(private _enrollmentService: EnrollmentService) {}
  userModel = new User(
    "",
    "arwa@test.com",
    5556665566,
    "default",
    "morning",
    true
  );

  validateTopic(value) {
    if (value == "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log("Success!", data),
      (error) => (this.errorMsg = error.statusText)
    );
  }
}
