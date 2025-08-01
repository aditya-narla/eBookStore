import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Component properties for data binding
  sectionTitle = 'Bestselling Books';
  
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
}
