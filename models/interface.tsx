
export interface MenuItemType {
    id: number,
    label: string,
    icon: string,
    link: string
}

export interface Sidebar {
    activeNav: boolean
}

export interface Navheader {
    toggleNav: boolean
}

export interface ICard {
    card: {
        isSimple: boolean,
        title: string,
        substitle?: string,
        isCollapse?: boolean,
        buttonTitle?: string,
        isCurrency?: boolean,
        total?: number,
        isPaid?: boolean,
        subTotalCollection?: string,
        isSubCollectionSettlement?: boolean,
        growth?: number,
        isTrend?: boolean,
        upcoming?: IUpcoming
        pie?: IPie[],
        horizontal?: IHorizontal[],
        line?: ILine[],
        chartId?: string
    } & (ReturnType<typeof hasChartIdData> extends true ? { chartId: string } : {});
}

export interface IPie {
    item: string,
    value: number | string
    color: string,
}

export interface IHorizontal {
    store: string,
    totalRevenue: number,
    percentage: number,
    width: number
}

export interface ILine {
    id: string
    createdAt: string,
    dateCollected: string,
    collection: string,
}

export interface IUpcoming {
    expectedDate: string,
    collection: IColList[]
}

export interface IColList {
    collection: string,
    collectionDate: string
}

// using this return type in the conditional type to require the chartId property if hasChartIdData returns true, and leave it optional otherwise.
function hasChartIdData(data: any): data is { pie?: any[]; horizontal?: any[]; line?: any[]; chartId: string } {
    return !!data.pie || !!data.horizontal || !!data.line;
}