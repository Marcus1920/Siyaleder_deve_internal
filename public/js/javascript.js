
//to change html tags eg file,date,time etc

function change_num(types){
	
     var txt=document.getElementById("linkgone").innerHTML.toString();
	
	//get the length of the word
	var leng=document.getElementById("datas").type.length;
	
	document.getElementById("linkgone").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

   	if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' data-toggle='tooltip' data-placement='bottom'  title='Enter number only' id='datas' placeholder='Enter Numbers' class='form-control'><span class='text-danger' id='error_number'>error number</span>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' data-toggle='tooltip' data-placement='bottom'  title='Enter text only' placeholder='Enter Text' id='datas' class='form-control'><span class='text-danger' id='error_text'>error</span>";	
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea><span class='text-danger' id='error_areaa'>error</span>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' data-toggle='tooltip' data-placement='bottom'  title='Upload files e.g pdf,images' id='datas' class='form-control'><span class='text-danger' id='error_file'>error</span>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'> <span class='text-danger' id='error_time'>error</span>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'> <span class='text-danger' id='error_date'>error</span>";
	}
	
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
	
}
function change_date(types){
       var txt=document.getElementById("linkgone_D").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
		document.getElementById("linkgone_D").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	
		
   if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' data-toggle='tooltip' data-placement='bottom'  title='Enter number only' id='datas' placeholder='Enter Numbers' class='form-control'><span class='text-danger' id='error_number'>error number</span>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' data-toggle='tooltip' data-placement='bottom'  title='Enter text only' placeholder='Enter Text' id='datas' class='form-control'><span class='text-danger' id='error_text'>error</span>";	
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea><span class='text-danger' id='error_areaa'>error</span>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' data-toggle='tooltip' data-placement='bottom'  title='Upload files e.g pdf,images' id='datas' class='form-control'><span class='text-danger' id='error_file'>error</span>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'> <span class='text-danger' id='error_time'>error</span>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'> <span class='text-danger' id='error_date'>error</span>";
	}
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
	
}
function change_time(types){
       var txt=document.getElementById("linkgone_t").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
		document.getElementById("linkgone_t").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

	
  if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' data-toggle='tooltip' data-placement='bottom'  title='Enter number only' id='datas' placeholder='Enter Numbers' class='form-control'><span class='text-danger' id='error_number'>error number</span>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' data-toggle='tooltip' data-placement='bottom'  title='Enter text only' placeholder='Enter Text' id='datas' class='form-control'><span class='text-danger' id='error_text'>error</span>";	
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea><span class='text-danger' id='error_areaa'>error</span>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' data-toggle='tooltip' data-placement='bottom'  title='Upload files e.g pdf,images' id='datas' class='form-control'><span class='text-danger' id='error_file'>error</span>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'> <span class='text-danger' id='error_time'>error</span>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'> <span class='text-danger' id='error_date'>error</span>";
	}
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
}
function change_area(types){
	
    var txt=document.getElementById("linkgone_area").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
	
	document.getElementById("linkgone_area").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

   if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' data-toggle='tooltip' data-placement='bottom'  title='Enter number only' id='datas' placeholder='Enter Numbers' class='form-control'><span class='text-danger' id='error_number'>error number</span>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' data-toggle='tooltip' data-placement='bottom'  title='Enter text only' placeholder='Enter Text' id='datas' class='form-control'><span class='text-danger' id='error_text'>error</span>";	
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea><span class='text-danger' id='error_areaa'>error</span>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' data-toggle='tooltip' data-placement='bottom'  title='Upload files e.g pdf,images' id='datas' class='form-control'><span class='text-danger' id='error_file'>error</span>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'> <span class='text-danger' id='error_time'>error</span>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'> <span class='text-danger' id='error_date'>error</span>";
	}
	//for toolltip
	 $('[data-toggle="tooltip"]').tooltip();
}
function change_file(types){
	
    var txt=document.getElementById("linkgone_file").innerHTML.toString();
	
	var leng=document.getElementById("datas").type.length;
	
	document.getElementById("linkgone_file").innerHTML=document.getElementById("datas").type.substr(0,1).toUpperCase()+document.getElementById("datas").type.substr(1,leng).toLowerCase();
	

   	if(txt ==='Number'){
	document.getElementById("newTag").innerHTML="<input type='number' data-toggle='tooltip' data-placement='bottom'  title='Enter number only' id='datas' placeholder='Enter Numbers' class='form-control'><span class='text-danger' id='error_number'>error number</span>";
	}
	if(txt ==='Text'){
	    document.getElementById("newTag").innerHTML="<input type='text' data-toggle='tooltip' data-placement='bottom'  title='Enter text only' placeholder='Enter Text' id='datas' class='form-control'><span class='text-danger' id='error_text'>error</span>";	
	}
	if(txt ==='Textarea'){
	    document.getElementById("newTag").innerHTML="<textarea cols='5' rows='7' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter description text '></textarea><span class='text-danger' id='error_areaa'>error</span>";
	}
	if(txt ==='File'){
	    document.getElementById("newTag").innerHTML="<input type='file' data-toggle='tooltip' data-placement='bottom'  title='Upload files e.g pdf,images' id='datas' class='form-control'><span class='text-danger' id='error_file'>error</span>";
	}
	if(txt ==='Time'){
	    document.getElementById("newTag").innerHTML="<input type='time' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter time'> <span class='text-danger' id='error_time'>error</span>";
	}	
	if(txt ==='Date'){
	    document.getElementById("newTag").innerHTML="<input type='date' id='datas' class='form-control' data-toggle='tooltip' data-placement='left'  title='Enter date'> <span class='text-danger' id='error_date'>error</span>";
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
		document.getElementById("addTag").innerHTML+="<br><label class='control-label'>Equip "+num+"</label><input type='text' class='form-control'>";
	}
	
	
}


