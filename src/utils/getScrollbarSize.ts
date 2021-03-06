export const getScrollbarSize = (): number => {
  if (
    document.documentElement.scrollHeight <=
    document.documentElement.clientHeight
  ) {
    return 0;
  }

  const scrollDiv = document.createElement("div");
  scrollDiv.style.width = "99px";
  scrollDiv.style.height = "99px";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.overflow = "scroll";

  document.body.appendChild(scrollDiv);
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarSize;
};
