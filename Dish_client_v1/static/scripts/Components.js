export class GenericComponent{
    constructor(id, message = 'No Message', classType = 'component'){
        this._id = id
        this._message = message
        this.classType = classType
    }

    get message(){
        return this._message
    }

    set message(newMessage){
        this._message = newMessage
    }

    generateComponent(location, textClass){
        var newComponent = document.createElement("div")
        const parentElement = document.getElementById(location)

        var text =  document.createElement("div")
        text.className = textClass

        newComponent.id = this._id
        newComponent.className = this.classType
        text.textContent = this._message
        
        var lim = 50;

        if (text.textContent.length > lim){
            //newComponent.textContent = newComponent.textContent.substring(0, lim) + '...'
            newComponent.style.height = '100px'
            
         }

         if (text.textContent.length > 300){
            newComponent.style.height = '200px'
        }

        if (parentElement){        
            parentElement.appendChild(newComponent)
            newComponent.appendChild(text)
        } else {
            console.error(`Element with ID '${location}' not found`)
        }
     }
}