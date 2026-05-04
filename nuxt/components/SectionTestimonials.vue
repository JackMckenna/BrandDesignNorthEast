<script setup lang="ts">
type Quote = { q: string; who: string; role: string; link?: string }
const quotes: Quote[] = [
  {
    q: 'They listened to our exact needs and let us stay fully involved at every step. The production was seamless no surprises, no friction.',
    who: 'Liam',
    role: 'Bet442',
    link: '/work/bet442',
  },
  {
    q: 'User retention is up 34% since launch and the whole experience feels noticeably sharper. Players are spending more time on site than they ever did before.',
    who: 'Isabel',
    role: 'Ivy Casino',
    link: '/work/ivy-casino',
  },
  {
    q: 'Great to talk through brand growth ideas with, really knows his stuff. Came away with a clear plan, sharper positioning, and the confidence to act on it.',
    who: 'Chris R.',
    role: 'Founder',
  },
]
</script>

<template>
  <section class="section" :style="{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>06 / Word of Mouth</span></div>
        <h2 class="section-title">What clients<br />actually said.</h2>
      </div>
      <div class="r-cols-3" :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }">
        <figure v-for="(q, i) in quotes" :key="i" class="reveal" :style="{
          border: '1px solid var(--line)', background: 'var(--bg)', padding: '32px', position: 'relative', transition: 'border-color .15s',
        }">
          <NuxtLink v-if="q.link" :to="q.link" :aria-label="`Read ${q.who}'s case study`" data-hov
            @mouseenter="(e) => (((e.currentTarget as HTMLElement).parentElement as HTMLElement).style.borderColor = 'var(--accent)')"
            @mouseleave="(e) => (((e.currentTarget as HTMLElement).parentElement as HTMLElement).style.borderColor = 'var(--line)')"
            :style="{ position: 'absolute', inset: 0, zIndex: 1 }" />
          <span v-if="q.link" class="mono" :style="{ position: 'absolute', top: '20px', right: '20px', color: 'var(--fg-3)', fontSize: '12px', letterSpacing: '.14em' }">↗</span>
          <div :style="{ fontFamily: `'Press Start 2P', monospace`, color: 'var(--accent)', fontSize: '24px', letterSpacing: 0, marginBottom: '16px' }">"</div>
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
