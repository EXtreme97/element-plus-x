import { ElMessage } from "element-plus";

export const useCopy = (text: string) => {
  let input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  ElMessage.success(`已复制成功${text}`);
  document.body.removeChild(input);
};
