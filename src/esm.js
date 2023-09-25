export const log = () => {
    console.log('log')
}

export class Person {
    constructor (name){
        this.name = name
    }
    say (){
        console.log('say this')
    }
}