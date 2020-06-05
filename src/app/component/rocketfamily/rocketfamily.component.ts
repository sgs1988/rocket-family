import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rocketfamily',
  templateUrl: './rocketfamily.component.html',
  styleUrls: ['./rocketfamily.component.scss']
})
export class RocketfamilyComponent implements OnInit {

  private rocketfamilyList: any = [];

  constructor(public dataService: DataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.rocketFamily();
  }

  public rocketFamily() {
    const payload = { url: 'rocketfamily' };
    this.dataService.getService(payload).subscribe(
      data => {
        if (data && data.RocketFamilies) {
          const response: any = data.RocketFamilies;
          this.rocketfamilyList = [];
          response.map((obj: any) => {
            const listDetails: any = {
              id: obj.id,
              name: obj.name,
              rocketList: [],
              expand: false
            };
            this.rocketfamilyList.push(listDetails);
          });
        }
      },
      error => console.log('Could not load.')
    );
  }

  public rocketDetails(id: number, index: number) {
    if (this.rocketfamilyList[index].rocketList.length === 0 && this.rocketfamilyList[index].expand === false) {
      const payload = { url: 'rocket?familyID=' + id };
      this.dataService.getService(payload).subscribe(
        data => {
          if (data && data.rockets) {
            const response: any = data.rockets;
            response.map((obj: any) => {
              const listDetails: any = {
                id: obj.id,
                name: obj.name,
                launcheList: [],
                expand: false
              };
              this.rocketfamilyList[index].rocketList.push(listDetails);
            });
            this.rocketfamilyList[index].expand = true;
          }
        },
        error => console.log('Could not load.')
      );
    } else {
      this.rocketfamilyList[index].rocketList = [];
      this.rocketfamilyList[index].expand = false;
    }
  }

  public launcheDetails(id: number, familyIndex: number, rocketIndex: number) {
    if (this.rocketfamilyList[familyIndex].rocketList[rocketIndex].launcheList.length === 0 &&
      this.rocketfamilyList[familyIndex].rocketList[rocketIndex].expand === false) {
      const payload = { url: 'launch?rocketid=' + id };
      this.dataService.getService(payload).subscribe(
        data => {
          if (data && data.launches) {
            const response: any = data.launches;
            response.map((obj: any) => {
              const listDetails: any = {
                id: obj.id,
                name: obj.name
              };
              this.rocketfamilyList[familyIndex].rocketList[rocketIndex].launcheList.push(listDetails);
            });
            this.rocketfamilyList[familyIndex].rocketList[rocketIndex].expand = true;
          }
        },
        error => console.log('Could not load.')
      );
    } else {
      this.rocketfamilyList[familyIndex].rocketList[rocketIndex].launcheList = [];
      this.rocketfamilyList[familyIndex].rocketList[rocketIndex].expand = false;
    }
  }
}
