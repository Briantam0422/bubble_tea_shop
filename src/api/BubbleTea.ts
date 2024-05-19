import { iBubbleTea } from "@/model/BubbleTea";
import data from "./data.json"
export async function getBubbleTeaList() {
    // simulate api call
    return new Promise<Partial<Record<string, iBubbleTea[]>>>((resolve, reject)=>{
        try {
            // get data
            const bubbleTeaList: iBubbleTea[] = data
            // group dat aby labels
            const bubbleTeaGroupByLabels: Partial<Record<string, iBubbleTea[]>> = Object.groupBy(bubbleTeaList, ({labels}) => labels[0])
            // sort labels
            const sortedKeys = Object.keys(bubbleTeaGroupByLabels).sort();
            // create new object of bubble tea data
            const bubbleTeaListData = sortedKeys.reduce((acc: Record<string, iBubbleTea[] | undefined>, key: string) => {
                acc[key] = bubbleTeaGroupByLabels[key];
                return acc;
            }, {});
            resolve(bubbleTeaListData);
        } catch (e) {
            reject(e);
        }
    })    
}

export async function getBubbleTeaLabels(){
    // simulate api call
    return new Promise<Record<string,string>>((resolve, reject)=>{
        resolve( {
            brown_sugar_bubble: "Brown Sugar Bubble",
            fresh_fruit_tea: "Fresh Fruit Tea",
            original_tea: "Original Tea",
            popular: "Popular",
            summer_specials: "Summer Specials",
            taro_balls: "Taro Balls",
            tea_latte: "Tea Latte",
            yakult: "Yakult"
        })
    })
}