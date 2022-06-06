const Stack = require("./Stack");

const stack = new Stack();
const text = "Hello";

for (let i = 0; i < text.length; i++) {
  //   stack.push(text[i]);

  // ca also be written as

  stack.push(text.charAt(i));
}
console.log(stack);

let reverseText = "";
while (!stack.isEmpty()) {
  reverseText += stack.pop();
}
console.log(reverseText);
