import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['/details', housingLocation.id]" class="listing-link">
      <section class="listing">
        <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}" />
        <h2 class="listing-heading">{{ housingLocation.name }}</h2>
        <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      </section>
    </a>
  `,
  styleUrls: ["./housing-location.component.scss"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
