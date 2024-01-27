import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationsList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.scss"],
  imports: [CommonModule, HousingLocationComponent],
})
export class HomeComponent {
  housingLocationsList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationsList = this.housingService.getAllHousingLocations();
  }
}
