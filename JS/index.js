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
});
function getResults(){
    //if(validateForm()){
        /*
        r1 = $("input[name=custom-radio-1]").val();
        r2 =$("input[name=custom-radio-2]").val();
        r3 =$("input[name=custom-radio-3]").val();
        r4 =$("input[name=custom-radio-4]").val();
        r5 =$("input[name=custom-radio-5]").val();
        r6 =$("input[name=custom-radio-6]").val();
        r7 =$("input[name=custom-radio-7]").val();
        r8 =$("input[name=custom-radio-8]").val();
        r9 =$("input[name=custom-radio-9]").val();
        r10 =$("input[name=custom-radio-10]").val();
        r11 =$("input[name=custom-radio-11]").val();
        r12 =$("input[name=custom-radio-12]").val();
        r13 =$("input[name=custom-radio-13]").val();
        //var r14 =$("input[name=custom-radio-14]").val();
        //var r15 =$("input[name=custom-radio-15]").val();
    if(r1 == '' || r2 == '' || r3 == '' || r4 == '' ||r5 == '' ||
    r6 == '' ||r7 == '' ||r8 == '' ||r9 == '' ||r10 == '' ||
    r11 == '' ||r12 == '' ||r13 == ''){
        alert("Uno o mas campos vacios");
    }else{
        console.log(r1);
        console.log("Nada");
    }*/
    arrRes = [];
    res = $('#formAns').serializeArray();
    console.log(res);
    if(res == ''){
        console.log("Error");
    }else if (res.length < 14 ){
        console.log("Faltan campos");
    }else{
        for(i=0;i<res.length;i++){
            arrRes.push(res[i].value);
        }
        printGraficas(arrRes);
    }
    //var res = $('#formAns').serialize();
    //console.log(res);
    //}else{
        //console.log("Failed");
    //}
}
function printGraficas(arreglo){
    var grafica = document.getElementById('result_chart');
    var grafica1 = document.getElementById('result_chart_1');
    var grafica2 = document.getElementById('result_chart_2');
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
    //5,10,12
    var dataRango2 = {
        labels:['P1','P2'],
        datasets:[{
            label:['Athena'],
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            data:[{
                x:1,
                y:2,
                r:20,
            }]
        },{
            label:['Compuhypermegared'],
            borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:"rgba(255,51,51,0.2)",
            data:[{
                x:3,
                y:3,
                r:40,
            }],
        }]
    }
    var dataRango3 = {
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
    //Restantes: 6,8,9,11,13
    var myRadarChart = new Chart(grafica, {
        type: 'radar',
        data: data
    });
    var myBarChart = new Chart(grafica1, {
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
    var myBubbleChart = new Chart(grafica2,{
        type:'bubble',
        data: dataRango2,
    });
    myBubbleChart.update();
    myRadarChart.update();
    myBarChart.update();

}
