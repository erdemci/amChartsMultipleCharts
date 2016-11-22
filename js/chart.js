var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];
var chartData5 = [];
var chartData6 = [];

generateChartData();

function generateChartData() {
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 10000);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 10000; i++) {
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        var a1 = Math.round(Math.random() * (40 + i)) + 100 + i;
        var b1 = Math.round(Math.random() * (1000 + i)) + 500 + i * 2;

        var a2 = Math.round(Math.random() * (100 + i)) + 200 + i;
        var b2 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

        var a3 = Math.round(Math.random() * (100 + i)) + 200;
        var b3 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

        var a4 = Math.round(Math.random() * (100 + i)) + 200 + i;
        var b4 = Math.round(Math.random() * (100 + i)) + 600 + i;

        var a5 = Math.round(Math.random() * (100 + i)) + 200 + i;
        var b5 = Math.round(Math.random() * (100 + i)) + 600 + i;

        var a6 = Math.round(Math.random() * (100 + i)) + 200 + i;
        var b6 = Math.round(Math.random() * (100 + i)) + 600 + i;

        chartData1.push({
            "date": newDate,
            "value": a1,
            "volume": b1,
            value2: a2,
            volume2: b2,
            value3: a3,
            volume3: b3,
            value4: a4,
            volume4: b4,
            value5: a5,
            volume5: b5,
            value6: a6,
            volume6: b6,
        });
        chartData2.push({
            "date": newDate,
            "value": a1,
            "volume": b1,
            value2: a2,
            volume2: b2,
            value3: a3,
            volume3: b3,
            value4: a4,
            volume4: b4,
            value5: a5,
            volume5: b5,
            value6: a6,
            volume6: b6,
        });
    }
}

var panel1 = {
    "showCategoryAxis": true,
    "title": "Value",
    "stockGraphs": [{
        title: "Değer2 : ",
        "id": "g1",
        "useDataSetColors": false,
        "lineColor": "#995BBE",
        "valueField": "value",
        "comparable": false,
        "balloonText": "[[title]] :<b>[[value]]</b>",
    }],
    "stockLegend": {
        "periodValueTextComparing": "[[percents.value.close]]%",
        "periodValueTextRegular": "[[value.close]]"
    }
};
var panel2 = {
    "showCategoryAxis": true,
    "title": "Value 2",
    "stockGraphs": [{
        title: "Değer2 :",
        "id": "g2",
        "useDataSetColors": false,
        "lineColor": "#07EFEB",
        "valueField": "value2",
        "comparable": false,
        "balloonText": "[[title]] :<b>[[value]]</b>",
    }],
    "stockLegend": {
        "periodValueTextComparing": "[[percents.value.close]]%",
        "periodValueTextRegular": "[[value.close]]"
    }
};
var panel3 = {
    "showCategoryAxis": true,
    "title": "Value 3",
    "stockGraphs": [{
        title: "Değer3 :",
        "id": "g3",
        "useDataSetColors": false,
        "lineColor": "#FF4141",
        "valueField": "value3",
        "comparable": false,
        "balloonText": "[[title]] :<b>[[value]]</b>",
    }],
    "stockLegend": {
        "periodValueTextComparing": "[[percents.value.close]]%",
        "periodValueTextRegular": "[[value.close]]"
    }
};
var panel4 = {
    "showCategoryAxis": true,
    "title": "Value 4",
    "stockGraphs": [{
        title: "Değer4 :",
        "id": "g4",
        "useDataSetColors": false,
        "lineColor": "#16DC88",
        "valueField": "value4",
        "comparable": false,
        "balloonText": "[[title]] :<b>[[value]]</b>",
    }],
    "stockLegend": {
        "periodValueTextComparing": "[[percents.value.close]]%",
        "periodValueTextRegular": "[[value.close]]"
    }
};
var panel5 = {
    "showCategoryAxis": true,
    "title": "Value 5",
    "stockGraphs": [{
        title: "Değer5 :",
        "id": "g5",
        "useDataSetColors": false,
        "lineColor": "#391A5A",
        "valueField": "value5",
        "comparable": false,
        "balloonText": "[[title]] :<b>[[value]]</b>",
    }],
    "stockLegend": {
        "periodValueTextComparing": "[[percents.value.close]]%",
        "periodValueTextRegular": "[[value.close]]"
    }
};
var panel6 = {
    "showCategoryAxis": true,
    "title": "Value 6",
    "stockGraphs": [{
        title: "Değer6 :",
        "id": "g6",
        "useDataSetColors": false,
        "lineColor": "#fd7f00",
        "valueField": "value6",
        "comparable": false,
        "balloonText": "[[title]] :<b>[[value]]</b>",
    }],
    "stockLegend": {
        "periodValueTextComparing": "[[percents.value.close]]%",
        "periodValueTextRegular": "[[value.close]]"
    }
};

var chartOpt = {
    "type": "stock",
    "language": "tr",
    "theme": "light",
    "dataSets": [{
        "fieldMappings": [{
            "fromField": "value",
            "toField": "value",
        }, {
            "fromField": "value2",
            "toField": "value2",
        }, {
            "fromField": "value3",
            "toField": "value3",
        }, {
            "fromField": "value4",
            "toField": "value4",
        }, {
            "fromField": "value5",
            "toField": "value5",
        }, {
            "fromField": "value6",
            "toField": "value6",
        }],
        "dataProvider": chartData1,
        "categoryField": "date"
    }],

    "panels": [panel1, panel2, panel3, panel4, panel5, panel6],
    "chartScrollbarSettings": {
        "graph": "g1"
    },

    "chartCursorSettings": {
        "valueBalloonsEnabled": true,
        "fullWidth": true,
        "cursorAlpha": 0.1,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "valueLineAlpha": 0.5
    },

    "periodSelector": {
        "position": "left",
        "periods": [{
            "period": "DD",
            "selected": true,
            "count": 7,
            "label": "1 Hafta"
        }, {
            "period": "DD",
            "count": 15,
            "label": "15 Gün"
        }, {
            "period": "MM",
            "count": 1,
            "label": "1 Ay"
        }, {
            "period": "MM",
            "count": 3,
            "label": "3 Ay"
        }, {
            "period": "MM",
            "count": 6,
            "label": "6 Ay"
        }, {
            "period": "YYYY",
            "count": 1,
            "label": "1 year"
        }, {
            "period": "YTD",
            "label": "YTD"
        }, {
            "period": "MAX",
            "label": "MAX"
        }]
    },

    "dataSetSelector": {
        "position": "left"
    },

    "export": {
        "enabled": true
    }
};



var chart = AmCharts.makeChart("chartdiv", chartOpt);