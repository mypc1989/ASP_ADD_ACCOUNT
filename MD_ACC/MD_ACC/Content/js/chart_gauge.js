var socket = io();
socket.on('updateData', function(data) {
    // Nhận dữ liệu từ server
    var newdatetime = data.datetime;
    var newValue1 = data.data;
    var newValue2 = data.data1;
    var newValue3 = data.data2;
    var newValue4 = data.data3;
    var newValue5 = data.data4;
    var newValue6 = data.data5;
    var newValue7 = data.data6;
    var newValue8 = data.data7;
    var newValue9 = data.data8;
    var newValue10 = data.data9;
    var newValue11 = data.data10;
    var newValue12 = data.data11;
    var newValue13 = data.data12;
    var newValue14 = data.data13;
    var newValue15 = data.data14;

    var time = moment(newdatetime).format('DD/MM/YYYY');
    var time1 = moment(newdatetime).format('HH:mm');
    document.getElementById("status_datetime").innerText ="Ngày: " + time;
    document.getElementById("status_datetime1").innerText ="Thời gian: " + time1;

    // Cập nhật biểu đồ Plotly với dữ liệu mới
    Plotly.update('myDiv', { value: [newValue1] });
    Plotly.update('myDiv1', { value: [newValue2] });
    Plotly.update('myDiv2', { value: [newValue3] });
    Plotly.update('myDiv3', { value: [newValue4] });
    Plotly.update('myDiv4', { value: [newValue5] });
    Plotly.update('myDiv5', { value: [newValue6] });
    Plotly.update('myDiv6', { value: [newValue7] });
    Plotly.update('ApLuc_T01', { value: [newValue9] });
    Plotly.update('LLuong_T01', { value: [newValue10] });
    Plotly.update('Cl_T02', { value: [newValue12] });
    Plotly.update('NTU_T02', { value: [newValue13] });
    Plotly.update('Al2_T02', { value: [newValue14] });
    

    //Plotly.update('LLuong_T01', {value: [newValue9]});
    document.getElementById("DhT_T01").innerText = newValue11;
    document.getElementById("cs_dongho").innerText = newValue8;
    document.getElementById("cs_dongho1").innerText = newValue15;
});



var data_ntu = [
    {
        domain: { x: [0, 1], y: [0, 1] },
        value: 0, // Giá trị mặc định
        title: {
            text: "NTU",
            font: { size: 18 },
            position: "top center",
            y: 1,
            yanchor: "bottom"
        },
        type: "indicator",
        mode: "gauge+number",
        
        gauge: {
            axis: { range: [null, 60], tickwidth: 1, tickcolor: "gray" }, // Cấu hình axis
            bar: { color: "#1f77b4" }  // Màu sắc mặc định
        }
    }
];
var data_ph = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "pH",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 14], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "#1f77b4" }

    }
}];
var data_tds = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "TDS",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 60], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "#1f77b4" },
    }
}];
var data_clt = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "CL-",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 1.5], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "#1f77b4" },
    }
}];
var data_clo = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "CLO",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 1.5], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "#1f77b4" },
    }
}];
var data_pressure = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "Áp Lực",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    //axis: { range: [null, 500] },
    axis: { range: [null, 6], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "aqua" },

    }
}];
var data_pressure1 = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "Áp Lực 1",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    //axis: { range: [null, 500] },
    axis: { range: [null, 6], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "aqua" },

    }
}];
var data_pressure2 = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "Áp Lực 2",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    //axis: { range: [null, 500] },
    axis: { range: [null, 6], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "aqua" },

    }
}];
var data_ll = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "Lưu Lượng",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 600], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "aqua" },
    }
}];
var data_ll1 = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "Lưu Lượng 1",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 600], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "aqua" },
    }
}];
var data_ll2 = [
{
    domain: { x: [0, 1], y: [0, 1] },
    value: 0,
    title: {
        text: "Lưu Lượng 2",
        font: { size: 18 }, // Điều chỉnh kích thước chữ
        position: "top center", // Vị trí tiêu đề
        y: 1, // Vị trí y của tiêu đề (1 là trên cùng)
        yanchor: "bottom" // Căn chỉnh theo đáy của tiêu đề
    },
    
    type: "indicator",
    mode: "gauge+number",
    gauge: {
    axis: { range: [null, 600], tickwidth: 1, tickcolor: "gray" },
    bar: { color: "aqua" },
    }
}];

let nvt = (document.getElementById("myDiv"));


console.log(nvt.offsetWidth);

