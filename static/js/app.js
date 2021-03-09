
let data = d3.json("data/samples.json").then(data => {
    console.log(data)
    let samples = data.samples;
    let metadata = data.metada;
    console.log(samples)
    console.log(metadata)

})

function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}

function updatePlotly(newdata) {
    Plotly.restyle("pie", "values", [newdata]);
}
// Horizontal Chart
function horizontalChart() {
    let data = [
        {
            y: ['giraffes', 'orangutans', 'monkeys'],//otu_ids top10
            x: [20, 14, 23], //samples_values top10
            text: ['animal', 'hello', 'yogurt'], //out_labels  top10
            type: 'bar',
            orientation: 'h',
            width: 0.5
        },
    ];
    let layout = {
        title: 'test',
        
        showlegend: false,
        xaxis: {
            tickangle: 0,
            zeroline: true,
            title: "Sample Value",
        },
        yaxis: {
            zeroline: true,
            gridwidth: 1,
            title: "OTU ID" 
        },
        bargap: 0.05,
        height: 800,
        width: 1150,
        margin: { t: 100, l: 100 },
        barmode: 'stack',
        
    };
    Plotly.newPlot('bar', data, layout);
}

    // Plotly.newPlot('bar', data, layout);
    // let barTrace = [
    //     {
    //         y: [1, 2, 3],//otu_ids top10
    //         x: [1, 2, 3],//samples_values top10 
    //         text: [1, 2, 3],//out_labels  top10
    //         type: "bar",
    //         orientation: "h",
    //     }
    // ];
    // let barLayout = {
    //     title: "Top 10 Bacteria Cultures Found",
    //     width: 800,
    //     height: 300,
    //     margin: { t: 100, l: 100 },
    //     barmode: 'stack',
    //     xaxis: { title: "Sample Value" },
    // };

    // Plotly.newPlot("bar", [barTrace], barLayout);
//}
horizontalChart()

// Function Bubble chart
// https://plotly.com/javascript/bubble-charts/
function bubbleChart() {
    var trace1 = {
        x: [1, 2, 3, 4], //sample_value
        y: [10, 11, 12, 13], // OTU_ID
        text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
            color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            size: [40, 60, 80, 100] //size = sample value
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Bubble Chart Hover Text',
        showlegend: false,
        height: 600,
        width: 900,
        margin: { t: 100, l: 100 },
        showlegend: false,
        xaxis: {
            tickangle: 0,
            zeroline: true,
            title: "OTU ID"
        },
        yaxis: {
            zeroline: true,
            gridwidth: 1,
            title: "Sample Value",
        },
    };
    console.log(data)
    Plotly.newPlot('bubble', data, layout);
}

bubbleChart()

// Demographic info on #sample-metadata



// dropDown button

let dropDown = d3.select('#selDataset')
dropDown.on('change', handleChange)

function handleChange(event) {
    let chosenOption = event.target.value
    switch (chosenOption) {
        case optionChanged(this.value):
            updatePlotly(optionChanged);
            break;
    }
}

