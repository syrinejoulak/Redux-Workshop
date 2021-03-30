import {addOne, MinusOne} from "./ActionType"

export const INCREMENT = () => {
    return {
        type: addOne
    }
}
export const DECREMENT = () => {
    return {
        type: MinusOne
    }
}