
/*
    Global variables
*/
var x_axis = ['1', '2', '3', '4', '5', '6'];
var background_color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
var border_color = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
var data_value = [12, 19, 3, 5, 2, 3];
var updated_data_value = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
var scatter_plot_data = [{
    x: 1,
    y: 12
  }, {
    x: 2,
    y: 19
  }, {
    x: 3,
    y: 3
  }, {
    x: 4,
    y: 5
  }, {
    x: 5,
    y: 2
  }, {
    x: 6,
    y: 3  
}];
var scatter_data_initial = [{
    x: 1,
    y: 12
  }, {
    x: 2,
    y: 19
  }, {
    x: 3,
    y: 3
  }, {
    x: 4,
    y: 5
  }, {
    x: 5,
    y: 2
  }, {
    x: 6,
    y: 3  
}];

/*
    Getting the context
    of bar, line and pie charts
*/

const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChartLine').getContext('2d');
const ctx3 = document.getElementById('myChartPie').getContext('2d');
const ctx4 = document.getElementById('myChartHistogram').getContext('2d');
const ctx5 = document.getElementById('myChartScatter').getContext('2d');

/*
    Creating charts using Chart.js library
    and storing the instances
*/

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: x_axis,
        datasets: [{
            label: 'Bar Chart',
            data: data_value,
            backgroundColor: background_color,
            borderColor: border_color,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 1,
                stepSize: 0.5,
            }
        }
    }
});

const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: x_axis,
        datasets: [{
            label: 'Line Chart',
            data: data_value,
            backgroundColor: background_color,
            borderColor: border_color,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 1,
                stepSize: 0.5,
            }
        }
    }
});

const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: x_axis,
        datasets: [{
            label: 'Pie Chart',
            data: data_value,
            backgroundColor: background_color,
            borderColor: border_color,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 1,
                stepSize: 0.5,
            }
        }
    }
});

const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: x_axis,
      datasets: [{
        label: 'Histogram',
        data: data_value,
        backgroundColor: background_color,
        borderColor: border_color
      }]
    },
    options: {
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 1.3,
          ticks: {
            max: 3,
          }
        }, {
          display: true,
          ticks: {
            autoSkip: false,
            max: 4,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const myChart5 = new Chart(ctx5, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Scatter Plot',
        data: scatter_data_initial,
        backgroundColor: background_color,
        borderColor: border_color
      }]
    }
  });

/*
    Function to update the chart
    dataset
*/
function updateGraph(chart, label, color, border, data) {
    chart.data.datasets.pop();
    chart.data.labels = x_axis;
    chart.data.datasets.push({
        label: label,
        data: data,
        backgroundColor: color,
        borderColor: border
    });
    chart.update();
}

/*
    Function to add or remove data
    By changing the lables and data.
*/

function addData(chart, label, color, border, data) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);
    chart.data.datasets[0].backgroundColor.push(color);
    chart.data.datasets[0].borderColor.push(border);
    chart.update();
    // background_color.push(color);
    // border_color.push(border);
    // x_axis.push(label);
    // updated_data_value.push(data);
    // data_value.push(data);
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets[0].data.pop();
    chart.data.datasets[0].backgroundColor.pop();
    chart.data.datasets[0].borderColor.pop();
    chart.update();
    // background_color.pop();
    // border_color.pop();
    // x_axis.pop();
    // updated_data_value.pop();
    // data_value.pop();
} 

/*
    Function to add and remove
    data in the global variables
*/

function addGlobalData(label, color, border, data) {
    background_color.push(color);
    border_color.push(border);
    x_axis.push(label);
    updated_data_value.push(data);
    scatter_plot_data.push({
        x: parseInt(label),
        y: data
    });
    console.log(scatter_plot_data);
}

function removeGlobalData() {
    background_color.pop();
    border_color.pop();
    x_axis.pop();
    updated_data_value.pop();
    scatter_plot_data.pop();
}

/*
    Calling method
    set interval
    for updating the existing graph
*/

setInterval(function () {
  updated_data_value = updated_data_value.map((data) => {
      return Math.random();
  });

  scatter_plot_data = scatter_plot_data.map((data) => {
      return({
          x: data.x,
          y: Math.random()
      });
  })

  updateGraph(myChart,'Prediction', background_color, border_color, updated_data_value);
  updateGraph(myChart2,'Prediction', background_color, border_color, updated_data_value);
  updateGraph(myChart3,'Prediction', background_color, border_color, updated_data_value);
  updateGraph(myChart4,'Prediction', background_color, border_color, updated_data_value);
  updateGraph(myChart5,'Prediction', background_color, border_color, scatter_plot_data);

}, 2000);

/*
    Calling method
    set timeout
    for adding and removing new data
    in the global variables
*/
setTimeout(function () {
    addGlobalData('7', 'rgba(255, 99, 1, 0.2)', 'rgba(255, 99, 1, 1)', 5);
}, 1000);

setTimeout(function () {
    removeGlobalData();
}, 5000);