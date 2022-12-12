const without = () => {
     while (true) {
        console.log('a');
     }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return "it's a string";
    }
    if(Array.isArray(input)) {
        return "It's an array"
    }

    return fail('no match')
};
