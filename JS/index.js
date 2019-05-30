$(document).ready(function(){
    $('nav').css('transition','500ms ease-out');
    $(window).scroll(function(){
        var p1 = false;
        var p2 = false;
        var p3 = false;
        //console.log($(this).scrollTop());
        if($(this).scrollTop() < 620){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-info');
            $('#bCambio').html("<h3>¿Quienes somos?</h3>");
        }else
        if($(this).scrollTop() > 621 && $(this).scrollTop() < 3000){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-warning');
            $('#bCambio').html("<h3>Evaluación</h3>");
        }else
        if($(this).scrollTop() > 3000){
            $('nav').removeClass().addClass('navbar fixed-top navbar-horizontal navbar-expand-lg navbar-dark bg-success');
            $('#bCambio').html("<h3>Resultados</h3>");
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
    }else if (res.length < 13 ){
        console.log("Faltan campos");
    }else{
        for(i=0;i<res.length;i++){
            arrRes.push(res[i].value);
        }
        printGraficas(res);
    }
    //var res = $('#formAns').serialize();
    //console.log(res);
    //}else{
        //console.log("Failed");
    //}
}
function printGraficas(arreglo){
    resultados = _.groupBy(arreglo,'name');
    //console.log(resultados.custom_radio_1.value);
    var grafica = document.getElementById('result_chart');
    var grafica1 = document.getElementById('result_chart_1');
    var grafica2 = document.getElementById('result_chart_2');
    var grafica3 = document.getElementById('result_6');
    var grafica4 = document.getElementById('result_sino');
    var options = {
        scale: {
            // Hides the scale
            display: false
        }
    };
    c1 = generateRandomColor();
    c2 = generateRandomColor();
    var data = {
        labels:['Perfilamiento','Presupuesto','Capacitacion'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            //PPerfil,Presupuesto,Capacitación
            //1,3,4
            data: [parseInt(resultados.custom_radio_1[0].value), parseInt(resultados.custom_radio_3[0].value), parseInt(resultados.custom_radio_4[0].value)],
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
            ///borderColor: [c1[1],c2[1]],
            backgroundColor:[c1[1],c2[1]],
            //PPerfil,Presupuesto
            //2,7
            data: [parseInt(resultados.custom_radio_2[0].value), parseInt(resultados.custom_radio_7[0].value)],
            //fill: false
        },{
            label: "Compuhypermegared",
            //borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:[c1[1],c2[1]],
            data: [1, 3],
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
                x:parseInt(resultados.custom_radio_5[0].value),
                y:parseInt(resultados.custom_radio_10[0].value),
                r:parseInt(resultados.custom_radio_12[0].value)*10,
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
    //9,11,13
    var dataRango3 = {
        labels:['Medicion de calidad','Estudios de mercado','Certificaciones'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            //PPerfil,Presupuesto
            //2,7
            data: [parseInt(resultados.custom_radio_9[0].value), parseInt(resultados.custom_radio_10[0].value),parseInt(resultados.custom_radio_12[0].value)],
            //fill: false
        },{
            label: "Compuhypermegared",
            borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:"rgba(255,51,51,0.2)",
            data: [3, 3],
            //fill: false
        }]

    }
    // 6
    dat = getSelectedItems(resultados.custom_radio_6);
    console.log(resultados.custom_radio_6);
    var datos6 = {
        labels:['Web','Móviles','Hibridas','Escritorio','Otras'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            data: dat,
            //fill: false
        },{
            label: "Compuhypermegared",
            borderColor: "rgba(255,51,51,0.8)",
            backgroundColor:"rgba(255,51,51,0.2)",
            data: [1,1,1,1,0],
            //fill: false
        }],
    }
    //8
    var datos8 = {
        labels:['Competencia'],
        datasets:[{
            label: "Athena",
            borderColor: "rgba(117,110,255,0.8)",
            backgroundColor:"rgba(117,110,255,0.2)",
            //PPerfil,Presupuesto
            //8
            data: [parseInt(resultados.custom_radio_8[0].value)],
            //fill: false
        }],
        options:{
            scales: {
                xAxes: [{
                    ticks:{
                        min: 0
                    }
                }],
                yAxes: [{
                    ticks:{
                        min: 0
                    }
                }]
            }
        }
    }
    //Restantes: 6,8
    var myRadarChart = new Chart(grafica, {
        //Para 1,3,4
        type: 'radar',
        data: data
    });
    var chart6 = new Chart(grafica3, {
        //Para 1,3,4
        type: 'radar',
        data: datos6
    });
    var myBarChart = new Chart(grafica1, {
        //Para 2,7
        type: 'doughnut',
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
    var sinoChart = new Chart(grafica4,{
        type: 'bar',
        data: dataRango3,
    });
    myBubbleChart.update();
    myRadarChart.update();
    myBarChart.update();
    sinoChart.update();
    chart6.update();

}
function generateRandomColor(){
    r = Math.floor(Math.random() * 200);
g = Math.floor(Math.random() * 200);
b = Math.floor(Math.random() * 200);
return color = ['rgba(' + r + ', ' + g + ', ' + b + ', .2)','rgba(' + r + ', ' + g + ', ' + b + ', .8)'];
}
function getSelectedItems(inputVar){
    res = [0,0,0,0,0];
    console.log(inputVar.length);
    for(i =0;i<inputVar.length;i++){
        //res.push(inputVar[i]);
        switch(parseInt(inputVar[i].value)){
            case 1:
                res[0] = 1;
                break;
            case 2:
                res[1] = 1;
                break;
            case 3:
                res[2] = 1;
                break;
            case 4:
                res[3] = 1;
                break;
            case 5:
                res[4] = 1;
                break;

        }
    }
    return res;
    ///console.log(res);
}
function recomendaciones(){
    
}