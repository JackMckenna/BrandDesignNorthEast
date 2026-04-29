<script setup lang="ts">
const items = ['WEB DEVELOPMENT', 'BRAND IDENTITY', 'GRAPHIC DESIGN', 'SOCIAL MEDIA', 'CONTENT', 'SEO', 'LOGO DESIGN', 'WEB DESIGN']
const list = [...items, ...items, ...items]
</script>

<template>
  <div class="marquee-mask" :style="{
    borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    padding: '20px 0', overflow: 'hidden', whiteSpace: 'nowrap',
    position: 'relative', zIndex: 2, background: 'var(--bg)',
  }">
    <div :style="{ display: 'inline-flex', animation: 'marquee 40s linear infinite', gap: '48px', paddingLeft: '48px' }">
      <span v-for="(t, i) in list" :key="i" class="mono" :style="{
        fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.18em',
        display: 'inline-flex', alignItems: 'center', gap: '24px', color: 'var(--fg-2)',
      }">
        <span :style="{ width: '6px', height: '6px', background: 'var(--accent)', display: 'inline-block' }"></span>
        {{ t }}
      </span>
    </div>
  </div>
</template>
