import { Component } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, BadgeComponent, HeaderComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

  data: any;

  constructor(private dataService: DataServiceService) {
    this.dataService.getJSON().subscribe(data => {
      this.data = data;
    });
  }
}
