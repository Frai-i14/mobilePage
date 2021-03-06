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
        try{
            sliderNavAll[count -1].classList.remove('nav-active');
            sliderNavAll[count].classList.add('nav-active');
        }catch{
            console.log('slider_nav');
        }
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
        try{
            sliderNavAll[count + 1].classList.remove('nav-active');
            sliderNavAll[count].classList.add('nav-active');
        }catch{
            console.log('slider_nav');
    }
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
        try{
            sliderNavAll[count -1].classList.remove('nav-active');
            sliderNavAll[count].classList.add('nav-active');
        }catch{
            console.log('slider_nav');
        }
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
        try{
            sliderNavAll[count + 1].classList.remove('nav-active');
            sliderNavAll[count].classList.add('nav-active');
        }catch{
            console.log('slider_nav');
        }
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
        document.querySelector('.length').style.display = 'block';
        document.querySelector('.length').value = '';
        document.querySelector('.width').style.display = 'block';
        document.querySelector('.width').value = '';
        document.querySelector('.diameter').style.display = 'none';
        document.querySelector('.valid_max-di').style.display = 'none';
        document.querySelector('.valid_min-di').style.display = 'none';
        document.querySelector('.value1_2').innerHTML = `0 &nbsp`,
        document.querySelector('.value2').innerHTML = `0 &nbsp`;
    }
});

