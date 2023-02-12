
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
    apiCollections?: [{
        collection: string,
        createdAt: string,
        dateCollected: string,
        id: string
    }],
    state?: string,
    performance?: {
        store: string,
        totalRevenue: number
    }[]
}