// я решил создать функцию, которая считает все простые числа от 1 до аргумента, переданного функции

var
b,      // список простых чисел (строка с числами через запятую и пробел. Можно и массив, конечно)
n,      // число, до которого идет проверка
c,      // счетчик количества делителей числа
i, j;   // счетчики циклов for

function NumberOfSimple (arg) {  // объявляю функцию, которая ищет все простые числа от 1 до n

	n = arg;

	if (n >= 2) {       // если n >= 2 
	b = "2";  // в список простых чисел сразу включается 2, т.к. 2 - заведомо простое число
	}

	for (i = 3; i <= n; i++) {  // дальше в цикле от 3 до n нужно проверить каждое число: простое оно или нет

		if ( isSimple (i) ) {    // если число простое,
			b += ", " + i;       // то оно добавляется в список
		}

	}

}

function isSimple (arg) {  // функция, которая проверяет, простое ли число
	for (j = 2; j <= Math.sqrt(arg); j++) {  // в цикле от 2 до квадрата текущего числа считаю кол-во
                                         // делителей этого самого текущего числа (чтобы проверить,
                                         // простое число или нет, достаточно посчитать количество
                                         // его делителей от 2 до корня из этого числа)

		c = 0;  // обнуляю счетчик кол-ва делителей

		if (i % j === 0) {  // считаю кол-во делителей числа в диапазоне от 2 до корня
			c++;
		}

		if (c === 0) {    // если в промежутке от 2 до sqrt(текущее чило) нет делителей этого числа,
			return true;  // т.е. делителями числа являются только оно само и 1, то ф-я возвращает true
		} else {
			return false;
		}
	
	}
}