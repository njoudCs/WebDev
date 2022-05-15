/**
 * Dashboard Analytics
 */

 'use strict';

 (function () {
   let cardColor, headingColor, axisColor, shadeColor, borderColor;
 
   cardColor = config.colors.white;
   headingColor = config.colors.headingColor;
   axisColor = config.colors.axisColor;
   borderColor = config.colors.borderColor;
 
   // Total Report Chart - Bar Chart
   // --------------------------------------------------------------------
   const totalChartEl = document.querySelector('#totalChart'),
            totalChartOptions = {
       series: [
         {
           name: 'Assignments',
           data: [18, 7, 15, 29, 18, 12, 9]
         },
         {
           name: 'Projects',
           data: [-13, -18, -9, -14, -5, -17, -15]
         }
       ],
       chart: {
         height: 300,
         stacked: true,
         type: 'bar',
         toolbar: { show: false }
       },
       plotOptions: {
         bar: {
           horizontal: false,
           columnWidth: '33%',
           borderRadius: 12,
           startingShape: 'rounded',
           endingShape: 'rounded'
         }
       },
       colors: [config.colors.primary, config.colors.info],
       dataLabels: {
         enabled: false
       },
       stroke: {
         curve: 'smooth',
         width: 6,
         lineCap: 'round',
         colors: [cardColor]
       },
       legend: {
         show: true,
         horizontalAlign: 'left',
         position: 'top',
         markers: {
           height: 8,
           width: 8,
           radius: 12,
           offsetX: -3
         },
         labels: {
           colors: axisColor
         },
         itemMargin: {
           horizontal: 10
         }
       },
       grid: {
         borderColor: borderColor,
         padding: {
           top: 0,
           bottom: -8,
           left: 20,
           right: 20
         }
       },
       xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
         labels: {
           style: {
             fontSize: '13px',
             colors: axisColor
           }
         },
         axisTicks: {
           show: false
         },
         axisBorder: {
           show: false
         }
       },
       yaxis: {
         labels: {
           style: {
             fontSize: '13px',
             colors: axisColor
           }
         }
       },
       responsive: [
         {
           breakpoint: 1700,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '32%'
               }
             }
           }
         },
         {
           breakpoint: 1580,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '35%'
               }
             }
           }
         },
         {
           breakpoint: 1440,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '42%'
               }
             }
           }
         },
         {
           breakpoint: 1300,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '48%'
               }
             }
           }
         },
         {
           breakpoint: 1200,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '40%'
               }
             }
           }
         },
         {
           breakpoint: 1040,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 11,
                 columnWidth: '48%'
               }
             }
           }
         },
         {
           breakpoint: 991,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '30%'
               }
             }
           }
         },
         {
           breakpoint: 840,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '35%'
               }
             }
           }
         },
         {
           breakpoint: 768,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '28%'
               }
             }
           }
         },
         {
           breakpoint: 640,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '32%'
               }
             }
           }
         },
         {
           breakpoint: 576,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '37%'
               }
             }
           }
         },
         {
           breakpoint: 480,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '45%'
               }
             }
           }
         },
         {
           breakpoint: 420,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '52%'
               }
             }
           }
         },
         {
           breakpoint: 380,
           options: {
             plotOptions: {
               bar: {
                 borderRadius: 10,
                 columnWidth: '60%'
               }
             }
           }
         }
       ],
       states: {
         hover: {
           filter: {
             type: 'none'
           }
         },
         active: {
           filter: {
             type: 'none'
           }
         }
       }
     };
   if (typeof totalChartEl !== undefined && totalChartEl !== null) {
     const totalChart = new ApexCharts(totalChartEl, totalChartOptions);
     totalChart.render();
   }
 

 
   // Assignment Statistics
   // --------------------------------------------------------------------
   const AssignmentStatistics = document.querySelector('#StatisticsChartAss'),
     ChartConfig = {
       chart: {
         height: 165,
         width: 130,
         type: 'donut'
       },
       labels: ['Assignment 1', 'Assignment 2', 'Assignment 3'],
       series: [30,  25, 45],
       colors: [config.colors.primary,  config.colors.info, config.colors.success],
       stroke: {
         width: 5,
         colors: cardColor
       },
       dataLabels: {
         enabled: false,
         formatter: function (val, opt) {
           return parseInt(val) + '%';
         }
       },
       legend: {
         show: false
       },
       grid: {
         padding: {
           top: 0,
           bottom: 0,
           right: 15
         }
       },
       plotOptions: {
         pie: {
           donut: {
             size: '75%',
             labels: {
               show: true,
               value: {
                 fontSize: '1.5rem',
                 fontFamily: 'Public Sans',
                 color: headingColor,
                 offsetY: -15,
                 formatter: function (val) {
                   return parseInt(val) + '%';
                 }
               },
               name: {
                 offsetY: 20,
                 fontFamily: 'Public Sans'
               },
               total: {
                 show: true,
                 fontSize: '0.8125rem',
                 color: axisColor,
                 label: 'Weekly',
                 formatter: function (w) {
                   return '38%';
                 }
               }
             }
           }
         }
       }
     };
   if (typeof AssignmentStatistics !== undefined && AssignmentStatistics!== null) {
     const AssignmentChart = new ApexCharts(AssignmentStatistics, ChartConfig);
     AssignmentChart.render();
   }

   
 

 })();
 
    