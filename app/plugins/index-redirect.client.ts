export default defineNuxtPlugin(() => {
  const path = window.location.pathname
  if (path === '/index.html') {
    const search = window.location.search || ''
    window.location.replace('/' + search)
  }
});