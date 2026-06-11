<template>
  <section id="tty">
    <div class="term rv" ref="termEl" @click="focusInput">
      <div class="term-bar">
        <i /><i /><i />
        <span class="ttl">{{ ttl }}</span>
      </div>
      <div class="term-body" ref="termBodyEl">
        <div class="term-out">Last login: just now from the internet.</div>
        <div class="term-line">
          <span class="ps1">{{ ps1 }}</span>
          <input
            ref="inputEl"
            type="text"
            autocomplete="off"
            autocapitalize="none"
            spellcheck="false"
            aria-label="terminal input"
            @keydown.enter="onEnter"
          />
        </div>
      </div>
    </div>
    <div class="term-chips rv">
      <span class="lbl">try:</span>
      <button v-for="cmd in chips" :key="cmd" @click="runCmd(cmd)">{{ cmd }}</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ currentPage: string }>()
const emit = defineEmits<{ navigate: [page: string] }>()

const termEl = ref<HTMLDivElement>()
const termBodyEl = ref<HTMLDivElement>()
const inputEl = ref<HTMLInputElement>()

const chips = ['ls', 'cd about', 'cd stack', 'cd archive', 'cd writing', 'cd contact', 'whoami']

// prompt reflects current location
const path = computed(() => (props.currentPage ? '~/' + props.currentPage : '~'))
const ps1 = computed(() => `guest@hijiri88.dev:${path.value}$`)
const ttl = computed(() => `guest@hijiri88.dev: ${path.value}`)

const DIRS: Record<string, string> = {
  about: 'about', stack: 'stack', archive: 'archive', writing: 'writing', contact: 'contact',
}

const CMDS: Record<string, string> = {
  help: `Navigation works like a shell. This site is a filesystem.
  ls            list what's here
  cd &lt;dir&gt;      enter a page   (e.g. cd about)
  cd ..  / cd ~ go back to home
  pwd           print current location
  whoami        a quick line about me
  clear         clear the screen
Directories: about  stack  archive  writing  contact`,
  ls: `<span class="a">about</span>  <span class="a">stack</span>  <span class="a">archive</span>  <span class="a">writing</span>  <span class="a">contact</span>  <span class="dim">.secrets</span>`,
  'ls -l': `drwxr-xr-x  guest  about     who am I
drwxr-xr-x  guest  stack     go, ruby, kotlin, ...
drwxr-xr-x  guest  archive   internships since 2022
drwxr-xr-x  guest  writing   articles I've written
drwxr-xr-x  guest  contact   say hello
-r--------  guest  <span class="dim">.secrets</span>`,
  'ls -a': `.  ..  <span class="a">about</span>  <span class="a">stack</span>  <span class="a">archive</span>  <span class="a">writing</span>  <span class="a">contact</span>  <span class="dim">.secrets</span>`,
  whoami: `Hijiri Sato — backend engineer / student.
Smart ICT Solution Lab, Tokyo Denki Univ.
I build the parts you never see.`,
  uname: `hijiri88.dev 2.0.0 #1 backend-engineer Tokyo/JP`,
  'uname -a': `hijiri88.dev 2.0.0 #1 backend-engineer Tokyo/JP`,
  'cat .secrets': `cat: .secrets: Permission denied`,
  'cat secrets': `cat: secrets: Permission denied`,
  history: `  1  cd about
  2  cd stack
  3  whoami
  4  ls`,
}

function print(html: string) {
  if (!termBodyEl.value) return
  const d = document.createElement('div')
  d.className = 'term-out'
  d.innerHTML = html
  termBodyEl.value.insertBefore(d, termBodyEl.value.lastElementChild)
  termBodyEl.value.scrollTop = termBodyEl.value.scrollHeight
}

function cd(arg: string) {
  const a = arg.trim().replace(/\/+$/, '')
  if (a === '' || a === '~' || a === '/') { emit('navigate', ''); return }
  if (a === '..' || a === '../') {
    if (props.currentPage === '') return
    emit('navigate', ''); return
  }
  if (a === '.') return
  const key = a.replace(/^\.?\//, '').toLowerCase()
  if (DIRS[key]) { emit('navigate', DIRS[key]); return }
  print(`cd: no such file or directory: ${a.replace(/</g, '&lt;')}`)
}

function runCmd(raw: string) {
  const input = raw.trim()
  const route = props.currentPage || ''
  print(`<span class="dim">guest@hijiri88.dev:${route ? '~/' + route : '~'}$</span> ${input.replace(/</g, '&lt;')}`)
  const cmd = input.toLowerCase().replace(/\s+/g, ' ')
  if (!cmd) { /* noop */ }
  else if (cmd === 'clear') { termBodyEl.value?.querySelectorAll('.term-out').forEach(o => o.remove()) }
  else if (cmd === 'cd' || cmd.startsWith('cd ')) { cd(input.slice(2)) }
  else if (cmd === 'pwd') { print(`/home/guest${route ? '/' + route : ''}`) }
  else if (cmd === 'date') { print(new Date().toString()) }
  else if (DIRS[cmd]) { print(`${cmd}: command not found <span class="dim">— did you mean</span> <span class="a">cd ${cmd}</span><span class="dim">?</span>`) }
  else if (CMDS[cmd] !== undefined) { print(CMDS[cmd]) }
  else if (cmd === 'sudo' || cmd.startsWith('sudo ')) {
    print(`[sudo] password for guest:
guest is not in the sudoers file. This incident will be reported. <span class="a">(just kidding)</span>`)
  }
  else if (cmd === 'exit' || cmd === 'logout') { print(`There is no escape. <span class="dim">(this is a portfolio)</span>`) }
  else { print(`${cmd.split(' ')[0].replace(/</g, '&lt;')}: command not found`) }
}

function onEnter() {
  if (!inputEl.value) return
  runCmd(inputEl.value.value)
  inputEl.value.value = ''
}

function focusInput() {
  inputEl.value?.focus()
}
</script>
