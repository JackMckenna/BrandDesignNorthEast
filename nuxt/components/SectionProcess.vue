<script setup lang="ts">
const steps = [
  { n: '01', t: 'Discovery', b: 'A 60-min unpaid call. We come back with a one-page diagnosis: what to do, what to skip.' },
  { n: '02', t: 'Scoping', b: 'Fixed-fee proposal. Phased deliverables. No retainer arm-twisting. Sign and start.' },
  { n: '03', t: 'Build', b: 'Weekly demos in Loom. You see real progress, not status reports. Three of us, no handoffs.' },
  { n: '04', t: 'Launch + carry', b: 'We hand over real working systems and stay on for 30 days of free support. Optional retainer after.' },
]
</script>

<template>
  <section id="process" class="section" :style="{ borderTop: '1px solid var(--line)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>03 / Process</span></div>
        <h2 class="section-title">A four-step loop.</h2>
        <p class="section-sub">We avoid the 12-week discovery pageant. Most engagements run six to ten weeks, end-to-end.</p>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid var(--line)', borderTop: '1px solid var(--line)' }">
        <div v-for="(s, i) in steps" :key="s.n" class="reveal" :style="{
          padding: '40px 32px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
          minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }">
          <div :style="{ fontFamily: `'Press Start 2P', monospace`, fontSize: '28px', color: 'var(--accent)', letterSpacing: 0, marginBottom: '24px' }">{{ s.n }}</div>
          <div :style="{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }">
            <span v-for="j in 8" :key="j" :style="{ width: '6px', height: '6px', background: (j-1) <= i*2 + 1 ? 'var(--accent)' : 'var(--line-2)' }"></span>
          </div>
          <div>
            <h3 :style="{ fontSize: '22px', fontWeight: 600, marginBottom: '10px', letterSpacing: '-0.01em' }">{{ s.t }}</h3>
            <p :style="{ fontSize: '14px', color: 'var(--fg-2)', lineHeight: 1.55 }">{{ s.b }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