function nextStep()
{
	
	document.getElementById("insideform").style.marginTop="-90%";

	setTimeout(show,1000);
		
}

function show(){
		document.getElementById('img_dv').style.display="block";
		setTimeout(addForm,1000);
}

var countForm=1;
function addForm(){
	//increanenting thee number of form
	countForm++;
	//document.getElementById("insideform").style.marginTop='-50%';
document.getElementById('img_dv').style.display="none";
	document.getElementById('insideform').innerHTML='<div class="modal-dialog modal-lg" id="formrotate'+countForm+'"> ' +
        '<div class="modal-content col-md-offset-2 col-md-pull-1"> ' +
        '<div class="modal-header"> ' +
        '<button type="button" class="close" data-dismiss="modal">×</button> ' +
        '<h1 class="modal-title" style="font-size: 20px">Work Flow</h1> </div> <div class="modal-body"> ' +
        '<form action="" method="post" class="form-horizontal "> ' +
        /*'<div class="form-group"> <label for="" class="control-label col-sm-1">WKF</label> <div class="col-sm-10"> ' +
        '<input type="text" class="form-control" data-toggle="tooltip" data-placement="right"  title="workflow"> </div> </div> <br> */'<div class="form-group"> ' +
        '<label for="" class="control-label col-sm-1">Step: '+countForm+'</label> ' +
        '<div class="col-sm-10" id="newTag"><input type="text" id="datas'+countForm+'" placeholder="Enter Text" class="form-control">' +
        ' <span class="text-danger" id="error_text"></span> </div> <div id="dropdown">' +
		
'<span id="dropbtn" class="glyphicon glyphicon-edit"></span><div class="dropdown-content">'+		
'<a onclick="change_num(\'number\')" style="cursor: pointer" class="glyphicon glyphicon-sound-5-1" ><span class="linksnone" id="linkgone">Number</span></a> ' +
'<a onclick="change_date(\'date\')" id="dates" style="cursor: pointer" class="glyphicon glyphicon-calendar"><span class="linksnone" id="linkgone_D">Date</span></a> ' +
'<a onclick="change_time(\'time\')" id="tyme" style="cursor: pointer" class="glyphicon glyphicon-time"><span class="linksnone"  id="linkgone_t">Time</span></a> ' +
'<a onclick="change_area(\'textarea\')" id="area" style="cursor: pointer" class="glyphicon glyphicon-pencil"><span class="linksnone" id="linkgone_area">Textarea</span></a> ' +
'<a onclick="change_file(\'file\')" id="file" style="cursor: pointer" class="glyphicon glyphicon-file"><span class="linksnone" id="linkgone_file">File</span></a> </div> </div> </div><br> ' +
'<div class="form-group"> ' +
'<label for="" class="control-label col-sm-1">Resource</label> ' +
'<div class="col-sm-10"> ' +
'<table class="table table-bordered"><tr><th class="text-center" style="font-size: 16px;">People</th> ' +
'<th class="text-center" style="font-size: 16px;">Equipment</th> </tr> <tr> <td><label class="control-label">Users</label> ' +
'<select class="form-control" data-toggle="tooltip" data-placement="bottom" title="Select assigned user"> ' +
'<option selected value="empty">Select user</option><option value=""></option> ' +
'</select><span class="text-danger" id="error_users"></span> </td><td style="width: 50%;"> <div class="col-sm-12"> ' +
'<label class="control-label">Used Equip</label> <div class="input-group"> ' +
'<input type="number" class="form-control" id="CountInput" min="1" max="20" data-toggle="tooltip" data-placement="bottom"  title="Number of Equipment"> ' +
'<span id="addInput" onClick="add()" class="input-group-btn" > <span id="dropbtn2" class="glyphicon glyphicon-plus"></span></div></span> ' +
'<span class="text-danger" id="error_equip"></span></div> <div class="col-sm-10" id="addTag"></div></td> </table> </div> </div>' +
'<div class="form-group"><label for="" class="control-label col-sm-1">Time</label><div class="col-sm-10">' +
'<table class="table table-bordered"><tr><th class="text-center" style="font-size: 16px;"><b>Time Start</b></th>' +
'<th class="text-center" style="font-size: 16px;">Time End</th></tr><tr><td><div>' +
'<input type="date" class="form-control" id=\'fromDate\' data-toggle="tooltip" data-placement="bottom"  title="Start date"></div>' +
'<span class="text-danger" id="error_time"></span></td><td><div>' +
		
'<input type="date" class="form-control" id=\'toDate\' data-toggle="tooltip" data-placement="bottom"  title="End date"></div>' +
		
'<span class="text-danger" id="error_users" id="error_date"></span></td></tr></table> </div></div> <div class="form-group">' +
'<div class="col-md-offset-1"><div class="btn btn-info" onClick="saves()" >Save</div><span class="col-md-offset-8">' +
'<div onClick="nextStep()" class="btn btn-primary">Next step</div> </span></div></div></form></div><div class="modal-footer"></div></div></div>';

	
	document.getElementById("insideform").style.marginTop='4%';
	
	
	//document.getElementById('formrotate'+countForm).style.transition="all 3s";
	//document.getElementById('formrotate'+countForm).style.WebkitTransition ="all 3s";
	//document.getElementById('formrotate'+countForm).style.marginTop='4%';
	
}

var x=0;
function saves(){
	alert("adaf");
/*while(x < countForm){
		localStorage.setItem("ids"+countForm+"" , document.getElementById("datas"+countForm+"").value);
	     x++;
}*/
	
}