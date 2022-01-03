(function(){

    var actualizarHora = function(){
            var fecha = new Date(),
                horas = fecha.getHours(),
                ampm,
                minutos = fecha.getMinutes(),
                segundos = fecha.getSeconds(),
                diaSemana = fecha.getDay(),
                dia = fecha.getDate(),
                mes = fecha.getMonth(),
                year = fecha.getFullYear();
            
            // variable pHoras es para el <p> horas </p> del html
            var pHoras = document.getElementById('horas');
            var pAmPm = document.getElementById('ampm');
            var pMinutos = document.getElementById('minutos');
            var pSegundos = document.getElementById('segundos');
            var phoras = document.getElementById('horas');
            var pDiaSemana = document.getElementById('diaSemana');
            var pDia = document.getElementById('dia');
            var pMes = document.getElementById('mes');
            var pYear = document.getElementById('year');

            var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            pDiaSemana.textContent = semana[diaSemana];

            pDia.textContent = semana[dia];

            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 
            'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
            'Octubre', 'Noviembre', 'Diciembre'];
            pMes.textContent = meses[mes];

            pYear.textContent = year;

            if(horas >= 12){
                horas = horas - 12;                
                ampm = 'PM'
            }else{
                ampm = 'AM'
            }

            if(horas == 0){
                horas = 12;
            };

            pHoras.textContent = horas;
            pAmPm.textContent = ampm;

            if(minutos < 10) {minutos = "0" + minutos};
            
            if(segundos < 10) {segundos = "0" + segundos};
            pMinutos.textContent = minutos;
            pSegundos.textContent = segundos;

    };

    actualizarHora();
    var itervalo = setInterval(actualizarHora, 1000);

} ())