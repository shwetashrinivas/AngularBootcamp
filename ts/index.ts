//syntax: const :typeAnnotation = value;
const myName: string = 'Shweta' ;
const ten: number = -10000;
const nothingHere: null =null;
const noDefinition: undefined = undefined;
const anything: any = [];
const something: any = {};

// Production level code:

let x = 'smita';

const sentence = ' This is a sentence';
//sentence.includes('is');

const add = (a: number,b: number) :number => {
    return a + b;
}

const joinStrings = (a : string , b:string) :string =>{
    return a + b;
}

function sum (a:number , b:number) :number {
    return a + b;
}

const concat =  function (a : string , b:string) :string {
    return a + b;
}

const post ={
    title: 'Latest News',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: {title: string, daysOld: number, published:boolean}) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)` ;
};
