
export class Section{
    id : number
    name : string
    modules : Module[] = []

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

}

export class Module{
    id : number
    name : string
    options : Option[] = []
    isMultiSelect : boolean = false
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

}

export class Option{
    id : number
    name : string
    selected: boolean = false
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

}