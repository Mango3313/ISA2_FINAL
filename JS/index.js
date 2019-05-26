$(document).ready(function(){
    $('nav').css('transition','500ms ease-out');
    $(window).scroll(function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop() < 620){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-info');
        }else
        if($(this).scrollTop() > 621 && $(this).scrollTop() < 3500){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-warning');
        }else
        if($(this).scrollTop() > 3500){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-success');
        }
    });
    var grafica = document.getElementById('result_chart');
    var grafica1 = document.getElementById('result_chart_1');
    var options = {
        scale: {
            // Hides the scale
            display: false
        }
    };
    var data = {
        labels:['Perfilamiento','Presupuesto','Capacitacion'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            //PPerfil,Presupuesto,Capacitación
            data: [65, 75, 70],
            //fill: false
        },{
            label: "Compuhypermegared",
            borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:"rgba(255,51,51,0.2)",
            data: [100, 100, 100],
            //fill: false
        }]

    }
    var dataRango1 = {
        labels:['Personal','Procesos','Capacitacion'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            //PPerfil,Presupuesto,Capacitación
            data: [65, 75, 70],
            //fill: false
        },{
            label: "Compuhypermegared",
            borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:"rgba(255,51,51,0.2)",
            data: [100, 100, 100],
            //fill: false
        }]

    }
    var myRadarChart = new Chart(grafica, {
        type: 'radar',
        data: data
    });
    var myRadarChart = new Chart(grafica1, {
        type: 'radar',
        data: dataRango1
    });
});