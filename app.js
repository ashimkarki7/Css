//controling html part with vue app
//creates vue app can be stored as variable or constant
//const app = vue.createApp(); or // // Vue.createApp({
// //     data: function(){


const app =Vue.createApp({
data (any){
    console.log('print',any)
    return {
        courseGoal: 'Finish the Course and learn Vue!2',
        courseGoalA: 'Masrer learn Vue!2',
        courseLink: 'https://ekbana.com',
        vueLink: 'https://vuejs.org/'

    }
},
methods:{
    outputGoal(){
const randomNumber = Math.random();
if (randomNumber < 0.5){
    return this.courseGoal;
} else {
    return this.courseGoalA;
}
    }

}
});

app.mount('#user-goal')

// // })
//which part of html to control
   