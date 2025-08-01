import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Component properties for data binding
  sectionTitle = 'Bestselling Books';
  
  // Two-way Data Binding property for search - will be bound to search component
  searchText = ''; // This will be bound to the search component using [(searchText)]
  
  // First book data
  book1Title = 'The Great Gatsby';
  book1Author = 'F. Scott Fitzgerald';
  book1Price = 12.99;
  book1Image = 'https://via.placeholder.com/200x300?text=The+Great+Gatsby';
  book1Available = true;
  book1Stock = 5; // Available stock
  book1Quantity = 0; // Current quantity in cart
  book1Description = 'A timeless American classic about the Jazz Age and the American Dream.';
  
  // Second book data
  book2Title = 'To Kill a Mockingbird';
  book2Author = 'Harper Lee';
  book2Price = 14.99;
  book2Image = 'https://via.placeholder.com/200x300?text=To+Kill+a+Mockingbird';
  book2Available = true;
  book2Stock = 3; // Available stock
  book2Quantity = 0; // Current quantity in cart
  book2Description = 'A gripping tale of racial injustice and childhood innocence in the American South.';
  
  // Third book data
  book3Title = "Harry Potter and the Philosopher's Stone";
  book3Author = 'J.K. Rowling';
  book3Price = 16.99;
  book3Image = 'https://via.placeholder.com/200x300?text=Harry+Potter';
  book3Available = false; // This book is out of stock
  book3Stock = 0; // No stock available
  book3Quantity = 0; // Current quantity in cart
  book3Description = 'The magical beginning of Harry Potter\'s journey at Hogwarts School.';
  
  // Properties for demonstrating property binding
  isLoggedIn = false;
  buttonText = 'Add to Cart';

  // Event Binding Methods - these handle user interactions
  increaseBook1Quantity() {
    if (this.book1Quantity < this.book1Stock) {
      this.book1Quantity++;
    }
  }

  decreaseBook1Quantity() {
    if (this.book1Quantity > 0) {
      this.book1Quantity--;
    }
  }

  increaseBook2Quantity() {
    if (this.book2Quantity < this.book2Stock) {
      this.book2Quantity++;
    }
  }

  decreaseBook2Quantity() {
    if (this.book2Quantity > 0) {
      this.book2Quantity--;
    }
  }

  increaseBook3Quantity() {
    if (this.book3Quantity < this.book3Stock) {
      this.book3Quantity++;
    }
  }

  decreaseBook3Quantity() {
    if (this.book3Quantity > 0) {
      this.book3Quantity--;
    }
  }

  // Two-way Data Binding Methods for Search Functionality
  
  // Method to check if a book matches the search criteria - Title only
  bookMatchesSearch(title: string, author: string, description: string): boolean {
    if (!this.searchText || this.searchText.trim() === '') {
      return true; // Show all books when no search text
    }
    
    const searchLower = this.searchText.toLowerCase();
    return title.toLowerCase().includes(searchLower);
  }

  // Getter methods to determine which books should be displayed
  get showBook1(): boolean {
    return this.bookMatchesSearch(this.book1Title, this.book1Author, this.book1Description);
  }

  get showBook2(): boolean {
    return this.bookMatchesSearch(this.book2Title, this.book2Author, this.book2Description);
  }

  get showBook3(): boolean {
    return this.bookMatchesSearch(this.book3Title, this.book3Author, this.book3Description);
  }

  // Method to get the count of visible books
  get visibleBooksCount(): number {
    let count = 0;
    if (this.showBook1) count++;
    if (this.showBook2) count++;
    if (this.showBook3) count++;
    return count;
  }

  // Method to clear search - for use in no-results section
  clearSearch(): void {
    this.searchText = ''; // This will automatically update the search component
  }
}
