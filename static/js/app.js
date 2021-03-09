
let data = d3.json("data/samples.json").then(data => {
    console.log(data)
    let samples = data.samples;
    console.log(samples)
    
})

function unpack(rows, index) {
    return rows.map(function(row) {
        return row[index];
    });
}

function updatePlotly(newdata) {
    Plotly.restyle("pie", "values", [newdata]);
}

function horizontalChart(){
    let barTrace = [
        {
            y: [1,2,3],//otu_ids top10
            x: [1,2,3],//samples_values top10 
            text: [1,2,3],//out_labels  top10
            type: "bar",
            colorscale: 'YlOrRd',
            orientation: "h",
            marker: {
                color: otu_ids,
                opacity: 0.6,
                line: {
                    color: 'orange',
                    width: 1.5
                }
            }
        }
    ];
    let barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        width: 800,
        height: 500,
        margin: { t: 100, l: 100 },
        barmode: 'stack',
        xaxis: { title: "Sample Value" },
    };

    Plotly.newPlot("selDataset", bar, barLayout);
}
horizontalChart()