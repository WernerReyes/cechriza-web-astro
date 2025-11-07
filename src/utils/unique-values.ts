import type { Category } from "@/interfaces/category.entity";
import type { Section } from "@/interfaces/section.interface";

export function getUniqueCategories(section: Section): Category[] {
  const uniqueCategoriesMap = new Map<number, Category>();

  section?.machines?.forEach((machine) => {
    if (machine.category) {
      uniqueCategoriesMap.set(machine.category.id_category, machine.category);
    }
  });

  return Array.from(uniqueCategoriesMap.values());
}
