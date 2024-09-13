import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  facilities: { name: string }[] = [];
  availabilities: { facility: { name: string }, startTime: string, endTime: string }[] = [];
  
  newFacilityName = '';
  selectedFacility: any = null;
  startTime: string = '';
  endTime: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.facilities = [
      { name: 'Conference Room' },
      { name: 'Meeting Room' }
    ];
    this.availabilities = [];
  }

  addFacility() {
    if (this.newFacilityName.trim()) {
      this.facilities.push({ name: this.newFacilityName.trim() });
      this.newFacilityName = '';
    }
  }

  removeFacility(facility: any) {
    this.facilities = this.facilities.filter(f => f !== facility);
  }

  setAvailability() {
    if (this.selectedFacility && this.startTime && this.endTime) {
      this.availabilities.push({
        facility: this.selectedFacility,
        startTime: this.startTime,
        endTime: this.endTime
      });
      this.startTime = '';
      this.endTime = '';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
