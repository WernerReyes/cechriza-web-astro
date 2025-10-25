import type { Menu } from "@/interfaces/menu.interface";

export function buildMenuTree(menus: Menu[]): Menu[] {
  const tree: Menu[] = [];
  const parentsMap = new Map<number, Menu>();

  for (const menu of menus) {
    if (menu.parent) {
      const parentId = menu.parent.id_menu;

      // Si aún no existe el padre en el mapa, lo creamos
      if (!parentsMap.has(parentId)) {
        parentsMap.set(parentId, {
          ...menu.parent,
          children: [],
        });
      }

      // Agregamos el hijo al array de children del padre
      parentsMap?.get(parentId)?.children?.push({
        ...menu,
        children: [], // Inicializamos el array de children para el hijo
      });
    } else {
      // Si el menú no tiene padre, lo tratamos como raíz directamente
      tree.push({
        ...menu,
        children: [], // Inicializamos el array de children para el menú raíz
      });
    }
  }

  // Agregamos los padres al árbol final
  tree.push(...parentsMap.values());

  return tree.sort((a, b) => a.order_num - b.order_num);
}
