var newvar;
console.log(typeof 123);
console.log(typeof "абракадабра");
console.log(typeof Symbol());
console.log(typeof Symbol.for());
// Для чтения (или создания, при отсутствии) «глобального» символа служит вызов Symbol.for(имя).
console.log(typeof true);
console.log(typeof null);
console.log(typeof newvar);
console.log(typeof {});
console.log(typeof null == "object");
// Результат typeof null == "object" – это официально признанная ошибка в языке, которая сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.