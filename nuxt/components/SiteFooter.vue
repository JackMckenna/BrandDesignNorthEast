<script setup lang="ts"></script>

<template>
  <footer :style="{ borderTop: '1px solid var(--line)', padding: '64px 0 32px', background: 'var(--bg-2)' }">
    <div class="container">
      <div :style="{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }">
        <div>
          <div :style="{ fontFamily: \"'Press Start 2P', monospace\", fontSize: '28px', letterSpacing: 0, marginBottom: '20px' }">
            <span :style="{ color: 'var(--accent)' }">NE</span> /
          </div>
          <p :style="{ fontSize: '14px', color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: '36ch' }">
            Three-person digital brand studio operating from the North East, UK. Currently booking Q3/Q4 2026.
          </p>
        </div>
        <div v-for="g in [
          { h: 'Studio', items: ['Work', 'Services', 'Process', 'Pricing'] },
          { h: 'Connect', items: ['Instagram', 'LinkedIn', 'Are.na', 'Email'] },
          { h: 'Legal', items: ['Privacy', 'Terms', 'Cookies', 'Imprint'] },
        ]" :key="g.h">
          <div class="mono" :style="{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.16em', marginBottom: '16px' }">{{ g.h }}</div>
          <ul :style="{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }">
            <li v-for="i in g.items" :key="i">
              <a href="#" data-hov :style="{ color: 'var(--fg-2)', fontSize: '14px' }">{{ i }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div :style="{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '24px', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }">
        <span class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.12em' }">
          © 2026 NE Digital Brand Studio. Built in-house.
        </span>
        <div :style="{ display: 'flex', gap: '6px' }">
          <span v-for="i in 32" :key="i"
            :style="{ width: '4px', height: '4px', background: i % 5 === 1 ? 'var(--accent)' : 'var(--line-2)' }"></span>
        </div>
      </div>
    </div>
  </footer>
</template>
