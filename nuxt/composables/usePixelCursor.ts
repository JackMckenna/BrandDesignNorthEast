// composables/usePixelCursor.ts
export const usePixelCursor = () => {
  if (!import.meta.client) return;
  onMounted(() => {
    const el = document.getElementById('pxc') as HTMLElement | null;
    if (!el) return;
    let raf = 0, x = -100, y = -100, tx = -100, ty = -100;
    const tick = () => {
      x += (tx - x) * 0.4;
      y += (ty - y) * 0.4;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest && t.closest('a, button, [data-hov]')) el.classList.add('hover');
    };
    const leave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest && t.closest('a, button, [data-hov]')) el.classList.remove('hover');
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    raf = requestAnimationFrame(tick);
    onBeforeUnmount(() => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    });
  });
};
