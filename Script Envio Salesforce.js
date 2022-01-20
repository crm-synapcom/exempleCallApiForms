var jsondata = {
    'name': $('ID CAMPO DE NOME').val(),
    'email': $('ID CAMPO DE EMAIL').val(),
    'birthdate': $('ID CAMPO ANIVERSARIO').val(),
    'gender': $('ID CAMPO DE GENERO').val(),
    'BUN': INSIRA O VALOR AQUI,
    'APIEvent': 'INSIRA O VALOR AQUI'
};
            
$.ajax({
    beforeSend: function() {
        $('#loader').css('display', 'block')
    },
    url:'https://sfmcforms.azurewebsites.net/api/FormTrigger?'+ concat('name=', jsondata.name) + '&' + concat('email=', jsondata.email) + '&' + concat('birthdate=', jsondata.birthdate) + '&' + concat('gender=', jsondata.gender) + '&' + concat('APIEvent=', jsondata.APIEvent) + '&' + concat('BUN=', jsondata.BUN),
    type:'POST',
    success: function() {
        $('#loader').css('display', 'none') 
        alert('Cadastro realizado com sucesso!!!')
        $('input').each(function() {
            if($(this).is(':text')) {
                $(this).val('')
            }
        });
    },
    error:function() {

    }
});