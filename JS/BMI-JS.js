
var BMIbtn = document.querySelector('#BMIbtn');
var BMIList = document.querySelector('#BMIList');
var data = JSON.parse(localStorage.getItem('BMIList')) || [] ;


BMIbtn.addEventListener('click',BMI);
BMIList.addEventListener('click',delList);
updateList(data);


function BMI(e){

    //防止輸入空值
    if(document.querySelector('#height').value == ""){return}
    if(document.querySelector('#bodyWeight').value == ""){return}

    var height = document.querySelector('#height').value;
	var bodyWeight = document.querySelector('#bodyWeight').value;
    var result;
    //抓日期函式
    var Today= new Date();

    //BMI運算
    height = parseInt(height);
	bodyWeight = parseInt(bodyWeight);
    var heightChange = height/100;
    result = bodyWeight/(heightChange*heightChange);
    //去除小數點
    result = Math.round(result * 100) / 100;
    
    var day = Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate();
    console.log(day);

    var BMItodo = {
        height:height,
        bodyWeight:bodyWeight,
        BMI:result,
        Date:day
    };
    console.log(BMItodo);

    data.push(BMItodo);
    localStorage.setItem('BMIList',JSON.stringify(data));
    updateList(data);

    //清空input的輸入內容
    document.querySelector('#height').value = "";
    document.querySelector('#bodyWeight').value = "";
}


function updateList(data){
    var str='';
    var len = data.length;

    for(var i=0;i<len;i++){
        if(data[i].BMI <= 11.94){
            str += '<div class="col-sm-8 BMI-list Toolight"><div class="row"><div class="col">過輕</div><div class="col">BMI '+data[i].BMI+'</div><div class="col">身高 '+data[i].height+'</div><div class="col">體重 '+data[i].bodyWeight+'</div><div class="col">'+data[i].Date+'</div></div></div><div class="col-sm-2 del-list"><button class="delBtn" data-num="'+i+'">刪除</button></div>';
        }
        if(data[i].BMI > 11.94 && data[i].BMI <= 20.90){
            str += '<div class="col-sm-8 BMI-list ideal"><div class="row"><div class="col">理想</div><div class="col">BMI '+data[i].BMI+'</div><div class="col">身高 '+data[i].height+'</div><div class="col">體重 '+data[i].bodyWeight+'</div><div class="col">'+data[i].Date+'</div></div></div><div class="col-sm-2 del-list"><button class="delBtn" data-num="'+i+'">刪除</button></div>';
        }
        if(data[i].BMI > 20.90 && data[i].BMI <= 26.87){
            str += '<div class="col-sm-8 BMI-list OverWeight"><div class="row"><div class="col">過重</div><div class="col">BMI '+data[i].BMI+'</div><div class="col">身高 '+data[i].height+'</div><div class="col">體重 '+data[i].bodyWeight+'</div><div class="col">'+data[i].Date+'</div></div></div><div class="col-sm-2 del-list"><button class="delBtn" data-num="'+i+'">刪除</button></div>';
        }
        if(data[i].BMI > 26.87 && data[i].BMI <= 29.86){
            str += '<div class="col-sm-8 BMI-list MildObesity"><div class="row"><div class="col">輕度肥胖</div><div class="col">BMI '+data[i].BMI+'</div><div class="col">身高 '+data[i].height+'</div><div class="col">體重 '+data[i].bodyWeight+'</div><div class="col">'+data[i].Date+'</div></div></div><div class="col-sm-2 del-list"><button class="delBtn" data-num="'+i+'">刪除</button></div>';
        }
        if(data[i].BMI > 29.86 && data[i].BMI <= 32.85){
            str += '<div class="col-sm-8 BMI-list ModerateObesity"><div class="row"><div class="col">中度肥胖</div><div class="col">BMI '+data[i].BMI+'</div><div class="col">身高 '+data[i].height+'</div><div class="col">體重 '+data[i].bodyWeight+'</div><div class="col">'+data[i].Date+'</div></div></div><div class="col-sm-2 del-list"><button class="delBtn" data-num="'+i+'">刪除</button></div>';
        }
        if(data[i].BMI > 32.85 ){
            str += '<div class="col-sm-8 BMI-list SevereObesity"><div class="row"><div class="col">重度肥胖</div><div class="col">BMI '+data[i].BMI+'</div><div class="col">身高 '+data[i].height+'</div><div class="col">體重 '+data[i].bodyWeight+'</div><div class="col">'+data[i].Date+'</div></div></div><div class="col-sm-2 del-list"><button class="delBtn" data-num="'+i+'">刪除</button></div>';
        }
    }
    BMIList.innerHTML = str;
}


function delList(e){
    e.preventDefault();
	if(e.target.nodeName != 'BUTTON'){return}
    var num = e.target.dataset.num;
    console.log(num);
	data.splice(num,1);
	localStorage.setItem('BMIList',JSON.stringify(data));
	updateList(data);
}
