import type { MenuData } from "~/models/menu";

const items = new Array(12).fill({ label: '标题文字', image: '' }, 0, 12);
const mockMenu: MenuData = {
    categories: [
        {
            label: '热销',
            title: '热销',
            items: items,
        },
        {
            label: '新品',
            title: '新品',
            items: items,
            badge: {
                count: 3,
            }
        },
        {
            label: '特色炒菜',
            title: '特色炒菜',
            items: items
        },
        {
            label: '商务套餐',
            title: '商务套餐',
            items: items
        }
    ]
}

// 店铺菜单接口
export default defineEventHandler(async (event) => {
    assertMethod(event, "POST");

    let body = await readBody(event);
    console.log("Received request", body)
    return mockMenu;
});