<script setup lang="ts">
const quotes = [
  { q: 'They shipped a full brand and site in five weeks. The previous agency took five months on the brief alone.', who: 'Maya R.', role: 'Founder, Orbit Coffee' },
  { q: "It's the only studio I've worked with where the people on the call are the people doing the work.", who: 'Daniel S.', role: 'Director, Foundry Strength' },
  { q: 'Our launch hit 38% conversion in week one. Whatever they put in the social calendar, keep it.', who: 'Aoife K.', role: 'CMO, Tide Surf School' },
]
</script>

<template>
  <section class="section" :style="{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>06 / Word of Mouth</span></div>
        <h2 class="section-title">What clients<br />actually said.</h2>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
        <figure v-for="(q, i) in quotes" :key="i" class="reveal" :style="{
          border: '1px solid var(--line)', background: 'var(--bg)', padding: '32px', position: 'relative',
        }">
          <div :style="{ fontFamily: \"'Press Start 2P', monospace\", color: 'var(--accent)', fontSize: '24px', letterSpacing: 0, marginBottom: '16px' }">"</div>
          <blockquote :style="{ fontSize: '18px', lineHeight: 1.5, color: 'var(--fg)', marginBottom: '24px', fontWeight: 300 }">{{ q.q }}</blockquote>
          <figcaption :style="{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between' }">
            <div>
              <div :style="{ fontWeight: 600, fontSize: '14px' }">{{ q.who }}</div>
              <div class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.12em' }">{{ q.role }}</div>
            </div>
            <div :style="{ display: 'flex', gap: '3px' }">
              <span v-for="j in 5" :key="j" :style="{ width: '8px', height: '8px', background: 'var(--accent)' }"></span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
