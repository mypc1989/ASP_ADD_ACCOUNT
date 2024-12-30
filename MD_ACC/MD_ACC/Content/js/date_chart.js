// Get the button that opens the modal
var vtri1 = document.getElementById("row1_box1");
var vtri2 = document.getElementById("row1_box2");
var vtri3 = document.getElementById("row1_box3");
var vtri4 = document.getElementById("row1_box4");
var vtri5 = document.getElementById("row2_box1");
var vtri6 = document.getElementById("row2_box2");
var vtri7 = document.getElementById("row2_box3");
var vtri8 = document.getElementById("row2_box4");

// When the user clicks the button, open the modal 
vtri1.onclick = function() {openDetailedPopup(1);}
vtri2.onclick = function() {openDetailedPopup(2);}
vtri3.onclick = function() {openDetailedPopup(3);}
vtri4.onclick = function() {openDetailedPopup(4);}
vtri5.onclick = function() {openDetailedPopup(5);}
vtri6.onclick = function() {openDetailedPopup(6);}
vtri7.onclick = function() {openDetailedPopup(7);}
vtri8.onclick = function() {openDetailedPopup(8);}


// Hàm mở popup lớn và hiển thị đồ thị
function openDetailedPopup(viTri) {
    document.getElementById("popupLocation").innerText = viTri; // Hiển thị số vị trí
    document.getElementById("largePopup").style.display = "block"; // Mở popup
    
    // Xóa sự kiện click cũ nếu có
    document.getElementById("btn-thongke").removeEventListener("click", fetchDataHandler);

    // Định nghĩa hàm handler để truyền vào sự kiện click
    function fetchDataHandler() {
        fetchData(viTri);
    }

    // Gán sự kiện click mới
    document.getElementById("btn-thongke").addEventListener("click", fetchDataHandler);
    fetchData(viTri);
}

// Function to refresh Plotly charts and reset content inside popup
function refreshPopupContent() {

    // Clear Plotly charts
    Plotly.purge('chart_flow');
    Plotly.purge('chart_battery');

    // Optionally, you can redraw the charts or reset them with default data
    initPlotlyCharts();
}

// Initialize or redraw Plotly charts with default data
function initPlotlyCharts() {
    const defaultDataFlow = [{
        x: [], // default x data
        y: [], // default y data
        type: 'scatter'
    }];
    const defaultDataBattery = [{
        x: [], // default x data
        y: [], // default y data
        type: 'scatter'
    }];

    Plotly.newPlot('chart_flow', defaultDataFlow);
    Plotly.newPlot('chart_battery', defaultDataBattery);
}

// Call initPlotlyCharts() on page load to initialize charts
window.onload = initPlotlyCharts;

 // Đóng popup khi nhấn "Đóng"
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("largePopup").style.display = "none"; // Đóng popup
    refreshPopupContent(); // Làm mới nội dung trong popup
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        refreshPopupContent(); // Làm mới nội dung trong popup
    }
}

// Initialize socket connection
const socket = io(); // Use "socket" as the variable name consistently

// Get the modal and buttons that open the modal
const modal = document.getElementById("largePopup");

// Define date range variables
let startDate = moment().subtract(24, 'hours').unix() , endDate = moment().unix();


// Date range picker initialization
$(document).ready(function() {
    const currentDate = moment();
    const previousDay = moment().subtract(24, 'hours');

    $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        startDate: previousDay,
        endDate: currentDate,
        locale: {
            format: isMobileScreen() ? 'HH:mm DD/MM' : 'HH:mm DD/MM/YYYY'
        }
    }, function(start, end) {
        startDate = start.unix();
        endDate = end.unix();
    });
});

// Function to check if the screen is mobile-sized
function isMobileScreen() {
    return window.innerWidth <= 768;
}

// Function to request data based on selected date range
function fetchData(viTri) {
    // if (!startDate || !endDate || startDate >= endDate) {
    //     alert("Vui lòng chọn khoảng thời gian hợp lệ.");
    //     return;
    // }
    var nameTable = `d${viTri}`;
    console.log(nameTable);
    // Emit the date range to the server
    socket.emit('daterange', { startDate, endDate, nameTable });
}

// Listen for 'plotData' response from server
socket.on('plotData', (response) => {
    if (response.error) {
        alert("Lỗi: " + response.error);
        return;
    }

    const data = response.data;
    if (!data || data.length === 0) {
        alert("Không có dữ liệu để hiển thị trong khoảng thời gian đã chọn.");
        return;
    }

    // Prepare data for Plotly
    const timestamps = data.map(item => item.timestamp * 1000);
    const pressure = data.map(item => item.pressure);
    const battery = data.map(item => item.bat);
    const flow = data.map(item => item.flow);

    // Define traces for Plotly
    const trace1 = { x: timestamps, y: pressure, mode: 'line', type: 'scatter', name: 'Pressure' };
    const trace2 = { x: timestamps, y: battery, mode: 'line', type: 'scatter', name: 'Battery' };
    const trace3 = { x: timestamps, y: flow, mode: 'line', type: 'scatter', name: 'Flow' };

    // Layout settings for Plotly
    const layout = {
        margin: { l: 50, r: 50, b: 50, t: 50, pad: 4 },
        xaxis: { rangeslider: { visible: true }, type: 'date', title: 'Thời Gian', showgrid: true, zeroline: false, tickfont: { size: 14, color: 'black' } },
        yaxis: { title: 'Giá Trị', showgrid: true, zeroline: false, tickfont: { size: 14, color: 'black' } },
        legend: { x: 1, xanchor: 'right', y: 1.3, orientation: 'h' }
    };

    // Render the chart with Plotly
    Plotly.newPlot('chart_flow', [trace1, trace3], layout, { displayModeBar: false });
    Plotly.newPlot('chart_battery', [trace2], layout, { displayModeBar: false });
});


