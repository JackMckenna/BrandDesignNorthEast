<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 16 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const links = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/#process', label: 'Process' },
  { to: '/#packages', label: 'Packages' },
]
</script>

<template>
  <nav :style="{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    borderBottom: '1px solid ' + (scrolled ? 'var(--line)' : 'transparent'),
    background: scrolled ? 'rgba(8,8,16,0.82)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background .2s, border-color .2s',
  }">
    <div class="container" :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }">
      <NuxtLink to="/" data-hov :style="{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--fg)' }">
        <span :style="{ display: 'inline-grid', gridTemplateColumns: '6px 6px 6px', gap: '2px' }">
          <span v-for="(c, i) in [1,1,0,1,2,2,0,2,2]" :key="i"
            :style="{ width: '6px', height: '6px', background: c===1 ? 'var(--accent)' : c===2 ? 'var(--fg)' : 'transparent' }"></span>
        </span>
        <span class="mono" :style="{ fontSize: '13px', letterSpacing: '.04em', fontWeight: 500 }">
          STUDIO / NORTHA <span :style="{ color: 'var(--fg-3)' }">brand_studio</span>
        </span>
      </NuxtLink>
      <div class="nav-links" :style="{ display: 'flex', gap: '32px', alignItems: 'center' }">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to" data-hov class="mono nav-link" :style="{
          color: 'var(--fg-2)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.14em',
        }">{{ l.label }}</NuxtLink>
        <NuxtLink to="/contact" class="pxbtn primary" data-hov :style="{ padding: '10px 18px' }">Get a quote</NuxtLink>
      </div>
    </div>
  </nav>
</template>
