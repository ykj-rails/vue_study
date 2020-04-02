// componet
Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

// filter
Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

Vue.filter('readMore', function(text, length, suffix) {
  return text.substring(0, length) + suffix
})

Vue.filter('toUSD', function(jpy) {
  return jpy / 100
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
    now: '',
    jpyPrice: 298000,
    price: 29800,
    url: 'https://www.google.co.jp/',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.'
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
