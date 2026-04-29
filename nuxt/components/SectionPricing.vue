<script setup lang="ts">
const tiers = [
  { name: 'Launch', price: '£3.5k', sub: 'fixed', desc: 'Brand-new founders who need to get up and running.', bullets: ['One-page or 5-page site', 'Logo + 2 brand colors', '30 days social setup', 'Hosting handover'], cta: 'Start small', featured: false },
  { name: 'Studio', price: '£8.5k', sub: 'fixed / 6 wks', desc: 'Most engagements land here. The full three-discipline build.', bullets: ['Multi-page custom site', 'Full identity system', '90-day social runway', 'Content shoot day', 'CMS + analytics'], cta: 'Start a project', featured: true },
  { name: 'Carry', price: '£2.2k', sub: '/ month', desc: 'Ongoing partner — design, social, dev, all in.', bullets: ['Up to 20 hours / mo', 'Social calendar + posts', 'Site updates + dev', 'Monthly review'], cta: 'Talk retainer', featured: false },
]
</script>

<template>
  <section id="pricing" class="section" :style="{ borderTop: '1px solid var(--line)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>05 / Pricing</span></div>
        <h2 class="section-title">Fixed fees.<br />No retainer ambushes.</h2>
        <p class="section-sub">Three engagement shapes. We'll tell you in the discovery call which one fits — and which one to skip.</p>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
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
              <span :style="{ fontSize: '56px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--fg)' }">{{ t.price }}</span>
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
          <NuxtLink to="/contact" data-hov :class="['pxbtn', t.featured ? 'primary' : '']" :style="{ marginTop: 'auto', justifyContent: 'center' }">
            {{ t.cta }} →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
