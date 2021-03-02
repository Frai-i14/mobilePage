/////////Отключение стандартного поведения браузера при клике на ссылки в футере//////////////////////
let a = document.querySelectorAll('.footer__link');
a.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
    });
});



//////////////////////////Добавление цветов элементам/////////////////////////////////////////////////////////
let lineAll = document.querySelectorAll('.quality__item_line');
lineAll[0].style.background = '#91ACF1';
lineAll[1].style.background = '#91E0F1';
lineAll[2].style.background = '#BB91F1';
lineAll[3].style.background = '#91F1CE';
lineAll[4].style.background = '#F1CB91';


//Работа слайдера в галерее////////////////////////////////////////////////////////////////////
function SliderGallery(){
    const images = document.querySelectorAll('.gallery__slider .slider-line img');
    const sliderLine = document.querySelector('.gallery__slider .slider-line');
    let count = 0;
    let width;
    const sliderNavAll = document.querySelectorAll('.gallery__wrap .slider_nav');
    
    function init() {
        width = document.querySelector('.gallery__slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }
    
    init();
    window.addEventListener('resize', init);
    
    document.querySelector('.gallery__slider .slider-next').addEventListener('click', function () {
        if(count === images.length -1){
            sliderNavAll[count].classList.remove('nav-active');
            sliderNavAll[0].classList.add('nav-active');
        }
        count++;
        if (count >= images.length) {
            count = 0;
        }
        rollSlider();
        sliderNavAll[count -1].classList.remove('nav-active');
        sliderNavAll[count].classList.add('nav-active');
    });
    
    document.querySelector('.gallery__slider .slider-prev').addEventListener('click', function () {
        if(count === 0){
            sliderNavAll[count].classList.remove('nav-active');
            let a = images.length - 1;
            sliderNavAll[a].classList.add('nav-active');
        }
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        rollSlider();
        sliderNavAll[count + 1].classList.remove('nav-active');
        sliderNavAll[count].classList.add('nav-active');
    });
    
    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    
    }
}
SliderGallery();
//Работа слайдера в отзывах//////////////////////////////////////////////
function SliderReviews(){
    const images = document.querySelectorAll('.reviews__slider .slider-line img');
    const sliderLine = document.querySelector('.reviews__slider .slider-line');
    let count = 0;
    let width;
    const sliderNavAll = document.querySelectorAll('.reviews__wrap .slider_nav');

    function init() {
        width = document.querySelector('.reviews__slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }

    init();
    window.addEventListener('resize', init);

    document.querySelector('.reviews__slider .slider-next').addEventListener('click', function () {
        if(count === images.length -1){
            sliderNavAll[count].classList.remove('nav-active');
            sliderNavAll[0].classList.add('nav-active');
        }
        count++;
        if (count >= images.length) {
            count = 0;
        }
        rollSlider();
        sliderNavAll[count -1].classList.remove('nav-active');
        sliderNavAll[count].classList.add('nav-active');
    });

    document.querySelector('.reviews__slider .slider-prev').addEventListener('click', function () {
        if(count === 0){
            sliderNavAll[count].classList.remove('nav-active');
            let a = images.length - 1;
            sliderNavAll[a].classList.add('nav-active');
        }
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        rollSlider();
        sliderNavAll[count + 1].classList.remove('nav-active');
        sliderNavAll[count].classList.add('nav-active');
    });

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';

    }
}
SliderReviews();


//////////////Переключение формы стола в калькуляторе//////////////////////////////////////////////////////////
const rectangle = document.querySelectorAll('.cost__form_tab_wrap_btn')[0];
const circle = document.querySelectorAll('.cost__form_tab_wrap_btn')[1];

rectangle.addEventListener('click', ()=>{
    if(rectangle.classList.contains('tab-active') == false){
        circle.classList.remove('tab-active');
        rectangle.classList.add('tab-active');
        document.querySelector('.cost__wrapper').style.transform = 'translateX(0px)';
    }
});

circle.addEventListener('click', ()=>{
    if(circle.classList.contains('tab-active') == false){
        rectangle.classList.remove('tab-active');
        circle.classList.add('tab-active');

        document.querySelector('.cost__wrapper').style.transform = 'translateX(-440px)';
    }
});



const btn = document.querySelectorAll('.basket_btn'); // кнопка рассчета/в корзину/

//////////////////////////////Валидация значений min max///////////////////////////////////
let validValueRange = false;
document.querySelector('.width').addEventListener('input', () => {
    let a = +document.querySelector('.width').value;
    if(a > 140) validValueRange = false,
                document.querySelector('.valid_max').style.display = 'block',
                document.querySelector('.valid_min').style.display = 'none',
                document.querySelector('.width').style.border = '1px solid red',
                document.querySelector('.cost__wrapper').style.height = '610px';
    else if(a < 50) validValueRange = false,
                    document.querySelector('.valid_min').style.display = 'block',
                    document.querySelector('.valid_max').style.display = 'none',
                    document.querySelector('.width').style.border = '1px solid red',
                    document.querySelector('.cost__wrapper').style.height = '610px';
    else document.querySelector('.valid_max').style.display = 'none', 
         document.querySelector('.valid_min').style.display = 'none',
         document.querySelector('.width').style.border = 'none',
         document.querySelector('.cost__wrapper').style.height = '520px',
         validValueRange = true;
});

document.querySelector('.diameter').addEventListener('input', () => {
    let a = +document.querySelector('.diameter').value;
    if(a > 140) validValueRange = false,
                document.querySelector('.valid_max-di').style.display = 'block',
                document.querySelector('.valid_min-di').style.display = 'none',
                document.querySelector('.diameter').style.border = '1px solid red',
                document.querySelector('.cost__wrapper').style.height = '610px';
    else if(a < 50) validValueRange = false,
                    document.querySelector('.valid_min-di').style.display = 'block',
                    document.querySelector('.valid_max-di').style.display = 'none',
                    document.querySelector('.cost__wrapper').style.height = '610px',
                    document.querySelector('.diameter').style.border = '1px solid red';
    else document.querySelector('.valid_max-di').style.display = 'none', 
         document.querySelector('.valid_min-di').style.display = 'none',
                document.querySelector('.diameter').style.border = 'none',
                document.querySelector('.cost__wrapper').style.height = '520px',
                validValueRange = true;
});

document.querySelector('.length').addEventListener('input', () => {
    let a = +document.querySelector('.length').value;
    if(a < 50)  validValueRange = false,
                document.querySelector('.valid_min-len').style.display = 'block',
                document.querySelector('.length').style.border = '1px solid red',
                document.querySelector('.cost__wrapper').style.height = '610px';
    else document.querySelector('.valid_min-len').style.display = 'none', 
                // document.querySelector('.cost__wrapper').style.height = '510px',
                document.querySelector('.length').style.border = 'none',
                validValueRange = true;
});

function validate(a, b, c, e, d) {
        ///////////////Проверка пустых значений
        let a1 = false,
            b1 = false,
            c1 = false,
            e1 = false,
            d1 = false,
            validAll = false;

        if(rectangle.classList.contains('tab-active')){

            if(a == '' || a == 0) {
                a1 = false;
                document.querySelector('.length').setAttribute('placeholder', 'Укажите длину!');
                document.querySelector('.length').style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelector('.length').style.border = 'none';
                    document.querySelector('.length').setAttribute('placeholder', 'Длина, см');
                }, 2000);
            }else a1 = true;
    
            if(b == '' || b == 0){
                b1 = false;
                document.querySelector('.width').setAttribute('placeholder', 'Укажите ширину!');
                document.querySelector('.width').style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelector('.width').style.border = 'none';
                    document.querySelector('.width').setAttribute('placeholder', 'Ширина, см');     
                }, 2000);
            }else b1 = true;
    
            if(c == '' || c == 0) {
                c1 = false;
                document.querySelectorAll('.quantity')[0].setAttribute('placeholder', 'Укажите кол-во!');
                document.querySelectorAll('.quantity')[0].style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelectorAll('.quantity')[0].setAttribute('placeholder', 'Кол-во, шт');
                    document.querySelectorAll('.quantity')[0].style.border = 'none';
                }, 2000);
            }else c1 = true;

            if(a1 == true && b1 == true && c1 == true) validAll = true;
        }else {
            if(d == '' || d == 0) {
                d1 = false;
                document.querySelector('.diameter').setAttribute('placeholder', 'Укажите диаметр!');
                document.querySelector('.diameter').style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelector('.diameter').setAttribute('placeholder', 'Диаметр, см');
                    document.querySelector('.diameter').style.border = 'none';
                }, 2000);
            }else d1 = true;

            if(e == '' || e == 0) {
                e1 = false;
                document.querySelectorAll('.quantity')[1].setAttribute('placeholder', 'Укажите кол-во!');
                document.querySelectorAll('.quantity')[1].style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelectorAll('.quantity')[1].setAttribute('placeholder', 'Кол-во, шт');
                    document.querySelectorAll('.quantity')[1].style.border = 'none';
                }, 2000);
            }else e1 = true;

            if(d1 == true && e1 == true) validAll = true;
        }
        return validAll;
}

