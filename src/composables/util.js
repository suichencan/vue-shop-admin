import { ElNotification } from "element-plus";

export function toast(message,type="success") {
  ElNotification({
    message,
    type
  });
}