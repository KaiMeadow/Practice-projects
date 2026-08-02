// 1.METHOD

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }

//   *getSides() {
//     yield this.height;
//     yield this.width;
//     yield this.height;
//     yield this.width;
//   }
// }

// const square = new Rectangle(10, 10)

// console.log(square.area);

// 2. STATIC

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// p1.displayName;
// p1.distance;
// p2.displayName;
// p2.distance;

// console.log(Point.displayName);
// console.log(Point.distance(p1, p2));

// 3. PRIVATE

// class Rectangle {
//   #height = 0;
//   #width;

//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//   }
// }

// 4. Inheritance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} make a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   speak() {
//     console.log(`${this.name} barks`);
//   }
  
// }

// const d = new Dog("Mitzie");
// d.speak();