import { MainClient } from 'pokenode-ts'

export class PushData {

    data:any;
    #api;

    constructor() {

        this.#api = new MainClient();
        
    }

    /**
     * Getter Method to return the async data, but only will return the data if the getData() function was executed
     */
    get returnData() : object {
        if (!this.data) return {Error: "Obj not defined", Errnum: 1}
        else {
            return this.data
        }
    }
    

    /**
     * It will get the especified data and return through the callback function or the getter method, but if the callback method wasn't especified it will return NULL
     */
    async getData({ data, returnFn }: { data: reqData; returnFn?:(data:any)=>any}) {

        if (data[0].dataToReq.toLowerCase() === "pokemon") {
            if (data[0].name) {
                try {
                    this.data = await this.#api.pokemon.getPokemonByName(data[0].name);
                } catch (err) {
                    throw err;
                } finally {
                    if (!returnFn) return null
                    else returnFn(this.data)
                    
                }
            }
            if (data[0].interval) {
                try {
                    if (data[0].interval.offset) this.data = await this.#api.pokemon.listPokemons(data[0].interval.offset, data[0].interval.limit);
                    else this.data = await this.#api.pokemon.listPokemons(0,data[0].interval.limit);
                    
                } catch (err) {
                    throw err;
                } finally {
                    if (!returnFn) return null;
                    else return returnFn(this.data)
                }
            }
        }
        return 0;
    }
}

type reqData = [
    {
        /**
         * Type of data to require Eg. Pokemon, Berries, Locations...
         */
        dataToReq:string,
        name?:string,
        id?:number|number[],
        interval?: {
            limit:number,
            offset?:number
        }
    }
]