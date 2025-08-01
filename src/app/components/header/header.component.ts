import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Component properties - these can be used in the template
  storeName: string = 'eBookStore';
  cartCount: number = 0;
  
  // We could add methods here later for handling navigation clicks
}
