// NICO => ['N','I','C','O'] => string => Array<string>
// ['N','I','C','O'] => NICO => Array<string> => string

// Overload functions or methods allows you to deal with the different return types
// or functionalities that a function can do.

// THE SOLUTION:
export function parseStr (input: string): Array<string>;
export function parseStr (input: Array<string>): string;

//

export function parseStr (input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(''); // string
    } else if (typeof input === 'string') {
        return input.split('');
    }
}


// Here comes the problem:
// -- SOLUTION ABOVE, now method  or function is overloaded, so TS
// -- now knows what type to expect.
const rta = parseStr('Nico');

// TS does not know if the returning value is a str or an array
// because the function parseStr returns two types of data types.

// if (Array.isArray(rta)) {
//     rta.reverse();
// }
