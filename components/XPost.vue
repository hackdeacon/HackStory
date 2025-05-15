<template>
    <div ref="container"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    url: String,
})

const container = ref(null)

const loadTweet = () => {
    if (!container.value) return
    container.value.innerHTML = `
      <blockquote class="twitter-tweet">
        <a href="${props.url}"></a>
      </blockquote>
    `
    window.twttr?.widgets.load(container.value)
}

const loadScript = () => {
    if (!window.twttr) {
        const script = document.createElement('script')
        script.src = 'https://platform.twitter.com/widgets.js'
        script.async = true
        script.onload = loadTweet
        document.head.appendChild(script)
    } else {
        loadTweet()
    }
}

onMounted(loadScript)

watch(() => props.url, loadTweet)
</script>
  
