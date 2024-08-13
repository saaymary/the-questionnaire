const form = document.querySelector(".form");
form.addEventListener("submit", async(event) => {
    event.preventDefault();

    // Сбор данных из формы
    const name = document.getElementById("name").value;
    const secondName = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const agree = document.getElementById("agree").checked;

    const notification = document.createElement('div');
    document.body.appendChild(notification);

    try {
        // Отправка POST-запроса на сервер
        const response = await fetch('https://polinashneider.space/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: YOUR_GITHUB_NICKNAME' // Замените на ваш ник
            },
            body: JSON.stringify({
                name,
                secondName,
                email,
                phone,
                agree
            }),
        });

        // Проверка ответа сервера
        if (response.ok) {
            notification.textContent = 'Данные успешно отправлены!';
            notification.style.color = 'green';
            form.reset(); // Очищаем поля формы
        } else {
            throw new Error('Ошибка при отправке данных');
        }

    } catch (error) {
        notification.textContent = `Произошла ошибка: ${error.message}`;
        notification.style.color = 'red';
    }
})