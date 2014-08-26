var kat_host = "http://kickass.to/usearch/";

var youtube_host = "file:///Volumes/Home/Developing/wanghaogithub720/djzhang/ChromeUtils/youtubeplaylist/index.html";

//插件按钮图标点击后进入后台
chrome.browserAction.onClicked.addListener(function (tab) {
//    chrome.tabs.executeScript(null, {file: "jquery.js"});  //executeScript 相当于在当前页面插入js代码/文件
//    url = "http://" + (tab.url).split("/")[2] + "/admin/";
    var url = tab.url;
    var host = tab.host;
//    alert("wanghao" + url);
    var title = tab.title;

    var index = url.indexOf("www.youtube.com/user");
    if (index != -1) {// youtube
        //https://www.youtube.com/user/salesforce/playlists
        //  Salesforce Video- YouTube
        title = tab.title.replace(" Video", "").replace(" YouTube", "").replace(" ", "").replace("-", "");
//        alert(tab.title);
        chrome.tabs.create({ url: encodeURI(youtube_host + "?id=" + title)});
    } else {
        title = tab.title.replace("- IMDb", "").replace("(", "").replace(")", "").replace(",", "").replace("TV Series", "");
        chrome.tabs.create({ url: encodeURI(kat_host + title)});
    }

    console.log(title);
});

