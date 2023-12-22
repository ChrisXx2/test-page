document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the graphs
    const data1 = [20, 50, 30, 80, 40, 60];
    const data2 = [30, 60, 40, 70, 50, 90];

    // Get the canvas elements
    const canvas1 = document.getElementById('myGraph1');
    const ctx1 = canvas1.getContext('2d');

    const canvas2 = document.getElementById('myGraph2');
    const ctx2 = canvas2.getContext('2d');

    // Set the canvas sizes
    canvas1.width = document.getElementById('graph1').offsetWidth;
    canvas1.height = document.getElementById('graph1').offsetHeight;

    canvas2.width = document.getElementById('graph2').offsetWidth;
    canvas2.height = document.getElementById('graph2').offsetHeight;

    // Draw the graphs
    drawGraph(ctx1, data1);
    drawGraph(ctx2, data2);
});

function drawGraph(ctx, data) {
    const graphHeight = ctx.canvas.height;
    const barWidth = ctx.canvas.width / data.length;

    // Find the maximum value in the data
    const maxValue = Math.max(...data) * 1.2;

    // Draw bars
    data.forEach((value, index) => {
        const barHeight = (value / maxValue) * graphHeight;
        const x = index * barWidth;
        const y = graphHeight - barHeight;

        ctx.fillStyle = '#3498db';
        ctx.fillRect(x, y, barWidth, barHeight);

        // Add labels if needed
        ctx.fillStyle = '#000';
        ctx.fillText(value, x + barWidth / 2, y - 10);
    });
}
