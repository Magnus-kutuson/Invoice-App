import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
