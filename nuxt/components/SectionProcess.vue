<script setup lang="ts">
const steps = [
  { n: '01', t: 'Discovery', b: 'A unpaid call. We come back with a one-page diagnosis: what to do, what to skip and what is best for your company.' },
  { n: '02', t: 'Scoping', b: 'Fixed-fee proposal. Phased deliverables. Clear timeline. No retainer arm-twisting. Sign and start.' },
  { n: '03', t: 'Build', b: 'Weekly demos meetings. You see real progress, not status reports. Allowing you to have full control.' },
  { n: '04', t: 'Launch + carry', b: 'We hand over real working systems and stay on for full maintenance and support for your brands needs, for as long as you needs.' },
]
</script>

<template>
  <section id="process" class="section" :style="{ borderTop: '1px solid var(--line)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>03 / Process</span></div>
        <h2 class="section-title">A four-step loop.</h2>
        <p class="section-sub">We avoid the 12-week discovery pageant. Most engagements run four to eight weeks, end-to-end.</p>
      </div>
      <div class="r-cols-4" :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid var(--line)', borderTop: '1px solid var(--line)' }">
        <div v-for="(s, i) in steps" :key="s.n" class="reveal tile-tall" :style="{
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
