     
    function validarForm() {
        var nome = enviarForm.nome.value;
        var email = enviarForm.email.value;
        var data = enviarForm.data.value;
        var celular = enviarForm.celular.value;

        if (nome == "") {
            alert('Preencha seu nome!');
            enviarForm.nome.focus();
            return false;

        } else if (nome.length < 5) {
            alert('Digite seu nome completo!');
            enviarForm.nome.focus();
            return false;

        } else if (data == "") {
            alert('Preencha sua data de nascimento!');
            enviarForm.data.focus();
            return false;

        } else if (email == "") {
            alert('Preencha seu e-mail!');
            enviarForm.email.focus();
            return false;

        } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            alert('Digite seu e-mail válido!');
            enviarForm.email.focus();
            return false;

        } else if (celular == "") {
            alert('Preencha seu número de celular!');
            enviarForm.celular.focus();
            return false;

        } else {
            alert('Formulário foi efetuado com sucesso!');
            return true;
        };
    };

    function mascaraData(campoData) {
        var data = campoData.value;
        var key = event.which || event.keyCode || event.charCode;

        if (data.length == 2 && key != 8 ) {
            data = data + '/';
            document.forms[0].data.value = data;
            return true;
        }

        if (data.length == 5 && key != 8 ) {
            data = data + '/';
            document.forms[0].data.value = data;
            return true;
        };
    };

    function mascaraCelular(campoCelular) {
        var celular = campoCelular.value;
        var key = event.which || event.keyCode || event.charCode;

        if (celular.length == 0 && key != 8 ) {
            celular = celular + '(';
            document.forms[0].celular.value = celular;
            return true;
        };

        if (celular.length == 3 && key != 8 ) {
            celular = celular + ') ';
            document.forms[0].celular.value = celular;
            return true;
        };

        if (celular.length == 10 && key != 8 ) {
            celular = celular + '-';
            document.forms[0].celular.value = celular;
            return true;
        };
    };

    function numerico(evt) {
        var evento = evt || window.event;
        var key = evento.keyCode || evento.which;

        key = String.fromCharCode(key);
            var regex = /[0-9]|\./;

        if(!regex.test(key)) {
            evento.returnValue = false;
            if(evento.preventDefault) evento.preventDefault();
        };
    };