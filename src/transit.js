import { ref, computed } from 'vue';
import { useLocalstorage } from './composables/localstorage.js';

export const{ value: tasks }= useLocalstorage('tasks', []);


export const page = ref('#home');

export const onHome = computed(()=>{
    return page.value === '#home'
  })

  export const onConverter = computed(()=>{
    return page.value === '#converter'
  })

  export const onFav = computed(()=>{
    return page.value === '#fav'
  })

  export const onHoraire = computed(()=>{
    return page.value === '#horaire'
  })



//   export const {
//     value: favourites
// } = useLocalstorage('favourites', {});


