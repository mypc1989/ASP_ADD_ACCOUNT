// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });
// document.addEventListener('keydown', function (e) {
// // Chặn F12
// if (e.key === 'F12') {
//     e.preventDefault();
// }
// // Chặn Ctrl+Shift+I
// if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//     e.preventDefault();
// }
// // Chặn Ctrl+Shift+C
// if (e.ctrlKey && e.shiftKey && e.key === 'C') {
//     e.preventDefault();
// }
// // Chặn Ctrl+U (xem mã nguồn)
// if (e.ctrlKey && e.key === 'u') {
//     e.preventDefault();
// }
// });


document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("largePopup").style.display = "none";
});
$(document).ready(function() {
    // Bắt sự kiện click trên các thẻ div để bật/tắt dữ liệu trên biểu đồ Screen_Gas_T1
    $('#myDiv').click(function() { openDetailedPopup(0); });
    $('#myDiv1').click(function() { openDetailedPopup(1); });
    $('#myDiv2').click(function() { openDetailedPopup(2); });
    $('#myDiv3').click(function() { openDetailedPopup(3); });
    $('#ApLuc_T01').click(function() { openDetailedPopup(4); });
    $('#LLuong_T01').click(function() { openDetailedPopup(5); });
    $('#Div_DH').click(function() { openDetailedPopup(6); });


    function openDetailedPopup(viTri) {
        document.getElementById("popupLocation").innerText = viTri;
        document.getElementById("largePopup").style.display = "block";

        // Đặt sự kiện cho nút "Tải Dữ Liệu" để gọi API với điều kiện thời gian
        // document.getElementById("loadChartData").onclick = function() {
        //     loadChartData(viTri);
        // };
    }

    $('#Cl_T02').click(function() {
        openDetailedPopup(0); 
    });
    $('#NTU_T02').click(function() {
        openDetailedPopup(1);
    });
    $('#myDiv4').click(function() {
        openDetailedPopup(2); 
    });
    $('#Al2_T02').click(function() {
        openDetailedPopup(3); 
    });
    $('#myDiv5').click(function() {
        openDetailedPopup(4); 
    });

    $('#myDiv6').click(function() {
        openDetailedPopup(5);
    });

});

// $(document).ready(function() {
//     // Bắt sự kiện click trên các thẻ div để bật/tắt dữ liệu trên biểu đồ Screen_Gas_T1
//     $('#myDiv').click(function() { openDetailedPopup(0); });
//     $('#myDiv1').click(function() { openDetailedPopup(1); });
//     $('#myDiv2').click(function() { openDetailedPopup(2); });
//     $('#myDiv3').click(function() { openDetailedPopup(3); });
//     $('#ApLuc_T01').click(function() { openDetailedPopup(4); });
//     $('#LLuong_T01').click(function() { openDetailedPopup(5); });
//     $('#Div_DH').click(function() { openDetailedPopup(6); });

//     // Các sự kiện khác
//     $('#Cl_T02').click(function() { openDetailedPopup(0); });
//     $('#NTU_T02').click(function() { openDetailedPopup(1); });
//     $('#myDiv4').click(function() { openDetailedPopup(2); });
//     $('#Al2_T02').click(function() { openDetailedPopup(3); });
//     $('#myDiv5').click(function() { openDetailedPopup(4); });
//     $('#myDiv6').click(function() { openDetailedPopup(5); });

//     // Đặt sự kiện click cho nút "closePopup" để ẩn popup
//     $('#closePopup').click(function() {
//         $('#largePopup').css('display', 'none');
//     });

//     function openDetailedPopup(viTri) {
//         $('#popupLocation').text(viTri);
//         $('#largePopup').css('display', 'block');
//     }
// });
