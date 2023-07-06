import { Component } from '@angular/core';
import { HarmonyapiService } from 'src/app/services/harmonyapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  constructor(private harmonyapiService: HarmonyapiService) {}

  apiData: any;

  ngOnInit(): void {
    const param = 'one14438psd5vrjes7qm97jrj3t0s5l4qff5j5cn4h';
    this.harmonyapiService.makeRPCJSONCall(param).subscribe(
      response => {
        // Handle the response
        this.apiData = response.result;
        console.log(this.apiData);
      },
      error => {
        // Handle errors
        console.error(error);
      }
    );
  }

  

}
