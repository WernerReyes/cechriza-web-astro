import type { AlertType } from "@/interfaces/alert.type";

export function showAlert(message: string, type: AlertType) {
  const alert = document.querySelector("#alert") as HTMLElement;

  const alertMessage = alert.querySelector("span") as HTMLElement;
  alertMessage.textContent = message;

  if (alert.classList.contains(type)) return;

  alert.classList.remove("hidden");
  alert.classList.add(type);
  setTimeout(() => {
    alert.classList.add("hidden");
    alert.classList.remove(type);
  }, 3000);
}
