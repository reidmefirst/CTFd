function popdropdownnew() {
    $.post(script_root + "/admin/chals", {
        'nonce': $('#nonce').val()
    }, function (data) {
        var categories = [];
        challenges = $.parseJSON(JSON.stringify(data));
        for (var i = challenges['game'].length - 1; i >= 0; i--) {
            var dropdown = document.getElementById("dependsuponselect");
            var option = document.createElement("option");
            option.text = challenges['game'][i].category + ": " + challenges['game'][i].name;
            option.value = challenges['game'][i].id;
            dropdown.add(option);
        }
    }
    )
}

function popdropdownedits() {
    $.post(script_root + "/admin/chals", {
        'nonce': $('#nonce').val()
    }, function (data) {
        var categories = [];
        challenges = $.parseJSON(JSON.stringify(data));
        for (var i = challenges['game'].length - 1; i >= 0; i--) {
            var dropdown = document.getElementById("dependsuponselect2");
            var option = document.createElement("option");
            option.text = challenges['game'][i].category + ": " + challenges['game'][i].name;
            option.value = challenges['game'][i].id;
            dropdown.add(option);
        }
    }
    )
}

popdropdownnew();
popdropdownedits();
