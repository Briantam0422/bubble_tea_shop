import { iBubbleTea } from "@/model/BubbleTea";
import data from "./data.json"
export async function getBubbleTeaList() {
    // simulate api call
    return new Promise<iBubbleTea[]>((resolve, reject)=>{
        try {
            const bubbleTeaList: iBubbleTea[] = data
            resolve(bubbleTeaList);
        } catch (e) {
            reject(e);
        }
    })    
}