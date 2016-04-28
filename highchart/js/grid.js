Highcharts.theme = {
    colors: ['#23b5c9', '#cecece', '#1e9ba5', '#999999', '#24CBE5', '#64E572', 
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: '#FFFFFF',
    },
    title: {
        style: {
            color: '#666666',
            font: '16px'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: '12px'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt',
            color: '#666666'
        },
        itemHoverStyle:{
            color: '#666666'
        }   
    }
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);