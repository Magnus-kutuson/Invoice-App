import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/header/header.component';
import { InvoiceComponent } from './component/invoice/invoice.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, HeaderComponent, InvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Invoice-App';
}
