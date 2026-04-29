<script setup lang="ts">
defineProps<{ error: { statusCode: number; statusMessage?: string } }>()
useReveal(); usePixelCursor()
useHead({ title: '404 — NE Digital Brand Studio' })
</script>

<template>
  <div>
    <SiteNav />
    <main :style="{ paddingTop: '72px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
      <div class="container" :style="{ textAlign: 'center', padding: '120px 32px' }">
        <div :style="{ fontFamily: `'Press Start 2P', monospace`, fontSize: 'clamp(80px, 14vw, 200px)', color: 'var(--accent)', letterSpacing: 0, lineHeight: 1, marginBottom: '32px' }">
          {{ error.statusCode || 404 }}
        </div>
        <h1 :style="{ fontSize: '40px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '16px' }">Signal lost.</h1>
        <p :style="{ fontSize: '18px', color: 'var(--fg-2)', maxWidth: '50ch', margin: '0 auto 40px' }">
          {{ error.statusMessage || "The page you're after doesn't exist — or it's been retired. Try the archive or head home." }}
        </p>
        <div :style="{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }">
          <NuxtLink to="/" class="pxbtn primary" data-hov>← Back home</NuxtLink>
          <NuxtLink to="/work" class="pxbtn" data-hov>View archive</NuxtLink>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
