
interface Person {
    readonly id : number;
    name: string;
    age?: number;
    [propName: string]: string | number | boolean;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    age: 25,
}

