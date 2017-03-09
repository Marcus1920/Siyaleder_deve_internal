
//to change html tags eg file,date,time etc
function change_num(types){
	
     var txt=document.getElementById("num").innerHTML.toString();
	document.getElementById("num").innerHTML=" "+document.getElementById("datas").type	

   if(txt =='&nbsp;number'){
	document.getElementById("newTag").innerHTML="<input type='number'  id='datas' placeholder='Enter Numbers' class='form-control'>";
	}
	if(txt =='&nbsp;text'){
	    document.getElementById("newTag").innerHTML="<input type='text' placeholder='Enter Text' id='datas' class='form-control'>";
		
	}
	if(txt =='&nbsp;textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control'></textarea>";
	}
	if(txt =='&nbsp;file'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control'>";
	}
	
	if(txt =='&nbsp;date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control'>";
	}
	
	
}
function change_date(types){
       var txt=document.getElementById("dates").innerHTML.toString();
	
	document.getElementById("dates").innerHTML=" "+document.getElementById("datas").type	

   if(txt =='&nbsp;number'){
	document.getElementById("newTag").innerHTML="<input type='number' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;text'){
	    document.getElementById("newTag").innerHTML="<input type='text' id='datas' placeholder='Enter Text' class='form-control'>";
		
	}
	if(txt =='&nbsp;textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control'></textarea>";
	}
	if(txt =='&nbsp;file'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control'>";
	}
	
	if(txt =='&nbsp;date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' placeholder='Enter date' class='form-control'>";
	}
	
	
}
function change_time(types){
       var txt=document.getElementById("tyme").innerHTML.toString();
	document.getElementById("tyme").innerHTML=" "+document.getElementById("datas").type	

   if(txt =='&nbsp;number'){
	document.getElementById("newTag").innerHTML="<input type='number' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;text'){
	    document.getElementById("newTag").innerHTML="<input type='text' id='datas' placeholder='Enter Text' class='form-control'>";
		
	}
	if(txt =='&nbsp;textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control'></textarea>";
	}
	if(txt =='&nbsp;file'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control'>";
	}
	
	if(txt =='&nbsp;date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control'>";
	}
	
	
}
function change_area(types){
	
    var txt=document.getElementById("area").innerHTML.toString();
	document.getElementById("area").innerHTML=" "+document.getElementById("datas").type	

   if(txt =='&nbsp;number'){
	document.getElementById("newTag").innerHTML="<input type='number' placeholder='Enter numbers' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;text'){
	    document.getElementById("newTag").innerHTML="<input type='text' placeholder='Enter Text' id='datas' class='form-control'>";
		
	}
	if(txt =='&nbsp;textarea'){
	    document.getElementById("newTag").innerHTML="<textarea  rows='7' placeholder='enter here' id='datas' class='form-control'></textarea>";
	}
	if(txt =='&nbsp;file'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas'  class='form-control'>";
	}
	if(txt =='&nbsp;time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control'>";
	}
	
	if(txt =='&nbsp;date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control'>";
	}
	
	
}
function change_file(types){
	
    var txt=document.getElementById("file").innerHTML.toString();
	document.getElementById("file").innerHTML=" "+document.getElementById("datas").type	

   if(txt =='&nbsp;number'){
	document.getElementById("newTag").innerHTML="<input type='number' placeholder='Enter numbers' id='datas' class='form-control'>";
	}
	if(txt =='&nbsp;text'){
	    document.getElementById("newTag").innerHTML="<input type='text' placeholder='Enter Text' id='datas' class='form-control'>";
		
	}
	if(txt =='&nbsp;textarea'){
	    document.getElementById("newTag").innerHTML="<textarea  rows='7' placeholder='enter here' id='datas' class='form-control'></textarea>";
	}
	if(txt =='&nbsp;file'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas'  class='form-control'>";
	}
	if(txt =='&nbsp;time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control'>";
	}
	
	if(txt =='&nbsp;date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control'>";
	}
	
	
}
//------------------------------------------------------------//

//adding textbox tools


function add(num)
{
	document.getElementById("addTag").innerHTML="";
	var num=0;
	var x = parseInt(document.getElementById("CountInput").value);
	while(num < x ){
		num++
		document.getElementById("addTag").innerHTML+="<br><input type='text' class='form-control' value='"+num+"'>";

		
	}
	
	
}