circle.addEventListener('click', ()=>{
    if(circle.classList.contains('tab-active') == false){
        rectangle.classList.remove('tab-active');
        circle.classList.add('tab-active');
        document.querySelector('.diameter').style.display = 'block';
        document.querySelector('.diameter').value = '';
        document.querySelector('.width').style.display = 'none';
        document.querySelector('.length').style.display = 'none';
        document.querySelector('.valid_max').style.display = 'none';
        document.querySelector('.valid_min').style.display = 'none';
        document.querySelector('.valid_min-len').style.display = 'none';
        document.querySelector('.value1_2').innerHTML = `0 &nbsp`,
        document.querySelector('.value2').innerHTML = `0 &nbsp`;
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
                document.querySelector('.value1_2').innerHTML = `0 &nbsp`,
                document.querySelector('.value2').innerHTML = `0 &nbsp`;
    else if(a < 50) validValueRange = false,
                    document.querySelector('.valid_min').style.display = 'block',
                    document.querySelector('.valid_max').style.display = 'none',
                    document.querySelector('.width').style.border = '1px solid red',
                    document.querySelector('.value1_2').innerHTML = `0 &nbsp`,
                    document.querySelector('.value2').innerHTML = `0 &nbsp`;
    else {
            document.querySelector('.valid_max').style.display = 'none';
            document.querySelector('.valid_min').style.display = 'none';
            document.querySelector('.width').style.border = 'none';
            validValueRange = true;

            //////////////Получаем значения из инпутов//////////////////
            const   lengthValue = +document.querySelector('.length').value, // значение длины
                    widthValue = +document.querySelector('.width').value;
            if(lengthValue != '' && widthValue != ''){
                let square = lengthValue * widthValue,// Площадь прямоугольника
                    discount = discountAmount(square),// Значение скидки в зависимости от площади
                    price1_2 = Math.round((square * 0.166)),// Переменная цены
                    price2 = Math.round(square * 0.24),// Переменная цены
                    int1_2 = price1_2 * (discount / 100),//сумма скидки
                    int2 = price2 * (discount / 100),//сумма скидки
                    discountPrice1_2 = Math.round(price1_2 - int1_2),
                    discountPrice2 = Math.round(price2 - int2);

                document.querySelector('.value1_2').innerHTML = `${discountPrice1_2}&nbsp`;
                document.querySelector('.value2').innerHTML = `${discountPrice2}&nbsp`;
            }
        }
    });

document.querySelector('.diameter').addEventListener('input', () => {
    let a = +document.querySelector('.diameter').value;
    if(a > 140) validValueRange = false,
                document.querySelector('.valid_max-di').style.display = 'block',
                document.querySelector('.valid_min-di').style.display = 'none',
                document.querySelector('.diameter').style.border = '1px solid red',
                document.querySelector('.circle_value1_2').innerHTML = `0 &nbsp`,
                document.querySelector('.circle_value2').innerHTML = `0 &nbsp`;
    else if(a < 50) validValueRange = false,
                    document.querySelector('.valid_min-di').style.display = 'block',
                    document.querySelector('.valid_max-di').style.display = 'none',
                    document.querySelector('.value1_2').innerHTML = `0 &nbsp`,
                    document.querySelector('.value2').innerHTML = `0 &nbsp`;
    else {
        document.querySelector('.valid_max-di').style.display = 'none', 
        document.querySelector('.valid_min-di').style.display = 'none',
        document.querySelector('.diameter').style.border = 'none';
        validValueRange = true;

        let diameterValue = +document.querySelector('.diameter').value; // значение диаметра
            square = Math.round((3.14 / 4)* Math.pow(diameterValue, 2));// Площадь круга
            discount = discountAmount(square);// Значение скидки в зависимости от площади
            price1_2 = Math.round(square * (0.166));// Переменная цены
            price2 = Math.round(square * (0.24));// Переменная цены
            int1_2 = price1_2 * (discount / 100);//сумма скидки
            int2 = price2 * (discount / 100);//сумма скидки
            discountPrice1_2 = Math.round(price1_2 - int1_2);
            discountPrice2 = Math.round(price2 - int2);

        document.querySelector('.value1_2').innerHTML = `${discountPrice1_2}&nbsp`;
        document.querySelector('.value2').innerHTML = `${discountPrice2}&nbsp`;
    }
});

document.querySelector('.length').addEventListener('input', () => {
    let a = +document.querySelector('.length').value;
    if(a < 50)  validValueRange = false,
                document.querySelector('.valid_min-len').style.display = 'block',
                document.querySelector('.length').style.border = '1px solid red',
                document.querySelector('.value1_2').innerHTML = `0 &nbsp`,
                document.querySelector('.value2').innerHTML = `0 &nbsp`;
    else {
            document.querySelector('.valid_min-len').style.display = 'none', 
            document.querySelector('.length').style.border = 'none',
            validValueRange = true;

            //////////////Получаем значения из инпутов//////////////////
            const   lengthValue = +document.querySelector('.length').value, // значение длины
            widthValue = +document.querySelector('.width').value;
            if(lengthValue != '' && widthValue != ''){
                let square = lengthValue * widthValue,// Площадь прямоугольника
                    discount = discountAmount(square),// Значение скидки в зависимости от площади
                    price1_2 = Math.round((square * 0.166)),// Переменная цены
                    price2 = Math.round(square * 0.24),// Переменная цены
                    int1_2 = price1_2 * (discount / 100),//сумма скидки
                    int2 = price2 * (discount / 100),//сумма скидки
                    discountPrice1_2 = Math.round(price1_2 - int1_2),
                    discountPrice2 = Math.round(price2 - int2);

                document.querySelector('.value1_2').innerHTML = `${discountPrice1_2}&nbsp`;
                document.querySelector('.value2').innerHTML = `${discountPrice2}&nbsp`;
            }
        }
    });

function validate(a, b, c, d) {
        ///////////////Проверка пустых значений
        let a1 = false,
            b1 = false,
            c1 = false,
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
                document.querySelector('.quantity').setAttribute('placeholder', 'Укажите кол-во!');
                document.querySelector('.quantity').style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelector('.quantity').setAttribute('placeholder', 'Кол-во, шт');
                    document.querySelector('.quantity').style.border = 'none';
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

            if(c == '' || c == 0) {
                c1 = false;
                document.querySelector('.quantity').setAttribute('placeholder', 'Укажите кол-во!');
                document.querySelector('.quantity').style.border = '1px solid red';
                setTimeout( () => {
                    document.querySelector('.quantity').setAttribute('placeholder', 'Кол-во, шт');
                    document.querySelector('.quantity').style.border = 'none';
                }, 2000);
            }else c1 = true;

            if(d1 == true && c1 == true) validAll = true;
        }
        return validAll;
}


