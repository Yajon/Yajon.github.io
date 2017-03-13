import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// 封装一个简单的Toast功能
type ToastType = "success" | "error" | "info";

export function showToast(
  message: string,
  type: ToastType = "info",
  duration = 2000
) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = cn(
    "fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white z-50",
    type === "success" && "bg-green-500",
    type === "error" && "bg-red-500",
    type === "info" && "bg-blue-500"
  );
  toast.style.width = `${Math.min(300, window.innerWidth - 30)}px`;
  toast.style.boxSizing = "border-box";
  toast.style.textAlign = "center";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s";
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, duration);
}

export function copyClipboard(text: string): boolean {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  let success = false;
  try {
    success = document.execCommand("copy");
  } catch (err) {
    success = false;
  }
  document.body.removeChild(input);
  return success;
}
