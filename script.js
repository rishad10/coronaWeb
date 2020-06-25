Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Corona Virus Cases'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Cases'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'USA',
        data: [50000, 66000, 73000, 70000,79000, 183000]

    }, {
        name: 'Brazil',
        data: [30000, 33000,39000,43000,45000,75000]

    }, {
        name: 'China',
        data: [70000, 73213, 75623, 86713, 90672, 104567]

    }, {
        name: 'Canada',
        data: [10890, 11234, 14589, 20678, 25786, 31089]

    }]
});

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}