//Переключение чекбокса///////////////////
const check = document.querySelectorAll('input[type=checkbox]'),
      label = document.querySelectorAll('.switch');
let checkValue = 1.2,//Переменная для значения чекбокса
    factor = 0.166;//Получаем значение множителя из активного чекбокса

label.forEach(element => {
    element.addEventListener('click', event => {
        check.forEach(element => {
            element.checked = false;
        });
        event.target.checked = true;
        checkValue = event.target.value;
        factor = +event.target.getAttribute('data-factor');
    });
});

let totalValue = 0; // Итоговое сумма в корзине

//////////////////////////////Функция калькулятора///////////////////////////////////////////////
function bascketAdd() {

    ///////////////Получаем значения из инпутов//////////////////
    const   lengthValue = +document.querySelector('.length').value, // значение длины
            widthValue = +document.querySelector('.width').value, // значение ширины
            diameterValue = +document.querySelector('.diameter').value, // значение диаметра
            quantityValue1 = +document.querySelectorAll('.quantity')[0].value, // значение количества 
            quantityValue2 = +document.querySelectorAll('.quantity')[1].value, // значение количества 
            total = document.querySelector('.total');

    /////////Валидация значений////Проверка на пустые значения///////////////////
    let validValue = validate(lengthValue, widthValue, quantityValue1, quantityValue2, diameterValue);


    ////////////////создание элемента с указанием всех значений для прямоугольника и добавление в корзину///////
    if(rectangle.classList.contains('tab-active') && validValueRange == true && validValue == true){
        let square = lengthValue * widthValue,// Площадь прямоугольника
            discount = discountAmount(square);// Значение скидки в зависимости от площади
            price = Math.round(square * (factor));// Переменная цены
            int = price * (discount / 100);//сумма скидки
            discountPrice = Math.round(price - int);// цена с учетом скидки
            cost = Math.round(discountPrice * quantityValue1);//стоимость с учетом количества

        ///////Создаём div
        let div = document.createElement('div');
        /////Прописываем наполнение дива со значениями
        div.innerHTML = `<span class="cost__basket_item_close"></span><p style="margin-bottom: 14px;">${rectangle.textContent}</p><small>Длина:  ${lengthValue} см.<br>Ширина:  ${widthValue} см.<br>Толщина:  ${checkValue} см.</small><p style="margin-top: 19px;">Обычная цена:  ${price} руб.</p><p>Ваша персональная скидка:  ${discount}% </p><p style="margin-bottom: 19px;">Цена со скидкой:  ${discountPrice} руб.</p><small>Количество:  ${quantityValue1} шт.</small><p>Стоимость:  <span>${cost}</span> руб.<p/>`;
        //////Добавляем класс для стилей
        div.classList.add('cost__basket_item');
        //////Добавляем div в корзину
        document.querySelector('.cost__basket').appendChild(div);

        totalValue = totalValue + cost;
        total.textContent = totalValue;
    }
    ////////////////создание элемента с указанием всех значений для круга и добавление в корзину///////
    else if(circle.classList.contains('tab-active') && validValueRange == true && validValue == true){
        let square = Math.round((3.14 / 4)* Math.pow(diameterValue, 2));// Площадь круга
            discount = discountAmount(square);// Значение скидки в зависимости от площади
            price = Math.round(square * (factor));// Переменная цены
            int = price * (discount / 100);//сумма скидки
            discountPrice = Math.round(price - int);// цена с учетом скидки
            cost = Math.round(discountPrice * quantityValue2);//стоимость с учетом количества

        ///////Создаём div
        let div = document.createElement('div');
        /////Прописываем наполнение дива со значениями
        div.innerHTML = `<span class="cost__basket_item_close"></span><p style="margin-bottom: 14px;">${circle.textContent}</p><small>Диаметр ${diameterValue} см.<br>Толщина:  ${checkValue} см.</small><p style="margin-top: 19px;">Обычная цена:  ${price} руб.</p><p>Ваша персональная скидка:  ${discount}% </p><p style="margin-bottom: 19px;">Цена со скидкой:  ${discountPrice} руб.</p><small>Количество:  ${quantityValue2} шт.</small><p>Стоимость:  <span>${cost}</span> руб.<p/>`;
        //////Добавляем класс для стилей
        div.classList.add('cost__basket_item');
        //////Добавляем div в корзину
        document.querySelector('.cost__basket').appendChild(div);

        totalValue = totalValue + cost;
        total.textContent = totalValue;
    }

    //Очистка корзины, присвоение итоговой стоимости 0
    document.querySelector('.cost__total_clear').addEventListener('click', ()=> {
        let itemAll = document.querySelectorAll('.cost__basket_item');
        itemAll.forEach(element => element.remove());
        totalValue = 0
        total.textContent = totalValue;
    });

    //Кнопка удаления одного заказа из корзины и корректирование итоговой стоимости
    let closeAll = document.querySelectorAll('.cost__basket_item_close')
    closeAll.forEach(element => {
        element.onclick = event => {
            console.log('click')
            let int = +event.path[1].children[7].children[0].textContent;
            totalValue = totalValue - int;
            total.textContent = totalValue;
            event.path[1].remove();
        }
    });
}

