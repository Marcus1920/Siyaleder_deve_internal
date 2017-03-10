@extends('master')

@section('content')


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
       
		<script type="text/javascript" src="js/javascript.js"></script>

        <!-- Styles -->
<style>
	
	#formrotate{
		
		margin-top: -500px;
		  
			-webkit-transition: margin-top 2s;
		 
					transition: margin-top 2s;
		
	}
#dropbtn {
   	margin: 10px 0px 0px 5px;
	font-size: 15px;
	cursor: pointer;
}

#dropbtn {
    position: relative;
    display: inline-block;
}

.dropdown-content {
  display: none;
    position: absolute;
    background-color:rgb(6,11,12);
    min-width: 140px;
    z-index: 1;
	margin-left: 93%;
}

.dropdown-content a {
	font-size: 15px;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

	.linksnone:hover{
	text-decoration:underline;
		font-size: 20px;
		
	-webkit-transition:font-size 0.5s;
		transition:font-size 0.5s;
		
	
	}
	
	dropdown-content a span{
	text-decoration: underline;
	
	}

#dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
	
	
	#dropbtn2 {
   	margin: 8px 0px 10px 10px;
	font-size: 15px;
	cursor: pointer;
		
	
}
	
	
	
	
</style>
   
   
    </head>
    <body> 
    <div class="container">
 
         <div class="modal-dialog modal-lg" id="formrotate">
  
  <!-- Trigger the modal with a button -->
 
      <!-- Modal content-->
      <div class="modal-content col-md-offset-2 col-md-pull-1">
        <div class="modal-header">
         <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h1 class="modal-title" style="font-size: 20px">Work Flow</h1>
        </div>
        <div class="modal-body">
          
          <form action="" method="post" class="form-horizontal ">
          	
          	<div class="form-group">
          	<label for="" class="control-label col-sm-1">WKF</label>
          	 <div class="col-sm-10">
          	 
          	<input type="text" class="form-control" data-toggle="tooltip" data-placement="right"  title="workflow">
				</div>
			</div>
         	
          	<br>
          	
          	<div class="form-group">
          	<label for="" class="control-label col-sm-1">step 1 </label>
          	
          	 <div class="col-sm-10" id="newTag">
          	 
          		<input type="text" id="datas" placeholder='Enter Text' class="form-control">
          	
			</div>
				
				<div id="dropdown">
				<span id="dropbtn" class="glyphicon glyphicon-edit" ></span>
				<div class="dropdown-content">
					<a onclick="change_num('number')"  style="cursor: pointer" class="glyphicon glyphicon-sound-5-1" >&nbsp;<span class="linksnone" id="linkgone">Number</span></a>
					<a onclick="change_date('date')" id="dates" style="cursor: pointer" class="glyphicon glyphicon-calendar">&nbsp;<span class="linksnone" id="linkgone_D">Date</span></a>
						<a onclick="change_time('time')" id="tyme" style="cursor: pointer" class="glyphicon glyphicon-time">&nbsp;<span class="linksnone"  id="linkgone_t">Time</span></a>
						<a onclick="change_area('textarea')" id="area"  style="cursor: pointer" class="glyphicon glyphicon-pencil">&nbsp;<span class="linksnone" id="linkgone_area">Textarea</span></a>
						<a onclick="change_file('file')" id="file" style="cursor: pointer" class="glyphicon glyphicon-file">&nbsp;<span class="linksnone" id="linkgone_file">File</span></a>
				  </div>
				</div>
	
				
			  </div>
         	
         	<br>
         	
         	<div class="form-group">
         	<label for="" class="control-label col-sm-1">Resource</label>
         	<div class="col-sm-10">
			  <table class="table table-bordered">
			  <tr>
				  <th class="text-center" style="font-size: 16px;">People</th>
				  <th class="text-center" style="font-size: 16px;">Equipment</th>
				  </tr>
				  <tr>
					  <td >
					   <select class="form-control" data-toggle="tooltip" data-placement="bottom"  title="Select assigned user">
					   <option selected>select user</option>
						   <option>1</option>
					  	 
					  </select>
					  </td>
					  
					  
					  
					  <td style="width: 50%;" >
					  
					  <div class="col-sm-12">
					  
				  <div class="input-group">
					  				  
					  <input type="number" class="form-control" id="CountInput" min="1" max="20" data-toggle="tooltip" data-placement="bottom"  title="Number of Equipment">
             			 <span id="addInput" onClick="add()" class="input-group-btn" >	
      				
        				<span id="dropbtn2" class="glyphicon glyphicon-plus"></span>
					</div>
      					</span>
      				
    				
					  </div>
					  
					  
					  <div class="col-sm-10" id="addTag">
					  
						  </div>
					  
					  </td>
					 
					 
				  
			  </table>
				</div>
			  </div>
          	
          	<!---time--->
          	<div class="form-group">
         	<label for="" class="control-label col-sm-1">Time</label>
         	<div class="col-sm-10">
          	
          	
          	<table class="table table-bordered">
          	<tr>
          		<th class="text-center" style="font-size: 16px;"><b>Time Start</b></th>
          		<th class="text-center" style="font-size: 16px;">Time End</th>
          	</tr>
          	
          		<tr>
					<td ><div><input type="date" class="form-control" id='fromDate' data-toggle="tooltip" data-placement="bottom"  title="Start date"></div></td>
					<td ><div><input type="date" class="form-control" id='toDate' data-toggle="tooltip" data-placement="bottom"  title="End date"></div></td>
				</tr>
          	
          	</table>
          
          	
          	</div>
			  </div>
          	
          	
          	
          	<div class="form-group">
          	<div class="col-md-offset-1">
          	<input type="submit" class="btn btn-info" value="Save">
				</div>  
         	</div>
          	
          	
          </form>
          
        </div>
        <div class="modal-footer">
          
        </div>
      </div>
      
    </div>
  
		</div>

  
<script>
$(document).ready(function(){
	
	$('#formrotate').css("margin-top",'30px');
	
	
	
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
   
    </body>
   
</html>
@endsection
