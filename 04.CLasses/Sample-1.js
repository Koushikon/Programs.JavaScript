
/***
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

// Class declaration with constructor
class Rectangle_1 {
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}


const r1 = new Rectangle_1(200, 100);
console.log(`Height ${r1.height} and Width ${r1.width}`);

// Expression; the class is anonymous but assigned to a variable
const Rectangle_2 = class {
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}

Rectangle_2.height = 500;
Rectangle_2.width = 300;
console.log(`Height ${Rectangle_2.height} and Width ${Rectangle_2.width}`);


// Expression; the class has its own name
const r3 = class Rectangle_3 {
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}

r3.height = 400;
r3.width = 400;
console.log(`Height ${r3.height} and Width ${r3.width}`);