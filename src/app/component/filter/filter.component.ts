import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  dropdownOpen = false;

  items = [{ status: 'paid' }, { status: 'pending' }, { status: 'draft' }];

  statuses = { paid: false, pending: false, draft: false };

  filters = [
    { id: '1', title: 'Paid', value: 'paid', selected: false },
    { id: '2', title: 'Pending', value: 'pending', selected: false },
    { id: '3', title: 'Draft', value: 'draft', selected: false },
  ];

  selectedStatus() {
    const selectedFilters = [];
    if (this.statuses.paid) {
      selectedFilters.push('paid');
    }
    if (this.statuses.pending) {
      selectedFilters.push('pending');
    }
    if (this.statuses.draft) {
      selectedFilters.push('draft');
    }
    return selectedFilters;
  }

  applyFilters() {
    // this.store.dispatch(
    //   invoiceActions.filterInvoices({
    //     statuses: this.selectedStatus(),
    //   })
    // );
  }
  ngOnInit(): void {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
