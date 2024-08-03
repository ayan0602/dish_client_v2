export class Fetcher{
    constructor(key, data = null){
        this.key = key
        this.data = data
    }

    //abstract method
    ParseUpdate()
    {
        throw new Error('Abstract method "ParseUpdate" must be implemented in derived classes.');
    }

    async ClientUpdate(){
        try {
            const response = await fetch(this.key);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.data = await response.json();

            this.ParseUpdate()

        } catch (e){
            console.error(e)
        }
    }
}   