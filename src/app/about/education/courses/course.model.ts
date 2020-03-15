export class Course{
    public name:string;
    public completed: boolean;
    public date?:string;

    constructor(name:string, completed: boolean, date?:string) {
        this.name = name;
        this.completed = completed;
        this.date = date;
    }
}