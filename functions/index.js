// Function Exercise

function makeLine(size) {

    line = '';
    for ( let i = 0; i < size; i++) {
        line += '#';
    };
    return line;
};

function makeSquare(size) {
    let square = '';
    
    makeRectangle(size, size);
    square += rectangle;    
    return square;
}


function makeRectangle(width, height) {
    rectangle = '';
    for (let k = 0; k < height; k++) {
        rectangle += makeLine(width);
        if (k < height-1) {
            rectangle += "\n"
        }
    };
    return rectangle
};


function makeDownwardStairs(height) {
    downwardStairs = "";
    for (let l = 0; l < height; l++) {
        downwardStairs += makeLine(l+1);
        if (l < height-1) {
            downwardStairs += "\n"
        };
    };
    return downwardStairs;
}


function makeDownwardStairs(height) {
    let downwardStairs = "";
    for (let l = 0; l < height; l++) {
        downwardStairs += makeLine(l+1);
        if (l < height-1) {
            downwardStairs += "\n"
        };
    };
    return downwardStairs;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    let space = "";
    for (let m=0; m < numSpaces; m++) {
        space += " "
    }
    spaceLine += space + makeLine(numChars) + space;
    return spaceLine;
};

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = "";
    for (let n = 0; n < height; n++) {
        isoscelesTriangle += (makeSpaceLine(height - n - 1, 2*n + 1))
        if (n < height-1){
            isoscelesTriangle += "\n"
        };
    };
    return isoscelesTriangle;
};

function makeDiamond(height) {
    
    let diamond = makeIsoscelesTriangle(height)
    diamond += "\n"+diamond.split("").reverse().join("");;
    return diamond;
}


console.log(makeLine(5));

console.log("\n"+"---------------------------"+"\n");

console.log(makeSquare(5));

console.log("\n"+"---------------------------"+"\n");

console.log(makeRectangle(3, 5));

console.log("\n"+"---------------------------"+"\n");

console.log(makeDownwardStairs(7));

console.log("\n"+"---------------------------"+"\n");

console.log(makeSpaceLine(7,3));

console.log("\n"+"---------------------------"+"\n");

console.log(makeIsoscelesTriangle(7));

console.log("\n"+"---------------------------"+"\n");

console.log(makeDiamond(7));