const check = document.querySelectorAll('input[type=checkbox]'),
      block = document.querySelectorAll('.cost__type_block');

let   checkValue = 1.2,//Переменная для значения чекбокса
      factor = 0.166;//Получаем значение множителя из активного чекбокса

    block.forEach(element => {
        element.addEventListener('click', event =>{
            block.forEach(element => {
                element.classList.remove('cost__type_block-active');
            });
            check.forEach(element => {
                element.checked = false;
            });
            for(let i = 0; i < block.length; i++){
                if(element == block[i]) {
                    block[i].classList.add('cost__type_block-active');
                    check[i].checked = true;
                    checkValue = check[i].value;
                    factor = +check[i].getAttribute('data-factor');
                }
            }
        })
    });


let totalValue = 0; // Итоговое сумма в корзине
let total = document.querySelector('.total');//элемент в котором отображается общая сумма


//////////////////////////////Функция калькулятора///////////////////////////////////////////////
function bascketAdd() {

    ///////////////Получаем значения из инпутов//////////////////
    const   lengthValue = +document.querySelector('.length').value, // значение длины
            widthValue = +document.querySelector('.width').value, // значение ширины
            diameterValue = +document.querySelector('.diameter').value, // значение диаметра
            quantityValue = +document.querySelector('.quantity').value;

    /////////Валидация значений////Проверка на пустые значения///////////////////
    let validValue = validate(lengthValue, widthValue, quantityValue, diameterValue);

    ////////////////создание элемента с указанием всех значений для прямоугольника и добавление в корзину///////
    if(rectangle.classList.contains('tab-active') && validValueRange == true && validValue == true){
        let square = lengthValue * widthValue,// Площадь прямоугольника
            discount = discountAmount(square);// Значение скидки в зависимости от площади
            price = Math.round(square * (factor));// Переменная цены
            int = price * (discount / 100);//сумма скидки
            discountPrice = Math.round(price - int);// цена с учетом скидки
            cost = Math.round(discountPrice * quantityValue);//стоимость с учетом количества

        ///////Создаём div
        let div = document.createElement('div');
        /////Прописываем наполнение дива со значениями
        div.innerHTML = `<span onclick="" class="cost__basket_item_close"></span><p style="margin-bottom: 14px;">${rectangle.textContent}</p><small>Длина:  ${lengthValue} см.<br>Ширина:  ${widthValue} см.<br>Толщина:  ${checkValue} мм.</small><p style="margin-top: 19px;">Обычная цена:  ${price} руб.</p><p>Ваша персональная скидка:  ${discount}% </p><p style="margin-bottom: 19px;">Цена со скидкой:  ${discountPrice} руб.</p><small>Количество:  ${quantityValue} шт.</small><p>Стоимость:  <span>${cost}</span> руб.<p/>`;
        //////Добавляем класс для стилей
        div.classList.add('cost__basket_item');
        //////Добавляем div в корзину
        document.querySelector('.cost__basket').appendChild(div);

        ///создаем textarea
        let textarea = document.createElement('textarea');
        ///прописываем данные из корзины
        textarea.value = `${rectangle.textContent}\n Длина:  ${lengthValue} см.\nШирина:  ${widthValue} см.\nТолщина:  ${checkValue} мм.\nОбычная цена:  ${price} руб.\nCкидка:  ${discount}% \nЦена со скидкой:  ${discountPrice} руб.\nКоличество:  ${quantityValue} шт.\nСтоимость:  ${cost} руб.`;
        ///добавляем класс для отслеживания
        textarea.classList.add('text_basket_form');
        ///добавляем к формam
        document.querySelector('.dispatch__form').appendChild(textarea);
        //добавляем класс чтобы их различать
        let footerTextarea = textarea.cloneNode();
        footerTextarea.classList.remove('text_basket_form');
        footerTextarea.classList.add('text_basket_form-footer');
        document.querySelector('.footer__form').appendChild(footerTextarea);

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
            cost = Math.round(discountPrice * quantityValue);//стоимость с учетом количества

        ///////Создаём div
        let div = document.createElement('div');
        /////Прописываем наполнение дива со значениями
        div.innerHTML = `<span class="cost__basket_item_close"></span><p style="margin-bottom: 14px;">${circle.textContent}</p><small>Диаметр ${diameterValue} см.<br>Толщина:  ${checkValue} мм.</small><p style="margin-top: 19px;">Обычная цена:  ${price} руб.</p><p>Ваша персональная скидка:  ${discount}% </p><p style="margin-bottom: 19px;">Цена со скидкой:  ${discountPrice} руб.</p><small>Количество:  ${quantityValue} шт.</small><p>Стоимость:  <span>${cost}</span> руб.<p/>`;
        //////Добавляем класс для стилей
        div.classList.add('cost__basket_item');
        //////Добавляем div в корзину
        document.querySelector('.cost__basket').appendChild(div);

        ///создаем textarea
        let textarea = document.createElement('textarea');
        ///прописываем данные из корзины
        textarea.value = `${circle.textContent}\n Диаметр ${diameterValue} см.\nТолщина:  ${checkValue} мм.\nОбычная цена:  ${price} руб.\nCкидка:  ${discount}% \nЦена со скидкой:  ${discountPrice} руб.\nКоличество:  ${quantityValue} шт.\nСтоимость:  ${cost} руб.`;
        ///добавляем класс для отслеживания
        textarea.classList.add('text_basket_form');
        ///добавляем к формam
        document.querySelector('.dispatch__form').appendChild(textarea);
        //добавляем класс чтобы их различать
        let footerTextarea = textarea.cloneNode();
        footerTextarea.classList.remove('text_basket_form');
        footerTextarea.classList.add('text_basket_form-footer');
        document.querySelector('.footer__form').appendChild(footerTextarea);

        totalValue = totalValue + cost;
        total.textContent = totalValue;
    }

    //Кнопка удаления одного заказа из корзины и корректирование итоговой стоимости//удаление textarea из формы отправки
    let closeAll = document.querySelectorAll('.cost__basket_item_close');
    closeAll.forEach(element => {
        element.onclick = event => {
            let int = +event.path[1].children[7].children[0].textContent;
                closeAll = document.querySelectorAll('.cost__basket_item_close');
                totalValue = totalValue - int;
                total.textContent = totalValue;
                event.path[1].parentNode.removeChild(event.path[1]);

            ///удаленние textarea из верхней формы
            let arrText = document.querySelectorAll('.text_basket_form');
                for (let i = 0; i < closeAll.length; i++) {
                if(element == closeAll[i]){
                    arrText[i].parentNode.removeChild(arrText[i]);
                }
            }
            ///удаленние textarea из формы в футере
                let arrTextFoo = document.querySelectorAll('.text_basket_form-footer');
            for (let i = 0; i < closeAll.length; i++) {
                if(element == closeAll[i]){
                    arrTextFoo[i].parentNode.removeChild(arrTextFoo[i]);
                }
            }
        };
    });
}

//Очистка корзины, присвоение итоговой стоимости 0
document.querySelector('.cost__total_clear').addEventListener('click', ()=> {
    let itemAll = document.querySelectorAll('.cost__basket_item');
        itemAll.forEach(element => element.remove());
        totalValue = 0
        total.textContent = totalValue;

    let textAll = document.querySelectorAll('.text_basket_form');
    textAll.forEach(element => element.remove());

    let textFooAll = document.querySelectorAll('.text_basket_form-footer');
    textFooAll.forEach(element => element.remove());
});


//вызов функции по клику на кнопку "в корзину"
btn.forEach(element => {
    element.onclick = bascketAdd;
});


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

itemAll.forEach(element => {
    element.addEventListener('click', event =>{
        event.target.classList.toggle('questions__wrap_item-active');
        if(event.target.classList.contains('questions__wrap_item-active')) event.target.children[0].children[1].style.display = 'none';
        else event.target.children[0].children[1].style.display = 'block';
    });
});






