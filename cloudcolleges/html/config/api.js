/*  总接口 */
let url = "http://10.2.25.33/";

/*********admin服务*********/

let loginUsl = url + "admin/login";

let adminLoginUsl = url + "admin/admin/login";

let studentAllUrl = url + "admin/student/all";

let studentUpdateUrl = url + "admin/student/update";

let studentAddUrl = url + "admin/student/add";


let teacherAllUrl = url+ "admin/teacher/all"

let teacherAddUrl = url+ "admin/teacher/add"

let teacherUpdateUrl = url+ "admin/teacher/update"

/********数据*********/






/**
 * 获取 Url 的参数
 * @param variable
 * @returns {string|null}
 */
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return null;
}


// 对axios进行的封装

function axiosRequest(url,params,type){
  return   axios(
        {
            url : url,
            method : type,
            headers :{
                'Content-Type': 'application/x-www-form-urlencoded',
                'token' : localStorage.getItem("token")
            },
            params : params
        }
    )
}



function dataTime(time){
    let date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    // console.log(Y+M+D+h+m+s);
    return Y+M+D+h+m+s;
}






function dataTimeYM(time){
    let date = new Date(time);
    Y = date.getFullYear() + "年";
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) +"月";

    return Y+M;
}



function mypost(api, parameters, callback) {
	
	$.ajax({
		url: api,
		data: parameters,
		type: 'POST',
		async:true,
		dataType: 'json',
		success: callback,
		error: function() {
			//异常处理；  
			console.log('error : 服务器内部错误');
			console.log("-------------------------")
		}
	});
}
