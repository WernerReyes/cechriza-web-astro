import type { Machine } from "@/interfaces/machine.interface";

export function getMainImage(machine: Machine): string {
  return (
    machine.images?.find((img) => img.isMain)?.url ||
    machine.images?.[0]?.url ||
    ""
  );
}

export function getImagesOrderedByMain(machine: Machine): string[] {
  if (!machine.images) return [];
  const mainImage = machine.images.find((img) => img.isMain)?.url;
  const otherImages = machine.images
    .filter((img) => !img.isMain)
    .map((img) => img.url);
  return [mainImage, ...otherImages].filter(Boolean) as string[];
}