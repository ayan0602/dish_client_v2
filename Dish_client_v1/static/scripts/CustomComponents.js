import { GenericComponent } from "./Components.js"

export class MiniComponent extends GenericComponent{
    constructor(id, message = 'No Message', subMessage = 'Null', classType = 'component'){
        super(id, message, classType)
        this.subMessage = subMessage
    }

    generateMiniComponent(location){
        this.generateComponent(location, ' ')
        var sub = document.createElement("h5")
        const subParent = document.getElementById(this._id)
        sub.textContent = this.subMessage
        sub.className = "number"

        if (subParent){        
            subParent.appendChild(sub)
        } else {
            console.error(`Element with ID '${location}' not found`)
        }
    }
}

export class ReviewComponent extends GenericComponent{
    constructor(id, message = 'No Message', sentiment = '', userList=[], actions=[], classType = 'component'){
        super(id, message)
        this.userList = userList
        this.actions = actions
        this.classType = classType
        this.sentiment = sentiment
    }

    generateComplexComponent(location){
        this.generateComponent(location, 'container-text')
        const subParent = document.getElementById(this._id)


        //var userListElem = document.createElement("h3")
        //userListElem.textContent = this.userList
        //userListElem.className = "userlist"

        var sentimentElem = document.createElement("h3")
        sentimentElem.textContent = this.sentiment
        sentimentElem.className = 'sentiment-text'

        if (sentimentElem.textContent == 'Positive')
            sentimentElem.style.color = 'lightgreen'
        else
            sentimentElem.style.color = 'red'

        var splitUsers = this.userList.split(';')
        for (var i = 0; i < splitUsers.length; i++)
        {
            var img = document.createElement('img')
            img.style.width = '50px'
            img.style.height = '50px'
            img.style.float = 'left'
            img.src = '../static/media/UserPFP.png'
            subParent.insertBefore(img, subParent.firstChild)
        }
        
        var buttonContainer = document.createElement('div')
        buttonContainer.className = 'button-container'

        // only runs if the back end updater has an action list that isn't empty
        try{
            if (typeof this.actions != 'undefined' && this.actions.length !== 0){

                // define the events that button presses will initiate
                const events = [this.actionResolve, this.actionEscalate, this.actionDismiss]

                // seperate actions into their own seperate elements in a list
                var splitActions = this.actions.split(',')

                // iterate through each of the actions and create unique buttons
                for (var i = 0; i <= splitActions.length-1; i++){
                    // button creation
                    var actionListElem = document.createElement("button")
                    actionListElem.textContent = splitActions[i]
                    actionListElem.className = "actionList"

                    // bind the action to the button itself
                    actionListElem.addEventListener('click', events[i].bind(this));

                    // add button to component
                    if (subParent){        
                        buttonContainer.appendChild(actionListElem)
                    } else {
                        console.error(`Element with ID '${location}' not found`)
                    }
                }
                
            }
        }
        catch(e){
            console.log(e)
        } 

        if (subParent){        
            //subParent.insertBefore(userListElem, subParent.firstChild)
            //subParent.insertBefore(img, subParent.firstChild)
            subParent.appendChild(sentimentElem)

            subParent.appendChild(buttonContainer)
        } else {
            console.error(`Element with ID '${location}' not found`)
        }

    }

    showPopup(message) {
        const popup = document.getElementById('popup');
        popup.textContent = message;
        popup.style.display = 'block'; // Show the popup
        
        // Hide the popup after 3 seconds
        setTimeout(function() {
          popup.style.display = 'none';
        }, 3000); // 3000 milliseconds = 3 seconds
      }

    actionResolve(){
        this.showPopup('This action has been resolved')
        //location.appendChild(elem, location.firstChild)
        this.generateComplexComponent('resolved')
        document.getElementById(this._id).remove()
        document.getElementById('resolved').style.display = 'block'
    }

    actionEscalate(){
        this.showPopup('This action has not yet been implemented')
        const subParent = document.getElementById(this._id)



        /*var escalationIndicator = document.createElement("h2")
        escalationIndicator.textContent = "!"
        escalationIndicator.className = "escalation-text"

        if (subParent){        
            subParent.insertBefore(escalationIndicator, subParent.firstChild)
        } else {
            console.error(`Element with ID '${location}' not found`)
        }*/



    }

    actionDismiss(){
        this.showPopup('This action has been dismissed')
        document.getElementById(this._id).remove()
    }
}