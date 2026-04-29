<script setup lang="ts">
useReveal(); usePixelCursor()
useHead({ title: 'Services — Studio Northa' })
</script>

<template>
  <div>
    <SiteNav />
    <main :style="{ paddingTop: '72px' }">
      <SectionServices />
      <SectionPricing />
      <SectionContact />
    </main>
    <SiteFooter />
  </div>
</template>
