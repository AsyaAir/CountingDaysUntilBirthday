document.getElementById('calculate').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday');
    const errorMessage = document.getElementById('error-message');
    const resultMessage = document.getElementById('result');

    const birthday = new Date(birthdayInput.value);
    const today = new Date();

    if (!birthdayInput.value) {
        errorMessage.style.display = 'block';
        resultMessage.textContent = '';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    // Устанавливаем год на текущий год
    birthday.setFullYear(today.getFullYear());

    // Если день рождения уже прошел в этом году, установим на следующий год
    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

    // Функция для правильного склонения слова "день"
    function getDayDeclension(number) {
        const lastDigit = number % 10;
        const lastTwoDigits = number % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'дней';
        } else if (lastDigit === 1) {
            return 'день';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'дня';
        } else {
            return 'дней';
        }
    }

    resultMessage.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${getDayDeclension(daysUntilBirthday)}.`;
});