// Vue.createApp({
//     data: function(){

//     }
// })
Vue.createApp({
    data(){
        return{
goals:[],
enteredValue: ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue)
this.enteredValue =''
        }
    }
}).mount('#app');
// const vm = app.mount('#app')
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listElUL = document.querySelector('ul');
// function addGoal (){
//     const enteredValue = inputEl.value;
//     const listItemEl=document.createElement('li');
// listItemEl.textContent = enteredValue;
// listElUL.appendChild(listItemEl)
// inputEl.value
// }

// buttonEl.addEventListener('click', addGoal);