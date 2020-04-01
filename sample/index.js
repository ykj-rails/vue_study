// componet
Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

var app = new Vue({
  // option
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    message2: 'Hello!',
    number: 100,
    ok: true,
    messageHtml: 'Hello <span style="color:red;">Vue.js!</span>',
    count: 10,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo',
      age: 30
    },
    colors: ['Red', 'Green', 'Blue'],
    toggle: false,
    now: ''
  },
  methods: {
    onclick: function() {
      this.now = new Date().toLocaleString()
    },
    clickHandler(e) {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
})
