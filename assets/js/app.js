import {createApp, ref, computed} from 'vue';


createApp({
    setup(){

        const title = ref('Проверка ИНН');


        const addToList = () => {

            valueCode.value = valueCode.value.split('');

            // console.log(+valueCode.value[8], typeof(+valueCode.value[8]));

        }

        const checkGender = computed(() => {
            checkGender.value = ref('');

            if(+valueCode.value[8] % 2 == 0){
                checkGender.value = ref('Пол: женский');
                // console.log(+valueCode.value[8]);

            } else {
                checkGender.value = ref('Пол: мужской');
                // console.log(+valueCode.value[8]);

                
            }

        })

        



        const valueCode = ref('');

        

        return {
            title,
            addToList,
            valueCode,
            checkGender

        }

    }
}).mount('#app');

