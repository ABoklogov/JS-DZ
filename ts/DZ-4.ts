// 2-4

// Задание Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
// type Pizza = (pizzaName: string) => string;
// type MakeMessage = (pizzaName: string, callback: Pizza) => string;

// const deliverPizza: Pizza = function(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// };

// const makePizza: Pizza = function(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// };

// // Пиши код ниже этой строки
// const makeMessage: MakeMessage = function(pizzaName, callback) {
//   return callback(pizzaName);
// };

// const pizzaName: string = '';

// console.log(makeMessage(pizzaName, deliverPizza));
// console.log(makeMessage(pizzaName, makePizza));

// 3-4

// Задание Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.
// type Callback = (pizzaName: string) => void;
// type Pizza = (pizzaName: string, callback: Callback) => void;

// const makePizza: Pizza = function(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// console.log(makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// }));

// // Пиши код ниже этой строки

// console.log(makePizza('Ультрасыр', function makeMessage(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}.`);
// }));

// 4-4
// Задание
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
// type ReturnFunction = (pizzaName?: string, error?: string) => string;

// interface Pizza {
//   pizzas: string[];
//   order(pizzaName: string, onSuccess: ReturnFunction, onError: ReturnFunction): string;
// };

// const pizzaPalace: Pizza = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],

//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     };
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// const makePizza: ReturnFunction = function(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// };

// // Колбэк для onError
// const onOrderError: ReturnFunction = function(error) {
//   return `Ошибка! ${error}`;
// };

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError)); // возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));  // возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));  // возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));  // возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.

// 5-4
// Задание
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
// interface PizzaPalace {
//   pizzas: string[];
//   checkPizza(pizzaName: string): string;
//   order(pizzaName: string): string;
// };

// const pizzaPalace: PizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },

//   order(pizzaName) {
//     const isPizzaAvailable: string = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(pizzaPalace.order('Аль Копчино'));  //возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
// console.log(pizzaPalace.order('Четыре нарезона')); // возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.

// 6 - 4
// Задание
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// interface Customer {
//   username: string;
//   balance: number;
//   discount: number;
//   orders: string[];
//   getBalance(): number;
//   getDiscount(): number;
//   setDiscount(value: number): void;
//   getOrders(): string[];
//   addOrder(cost: number, order: string): void;
// };

// const customer: Customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// console.log(customer.setDiscount(0.15));  //обновляет значение свойства discount.
// console.log(customer.getBalance());  //возвращает текущее значение свойства balance.
// console.log(customer.getOrders());  //возвращает текущее значение свойства orders.
// console.log(customer.addOrder(5000, 'Steak'));  //добавляет 'Steak' в массив значений свойства orders и обновляет баланс.

// 7 - 4
// Задание
// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.
// type Orders = { email: string, dish: string }[];
// type ComposeMessage = (position: number) => string;

// const orders: Orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // Пиши код ниже этой строки

// const composeMessage: ComposeMessage = function (position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`
// };

// const messages: string[] = orders.map((order, position) => composeMessage.call(order, position));

// console.log(messages);

// 9 - 4
//    Задание
// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов.Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии с привязанным контекстом к соответствующим объектам.
// interface PizzaPalace {
//   company: string;
// };
// type ComposeMessage = (name: string) => string;

// const pizzaPalace: PizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack: PizzaPalace = {
//   company: 'Burger Shack',
// };


// const composeMessage: ComposeMessage = function (customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// };
// // Пиши код ниже этой строки

// const pizzaPalaceComposer: ComposeMessage = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage: string = pizzaPalaceComposer('Манго');
// console.log(pizzaPalaceMessage);

// const burgerShackComposer: ComposeMessage = composeMessage.bind(burgerShack);
// const burgerShackMessage: string = burgerShackComposer('Поли');
// console.log(burgerShackMessage);

// 10 - 4
// Задание
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.
// type Action = (email: string) => string;
// interface Service {
//   mailingList: string[];
//   subscribe: Action;
//   unsubscribe: Action;
// };
// type LogAndInvokeAction = (email: string, action: Action) => string;

// const service: Service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// const logAndInvokeAction: LogAndInvokeAction = function(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// };

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

