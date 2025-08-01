import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  // Two-way Data Binding: Input property to receive search text from parent
  @Input() searchText: string = '';
  
  // Two-way Data Binding: Output event to emit search text changes to parent
  @Output() searchTextChange = new EventEmitter<string>();
  
  // Input property to receive visible books count from parent
  @Input() visibleBooksCount: number = 0;

  // Method to handle search input changes - demonstrates two-way binding
  onSearchChange(value: string): void {
    this.searchText = value;
    this.searchTextChange.emit(value); // Emit the change to parent component
  }

  // Method to clear search - demonstrates two-way binding
  clearSearch(): void {
    this.searchText = '';
    this.searchTextChange.emit(''); // Emit empty string to parent
  }
}
