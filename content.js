
var iframe = document.getElementById('body_ifr');
var date = new Date();
var title = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日の日記';

if (!iframe) {
	var textarea = document.getElementById('body');

	textarea.onfocus = function() {
	    document.getElementById('title').value = title;
	}
} else {
	iframe.contentDocument.body.onfocus = function() {
	    document.getElementById('title').value = title;
	}
}

