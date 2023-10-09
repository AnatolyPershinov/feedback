function submitForm() {
    // функция отправки HTML формы на сервер
    
    var elements = document.forms[0].elements
    // выбираем в html документе самую первую форму и затем извлекаем из неё все поля в массив elements
    
    var url = document.forms[0].action // form.php
    // извлекаем из формы адрес, к которому она привязана
    
    var params = {}
    // пустой словарь в который будет записаны значения элементов
    for (let i = 0; i < elements.length; i++) {
        params[elements[i].name] = elements[i].value
        // создаем словарь с именами и значениями html элементов
        // в качестве ключей словаря используем имена элементов
    }

    var xhr = new XMLHttpRequest() // создаем XHR объект
    
    xhr.open("POST", url, false)

    xhr.setRequestHeader("Accept", "application/json")
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onload = function() {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.response)
            document.getElementById("result").innerHTML = `Email: ${result.email}, Text: ${result.text}`
        } else {
            alert(`${xhr.status} ${xhr.statusText}`)
        }
    }

    xhr.send(JSON.stringify(params))


}