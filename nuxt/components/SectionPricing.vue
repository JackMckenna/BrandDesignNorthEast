<script setup lang="ts">
const tiers = [
  { name: 'Launch', price: '4', sub: 'weeks', desc: 'Brand-new founders who need to get up and running.', bullets: ['Between one to five site', 'Logo + brand review', 'Hosting handover'], maintain: 'Ongoing maintenance available', cta: 'Start small', featured: false },
  { name: 'Studio', price: '6', sub: 'weeks', desc: 'Most engagements land here. The full three-discipline build.', bullets: ['Multi-page custom site', 'Full identity system', '30-day social runway',  'CMS + analytics'], maintain: 'Ongoing maintenance available', cta: 'Start a project', featured: true },
  { name: 'Deluxe', price: '8', sub: 'weeks', desc: 'The flagship engagement — every discipline, every asset, every detail.', bullets: ['Everything in Studio', 'Bespoke illustration / motion', 'Content shoot day', 'Launch campaign — paid + organic', 'Priority post-launch support'], maintain: 'Ongoing maintenance available', cta: 'Talk flagship', featured: false },
]
</script>

<template>
  <section id="packages" class="section" :style="{ borderTop: '1px solid var(--line)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>05 / Packages</span></div>
        <h2 class="section-title">Three packages.<br />Built in weeks.</h2>
        <p class="section-sub">Three build shapes — four, six, or eight weeks end-to-end. We'll tell you in the discovery call which one fits and which one to skip.</p>
      </div>
      <div class="r-cols-3" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
        <div v-for="t in tiers" :key="t.name" class="reveal" :style="{
          border: '1px solid ' + (t.featured ? 'var(--accent)' : 'var(--line)'),
          background: t.featured ? 'var(--bg-2)' : 'var(--bg)',
          padding: '40px', position: 'relative',
          display: 'flex', flexDirection: 'column', gap: '28px',
          boxShadow: t.featured ? '0 0 0 1px var(--accent) inset' : 'none',
        }">
          <div v-if="t.featured" :style="{
            position: 'absolute', top: '-1px', right: '-1px', background: 'var(--accent)', color: 'var(--bg)',
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', padding: '6px 12px',
          }">Most chosen</div>
          <div>
            <h3 :style="{ fontSize: '13px', fontWeight: 500, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--fg-2)', marginBottom: '18px' }">{{ t.name }}</h3>
            <div :style="{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }">
              <span :style="{ fontSize: 'clamp(40px, 9vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--fg)' }">{{ t.price }}</span>
              <span :style="{ fontSize: '14px', color: 'var(--fg-3)' }">{{ t.sub }}</span>
            </div>
            <p :style="{ fontSize: '15px', color: 'var(--fg-2)', lineHeight: 1.55 }">{{ t.desc }}</p>
          </div>
          <div :style="{ height: '1px', background: 'var(--line)' }"></div>
          <ul :style="{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }">
            <li v-for="b in t.bullets" :key="b" :style="{ display: 'flex', gap: '14px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--fg)', lineHeight: 1.5 }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" :style="{ flexShrink: 0, marginTop: '4px' }">
                <path d="M3 8.5L6.5 12L13 4" stroke="var(--accent)" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" />
              </svg>
              {{ b }}
            </li>
          </ul>
          <div :style="{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }">
            <div :style="{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '10px' }">
              <span :style="{ width: '6px', height: '6px', background: 'var(--accent)', flexShrink: 0 }"></span>
              <span class="mono" :style="{ fontSize: '11px', color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '.12em' }">{{ t.maintain }}</span>
            </div>
            <NuxtLink to="/contact" data-hov :class="['pxbtn', t.featured ? 'primary' : '']" :style="{ justifyContent: 'center' }">
              {{ t.cta }} →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
