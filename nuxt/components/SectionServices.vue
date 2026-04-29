<script setup lang="ts">
const services = [
  { code: '01', title: 'Web Development', body: 'Hand-built sites in modern stacks. Fast, accessible, owned outright.', tools: ['Nuxt', 'Astro', 'Webflow'] },
  { code: '02', title: 'Web Design', body: 'Layouts that pull their weight — every grid, weight, and pixel doing a job.', tools: ['Figma', 'Framer'] },
  { code: '03', title: 'Brand Identity', body: 'Logos, marks, type systems, and the rules that hold them together.', tools: ['Identity', 'Guidelines'] },
  { code: '04', title: 'Graphic Design', body: 'Print, packaging, decks, ads — the unsexy work that compounds.', tools: ['Print', 'Editorial'] },
  { code: '05', title: 'Social Management', body: 'Owned channels run as a discipline, not as filler. Calendars + creative + reporting.', tools: ['IG', 'TikTok', 'LinkedIn'] },
  { code: '06', title: 'Content Creation', body: 'Photo, short-form video, and the assets that keep social fed for months.', tools: ['Photo', 'Video'] },
  { code: '07', title: 'SEO', body: 'Technical audits and content strategy that actually rank and convert.', tools: ['Audits', 'Schema'] },
  { code: '08', title: 'Logo Design', body: 'Standalone marks for founders who need a flag before everything else.', tools: ['Wordmark', 'Symbol'] },
]
</script>

<template>
  <section id="services" class="section" :style="{ borderTop: '1px solid var(--line)' }">
    <div class="container">
      <div class="reveal">
        <div class="section-eyebrow"><span class="blk"></span><span>01 / Services</span></div>
        <h2 class="section-title">Eight things,<br />done in-house.</h2>
        <p class="section-sub">No reselling, no white-label middlemen. The three of us cover what most brands actually need — and we bring in trusted collaborators when it goes beyond that.</p>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }">
        <div v-for="s in services" :key="s.code" class="reveal" data-hov
          @mouseenter="(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--bg-2)')"
          @mouseleave="(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--bg)')"
          :style="{
            padding: '32px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
            background: 'var(--bg)', minHeight: '280px', position: 'relative', cursor: 'pointer',
            transition: 'background .15s',
          }">
          <div :style="{ display: 'flex', justifyContent: 'space-between', marginBottom: '56px' }">
            <span class="mono" :style="{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '.12em' }">/ {{ s.code }}</span>
            <span class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)' }">↗</span>
          </div>
          <h3 :style="{ fontSize: '22px', fontWeight: 600, marginBottom: '12px', letterSpacing: '-0.01em' }">{{ s.title }}</h3>
          <p :style="{ fontSize: '14px', color: 'var(--fg-2)', lineHeight: 1.55, marginBottom: '24px' }">{{ s.body }}</p>
          <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '6px' }">
            <span v-for="t in s.tools" :key="t" class="mono" :style="{
              fontSize: '10px', padding: '3px 8px', border: '1px solid var(--line-2)',
              color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '.1em',
            }">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
