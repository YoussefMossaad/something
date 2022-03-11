//console.log("hello, vue");
const app = Vue.createApp({
  data(){
    return{
      showBooks: true,
      title: 'Moose',
      author: 'Youssef Mossaad',
      age: 18,
      x: 0,
      y: 0
    }
  },
  methods: {
    //changeTitle(title) {
      //this.title = 'Words of Randiance'
      //this.title = title
    //}
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data){
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
this.x = e.offsetX
this.y = e.offsetY
   }
   if (x===1500){
     return: alert(past 1500)
   }
  }
})

app.mount('#app')
