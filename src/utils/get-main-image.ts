import type { Machine } from "@/interfaces/machine.interface";

export function getMainImage(machine: Machine): string {
  return (
    machine.images?.find((img) => img.isMain)?.url ||
    machine.images?.[0]?.url ||
    ""
  );
}
