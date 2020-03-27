// componet
Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

var app = new Vue({
  // option
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    count: 10,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue'],
    user: {
      firstName: 'Taro',
      LastName: 'Yamada',
      age: 30
    },
    toggle: false,
    now: ''
  },
  methods: {
    onclick: function() {
      this.now = new Date().toLocaleString()
    }
  }
})
