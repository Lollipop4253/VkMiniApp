import bridge from '@vkontakte/vk-bridge'

export default defineNuxtPlugin(() => {
  bridge.send('VKWebAppInit')
  
  return {
    provide: {
      vkBridge: bridge
    }
  }
})