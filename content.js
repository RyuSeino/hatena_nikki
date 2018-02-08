
var date = new Date();
var title = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日の日記';
var target = document.getElementById('title');

target.onfocus = function() {
	document.getElementById('title').value = title;
};

