import { SET_TAGLINE } from "./actionType"

export const setTagLine = (tagLine)=>{
    return {
        type: SET_TAGLINE,
        payload : {
            tagLine : tagLine
        }
    }
}