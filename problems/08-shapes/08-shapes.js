/* Author: Cecilia Pichardo
 * Date: June 19, 2020
 * Shapes
 *    - shape is a String and is either "Square", "Triangle", "Diamond"
 *    - height is a Number and is the height of the shape. Assume the number is odd.
 *    - character is a String that represents the contents of the shape. Assume this String contains just one character.
 */

//Function checks for each shape in the switch statement
  //then prints that shape according to the given height and character
function printShape(shape, height, character) {
  let str = "";

  switch (shape) {
    //Square Shape
    case "Square":
      for(let i = 0; i < height; i++) {
        for(let j = 0; j < height; j++) {
          str = str.concat(character)
        }
        str = str.concat("\n")
      }
      break;

    //Triangle Shape
    case "Triangle":
      for (let i = 0; i <= height; i++) {
        for (let j = 0; j < i; j++) {
          str = str.concat(character);
        }
        str = str.concat("\n")
      }
      break;

    //Diamond Shape
    case "Diamond":
      for(let i = 1; i < height; i++ ){
        for(let j = 1; j < height; j++){
            if(i <= height / 2 
              && j >= (height / 2) - (i - 1) 
              && j <= (height / 2) + (i - 1) ){
                str = str.concat(character);
            }
            else if(i >= height / 2
              && j > ((height / 2) -  i) * (-1)
              && j < (height - ((height / 2) -  i) * (-1))){
                str = str.concat(character);
            }
            else {
                str = str.concat(" ");
            }
        }
        str = str.concat("\n");
      }
      break;

    //Default invalid shape  
    default:
      console.log('Invalid shape');
      break;
  }
  console.log(str);
}

//Output to console
printShape("Triangle", 5, "^");
printShape("Square", 5, "+");
printShape("Diamond", 7, "~");
printShape("Rectangle", 9, "%") //Invalid