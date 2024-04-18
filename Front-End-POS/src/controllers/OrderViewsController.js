loadAllOrderDetail();

function loadAllOrderDetail() {
    $("#tblOrderDetails").empty();
    $("#tblOrderDetails").empty();
    $.ajax({
        url:  "http://localhost:8080/app/orders/LoadOrderDetails", method: "GET", dataType: "json", success: function (res) {
            console.log(res);

            for (let i of res.data) {
                let oid = i.oid;
                let itemCode = i.itemCode;
                let qty = i.qty;
                let unitPrice = i.unitPrice;

                let row = "<tr><td>" + oid + "</td><td>" + itemCode + "</td><td>" + qty + "</td><td>" + unitPrice + "</td></tr>";
                $("#tblOrderDetails").append(row);
            }
            console.log(res.message);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            console.log(message);
        }

    });
}
