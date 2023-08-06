
var options = function(type,title, height, numbers , color){
    return {     
      chart: {
        height: '87%',
        width: '100%',
        type: type,
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false,
         },
      },
      grid: {
          show: false,
          padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0    
          }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
          show: false,
      },
      series: [
      {
          name: title,
          data: numbers
      }
      ],    
      fill: {
        colors: [color],
      },
      stroke:{
          colors: [color],
          width: 3
      },    
      yaxis: {
          show: false,        
      }, 
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        title: {
          text: 'Month'
        },
        show: false,
        labels: {
            show: false,
        },   
        axisBorder: {
          show: false,        
        },   
        tooltip: {
            enabled: false,
        }
      }
      
    };
  }




var chart = new ApexCharts(document.querySelector("#view-visitors"), options('area','Page View',380,year,'#99F6FF'));
chart.render();

try {
    document.querySelectorAll('.switch-year-item-back').forEach(btn => {
        btn.addEventListener('click', e => {

            
            let b = e.target.querySelector('.datas').textContent.split(',');
            console.log(b)
            chart.updateSeries([{
                name: 'Page View',
                data: b
              }])


        });
    })
} catch (error) {
    
}






