function makeBuffer(){
    var bufferArray = [];

    function createArray() {
    return bufferArray; 
    }

    createArray.add = function(value){
        bufferArray.push(value);
    }
    createArray.print = function(){
        return bufferArray.join(" ");
    }
    createArray.clean = function(){
        bufferArray.splice(0);
    }

    return createArray;

}
var buffer = makeBuffer();

buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");
console.log(buffer());
console.log(buffer.print());

buffer.clean();
console.log("after cleaning ");

buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log(buffer.print());

buffer.clean();

buffer.add("Тест");
buffer.add("тебе не з'їсть");
alert(buffer.print());

buffer.clean();

alert(buffer.print());