angular.module('vedioCtrl', ['factories']).controller('indexCtrl', ['$rootScope', '$scope', '$timeout', 'http',
    function($rootScope, $scope, $timeout, http) {
        var timestamp = Date.parse(new Date());
        U.SystemDefault('RyanAppVersion', '718');
		U.SystemDefault('IsOpenLoadPage', '0');
        U.SkinDefault('skin_index', 'index_x');
		U.SkinDefault('skin_recommen', 'recommend_b');
        U.SkinDefault('skin_recommend', 'recommend_a');
        U.SkinDefault('skin_user', 'user_x');
        U.SkinDefault('web_module', 'webBrowser');
        U.SkinDefault('jx_play_module', 'native');
        U.SkinDefault('skin_authentication', 'two');
        U.SystemDefault('skin_connection_failed', '_a');
        U.SystemDefault('index_video_num', '12');
        U.SystemDefault('SingleSignOn', '0');
        U.SystemDefault('ActivationCodeDetection', '0');
        U.SystemDefault('ButtonSubmissionTime', timestamp);
        U.SystemDefault('connection_failed_tips', '');
        U.SystemDefault('UserParentId', '1');
        U.SystemDefault('offlineState', '0');
        U.SystemDefault('IsOpenConnectionFailedPage', '0');
        U.SystemDefault('mod_open_search', '0');
        U.SystemDefault('mod_open_live', '0');
        U.SystemDefault('mod_open_notice', '0');
        U.SystemDefault('Proxy_login', '0');
        U.SystemDefault('ranking_agent_ad', '0');
        U.SystemDefault('mainFooter', '1');
        U.SystemDefault('Vip_Voice_cues', '0');
        U.SystemDefault('DefaultLogo', '../../images/b_03.png');
        U.SystemDefault('User_AgentIntroductionBanner', '../../images/b_10.png');
        U.SystemDefault('interface_json_opt', '2');
        U.SystemDefault('default_player_volume', '0.3');
        U.SystemDefault('automatic_volume', '1');
        U.SystemDefault('Progress_Control_TV_Screening', '1');
        U.SystemDefault('Delete_Update_Package', '1');
        U.SystemDefault('WebReturnLogic', '1');
        U.SystemDefault('SystemReturnKeyBinding', '1');
        U.SystemDefault('IndexAutoPlay', '0');
        U.SystemDefault('experience_total', '0');
        U.SystemDefault('experience_used', '0');
        U.SystemDefault('experience_proportion', '0');
        U.SystemDefault('one_month_total', '0');
        U.SystemDefault('one_month_used', '0');
        U.SystemDefault('one_month_proportion', '0');
        U.SystemDefault('half_a_year_total', '0');
        U.SystemDefault('half_a_year_used', '0');
        U.SystemDefault('half_a_year_proportion', '0');
        U.SystemDefault('one_year_total', '0');
        U.SystemDefault('one_year_used', '0');
        U.SystemDefault('one_year_proportion', '0');
        U.SystemDefault('permanent_total', '0');
        U.SystemDefault('permanent_used', '0');
        U.SystemDefault('permanent_proportion', '0');
        U.SystemDefault('launchImageAd_time', '3000');
        U.SystemDefault('launchImageAd_skip', '1');
        U.SystemDefault('Hitokoto', 'Hi~');
        U.SystemDefault('UserId', '0');
        U.SystemDefault('app_name', '');
        U.SystemDefault('admin_nick_name', 'Ryan');
        U.SystemDefault('RePassPriority', '0');
        var vm = $scope.vm = {},
            dUrl = ['./html/menu/' + localStorage.getItem('skin_index') + '.html', './html/menu/' + localStorage.getItem('skin_recommen') + '.html', './html/menu/' + localStorage.getItem('skin_recommend') + '.html', './html/menu/' + localStorage.getItem('skin_user') + '.html'];
        vm.setTab = function(index) {
            var headerHeight = $('header').height(),
                footerHeight = $('footer').height();
			                api.sendEvent({
                    name: 'indexChangeEvent',
                    extra: {
                        id: index
                    }
                });
            api.openFrame({
                name: 'name' + index,
                url: dUrl[index],
                vScrollBarEnabled: false,
                rect: {
                    x: 0,
                    y: headerHeight,
                    w: 'auto',
                    h: api.winHeight - (headerHeight + footerHeight)
                },
                animation: {
                    type: 'none',
                    subType: 'from_top'
                }
            });
            api.sendFrameToBack({
                from: 'launchimagead',
                to: 'name' + index
            })
        };
        vm.mainTabIndex = 0;
        vm.switchTab = function(index) {
            vm.mainTabIndex = index;
            vm.setTab(index)
        };
        if (localStorage.getItem('mainFooter') == 1) {
            vm.mainFooter = 1
        } else {
            vm.mainFooter = 0
        }
        vm.mainTabIndex_top = localStorage.getItem('mod_open_search');
        vm.Index_top = function() {
            if (localStorage.getItem('mod_open_search') == '1') {
                vm.mainTabIndex_top = 1
            } else {
                vm.mainTabIndex_top = 0;
                if (localStorage.getItem('UserId') > '0') {
                    $scope.myText = '<i class="aui-iconfont aui-icon-my"></i>  <span > ' + localStorage.getItem('UserName') + ' ' + localStorage.getItem('Hitokoto') + ' </span> '
                } else {
                    $scope.myText = '<i class="aui-iconfont aui-icon-like"></i>  <span > ' + localStorage.getItem('admin_nick_name') + '：' + localStorage.getItem('Hitokoto') + '</span> '
                }
            }
        };
        vm.Index_top();
        apiready = function() {
            vm.setTab(1);
            vm.setTab(2);
			vm.setTab(0);
            U.GetSkin();
            U.SetKeepScreenOn();
            U.QuitAPP();
            U.NetworkStatusCheck();
            U.OpenLoadingPage();
            U.SingleSignOn();
            U.AccountViolationDetection();
			localStorage.setItem('tinyplayers',"1"); 
            api.setStatusBarStyle({
                style: 'light'
            })
        }
    }
]).controller('searchHeaderCtrl', ['$rootScope', '$scope', '$timeout', 'http',
    function($rootScope, $scope, $timeout, http) {
        var vm = $scope.vm = {};
        vm.openAuto = false;
        var timeout = null;
        $scope.$watch('keyword', function(n, o) {
            if (vm.openAuto) {
                if (timeout) $timeout.cancel(timeout);
                timeout = $timeout(function() {
                    api.sendEvent({
                        name: 'searchKeyWord',
                        extra: {
                            keyword: n
                        }
                    })
                }, 500)
            } else {
                vm.openAuto = true
            }
        });
        vm.search = function() {
            if ($scope.keyword) api.sendEvent({
                name: 'goSearch',
                extra: {
                    keyword: $scope.keyword
                }
            })
        }
        apiready = function() {
            var headerHeight = $('header').height();
            api.openFrame({
                name: 'search_main',
                url: 'search_main.html',
                rect: {
                    x: 0,
                    y: headerHeight,
                    w: 'auto',
                    h: api.winHeight - headerHeight
                }
            });
            api.addEventListener({
                name: 'searchkey'
            }, function(ret, err) {
                vm.openAuto = false;
                $scope.keyword = ret.value.keyword;
                vm.search();
                $scope.$apply()
            })
        }
    }
]).controller('searchCtrl', ['$rootScope', '$scope', '$timeout', 'http',
    function($rootScope, $scope, $timeout, http) {
        var vm = $scope.vm = {};
        vm.page = 1;
        vm.data = [];
        vm.noMore = false;
        vm.tid = '';
        vm.section = 2;
        vm.searchHistoy = $api.getStorage('search-history') || [];
        vm.sendkey = function(key) {
            api.sendEvent({
                name: 'searchkey',
                extra: {
                    keyword: key
                }
            });
            $scope.$apply()
        }
        vm.delSearchHistory = function(index) {
            if (index != undefined) {
                vm.searchHistoy.splice(index, 1)
            } else {
                vm.searchHistoy = []
            }
            $api.setStorage('search-history', vm.searchHistoy)
        }
        vm.getHotSearch = function() {
            var UserId = 1;
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            http.get({
                url: 'HotSearch',
                data: {
                    'uid': UserId,
                    'time': GetTime,
                    'key': RyanKey
                },
                success: function(json) {
                    if (json.status == 1) {
                        var s = json.data;
                        ss = s.split(",");
                        vm.hotData = ss;
                        $scope.$apply()
                    } else if (ret.status == '829') {
                        U.toast('请求频繁 请稍后再试 ')
                    }
                }
            })
        };
        vm.search = function(keyword) {
            vm.loading = true;
            if (vm.noMore) return;
            var key = keyword ? keyword : vm.keyword;
            if (vm.page == 1) {
                vm.data = [];
                var ins = true;
                if (vm.searchHistoy.length > 0) {
                    for (i = 0; i < vm.searchHistoy.length; i++) {
                        if (vm.searchHistoy[i] == key) {
                            ins = false;
                            break
                        }
                    }
                }
                if (ins) {
                    if (vm.searchHistoy.length >= 10) {
                        vm.searchHistoy.shift()
                    }
                    if (key != null) {
                        vm.searchHistoy.unshift(key)
                    }
                    $api.setStorage('search-history', vm.searchHistoy)
                }
            }
        };
        apiready = function() {
            vm.getHotSearch();
            api.addEventListener({
                name: 'goSearch'
            }, function(ret, err) {
                vm.keyword = ret.value.keyword;
                vm.Search_api = localStorage.getItem('search_api_url');
                if (U.PermissionCheck('login') != 1) {
                    U.openWin('my/', 'login');
                    return
                }
                if (U.PermissionCheck('vip') != 1) {
                    U.openWin('upgradevip/', 'upgradevip');
                    return
                }
                if (vm.keyword == '直播') {
                    U.openWin('live/', 'tv', '', 'fade', 'from_top', '', '', '');
                    return
                }
/*                 var browser = api.require('webBrowser');
                browser.open({
                    url: vm.Search_api + vm.keyword
                }); */
				var delay=0;
						api.openWin({
							name: 'search_cmsvideo_win',
							url: 'widget://html/search/search_cmsvideo_win.html',
							bounces: false,
							delay: delay,
							slidBackEnabled: true,
							vScrollBarEnabled: false,
							pageParam: {
								name: vm.keyword
							  }
						  });
                vm.noMore = false;
                vm.search(vm.keyword);
                $scope.$apply()
            });
            api.addEventListener({
                name: 'scrolltobottom',
                extra: {
                    threshold: 50
                }
            }, function(ret, err) {
                if (!vm.noMore && !vm.loading) vm.getHotSearch();
                $scope.$apply()
            })
        }
    }
]).controller('videohistoryCtrl', ['$rootScope', '$scope', '$timeout', 'http',
    function($rootScope, $scope, $timeout, http) {
        var vm = $scope.vm = {};
        vm.page = 1;
        vm.data = [];
        vm.noMore = false;
        vm.getVideoSistory = function() {
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            http.get({
                url: 'SeeVideoHistory',
                data: {
                    'uid': UserId,
                    'time': GetTime,
                    'key': RyanKey
                },
                success: function(json) {
                    if (json.status == 1) {
                        var s = json.data;
                        vm.VideoSistoryData = s;
                        $scope.$apply()
                    } else if (ret.status == '829') {
                        U.toast('请求频繁 请稍后再试 ')
                    }
                }
            })
        };
        vm.GoPlay = function(url, title) {
            if (U.PermissionCheck('vip') != '1') {
                U.openWin('upgradevip/', 'upgradevip');
                return
            }
            if (api.systemType == 'ios') {
                U.openWin('browser/', 'webx5', {
                    url: url
                }, 'fade', 'from_top', '', '', '')
            } else {
                if (localStorage.getItem('jx_play_module') == 'x5') {
                    U.openWin('browser/', 'webbrowser2018', {
                        url: url
                    }, 'fade', 'from_top', '', '', '')
                } else {
                    U.OpenVideoJxAndroidPopup(url, title)
                }
            }
        };
        apiready = function() {
            vm.getVideoSistory()
        }
    }
]).controller('viptypeCtrl', ['$rootScope', '$scope', '$timeout', 'http',
    function($rootScope, $scope, $timeout, http) {
        var vm = $scope.vm = {};
        var TimeStampNow = Date.parse(new Date()) / 1000;
        vm.data = [];
        vm.noMore = false;
        vm.getVipType = function() {
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            http.get({
                url: 'MembershipTypeInformation',
                data: {
                    'uid': UserId,
                    'time': GetTime,
                    'key': RyanKey
                },
                success: function(json) {
                    if (json.status == 1) {
                        var s = json.data;
                        vm.VipTypeData = s;
                        $scope.$apply()
                    } else if (ret.status == '829') {
                        U.toast('请求频繁 请稍后再试 ')
                    }
                }
            })
        };
        vm.GoKaUrl = function(url) {
			if(url.indexOf("ptype=")!= -1){
				url = url +"&uid="+localStorage.getItem('UserId');
			}
            U.OpenLocalBrowser(url)
        };
        vm.GoKefu = function() {
            var KeFuWeichat = '';
            if (localStorage.getItem('UserParentWeichat') != '') {
                 KeFuWeichat = localStorage.getItem('UserParentWeichat')
            } else {
                 KeFuWeichat = localStorage.getItem('AdminWeichat')
            }
            var clipBoard = api.require('clipBoard');
            clipBoard.set({
                value: KeFuWeichat
            }, function(ret, err) {
                if (ret) {
                    U.RyanUp(1, '客服微信 ' + KeFuWeichat + ' 以为您复制')
                } else {
                    U.RyanUp(2, '客服微信 ' + KeFuWeichat + ' 复制失败')
                }
            })
        };
        vm.useactivationcode = function() {
            if (U.Check_ButtonSubmissionTime() == 1) {
                U.toast('操作频繁 请稍后再试');
                return
            }
            var ctivationcode = $scope.ctivationcode;
            if (ctivationcode == null) {
                U.toast('请输入激活码');
                return
            }
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            U.showProgress('正在处理', '请稍等');
            http.get({
                url: 'UseActivationCode',
                data: {
                    'uid': UserId,
                    'time': GetTime,
                    'key': RyanKey,
                    'CDKEY': ctivationcode
                },
                success: function(json) {
                    U.setStorage(ctivationcode, 1);
                    if (json.status == 718) {
                        U.toast('请求失败 请稍后再试 718');
                        U.GetUserInfo(localStorage.getItem('UserId'))
                    } else if (json.status == 1) {
                        U.GetUserInfo(localStorage.getItem('UserId'));
                        U.RyanUp(1, json.data);
                        setTimeout(function() {
                            vm.activationcodeshow();
                        }, 3000)
                    } else if (json.status == 0) {
                        U.GetUserInfo(localStorage.getItem('UserId'));
                        U.RyanUp(0, json.data)
                    } else if (ret.status == '829') {
                        U.toast('请求频繁 请稍后再试');
                    } else {
                        U.RyanUp(0, json.data);
                    }
                    U.hideProgress();
                }
            })
        };
        vm.activationcodeshow = function() {
            var obj = document.getElementById("DefaultLogo");
            obj.setAttribute("src", localStorage.getItem('DefaultLogo'));
            if (localStorage.getItem('UserId') > 0) {
                UserNmae.innerHTML = localStorage.getItem('UserName');
                if (localStorage.getItem('UserParentWeichat') != '') {
                    UserKefu.innerHTML = '客服微信：' + localStorage.getItem('UserParentWeichat') + ' （点击复制）'
                } else {
                    UserKefu.innerHTML = '客服微信：' + localStorage.getItem('AdminWeichat') + ' （点击复制）'
                } if (localStorage.getItem('UserVipTime') == "-1") {
                    UserVipTime.innerHTML = '永久会员';
                    UserVipIco.innerHTML = '永久会员'
                } else if (localStorage.getItem('UserVipTime') > TimeStampNow) {
                    UserVipTime.innerHTML = U.GetFomateTime(localStorage.getItem('UserVipTime')) + ' 到期';
                    UserVipIco.innerHTML = '超级会员'
                } else if (localStorage.getItem('UserVipTime') < TimeStampNow) {
                    UserVipTime.innerHTML = '已于 ' + U.GetFomateTime(localStorage.getItem('UserVipTime')) + ' 过期';
                    UserVipIco.innerHTML = '续费'
                }
            }
        };
        vm.activationcodecheck = function() {
            if (localStorage.getItem('ActivationCodeDetection') == 1) {
                var clipBoard = api.require('clipBoard');
                clipBoard.get(function(ret, err) {
                    if (ret) {
                        var str = ret.value;
                        if (str.indexOf(localStorage.getItem('CDKEY_prefix')) > -1 && str.length == localStorage.getItem('CDKEY_length') && localStorage.getItem(str) != 1) {
                            U.CDKEYTips(ret.value)
                        }
                    }
                })
            }
        };
        apiready = function() {
            vm.getVipType();
            vm.activationcodeshow();
            setTimeout(function() {
                vm.activationcodecheck()
            }, 1000);
            api.addEventListener({
                name: 'UpdateUserData'
            }, function(ret, err) {
                if (ret) {
                    vm.activationcodeshow()
                }
            });
            api.addEventListener({
                name: 'resume'
            }, function(ret, err) {
                setTimeout(function() {
                    vm.activationcodecheck()
                }, 1000)
            })
        }
    }
])
