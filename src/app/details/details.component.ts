import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `<h1>
    Details works!

    {{ housingLocationId }}
  </h1>`,
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
  }
}
