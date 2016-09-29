var morse = require('morse-node').create("ITU");

var input = process.argv[2];
var encoded = morse.encode(input);

console.log("Encoding string:");
console.log(input, ":", encoded);

var sleep = require('sleep').sleep;
var now = require("performance-now");

var load_cpu = function(time)
{
    var start = now();
    while(true)
    {
        var end = now();
        if(end - start > 1000 * time)
            break;
    }
}

sleep(5);

for (var x = 0; x < encoded.length; x++)
{
    var c = encoded.charAt(x);
    console.log("Outputting:", c);

    switch(c)
    {
        case '.':
            load_cpu(1);
            break;
        case '-':
            load_cpu(3);
            break;
        case ' ':
            sleep(3);
            break;
        case '/':
            sleep(5);
            break;
    }
    sleep(1);
}
