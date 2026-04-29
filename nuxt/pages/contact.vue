<script setup lang="ts">
useReveal(); usePixelCursor()
useHead({ title: 'Contact — Studio Northa' })
</script>

<template>
  <div>
    <SiteNav />
    <main :style="{ paddingTop: '72px' }">
      <SectionContact :embedded="true" />
    </main>
    <SiteFooter />
  </div>
</template>
