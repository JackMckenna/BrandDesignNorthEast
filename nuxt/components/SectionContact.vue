<script setup lang="ts">
import { reactive, ref } from 'vue'

const props = defineProps<{ embedded?: boolean }>()

const CONTACT_EMAIL = 'hello@studio-northa.co.uk'
const CONTACT_PHONE_DISPLAY = '07961 011 032'
const CONTACT_PHONE_TEL = '+447961011032'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const form = reactive({ name: '', email: '', company: '', package: 'Studio', services: [] as string[], message: '' })
const packages = ['Launch', 'Studio', 'Deluxe']
const errors = ref<Record<string, string>>({})
const sent = ref(false)
const submitting = ref(false)
const submitError = ref('')
const svcs = ['Website Development', 'Web Design', 'Branding', 'Social', 'Logo', 'SEO', 'Content']

const validate = () => {
  const e: Record<string, string> = {}
  if (!form.name.trim()) e.name = 'required'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'invalid'
  if (form.message.trim().length < 12) e.message = 'too short'
  if (form.services.length === 0) e.services = 'pick at least one'
  errors.value = e
  return Object.keys(e).length === 0
}

const submit = async (e: Event) => {
  e.preventDefault()
  if (!validate() || submitting.value) return
  submitError.value = ''
  submitting.value = true
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company || '—',
        package: form.package,
        services: form.services.join(', '),
        message: form.message,
        _subject: `New enquiry — ${form.name}`,
        _replyto: form.email,
        _template: 'box',
      }),
    })
    const raw = await res.text()
    console.log('[contact] formsubmit status:', res.status, 'body:', raw)
    let data: any = {}
    try { data = JSON.parse(raw) } catch { /* non-JSON response */ }
    if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`)
    if (data?.success && String(data.success).toLowerCase() === 'false') {
      throw new Error(data.message || 'submission failed')
    }
    sent.value = true
  } catch (err: any) {
    console.error('[contact] submit error:', err)
    submitError.value = err?.message
      ? `Couldn't send: ${err.message}. Email ${CONTACT_EMAIL} directly if this keeps happening.`
      : `Couldn't send. Email ${CONTACT_EMAIL} directly.`
  } finally {
    submitting.value = false
  }
}

const toggleSvc = (s: string) => {
  const idx = form.services.indexOf(s)
  if (idx === -1) form.services.push(s); else form.services.splice(idx, 1)
}
const reset = () => {
  Object.assign(form, { name:'', email:'', company:'', package: 'Studio', services:[], message:'' })
  sent.value = false
  submitError.value = ''
}
</script>

