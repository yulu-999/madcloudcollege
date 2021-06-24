/*  总接口 */
let url = "http://localhost/";

/*********admin服务*********/

let loginUsl = url + "admin/login";
let adminLoginUsl = url + "admin/admin/login";

let studentAllUrl = url + "admin//studnet/all";

let studentUpdateUrl = url + "admin/student/update";



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

