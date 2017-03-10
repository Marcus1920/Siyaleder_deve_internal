
//to change html tags eg file,date,time etc

function change_num(types){
	
     var txt=document.getElementById("linkgone").innerHTML.toString();
	
	//get the length of the word
	var leng=document.getElementById("datas").type.length;
	
	document.getElementById("linkgone").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

   	if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' data-toggle='tooltip' data-placement='bottom'  title='Enter number only' id='datas' placeholder='Enter Numbers' class='form-control'>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' data-toggle='tooltip' data-placement='bottom'  title='Enter text only' placeholder='Enter Text' id='datas' class='form-control'>";	
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' data-toggle='tooltip' data-placement='bottom'  title='Upload files e.g pdf,images' id='datas' class='form-control'>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'>";
	}
	
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
	
}
function change_date(types){
       var txt=document.getElementById("linkgone_D").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
		document.getElementById("linkgone_D").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	
		
   if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter number'>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' id='datas' placeholder='Enter Text' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '>";
		
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Upload file'>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'>";
	}
	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' placeholder='Enter date' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'>";
	}
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
	
}
function change_time(types){
       var txt=document.getElementById("linkgone_t").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
		document.getElementById("linkgone_t").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

	
   if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter number'>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' id='datas' placeholder='Enter Text' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter text '>";
		
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Upload files'>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time '>";
	}
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date '>";
	}
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
}
function change_area(types){
	
    var txt=document.getElementById("linkgone_area").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
	
	document.getElementById("linkgone_area").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

   if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' placeholder='Enter numbers' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter Number'>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' placeholder='Enter Text' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter text '>";
		
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea  rows='7' placeholder='enter here' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text'></textarea>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas'  class='form-control' data-toggle='tooltip' data-placement='left'  title='Upload file'>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'>";
	}
	
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
}
function change_file(types){
	
    var txt=document.getElementById("linkgone_file").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
	
	document.getElementById("linkgone_file").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

   	if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' placeholder='Enter numbers' id='datas' class='form-control'>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' placeholder='Enter Text' id='datas' class='form-control'>";
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea  rows='7' placeholder='enter here' id='datas' class='form-control'></textarea>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' id='datas'  class='form-control'>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control'>";
	}
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control'>";
	}
	
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
}
//------------------------------------------------------------//

//adding textbox equipment

function add(num)
{
	//clear from previas tag
	document.getElementById("addTag").innerHTML="";
	
	var num=0;
	var htmltag = parseInt(document.getElementById("CountInput").value);
	
	while(num < htmltag )
	{
		num++;
		document.getElementById("addTag").innerHTML+="<br><input type='text' class='form-control' value='"+num+"'>";
	}
	
	
}
