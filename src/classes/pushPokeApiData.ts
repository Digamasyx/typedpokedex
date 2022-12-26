import { MainClient } from 'pokenode-ts'
import { reqData, callbackFn, returnsVal } from 'apiTypings'

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
    async getData({ data, returnFn }: { data: reqData; returnFn?:callbackFn}): returnsVal {

        if (data.dataToReq.toLowerCase() === "pokemon") {
            if (data.name) {
                try {
                    this.data = await this.#api.pokemon.getPokemonByName(data.name);
                } catch (err) {
                    throw err;
                } finally {
                    if (!returnFn) return null
                    else returnFn(this.data)
                    
                }
            }
            if (data.interval) {
                try {
                    if (data.interval.offset) this.data = await this.#api.pokemon.listPokemons(data.interval.offset, data.interval.limit);
                    else this.data = await this.#api.pokemon.listPokemons(0,data.interval.limit);
                    
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

