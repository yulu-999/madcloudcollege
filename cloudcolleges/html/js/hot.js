let  msg = "";


function courseInfoHtml(id){
    window.location="../page/courseifno.html?courseId="+id;
}

layui.use('flow', function(){
    let $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
    let flow = layui.flow;
    flow.load({
        elem: '#course' //指定列表容器
        ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页


            let lis = [];
            //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
            axiosRequest(
                boutiqueUrl,
                {
                    page : page,
                    limit : 8,
                    msg : msg
                },
                "get").then(res=>{
                //假设你的列表返回在data集合中
                layui.each(res.data.data, function(index, item){

                    console.log(page);

                    // dataTime(item.time) 这个是时间
                    // 加入的数据
                    let htmlInfo = "<div class=\"col\">\n" +
                        "            <div class=\"card\" style=\"width: 18rem;\">\n" +
                        "                <!--        <img src=\"...\" class=\"card-img-top\" alt=\"...\">-->\n" +
                        "                <div class=\"card-body\">\n" +
                        "                    <h5 class=\"card-title\">"+item.coname+"</h5>\n" +
                        "                    <p class=\"card-text\" style=\"font-size: 14px;color: #FF5722; \">课程暂时无描述！！！可以提醒教师给课程添加描述 ...</p>\n" +
                        "                </div>\n" +
                        "                <ul class=\"list-group list-group-flush\">\n" +
                        "                    <li class=\"list-group-item\"><span class=\"my-title\" > 创建教师 :</span> <span class=\"my-con layui-badge-rim\">"+item.tname+"</span></li>\n" +
                        "                    <li class=\"list-group-item\"><span class=\"my-title\" > 创建时间 :</span> <span class=\"my-con\">  <span class=\"layui-badge layui-badge-rim\">"+"2020-09-08"+"</span></span></li>\n" +
                        "                    <li class=\"list-group-item\"><span class=\"my-title\" > 课程人数 :</span> <span class=\"my-con\">  <span class=\"layui-badge\">99</span></span></li>\n" +
                        "                </ul>\n" +
                        "                <div class=\"card-body\">\n" +
                        "                    <button type=\"button\" class=\"btn  layui-bg-green\">加入课程</button>\n" +
                        "                    <button type=\"button\" onclick='courseInfoHtml("+item.id+")' class=\"btn btn-primary\">详细信息</button>\n" +
                        "\n" +
                        "                </div>\n" +
                        "            </div>\n" +
                        "        </div>";

                    lis.push(htmlInfo)
                });

                //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                next(lis.join(''), page < res.data.pages);
            })


        }
    });






});

