import {CLOSE_DIALOG, OPEN_DIALOG} from "./constants";

export const openDialog = () =>{
    return {
        type : OPEN_DIALOG,
    }
}
export const closeDialog = () =>{
    return {
        type : CLOSE_DIALOG,
    }
}
