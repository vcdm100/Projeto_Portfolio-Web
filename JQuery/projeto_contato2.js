/* JQUERY */
$(document).ready(function () {

    //Máscara
        $("#celular").mask("(99) 99999-9999");
    
        //Verificar os caracteres restantes
            var maxLength = 1000;
    
                $('textarea').keyup(function() { 
                    
                    var length = $(this).val().length;
                    var length = maxLength-length;
    
                $('#chars').text(length);
    
            });
    
    //Validar se campos forem vazios para exibir bordas vermelhas
        $('input[type=submit]').click(function() {
    
            var nome = $('#nome');
            var email = $('#email');
            var celular = $('#celular');
            var assunto = $('#assunto');
            var mensagem = $('#mensagem');
        
            if (nome.val() == "") {
                $('.msg').css('display', 'inline-block');
                $('.msg').text("Por favor preencha seu nome!");
                nome.css({"border" : "2px solid #F00", "background" : "lightpink"});
                nome.focus();
                nome.keypress(function(){
                    nome.css({"border" : "2px solid #2196f3", "background" : "#FFF"});
                    $('.msg').css('display', 'none');
                });
    
                return false;
    
            } else if (email.val() == "") {
                $('.msg').css('display', 'inline-block');
                $('.msg').text("Por favor preencha seu email!");
                email.css({"border" : "2px solid #F00", "background" : "lightpink"});
                email.focus();
                email.keypress(function(){
                    email.css({"border" : "2px solid #2196f3", "background" : "#FFF"});
                    $('.msg').css('display', 'none');
                });
    
                return false;
    
            } else if (IsEmail(email.val()) == false) {
                $('.msg').css('display', 'inline-block');
                $('.msg').text("Verifique seu email completo!");
                email.css({"border" : "2px solid #F00", "background" : "lightpink"});
                email.focus();
                email.keypress(function(){
                    email.css({"border" : "2px solid #2196f3", "background" : "#FFF"});
                    $('.msg').css('display', 'none');
                });
    
                return false;
    
            } else if (celular.val() == "") {
                $('.msg').css('display', 'inline-block');
                $('.msg').text("Por favor preencha seu celular!");
                celular.css({"border" : "2px solid #F00", "background" : "lightpink"});
                celular.focus();
                celular.keypress(function(){
                    celular.css({"border" : "2px solid #2196f3", "background" : "#FFF"});
                    $('.msg').css('display', 'none');
                });
    
                return false;
    
            } else if (assunto.val() == "") {
                $('.msg').css('display', 'inline-block');
                $('.msg').text("Selecione um assunto!");
                assunto.css({"border" : "2px solid #F00", "background" : "lightpink"});
                assunto.focus();
                assunto.keypress(function(){
                    assunto.css({"border" : "2px solid #2196f3", "background" : "#FFF"});
                    $('.msg').css('display', 'none');
                });
    
                return false;
    
            } else if (mensagem.val() == "") {
                $('.msg').css('display', 'inline-block');
                $('.msg').text("Por favor digite sua mensagem!");
                mensagem.css({"border" : "2px solid #F00", "background" : "lightpink"});
                mensagem.focus();
                mensagem.keypress(function(){
                    mensagem.css({"border" : "2px solid #2196f3", "background" : "#FFF"});
                    $('.msg').css('display', 'none');
                });
    
                return false;
    
            } else {
                alert("Sua mensagem foi enviada com sucesso!");
                return true;
            }
    
        });
    
        $('input[type=reset]').click(function() { 
    
            $('input[type=text]').css({"border" : "2px solid #2196f3", "background" : "#FFF"});
            $('select').css({"border" : "2px solid #2196f3"});
            $('.msg').css('display', 'none');
            $('#chars').text("1000");
    
        });
    
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
            if (!regex.test(email)) {
                return false;
                
            } else {
                return true;
            }
        }
    
    });