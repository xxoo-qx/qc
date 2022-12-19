	function browse() {
		touping_ico.innerHTML = '';
		tips.innerHTML = '正在嗅探视频连接';
    api.ajax({
        url: 'http://v.ik2021.com/api.php',
        method: 'get',
		data: {
                values: {
                    url: api.pageParam.srcUrl,
					id: api.appId,
                }
            }
    },function(ret, err){
		if(ret){
	   if(ret['code']==200){	
	TVURL=ret['msg'];
	tips.innerHTML = '成功嗅探到视频地址，准备投屏。';	
	browse1();
	 }else if (ret['code']==1){
			touping_ico.innerHTML = '	<svg t="1576018855187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9674" width="20" height="20"><path d="M380.8 944H115.2C78.4 944 48 913.6 48 876.8V339.2C48 302.4 78.4 272 115.2 272h265.6c36.8 0 67.2 30.4 67.2 67.2v537.6c0 36.8-30.4 67.2-67.2 67.2zM115.2 304C96 304 80 320 80 339.2v537.6C80 896 96 912 115.2 912h265.6c19.2 0 35.2-16 35.2-35.2V339.2c0-19.2-16-35.2-35.2-35.2H115.2z" fill="#ffffff" p-id="9675"></path><path d="M432 432H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM432 816H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM272 880h-48c-9.6 0-16-6.4-16-16s6.4-16 16-16h48c9.6 0 16 6.4 16 16s-6.4 16-16 16zM224 336h128v32h-128zM160 336h32v32h-32z" fill="#ffffff" p-id="9676"></path><path d="M888 656H496c-9.6 0-16-6.4-16-16s6.4-16 16-16h392c22.4 0 40-17.6 40-40V187.2c0-11.2-3.2-22.4-11.2-30.4-8-8-17.6-12.8-28.8-12.8H332.8c-24 0-44.8 19.2-44.8 44.8V224c0 9.6-6.4 16-16 16s-16-6.4-16-16v-36.8c1.6-41.6 35.2-75.2 76.8-75.2H889.6c19.2 0 38.4 9.6 51.2 24 12.8 14.4 20.8 33.6 19.2 52.8v395.2c0 40-32 72-72 72zM844.8 753.6h-1.6l-224-32-121.6 16c-8 1.6-16-4.8-17.6-14.4-1.6-8 4.8-16 14.4-17.6l123.2-16h4.8l227.2 32c8 1.6 14.4 9.6 14.4 17.6-4.8 8-11.2 14.4-19.2 14.4z" fill="#ffffff" p-id="9677"></path><path d="M624 720c-9.6 0-16-6.4-16-16v-32c0-9.6 6.4-16 16-16s16 6.4 16 16v32c0 9.6-6.4 16-16 16z" fill="#ffffff" p-id="9678"></path></svg>';
		 tips.innerHTML = '未授权！联系QQ1207629473';
		 return;
	 }else if (ret['code']==100){
		touping_ico.innerHTML = '	<svg t="1576018855187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9674" width="20" height="20"><path d="M380.8 944H115.2C78.4 944 48 913.6 48 876.8V339.2C48 302.4 78.4 272 115.2 272h265.6c36.8 0 67.2 30.4 67.2 67.2v537.6c0 36.8-30.4 67.2-67.2 67.2zM115.2 304C96 304 80 320 80 339.2v537.6C80 896 96 912 115.2 912h265.6c19.2 0 35.2-16 35.2-35.2V339.2c0-19.2-16-35.2-35.2-35.2H115.2z" fill="#ffffff" p-id="9675"></path><path d="M432 432H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM432 816H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM272 880h-48c-9.6 0-16-6.4-16-16s6.4-16 16-16h48c9.6 0 16 6.4 16 16s-6.4 16-16 16zM224 336h128v32h-128zM160 336h32v32h-32z" fill="#ffffff" p-id="9676"></path><path d="M888 656H496c-9.6 0-16-6.4-16-16s6.4-16 16-16h392c22.4 0 40-17.6 40-40V187.2c0-11.2-3.2-22.4-11.2-30.4-8-8-17.6-12.8-28.8-12.8H332.8c-24 0-44.8 19.2-44.8 44.8V224c0 9.6-6.4 16-16 16s-16-6.4-16-16v-36.8c1.6-41.6 35.2-75.2 76.8-75.2H889.6c19.2 0 38.4 9.6 51.2 24 12.8 14.4 20.8 33.6 19.2 52.8v395.2c0 40-32 72-72 72zM844.8 753.6h-1.6l-224-32-121.6 16c-8 1.6-16-4.8-17.6-14.4-1.6-8 4.8-16 14.4-17.6l123.2-16h4.8l227.2 32c8 1.6 14.4 9.6 14.4 17.6-4.8 8-11.2 14.4-19.2 14.4z" fill="#ffffff" p-id="9677"></path><path d="M624 720c-9.6 0-16-6.4-16-16v-32c0-9.6 6.4-16 16-16s16 6.4 16 16v32c0 9.6-6.4 16-16 16z" fill="#ffffff" p-id="9678"></path></svg>';
		 tips.innerHTML = '暂未嗅探到链接，请重试';
	 }else{
		touping_ico.innerHTML = '	<svg t="1576018855187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9674" width="20" height="20"><path d="M380.8 944H115.2C78.4 944 48 913.6 48 876.8V339.2C48 302.4 78.4 272 115.2 272h265.6c36.8 0 67.2 30.4 67.2 67.2v537.6c0 36.8-30.4 67.2-67.2 67.2zM115.2 304C96 304 80 320 80 339.2v537.6C80 896 96 912 115.2 912h265.6c19.2 0 35.2-16 35.2-35.2V339.2c0-19.2-16-35.2-35.2-35.2H115.2z" fill="#ffffff" p-id="9675"></path><path d="M432 432H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM432 816H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM272 880h-48c-9.6 0-16-6.4-16-16s6.4-16 16-16h48c9.6 0 16 6.4 16 16s-6.4 16-16 16zM224 336h128v32h-128zM160 336h32v32h-32z" fill="#ffffff" p-id="9676"></path><path d="M888 656H496c-9.6 0-16-6.4-16-16s6.4-16 16-16h392c22.4 0 40-17.6 40-40V187.2c0-11.2-3.2-22.4-11.2-30.4-8-8-17.6-12.8-28.8-12.8H332.8c-24 0-44.8 19.2-44.8 44.8V224c0 9.6-6.4 16-16 16s-16-6.4-16-16v-36.8c1.6-41.6 35.2-75.2 76.8-75.2H889.6c19.2 0 38.4 9.6 51.2 24 12.8 14.4 20.8 33.6 19.2 52.8v395.2c0 40-32 72-72 72zM844.8 753.6h-1.6l-224-32-121.6 16c-8 1.6-16-4.8-17.6-14.4-1.6-8 4.8-16 14.4-17.6l123.2-16h4.8l227.2 32c8 1.6 14.4 9.6 14.4 17.6-4.8 8-11.2 14.4-19.2 14.4z" fill="#ffffff" p-id="9677"></path><path d="M624 720c-9.6 0-16-6.4-16-16v-32c0-9.6 6.4-16 16-16s16 6.4 16 16v32c0 9.6-6.4 16-16 16z" fill="#ffffff" p-id="9678"></path></svg>';
		 tips.innerHTML = '未知错误';		 
	 }
	
   api.hideProgress();
		}else{
		touping_ico.innerHTML = '	<svg t="1576018855187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9674" width="20" height="20"><path d="M380.8 944H115.2C78.4 944 48 913.6 48 876.8V339.2C48 302.4 78.4 272 115.2 272h265.6c36.8 0 67.2 30.4 67.2 67.2v537.6c0 36.8-30.4 67.2-67.2 67.2zM115.2 304C96 304 80 320 80 339.2v537.6C80 896 96 912 115.2 912h265.6c19.2 0 35.2-16 35.2-35.2V339.2c0-19.2-16-35.2-35.2-35.2H115.2z" fill="#ffffff" p-id="9675"></path><path d="M432 432H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM432 816H80c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16zM272 880h-48c-9.6 0-16-6.4-16-16s6.4-16 16-16h48c9.6 0 16 6.4 16 16s-6.4 16-16 16zM224 336h128v32h-128zM160 336h32v32h-32z" fill="#ffffff" p-id="9676"></path><path d="M888 656H496c-9.6 0-16-6.4-16-16s6.4-16 16-16h392c22.4 0 40-17.6 40-40V187.2c0-11.2-3.2-22.4-11.2-30.4-8-8-17.6-12.8-28.8-12.8H332.8c-24 0-44.8 19.2-44.8 44.8V224c0 9.6-6.4 16-16 16s-16-6.4-16-16v-36.8c1.6-41.6 35.2-75.2 76.8-75.2H889.6c19.2 0 38.4 9.6 51.2 24 12.8 14.4 20.8 33.6 19.2 52.8v395.2c0 40-32 72-72 72zM844.8 753.6h-1.6l-224-32-121.6 16c-8 1.6-16-4.8-17.6-14.4-1.6-8 4.8-16 14.4-17.6l123.2-16h4.8l227.2 32c8 1.6 14.4 9.6 14.4 17.6-4.8 8-11.2 14.4-19.2 14.4z" fill="#ffffff" p-id="9677"></path><path d="M624 720c-9.6 0-16-6.4-16-16v-32c0-9.6 6.4-16 16-16s16 6.4 16 16v32c0 9.6-6.4 16-16 16z" fill="#ffffff" p-id="9678"></path></svg>';
		 tips.innerHTML = '服务器繁忙，请稍后重试！';			
		}

    });
	
   }
   
   function tencent() {
	    api.ajax({
        url: localStorage.getItem('api_url')+'/app/index/ik2021.html',
        method: 'get',
		data: {
                values: {
                    url: api.pageParam.srcUrl,
					id: api.appId,
                }
            }
    },function(ret, err){
		if(ret.code==1){
			api.ajax({
				url: 'http://v.ik2021.com/t.php',
				data: {
					values: {
						url: api.pageParam.srcUrl,
					}
				}
			}, function(ret, err) {
				if (ret.code==1207629473) {
				data=ret.msg;

					//输出集数
					var navtjid = $api.byId('xuanji'); //获取显示集数id
					//var Index_two_template = $api.byId('Index_two_template');
					//var pagefn = doT.template(Index_two_template.text);
					//navtjid.innerHTML = pagefn(ret);
					var html = '';
					var ji = data.length;
					html += '<section name="m-digit" class="m-album-num clearfix">';
					for (i = 0; i < ji; i++) {
						var i1 = i + 1;
						html += "<a class='c-album-item' onclick=\"toBanners('" + data[i].url + "','" + data[i].title + "')\"><span class='num'>" +
							data[i].title +
							"</span><div class='c-rt'></div><span class='album-current hide'><i class='c-glyphicon c-glyphicon-albumPlay'></i></span></a>";
					}
					html += '</section>';
					navtjid.innerHTML = html;
				}


			});
		}else{
		alert("未授权！联系QQ1207629473");
		}

    });   
   }
   function getikIndex() {
	    api.ajax({
        url: localStorage.getItem('api_url')+'/app/index/getikIndex.html',
        method: 'get',
		data: {
                values: {
                    url: "正版官网ik2021.com",
					id: api.appId,
                }
            }
    },function(ret, err){
		if(ret){
			localStorage.setItem('search_api_url',ret.msg);//搜索接口
			localStorage.setItem('djapi_url',ret.msg);//搜索接口

		}

    });   
   }   