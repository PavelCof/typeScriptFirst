//простые типы
const str: string ="hello"
const b:boolean = true
const i:number = 1
const float:number = 1


//массивы

const numberArray:number[] = [1,2,3,4,5]

const numberArray2:Array<number> = [1,2,3,4,5]

const words:Array<string> = ["Привет", "Hello"]

const wordsAndNums:[string,number] = ["Привет", 123]


// переопределение типа данных

//Any - любой тип данных

let any: any ="hello"
any = 1
any = []


//указание типа в функциях
function names(name:string) {
    console.log(name);
    
}
names("Anya")


// тип never
function trowError(params:string):never {
    throw new Error("Ошибка");
    
}


// создание типов

type Login = string

const login : Login = "admin"
const login2 : Login = "admin"


type ID = string | number

const id1 : ID = "admin"
const id2 : ID = 1


//null и undefind


type HZ = string | null | undefined

const id3 : HZ = "admin"