var layoutapluc = {
    width: nvt.offsetWidth,
    height: nvt.offsetWidth,
    margin: { t: 0, r: 8, l: 8, b: 0 },
    paper_bgcolor: "#ffffff",
    font: { color: "black", family: "Arial"},
    annotations: [
        {
            x: 0.5,  // Vị trí theo trục x (giữa đồ thị)
            y: 0.1,  // Vị trí theo trục y (dưới giá trị số)
            text: "bar",  // Văn bản hiển thị
            showarrow: false,
            font: { size: 18, color: "black" }
        }
    ]
};
var layoutll = {
    width: nvt.offsetWidth,
    height: nvt.offsetWidth,
    margin: { t: 0, r: 8, l: 8, b: 0 },
    paper_bgcolor: "#fffffff",
    font: { color: "black", family: "Arial"},
    annotations: [
        {
            x: 0.5,  // Vị trí theo trục x (giữa đồ thị)
            y: 0.1,  // Vị trí theo trục y (dưới giá trị số)
            text: 'm<sup>3</sup>/giờ',  // Văn bản hiển thị
            showarrow: false,
            font: { size: 18, color: "black" }
        }
    ]
};
var layoutntu = {
    width: nvt.offsetWidth,
    height: nvt.offsetWidth,
    margin: { t: 0, r: 8, l: 8, b: 0 },
    paper_bgcolor: "#fffffff",
    font: { color: "black", family: "Arial"},
    annotations: [
        {
            x: 0.5,  // Vị trí theo trục x (giữa đồ thị)
            y: 0.1,  // Vị trí theo trục y (dưới giá trị số)
            text: 'ntu',  // Văn bản hiển thị
            showarrow: false,
            font: { size: 18, color: "black" }
        }
    ]
};
var layoutpH = {
    width: nvt.offsetWidth,
    height: nvt.offsetWidth,
    margin: { t: 0, r: 8, l: 8, b: 0 },
    paper_bgcolor: "#fffffff",
    font: { color: "black", family: "Arial"},
    annotations: [
        {
            x: 0.5,  // Vị trí theo trục x (giữa đồ thị)
            y: 0.1,  // Vị trí theo trục y (dưới giá trị số)
            text: 'pH',  // Văn bản hiển thị
            showarrow: false,
            font: { size: 18, color: "black" }
        }
    ]
};
var layoutTDS = {
    width: nvt.offsetWidth,
    height: nvt.offsetWidth,
    margin: { t: 0, r: 8, l: 8, b: 0 },
    paper_bgcolor: "#fffffff",
    font: { color: "black", family: "Arial"},
    annotations: [
        {
            x: 0.5,  // Vị trí theo trục x (giữa đồ thị)
            y: 0.1,  // Vị trí theo trục y (dưới giá trị số)
            text: 'mg/l',  // Văn bản hiển thị
            showarrow: false,
            font: { size: 18, color: "black" }
        }
    ]
};
var layoutCL = {
    width: nvt.offsetWidth,
    height: nvt.offsetWidth,
    margin: { t: 0, r: 8, l: 8, b: 0 },
    paper_bgcolor: "#fffffff",
    font: { color: "black", family: "Arial"},
    annotations: [
        {
            x: 0.5,  // Vị trí theo trục x (giữa đồ thị)
            y: 0.1,  // Vị trí theo trục y (dưới giá trị số)
            text: 'ppt',  // Văn bản hiển thị
            showarrow: false,
            font: { size: 18, color: "black" }
        }
    ]
};

Plotly.newPlot('myDiv', data_ntu, layoutntu, {displayModeBar: false});
Plotly.newPlot('myDiv1', data_ph, layoutpH, {displayModeBar: false});
Plotly.newPlot('myDiv2', data_tds, layoutTDS, {displayModeBar: false});
Plotly.newPlot('myDiv3', data_clt, layoutCL, {displayModeBar: false});
Plotly.newPlot('ApLuc_T01', data_pressure, layoutapluc, {displayModeBar: false});
Plotly.newPlot('LLuong_T01', data_ll, layoutll, {displayModeBar: false});


Plotly.newPlot('Cl_T02', data_clo, layoutCL, {displayModeBar: false});
Plotly.newPlot('NTU_T02', data_ntu, layoutntu, {displayModeBar: false});
// Plotly.newPlot('myDiv4', data_pressure1, layoutapluc, {displayModeBar: false});
// Plotly.newPlot('Al2_T02', data_pressure2, layoutapluc, {displayModeBar: false});
// Plotly.newPlot('myDiv5', data_ll1, layoutll, {displayModeBar: false});
// Plotly.newPlot('myDiv6', data_ll2, layoutll, {displayModeBar: false});




