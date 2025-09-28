const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [2, 4, 5, 10, 2],
      backgroundColor: ['#FF3B3B', '#FFA500', '#FFEB3B', '#4CAF50', '#2196F3'],
      borderColor: '#000000',
      borderWidth: 3,
      hoverBorderWidth: 3,
    }
  ]
};


const options = {
  plugins: {
    legend: {
      labels: {
        color: '#000',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
    tooltip: {
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 2,
      titleColor: '#000',
      bodyColor: '#000',
      titleFont: {
        weight: 'bold',
      },
      bodyFont: {
        weight: 'bold',
      },
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#000',
        font: {
          weight: 'bold'
        }
      },
      grid: {
        color: '#000',
        lineWidth: 1
      },
    },
    y: {
      ticks: {
        color: '#000',
        font: {
          weight: 'bold'
        }
      },
      grid: {
        color: '#000',
        lineWidth: 1
      },
    },
  },
  layout: {
    padding: 10
  },
  responsive: true,
  maintainAspectRatio: false
};


new Chart(document.getElementById('myChart'), {
  type: 'pie',
  data: data,
  options: options
});