import { Evt } from "./Evt";
import { Pub } from "./Pub";
import { Tool } from "./Tool";

export interface Member 
{
    id:string,
    cin:string,
    name:string,
    type:string,
    createdDate:string,
    
    tabEvents:Evt[],
    tabTools:Tool[],
    tabPubs :Pub[],
}