// Первая будет спрашивать "Ваш бюджет на месяц?"
let money = prompt("Ваш бюджет на месяц?");

//console.log(money);

//Вторая "Введите дату в формате YYYY-MM-DD"
let time = prompt("Введите дату в формате YYYY-MM-DD");

//console.log(time);

let appData = {
    moneyData: money, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: null, //объект с обязательными расходами - expenses (смотри пункт 4)
    optionalExpenses: null, //объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
    income: null, //массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false //свойство savings (выставляем его как false)
}

appData['expenses'] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + prompt("Во сколько обойдется?");

//console.log(appData ['expenses']);
alert("Бюджет на 1 день: " + money/30);