export interface iBubbleTea {
    id: number,
    assetPath: string,
    name: string,
    description: string,
    currency: string,
    price: number,
    labels: string[]
}

export interface iBubbleTeaList {
    label: Partial<Record<string, iBubbleTea[]>>
}