import { MainClient } from 'pokenode-ts'
import { reqData, callbackFn, returnsVal } from 'apiTypings'

export class PushData {

    data:any;
    private api;
    private pokemons:Map<unknown, unknown>

    constructor() {

        this.api = new MainClient();
        this.pokemons = new Map()
        
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
                    this.data = await this.api.pokemon.getPokemonByName(data.name);
                } catch (err) {
                    throw err;
                } finally {
                    if (!returnFn) return null
                    else returnFn(this.data)
                    
                }
            }
            if (data.interval) {
                try {
                    if (data.interval.offset) this.data = await this.api.pokemon.listPokemons(data.interval.offset, data.interval.limit);
                    else this.data = await this.api.pokemon.listPokemons(0,data.interval.limit);
                    
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

    async returnDataFn(returnType:"array"|"map",limit:number, offset?: number) {

        if (offset) await this.getData({data: {dataToReq: "pokemon", interval: {limit: limit, offset:offset}}})
        else await this.getData({data: {dataToReq: "pokemon", interval: {limit: limit}}})

        if (returnType === "map") {

            await this.data.results.map((pokem:unknown, index:unknown) => {
                return this.pokemons.set(index, pokem)
            })

            return this.pokemons

        } else {

            let arrPk = Object.values<object>(await this.data.results)
            console.log(arrPk);

            return arrPk
        }
    }

    isObjectArray(obj:Promise<Map<unknown, unknown> | object[]>): obj is Promise<Array<object>> {
        return (obj as Promise<object>) !== undefined
    }
}

