import {createApp, ref, computed} from 'vue';


createApp({
    setup(){

        const title = ref('Проверка ИНН');

        const inn = ref('');

        const isInnCorrect = computed(() => {
            if(inn.value.lenght < 10) return false;

            let digits = inn.value.split('').map(item => +item);


            if ((digits[9] == ((-1 * digits[0] + 5 * digits[1] + 7 * digits[2] + 9 * digits[3] + 4 * digits[4] + 6 * digits[5] + 10 * digits[6] + 5 * digits[7] + 7 * digits[8]) % 11) % 10)) return true 
            else return false

        });
        
        const gender = computed(() => {

            let digits = inn.value.split('').map(item => +item);

            if(digits[8] % 2 == 0){
                return 'Пол: женский';
            } else {
                return 'Пол: мужской';
            }

        });


        const bDay = computed(() => {

            let D = new Date(1900,0,1);

            let digits = inn.value.split('').map(item => +item);
            let digitsDate = inn.value.substring(0, 5) * 1 - 1;

            if(digits[0] * 1 < 5){
                D.setDate(D.getDate() + digitsDate);
                let curr_date = D.getDate();
                let curr_month = D.getMonth() + 1;
                let curr_year = D.getFullYear();


                curr_month < 10 ? curr_month = ""  + '0' + curr_month : curr_month;
                curr_date < 10 ? curr_date = "" + '0' + curr_date : curr_date;
                let birthDay = `${curr_date}` + '.' + `${curr_month}` + '.' + `${curr_year}`;
                
                console.log(birthDay);

                let birhtDate = birthDay.substring(0, 2);
                console.log(birhtDate);

                let birthMonth = birthDay.substring(3, 5);
                console.log(birthMonth);

                let birthYear = birthDay.substring(6, 10);
                console.log(birthYear);

                let zodiacSign = '';

                if (birthMonth==1 && birhtDate>=20 || birthMonth==2 && birhtDate<=18){
                    zodiacSign = "Водолей";
                } else if (birthMonth==2 && birhtDate>=19 || birthMonth==3 && birhtDate<=20) {
                    zodiacSign="Рыбы";
                } else if (birthMonth==3 && birhtDate>=21 || birthMonth==4 && birhtDate<=19) {
                    zodiacSign="Овен";
                } else if (birthMonth==4 && birhtDate>=20 || birthMonth==5 && birhtDate<=20) {
                    zodiacSign="Телец";
                } else if (birthMonth==5 && birhtDate>=21 || birthMonth==6 && birhtDate<=21) {
                    zodiacSign="Близнецы";
                } else if (birthMonth==6 && birhtDate>=22 || birthMonth==7 && birhtDate<=22) {
                    zodiacSign="Рак";
                } else if (birthMonth==7 && birhtDate>=23 || birthMonth==8 && birhtDate<=22) {
                    zodiacSign="Лев";
                } else if (birthMonth==8 && birhtDate>=23 || birthMonth==9 && birhtDate<=22) {
                    zodiacSign="Дева";
                } else if (birthMonth==9 && birhtDate>=23 || birthMonth==10 && birhtDate<=22) {
                    zodiacSign="Весы";
                } else if (birthMonth==10 && birhtDate>=23 || birthMonth==11 && birhtDate<=21) {
                    zodiacSign="Скорпион";
                } else if (birthMonth==11 && birhtDate>=22 || birthMonth==12 && birhtDate<=21) {
                    zodiacSign="Стрелец";
                } else if (birthMonth==12 && birhtDate>=22 || birthMonth==1 && birhtDate<=19) {
                    zodiacSign="Козерог";
                }

                console.log(zodiacSign);

                let n = (birthYear - 1684)%60+1;
                let z = n%12;
                if(z==0){
                    z = 12;
                }

                let name = new Array('', 'Крыса', 'Бык', 'Тигр', 'Кролик', 'Дракон', 'Змея', 'Лошадь', 'Овца', 'Обезьяна', 'Петух', 'Собака', 'Свинья');
                console.log(name[z]);

                return `Дата рождения: ${birthDay}, знак зодиака: ${zodiacSign}, символ: ${name[z]}`
            }


        });


        return {
            title,
            inn, 
            isInnCorrect,
            gender,
            bDay
        }

    }
}).mount('#app');



// 3575405087
