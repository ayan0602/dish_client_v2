import { Fetcher } from "./Fetcher.js"
import { GenericComponent } from "./Components.js";
import { ReviewComponent, MiniComponent } from "./CustomComponents.js";

export class Update_Aplication extends Fetcher{
    constructor(key, data=null){
        super(key, data)
        this.ClientUpdate()
    }
    // issue: each call the count resets to 0 for each unique updater instantiation
    ParseUpdate(){

        this.data.forEach(item=>{
            let uniqueID = Math.floor(Math.random() * 99999)
            let comps = new ReviewComponent(uniqueID)

            comps.message = item.message
            comps.id = comps.classType + ' ' + uniqueID 
            comps.userList = item.users
            comps.actions = item.action
            comps.sentiment = item.sentiment

            comps.generateComplexComponent('content')
        })
    }
}

 export class Update_MiniComps extends Fetcher{
    constructor(key, data=null){
        super(key, data)
        this.ClientUpdate()
    }
    ParseUpdate(){
        let uniqueID = 0;

        this.data.forEach(item=>{
            let comps = new MiniComponent(uniqueID, '', '', 'mini-component')
            comps.message = item.message
            comps.subMessage = item.number
            comps._id = uniqueID            
            uniqueID++;
            comps.generateMiniComponent('content-top')
        })
    }
}