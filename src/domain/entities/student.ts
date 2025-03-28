import { randomUUID } from "crypto"

class Student {
    public name: string
    public id: string

    constructor(name: string, id: string) {
        this.name = name
        this.id = id ?? randomUUID()        
    }
}