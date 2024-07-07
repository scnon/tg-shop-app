

interface MenuData {
    categories: MenuCagetory[];
}

interface MenuCagetory {
    label: string;
    title: string;
    badge?: {
        count: number;
    }
    items: GoodInfo[];
}

interface GoodInfo {
    label: string;
    image: string;
}

export type {
    MenuData,
    MenuCagetory,
    GoodInfo
}