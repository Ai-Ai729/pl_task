// test array
const inputData = [
    { id: 1, name: "sname1text", code: "025" },
    { id: null, name: "sname2", code: "code2" },
    { id: 2, name: "sname2", code: "025" },
    { id: 3, name: "sname3", code: "code3" },
    { id: "", name: "sname4", code: "code4" },
    { id: undefined, name: "sname5", code: "025" },
    { id: 4, name: "sname1textyru", code: "025" },
    { id: null, name: "sname1textyru", code: "025" },
    { id: "", name: "sname1textyru", code: "025" },
    { id: undefined, name: "sname1textyru", code: "025" },
    { id: 5, name: "sname1textyru", code: "025s" },
    { id: 6, name: "sname1textyru", code: "d025" },
    { id: 7, name: "sname1textyru", code: "d025d" },
];

function filterList(source) {
    return source
        .filter(({
            id,
            code,
            name,
        }) =>
            !(id === null || id === undefined || id?.length === 0)
            && code === "025"
            && name.includes("text")
        );
}

function print(data,text) {
    console.log(text, data);
}


// piece of the code that receive an array of objects
export function pieceOfTheCode(input) {
    
    print(input, 'Initial data:')

    // filter
    const filtered = filterList(input);

    // print array to console
    print(filtered, 'Filtered data:');

    // return
    return filtered;
}

pieceOfTheCode(inputData);
