/*function Book(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

Book.prototype.getAvailability = function () {
    if (this.numCopies === 0) {
        return "Out of stock";
    } else if (this.numCopies < 10) {
        return "Low stock";
    }
    return "In stock";
}

Book.prototype.sell = function (numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
}

Book.prototype.restock= function (numCopiesAdded = 5) {
    this.numCopies += numCopiesAdded;
}*/


class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesAdded = 5) {
        this.numCopies += numCopiesAdded;
    }

    // set stock(numCopiesAdded) {
    //     this.numCopies += numCopiesAdded;
    // }

    get availability() {
        return this.getAvailability();
    }
}


const TheDaVinciCode = new Book("The Da Vinci Code", "Dan Brown", "978-0-553-37681-3", 10);
// const  TheLostSymbol = new Book("The Lost Symbol", "Dan Brown", "978-0-553-37681-3", 10);


console.log(TheDaVinciCode.availability)
TheDaVinciCode.sell(10);
console.log(TheDaVinciCode.getAvailability());
TheDaVinciCode.restock(5);
// TheDaVinciCode.stock = 5;
console.log(TheDaVinciCode.getAvailability());




