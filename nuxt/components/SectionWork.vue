<script setup lang="ts">
import { WORKS } from '~/composables/useWorks'
const props = withDefaults(defineProps<{ limit?: number; showHeader?: boolean }>(), {
  showHeader: true,
})
const config = useRuntimeConfig()
const withBase = (p?: string) => (p ? `${config.app.baseURL.replace(/\/$/, '')}/${p.replace(/^\//, '')}` : '')
const items = computed(() => props.limit ? WORKS.slice(0, props.limit) : WORKS)
</script>

<template>
  <section id="work" class="section" :style="{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }">
    <div class="container">
      <div v-if="showHeader" class="reveal" :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }">
        <div>
          <div class="section-eyebrow"><span class="blk"></span><span>02 / Recent Work</span></div>
          <h2 class="section-title">Recent work.</h2>
        </div>
        <NuxtLink to="/work" class="mono" data-hov :style="{ fontSize: '12px', color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '.14em' }">
          Showing {{ items.length }} of {{ WORKS.length }} — <span :style="{ color: 'var(--accent)' }">view archive →</span>
        </NuxtLink>
      </div>

      <div class="r-cols-3" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
        <NuxtLink v-for="(w, i) in items" :key="w.id" :to="`/work/${w.id}`" data-hov class="reveal"
          @mouseenter="(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')"
          @mouseleave="(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--line)')"
          :style="{
            display: 'block', border: '1px solid var(--line)', background: 'var(--bg)',
            position: 'relative', transition: 'border-color .15s', color: 'inherit',
          }">
          <div :style="{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', padding: w.image ? '16px' : '0' }">
            <img v-if="w.image" :src="withBase(w.image)" :alt="w.client" loading="lazy"
              :style="{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }" />
            <template v-else>
              <div :style="{ position: 'absolute', inset: 0, display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }">
                <div v-for="(c, j) in w.stripes" :key="j" :style="{
                  background: c,
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 6px)',
                }"></div>
              </div>
              <div :style="{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: `'Press Start 2P', monospace`, fontSize: '14px', color: 'rgba(255,255,255,0.94)',
                textShadow: '2px 2px 0 rgba(0,0,0,0.6)', letterSpacing: 0,
              }">{{ String(i+1).padStart(2,'0') }}</div>
            </template>
          </div>
          <div :style="{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }">
            <div :style="{ display: 'flex', justifyContent: 'space-between' }">
              <span class="mono" :style="{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.14em' }">{{ w.tag }}</span>
              <span class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)' }">{{ w.year }}</span>
            </div>
            <h3 :style="{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em' }">{{ w.client }}</h3>
            <p :style="{ fontSize: '13px', color: 'var(--fg-2)', lineHeight: 1.5 }">{{ w.summary }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
