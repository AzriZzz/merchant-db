
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

export interface CardType {
    title?: string,
    transaction?: number,
    amount?: number,
    payouts?: number,
    growth?: string,
    trend?: boolean,
    fpxPayout?: number,
    pieChart?: boolean,
    displayOnly?: boolean,
    pieId?: number,
    dataset?: {
        item: string,
        value: number,
        color: string
    }[],
    apiCollections?: {
        collection: string,
        createdAt: string,
        dateCollected: string,
        id: string
    }[],
    state?: string,
    performance?: {
        store?: string,
        totalRevenue?: number
    }[]
}

export interface ICard {
    data?: {
        isSimple?: boolean
        title?: string,
        substitle?: string,
        isCollapse?: boolean,
        buttonTitle?: string,
        isCurrency?: boolean,
        total?: string,
        subTotalCollection?: string,
        isSubCollectionSettlement?: boolean,
        growth?: number,
        isTrend?: boolean,
        pie?: IPie[],
        pieId?: number
        horizontal?: IHorizontal[],
        line?: ILine[]
        upcoming?: IUpcoming
    }
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
    statement?: string,
    collection: {
        date: string,
        amount: string
    }[]
}