import { ElNotification, ElMessageBox } from "element-plus";

export function toast(message, type = "success") {
  ElNotification({
    message,
    type
  });
}

export function msgBox(message, type = "warning", title = "") {
  return ElMessageBox.confirm(
    message,
    title,
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type
    }
  );

}