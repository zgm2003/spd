import { defineStore } from 'pinia';

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        activeTopMenu: '1',
        activeSidebarMenu: '1',
        menuItems: [
            // 武器类 index 全部为 1
            { type: '1', index: '1', name: '破损的短剑', path: '/weapon/WornShortsword' },
            { type: '1', index: '2', name: '镶钉手套', path: '/weapon/StuddedGloves' },
            { type: '1', index: '3', name: '匕首', path: '/weapon/Dagger', url: 'https://static.wikia.nocookie.net/pixeldungeon/images/4/45/Dagger.png' },
            { type: '1', index: '4', name: '法师魔杖', path: '/weapon/MageStaff' },
            // 飞镖类 index 全部为 2
            { type: '2', index: '1', name: '小飞镖', path: '/darts/XiaoFeibiao' }
            // 其他菜单项
        ]
    }),
    actions: {
        setActiveTopMenu(type) {
            this.activeTopMenu = type;
        },
        setActiveSidebarMenu(index) {
            this.activeSidebarMenu = index;
        }
    },
    getters: {
        getMenuItemsByType: (state) => (type) => {
            return state.menuItems.filter(item => item.type === type);
        }
    }
});
