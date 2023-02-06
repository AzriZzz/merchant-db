
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
    title: string,
    transaction?: number,
    payouts?: string,
    growth?: string,
    trend?: boolean,
    fpxPayout?: string,
    pieChart?: boolean,
    displayOnly?: boolean,
    pieId?: number,
    dataset?: {
        item: string,
        value: number,
        color: string
    }[],
    apiCollections?: [{
        collection: string,
        createdAt: string,
        dateCollected: string,
        id: string
    }]
}