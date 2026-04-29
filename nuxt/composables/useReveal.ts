// composables/useReveal.ts
// Watch elements with class .reveal and add .in when scrolled into view.
export const useReveal = () => {
  if (!import.meta.client) return;
  onMounted(() => {
    document.documentElement.classList.add('js-reveal');
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => io.observe(el));
    onBeforeUnmount(() => io.disconnect());
  });
};