<template>
  <section id="contact" class="section" :style="{ borderTop: embedded ? 'none' : '1px solid var(--line)' }">
    <div class="container">
      <div class="r-cols-2-asym" :style="{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px' }">
        <div class="reveal">
          <div class="section-eyebrow"><span class="blk"></span><span>07 / Contact</span></div>
          <h2 class="section-title">Let's start<br />a project.</h2>
          <p class="section-sub" :style="{ marginBottom: '40px' }">Tell us what you're building. Inside one business day, we'll come back with how we can help sharpen your brand and ship it.</p>
          <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: 'var(--fg-2)' }">
            <div :style="{ display: 'flex', gap: '12px', alignItems: 'center' }">
              <span :style="{ width: '8px', height: '8px', background: 'var(--accent)' }"></span>
              <a :href="`mailto:${CONTACT_EMAIL}`" data-hov class="mono" :style="{ textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '11px', color: 'inherit' }">{{ CONTACT_EMAIL }}</a>
            </div>
            <div :style="{ display: 'flex', gap: '12px', alignItems: 'center' }">
              <span :style="{ width: '8px', height: '8px', background: 'var(--accent)' }"></span>
              <a :href="`tel:${CONTACT_PHONE_TEL}`" data-hov class="mono" :style="{ textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '11px', color: 'inherit' }">{{ CONTACT_PHONE_DISPLAY }}</a>
            </div>
            <div :style="{ display: 'flex', gap: '12px', alignItems: 'center' }">
              <span :style="{ width: '8px', height: '8px', background: 'var(--accent)' }"></span>
              <span class="mono" :style="{ textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '11px' }">Newcastle upon Tyne, UK</span>
            </div>
          </div>
        </div>

        <form @submit="submit" class="reveal pxcorners form-card" :style="{ border: '1px solid var(--line)', background: 'var(--bg-2)', padding: '40px', position: 'relative' }">
          <span class="pc tl"></span><span class="pc tr"></span><span class="pc bl"></span><span class="pc br"></span>
          <div v-if="sent" :style="{ minHeight: '540px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '20px' }">
            <div :style="{ fontFamily: `'Press Start 2P', monospace`, fontSize: '28px', color: 'var(--accent)', letterSpacing: 0 }">✓ TRANSMITTED</div>
            <p :style="{ fontSize: '18px', color: 'var(--fg)', lineHeight: 1.5, maxWidth: '40ch' }">
              Got it, {{ form.name.split(' ')[0] }}. We'll come back to you at <span :style="{ color: 'var(--accent)' }">{{ form.email }}</span> inside one business day.
            </p>
            <button type="button" class="pxbtn" data-hov @click="reset">Send another →</button>
          </div>
          <div v-else :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
            <div class="r-cols-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }">
              <div>
                <label class="field-label">Name <span v-if="errors.name" :style="{ color: 'var(--magenta)' }">{{ errors.name }}</span></label>
                <input v-model="form.name" data-hov :class="['field', errors.name ? 'error' : '']" />
              </div>
              <div>
                <label class="field-label">Email <span v-if="errors.email" :style="{ color: 'var(--magenta)' }">{{ errors.email }}</span></label>
                <input v-model="form.email" data-hov :class="['field', errors.email ? 'error' : '']" />
              </div>
            </div>
            <div>
              <label class="field-label">Company / project</label>
              <input v-model="form.company" data-hov class="field" />
            </div>
            <div>
              <label class="field-label">Package</label>
              <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--line)' }">
                <button v-for="(p, i) in packages" :key="p" type="button" data-hov class="mono"
                  @click="form.package = p"
                  :style="{
                    all: 'unset', cursor: 'pointer', padding: '12px 0', textAlign: 'center',
                    fontSize: '12px', letterSpacing: '.06em', textTransform: 'uppercase',
                    background: form.package === p ? 'var(--accent)' : 'transparent',
                    color: form.package === p ? 'var(--bg)' : 'var(--fg-2)',
                    borderRight: i < packages.length - 1 ? '1px solid var(--line)' : 'none',
                  }">{{ p }}</button>
              </div>
            </div>
            <div>
              <label class="field-label">Services <span v-if="errors.services" :style="{ color: 'var(--magenta)' }">{{ errors.services }}</span></label>
              <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '6px' }">
                <button v-for="s in svcs" :key="s" type="button" data-hov class="mono"
                  @click="toggleSvc(s)"
                  :style="{
                    all: 'unset', cursor: 'pointer', padding: '8px 14px', fontSize: '12px',
                    textTransform: 'uppercase', letterSpacing: '.1em',
                    border: '1px solid ' + (form.services.includes(s) ? 'var(--accent)' : 'var(--line)'),
                    background: form.services.includes(s) ? 'var(--accent)' : 'transparent',
                    color: form.services.includes(s) ? 'var(--bg)' : 'var(--fg-2)',
                  }">{{ s }}</button>
              </div>
            </div>
            <div>
              <label class="field-label">Tell us about it <span v-if="errors.message" :style="{ color: 'var(--magenta)' }">{{ errors.message }}</span></label>
              <textarea v-model="form.message" data-hov rows="5" :class="['field', errors.message ? 'error' : '']" :style="{ resize: 'vertical', fontFamily: `'JetBrains Mono', monospace` }"></textarea>
            </div>
            <p v-if="submitError" :style="{ fontSize: '13px', color: 'var(--magenta)', lineHeight: 1.4, marginTop: '8px' }">{{ submitError }}</p>
            <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }">
              <span class="mono" :style="{ fontSize: '11px', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.12em' }">Encrypted in transit ▸</span>
              <button type="submit" :disabled="submitting" class="pxbtn primary" data-hov :style="{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }">
                {{ submitting ? 'Sending…' : 'Send transmission →' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
