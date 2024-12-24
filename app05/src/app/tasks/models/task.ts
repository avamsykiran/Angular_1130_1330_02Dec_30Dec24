export interface Task {
    id:number;
    job:string,
    status:"DONE"|"PENDING";
    owner:number;
}
