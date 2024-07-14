var app = new Vue({
  el: '#app',
  data: {
    open: false,
    text: `Happy BirthDay Noona 🤗 🤗 🤗`
  },
  methods: {
    click: function () {
      this.open = !this.open;
    }
  },
  watch: {
    open: function () {
      if (this.open == true) {
        document.body.className = 'open';
      }
      else {
        document.body.className = '';
      }
    }
  }
})

