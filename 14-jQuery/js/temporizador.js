// Proteção da variavel $
//(function ($) {
//})(jQuery)

(function ($) {
    $.fn.temporizador = function (opcoes) {
        // O extend recebe um objeto referência, e um recebido...
        // o que não estar presente no recebido, ele irá usar os valores default
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:00'
        }, opcoes)
        
        // Separar horário 
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')

        // Mensagem
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
        
        // Adicionar a classe 
        $(this).addClass('temporizador')

        // Adicionar os elementos na tela
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)
        
        // Regex, para buscar os valores dentro do horário passado
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)

        // Horário alvo, pelo grupo de captura do regex, ele irá separar os valores
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        //console.log(horarioAlvo)

        // Criar um temporizador, considerando agora x horário alvo
        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            // Como separamos acima, agora nós setamos os dados separados
            // Hora está no indice 1, minutos no 2 e segundos no 3
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            // Calcular a diferença
            const diferencaEmMili = alvo.getTime() - agora.getTime()

            // Se estiver no passado, significa que já passamos a hora alvo
            if (diferencaEmMili >= 0){
                // Novamente usamos a Regex para capturar hora, minuto e segundo
                // desta vez da diferença calculada entre as datas acima
                // toIsoString irá trazer a data para o nosso timezone
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                //console.log(diferenca)

                // Enfim, mostrar os valores calculados
                // Usamos o diferença, que tem os valores de hora separados pelo regex
                // mas como tempos separado dezena e unidade no relógio, então usamos as 
                // posições do vetor para pegar os valores separados também
                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                // Se ficar negativo, paramos de contar
                clearInterval(temporizador)
            }

        }, 1000)


        return this
    }
})(jQuery)
