<script setup lang="ts">
import { findWork } from '~/composables/useWorks'
const route = useRoute()
const work = computed(() => findWork(String(route.params.slug)))
if (!work.value) throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
useHead({ title: () => `${work.value!.client} — Studio Northa` })
useReveal(); usePixelCursor()
const config = useRuntimeConfig()
const withBase = (p?: string) => (p ? `${config.app.baseURL.replace(/\/$/, '')}/${p.replace(/^\//, '')}` : '')
</script>

<template>
  <div v-if="work">
    <SiteNav />
    <main :style="{ paddingTop: '72px' }">
      <section :style="{ borderBottom: '1px solid var(--line)' }">
        <div :style="{ aspectRatio: '16 / 6', position: 'relative', overflow: 'hidden', background: 'var(--bg-2)' }">
          <img v-if="work.image" :src="withBase(work.image)" :alt="work.client"
            :style="{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }" />
          <div v-else :style="{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }">
            <div v-for="(c, j) in work.stripes" :key="j" :style="{
              background: c,
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 3px, transparent 3px 8px)',
            }"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="r-cols-2-asym" :style="{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '64px' }">
            <div>
              <div :style="{ display: 'flex', gap: '16px', marginBottom: '16px' }">
                <span class="mono" :style="{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.14em' }">{{ work.tag }}</span>
                <span class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)' }">{{ work.year }}</span>
              </div>
              <h1 :style="{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '24px' }">{{ work.client }}</h1>
              <p :style="{ fontSize: '20px', color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: '60ch', marginBottom: '40px' }">
                {{ work.summary }} The brief asked for clarity over cleverness — a system the client could carry forward without us, and a launch that didn't land in a vacuum.
              </p>
              <NuxtLink to="/work" class="pxbtn" data-hov>← Back to archive</NuxtLink>
            </div>
            <aside>
              <div v-for="(row, i) in [['Engagement', work.engagement || '6 weeks'], ['Deliverables', work.deliverables || '14 assets'], ['Outcome', work.outcome || '+38% conv.']]" :key="i"
                :style="{ borderTop: '1px solid var(--line)', padding: '20px 0' }">
                <div class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '6px' }">{{ row[0] }}</div>
                <div :style="{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }">{{ row[1] }}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <SectionWork :limit="3" />
    </main>
    <SiteFooter />
  </div>
</template>
