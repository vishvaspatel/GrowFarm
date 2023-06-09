
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'maps/gujarat',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Gujarat Map",
            "theme": "fusion",
            "formatNumberScale": "0",
            "numberSuffix": "M"
        },
        "colorrange": {
            "color": [{
                "minvalue": "0",
                "maxvalue": "100",
                "code": "#D0DFA3",
                "displayValue": "< 100M"
            }, {
                "minvalue": "100",
                "maxvalue": "500",
                "code": "#B0BF92",
                "displayValue": "100-500M"
            }, {
                "minvalue": "500",
                "maxvalue": "1000",
                "code": "#91AF64",
                "displayValue": "500M-1B"
            }, {
                "minvalue": "1000",
                "maxvalue": "5000",
                "code": "#A9FF8D",
                "displayValue": "> 1B"
            }]
        },
        "data": [{
            "id": "IN.GU.KD",
            "value": "405",
            "value1": "4050"
        }, {
            "id": "IN.GU.AM",
            "value": "373"
        }, {
            "id": "IN.GU.AH",
            "value": "3875"
        }, {
            "id": "IN.GU.MA",
            "value": "727"
        }, {
            "id": "IN.GU.SD",
            "value": "885"
        }, {
            "id": "IN.GU.KA",
            "value": "32"
        }]
    }
}
);
			chartObj.render();
		});