btn.forEach(element => {
    element.addEventListener('click', bascketAdd);
});


//////////При нажатии кнопки заказать данные из корзины попадут в форму, в скрытый элемент textarea
document.querySelector('.cost__total_wrap_btn').onclick = () =>{
    let a = document.querySelector('.cost__basket').textContent;
    a.replace(/\n/g, '<br/>');
    document.querySelector('#basket_value').value = a //document.querySelector('.cost__basket').textContent;
    // console.log(a);
}



////////Универсальная функция определения размера скидки
function discountAmount(s){
    let discount = 10;
    if(s >= 10000 && s < 15000) discount = 15;
    else if(s >= 15000 && s < 20000) discount = 20;
    else if(s >= 20000 && s < 25000) discount = 25;
    else if(s >= 25000 && s < 30000) discount = 30;
    else if(s >= 30000 && s < 35000) discount = 35;
    else if(s >= 35000) discount = 40;
    return discount;
}


//Выпадающие списки
const itemAll = document.querySelectorAll('.questions__wrap_item');
let plusAll = document.querySelectorAll('.questions__wrap_item_plus');

itemAll.forEach(element => {
    element.addEventListener('click', event =>{
        event.target.classList.toggle('questions__wrap_item-active');

        if(event.target.classList.contains('questions__wrap_item-active')){
            for(let i = 0; i < itemAll.length; i++){
                if(event.target == itemAll[i]) plusAll[i].setAttribute('src', 'icon/min.svg'), plusAll[i].style.top = '27'+'px';
            }
        }
        else{
            for(let i = 0; i < itemAll.length; i++){
                plusAll[i].setAttribute('src', 'icon/plus.svg');
            }
        }
    });
});






