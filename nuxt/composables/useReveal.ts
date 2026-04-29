// composables/useReveal.ts
// Watch elements with class .reveal and add .in when scrolled into view.
export const useReveal = () => {
  if (!import.meta.client) return;
  onMounted(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    onBeforeUnmount(() => io.disconnect());
  });
};
