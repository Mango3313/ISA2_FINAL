$(document).ready(function(){
    $('nav').css('transition','500ms ease-out');
    $(window).scroll(function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop() < 620){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-info');
        }else
        if($(this).scrollTop() > 621 && $(this).scrollTop() < 3000){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-warning');
        }else
        if($(this).scrollTop() > 3000){
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
            //1,3,4
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
        labels:['Personal','Procesos'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            //PPerfil,Presupuesto
            //2,7
            data: [2, 1],
            //fill: false
        },{
            label: "Compuhypermegared",
            borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:"rgba(255,51,51,0.2)",
            data: [3, 3],
            //fill: false
        }]

    }
    //Restantes: 5,6,8,9,10,11,12,13
    var myRadarChart = new Chart(grafica, {
        type: 'radar',
        data: data
    });
    var myRadarChart = new Chart(grafica1, {
        type: 'horizontalBar',
        data: dataRango1,
        options:{scales: {
            xAxes: [{
                stacked: false,
                ticks:{
                    min: 0
                }
            }],
            yAxes: [{
                stacked: false,
                ticks:{
                    min: 0
                }
            }]
        }}
    });
});
function getResults(){
    //if(validateForm()){
        var r1 = $("input[name=custom-radio-1]").val();
        var r2 =$("input[name=custom-radio-2]").val();
        var r3 =$("input[name=custom-radio-3]").val();
        var r4 =$("input[name=custom-radio-4]").val();
        var r5 =$("input[name=custom-radio-5]").val();
        var r6 =$("input[name=custom-radio-6]").val();
        var r7 =$("input[name=custom-radio-7]").val();
        var r8 =$("input[name=custom-radio-8]").val();
        var r9 =$("input[name=custom-radio-9]").val();
        var r10 =$("input[name=custom-radio-10]").val();
        var r11 =$("input[name=custom-radio-11]").val();
        var r12 =$("input[name=custom-radio-12]").val();
        var r13 =$("input[name=custom-radio-13]").val();
        var r14 =$("input[name=custom-radio-14]").val();
        var r15 =$("input[name=custom-radio-15]").val();
    if(r1 == '' || r2 == '' || r3 == '' || r4 == '' ||r5 == '' ||
    r6 == '' ||r7 == '' ||r8 == '' ||r9 == '' ||r10 == '' ||
    r11 == '' ||r12 == '' ||r13 == '' ||r14 == '' ||r15 == '' ){
        alert("Uno o mas campos vacios");
    }
    //var res = $('#formAns').serialize();
    //console.log(res);
    //}else{
        //console.log("Failed");
    //}
}
