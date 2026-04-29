<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let cleanup: (() => void) | null = null

onMounted(() => {
  const c = canvas.value!
  const ctx = c.getContext('2d')!
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let w = 0, h = 0
  const resize = () => {
    const r = c.getBoundingClientRect()
    w = r.width; h = r.height
    c.width = w * dpr; c.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)

  const G = 14
  const cols = Math.ceil(w / G), rows = Math.ceil(h / G)
  const particles: any[] = []
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
    particles.push({ x: j*G + G/2, y: i*G + G/2, ox: j*G + G/2, oy: i*G + G/2, vx: 0, vy: 0 })
  }

  let mx = -9999, my = -9999
  const onMove = (e: MouseEvent) => {
    const r = c.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    if (x >= 0 && x <= r.width && y >= 0 && y <= r.height) { mx = x; my = y }
    else { mx = -9999; my = -9999 }
  }
  document.addEventListener('mousemove', onMove)

  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#ffcc00'
  const tick = () => {
    ctx.clearRect(0, 0, w, h)
    for (const p of particles) {
      const dx = p.x - mx, dy = p.y - my
      const d2 = dx*dx + dy*dy
      const r2 = 140*140
      if (d2 < r2 && d2 > 0) {
        const f = (1 - d2/r2) * 1.6
        const d = Math.sqrt(d2)
        p.vx += (dx/d) * f; p.vy += (dy/d) * f
      }
      p.vx += (p.ox - p.x) * 0.04; p.vy += (p.oy - p.y) * 0.04
      p.vx *= 0.86; p.vy *= 0.86
      p.x += p.vx; p.y += p.vy
      const dist = Math.hypot(p.x - p.ox, p.y - p.oy)
      const lit = dist > 2
      ctx.fillStyle = lit ? accent : '#22223a'
      const sz = lit ? 3 : 2
      ctx.fillRect(Math.round(p.x) - sz/2, Math.round(p.y) - sz/2, sz, sz)
    }
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
  cleanup = () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    document.removeEventListener('mousemove', onMove)
  }
})
onBeforeUnmount(() => cleanup && cleanup())
</script>

<template>
  <div class="scanlines" :style="{ position: 'relative', overflow: 'hidden', minHeight: '760px' }">
    <canvas ref="canvas" :style="{ position: 'absolute', inset: 0, width: '100%', height: '100%' }"></canvas>
    <div class="container" :style="{ paddingTop: '140px', paddingBottom: '140px', position: 'relative', zIndex: 2 }">
      <div :style="{ maxWidth: '920px' }">
        <div :style="{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '32px' }">
          <span :style="{ width: '8px', height: '8px', background: 'var(--accent)' }"></span>
          <span class="mono" :style="{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--fg-2)' }">
            Move your cursor — the grid responds.
          </span>
        </div>
        <h1 :style="{ fontSize: 'clamp(64px, 9vw, 144px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.045em', marginBottom: '40px' }">
          A studio<br />
          built for <span :style="{ color: 'var(--accent)' }">signal</span>.<br />
          <span :style="{ fontFamily: `'Press Start 2P', monospace`, fontSize: '0.36em', letterSpacing: 0, color: 'var(--fg-2)' }">
            Not noise.
          </span>
        </h1>
        <p :style="{ fontSize: '20px', color: 'var(--fg-2)', lineHeight: 1.5, maxWidth: '54ch', marginBottom: '40px', fontWeight: 300 }">
          Three-person digital brand studio working out of the North East. Web, identity, and social — the things modern brands actually run on, run by people who actually run them.
        </p>
        <div :style="{ display: 'flex', gap: '14px', flexWrap: 'wrap' }">
          <NuxtLink to="/contact" class="pxbtn primary" data-hov>Start a project →</NuxtLink>
          <a href="#process" class="pxbtn" data-hov>How we work</a>
        </div>
      </div>
    </div>
    <HeroTicker />
  </div>
</template>
