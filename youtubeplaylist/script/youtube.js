/**
 * Created by djzhang on 8/26/14.
 */

var youtube_url = "http://gdata.youtube.com/feeds/api/users/MadMonarchist/playlists?start-index=1&max-results=50&v=2&alt=json";

function doGetPlayLists(userName) {
    var url = youtube_url.replace("MadMonarchist", userName);
    $.getJSON(url, function (data) {
        var entry = data["feed"]["entry"];
        var items = [];

        $.each(entry, function (key, val) {
            doGetUrl(items, val);
        });

        $("<div/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo(".cont");
    });
}

function doGetUrl(items, val) {
    var link = val["link"]["1"]["href"];
    items.push("<div>" + link + "</div>");
}

function getArgument() {
    var message = window.location.search;
//            alert(message);    // --返回   ?id=1
    var arg = message.split("=");
    if (arg.length <= 1) {
    }
    else {
        var res = arg[1];
        //alert(res);
        return res;
    }
    return null;
}


