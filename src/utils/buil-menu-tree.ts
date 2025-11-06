import type { Menu } from "@/interfaces/menu.interface";

export function buildMenuTree(menus: Menu[]): Menu[] {
  const map = new Map<number, Menu>();
        const allMenus: Menu[] = [];

        // Función recursiva para aplanar jerarquía de padres
        const flattenWithParents = (menu: Menu) => {
            let current: Menu | null = menu;
            while (current) {
                if (!map.has(current.id_menu)) {
                    map.set(current.id_menu, { ...current, children: [] });
                    allMenus.push(map.get(current.id_menu)!);
                }
                current = current.parent || null;
            }
        };

        // Aplanar todos los menús con sus padres
        for (const menu of menus) {
            flattenWithParents(menu);
        }

        // Enlazar padres e hijos
        for (const menu of map.values()) {
            if (menu.parent_id && map.has(menu.parent_id)) {
                map.get(menu.parent_id)!.children!.push(menu);
            }
        }


       
        // Retornar solo las raíces
        return Array.from(map.values()).filter((m) => !m.parent_id);
}
