// NICO => ['N','I','C','O'] => string => Array<string>
// ['N','I','C','O'] => NICO => Array<string> => string

// Overload functions or methods allows you to deal with the different return types
// or functionalities that a function can do.

function parseStr (input: string | Array<string>): string | Array<string> {
    if (Array.isArray(input)) {
        return input.join(''); // string
    } else {
        return input.split('');
    }
}


// Here comes the problem:

const rta = parseStr('Nico');

// TS does not know if the returning value is a str or an array
// because the function parseStr returns two types of data types.
if (Array.isArray(rta)) {
    rta.reverse();
}
