function brainfuck(program) {
    let tape       = Array(100).fill(0);
    let ptr        = 0;
    let isLooping  = false;
    let loopStack  = [];
    let innerLoops = 0;

    document.getElementById("output").innerHTML = "";
    
    console.log("---START---\n\n");
    document.getElementById("output").innerHTML += "---START---\n";
    for( i = 0; i < program.length; i++ ) {
    const char = program[i];
    
        if(isLooping) {
        if(char === "[") innerLoops++;
            if(char === "]") {
            if(innerLoops === 0) isLooping = false;
            else innerLoops--;
            }
        continue;
        }
    
        switch(char){
        case '+':
            tape[ptr]++;
            break;
        case '-':
            tape[ptr]--;
            break;
        case ',':
            tape[ptr] = prompt()[0].charCodeAt()
            break;
        case '.':
            console.log(String.fromCharCode(tape[ptr]));
            document.getElementById("output").innerHTML += String.fromCharCode(tape[ptr]);
            break;
        case '>':
            ptr++;
            tape[ptr] = tape[ptr] || 0;
            break;
        case '<':
            ptr--;
            tape[ptr] = tape[ptr] || 0;
            break;
        case '[':
            tape[ptr] === 0 
            ? isLooping = true
            : loopStack.push(i);
            break;
        case ']':
            tape[ptr] !== 0
            ? i = loopStack[loopStack.length-1]
            : loopStack.pop();
            break;
        default:
            break;
        }
    }
    
    document.getElementById("output").innerHTML += "\n---END---";
    console.log("\n---END---");
}
