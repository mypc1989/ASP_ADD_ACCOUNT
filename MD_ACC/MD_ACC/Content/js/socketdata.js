socket.on('updateData', function(data){
    var time = data.TransferTime;
    var bat = data.Bat;
    var pressure = data.Pressure;
    var flow = data.Flowrate;
    var meter = data.Meter;
    console.log(meter);
    document.getElementById('time-t1').innerHTML = chuyendoitime(time);
    document.getElementById('pres-t1').innerHTML = `${pressure} (bar)`;
    document.getElementById('bat-t1').innerHTML = `${bat} (V)`;
    document.getElementById('flow-t1').innerHTML = `${flow} (m<sup>3</sup>/h)`;
    document.getElementById('meter-t1').innerHTML = `${meter} (m<sup>3</sup>)`;
});


function chuyendoitime(unixTimestamp) {
    // Chuyển đổi Unix timestamp thành đối tượng Date
    const date = new Date(unixTimestamp * 1000); // Nhân với 1000 vì JavaScript sử dụng milliseconds

    // Lấy thông tin ngày, tháng, năm, giờ và phút
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Định dạng lại theo yêu cầu
    return `${day}-${month}-${year} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}