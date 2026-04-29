<script setup lang="ts">
useReveal()
usePixelCursor()
useHead({ title: 'Studio Northa — web, brand & social, North East UK' })
</script>

<template>
  <div>
    <SiteNav />
    <main>
      <HeroParticles />
      <SectionServices />
      <SectionWork :limit="3" />
      <SectionProcess />
      <SectionPricing />
      <SectionTestimonials />
      <SectionContact />
    </main>
    <SiteFooter />
  </div>
</template>
