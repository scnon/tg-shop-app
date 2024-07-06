import type { MenuData } from "~/models/menu";

const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);
const mockMenu: MenuData = {
    categories: [
        {
            label: '热销',
            title: '热销',
            items: items
        },
        {
            label: '新品',
            title: '新品',
            items: items
        },
        {
            label: '新品',
            title: '新品',
            items: items
        },
        {
            label: '新品',
            title: '新品',
            items: items
        }
    ]
}
export default defineEventHandler(async (event) => {
    assertMethod(event, "POST");

    let body = await readBody(event);
    console.log("Received request", body)
    return mockMenu;
});