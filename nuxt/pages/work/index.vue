<script setup lang="ts">
useReveal(); usePixelCursor()
useHead({ title: 'Work — Studio Northa' })
</script>

<template>
  <div>
    <SiteNav />
    <main :style="{ paddingTop: '120px' }">
      <section class="section" :style="{ paddingTop: '40px' }">
        <div class="container reveal">
          <div class="section-eyebrow"><span class="blk"></span><span>Archive</span></div>
          <h1 class="section-title">All work.</h1>
          <p class="section-sub">Every engagement we've shipped, in reverse-chronological order.</p>
        </div>
      </section>
      <SectionWork :show-header="false" />
    </main>
    <SiteFooter />
  </div>
</template>
