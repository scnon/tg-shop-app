

interface MenuData {
    categories: MenuCagetory[];
}

interface MenuCagetory {
    label: string;
    title: string;
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