import { Component } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
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
