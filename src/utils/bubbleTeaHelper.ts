import { iBubbleTea } from "@/model/BubbleTea";

export const bubbleTeaGroupByLabelsAndSort = (bubbleTeaList: iBubbleTea[]) => {
    // group data by labels
    const bubbleTeaGroupByLabels: Partial<Record<string, iBubbleTea[]>> = Object.groupBy(bubbleTeaList, ({labels}) => labels[0])
    // sort labels
    const sortedKeys = Object.keys(bubbleTeaGroupByLabels).sort();
    // create new object of bubble tea data
    const bubbleTeaListData = sortedKeys.reduce((acc: Record<string, iBubbleTea[] | undefined>, key: string) => {
        acc[key] = bubbleTeaGroupByLabels[key];
        return acc;
    }, {});
    return bubbleTeaListData
}

export const bubbleTeaFilter = (bubbleTeaList: iBubbleTea[], input: string) => {
    const filteredBubbleTeaList = bubbleTeaList.filter((item) => {
        if (
          item.name.toLowerCase().includes(input.toLowerCase()) ||
          item.description.toLowerCase().includes(input.toLowerCase())
        ) {
          return item;
        }
    });
    return filteredBubbleTeaList;
}