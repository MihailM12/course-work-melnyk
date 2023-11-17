import {Monthes} from "../../enum/Monthes";

export function formatDate(date: any) {
    try {
        if (typeof date === "string") {
            let temp = date?.split('-')
            return `${temp[2].split("T")[0]} ${Monthes[Number(temp[1])]} ${temp[0]}`
        } else {
            return ""
        }
    } catch (e) {
        console.log(e)
    }
}