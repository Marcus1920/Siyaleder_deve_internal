//get all the html elements ids

function _(x)
{

    return document.getElementById(x);
}

//declaring variable
var pres='open';
var i=0;
//increament or decreament
var count=0;
var count2=0;
//function to remove previas html input type
function btn_sub(u,ty,yoo)
{
    var mm=_(u);
    mm.parentNode.removeChild(mm);

	var cnd=_('conditionx'+count);
    cnd.parentNode.removeChild(cnd);
	

	while(i < count2)
	{
		var condelete=_('condition'+count2);
	    condelete.parentNode.removeChild(condelete);
	
		count2--;
	}
	
	
    count--;
	
    if(count==0)
	{
		
        _('newInput').innerHTML='';
        _('add').style.visibility="visible";
    }
        
        _('sub'+count).style.visibility="visible";
        _('add'+count).style.visibility="visible";
	     _('cond'+count).style.visibility="visible";
	
     // _('conditionx'+count).style.display="none";  

}

//add new form group with an input
function btn_add(p,lo,wr,cond)
{

    _(p).style.visibility="hidden";
    count++;
	
//this is default of problem need to e solved
_('newInput').innerHTML+="<div class=\"form-group\" id=\"removeGroup"+count+"\">" +
"<label class=\" control-label col-sm-2\">step "+count+"</label>" +
"<div class=\"col-sm-8\">" +
"<input type=\"text\" name=\"step"+count+"\" id=\"Solution"+count+"\"  class=\"form-control\" placeholder=\"Solution "+count+"\">" +
"</div>" +"" +
	
//remove texbox solution and condition if is available

"<div class='btn-group'>"+

	"<div class=\"btn btn-md btn-default\" onClick=\"btn_sub('removeGroup'+count,'sub'+count,'add'+count,'cond'+count)\" id=\"sub"+count+"\">" +
	"<b class=\"text-danger\" <b style='font-size:15px;'>-</b></div> "+
	
//button to add conditons 
"<div class=\"btn btn-md btn-default\"   onClick=\"btn_con('conditionx'+count,'cond'+count)\" id=\"cond"+count+"\">"+
"<b class=\"text-info\" <b style='font-size:15px;'>c</b></div>"+
	
//to add solution steps	
"<div class=\"btn btn-md btn-default\"  onClick=\"btn_add('add','sub'+count,'add'+count,'cond'+count)\" id=\"add"+count+"\">"+"<b class=\"text-info\" <b style='font-size:15px;'>+</b></div>" +
	"</div>"+
	
	
//condition textbox yes or no
"</div><div style=\"display:none;\" class=\"col-sm-10 col-md-offset-2\" id=\"conditionx"+count+"\">"+
"<div class=\"form-inline\">"+
"<div class=\"form-group\">"+
"<label class=\"control-label col-sm-2\">No</label>"+
"<input type=\"text\" name=\"\" value=\"\" class=\"form-control\" placeholder=\"first No\">  "+
"</div>"+
"      "+
"<div class=\"form-group\">"+
"<label class=\"control-label col-sm-2\">Yes</label>"+
"<input type=\"text\" name=\"\" value=\"\" class=\"form-control\" placeholder=\" first Yes\"> "+
"</div>"+
	"      "+

//condition buttons add and remove condition
"<div class='btn-group'>"+
"<div class=\"btn btn-md btn-default\" onClick=\"btn_Dcond('conditionx'+count,'cond'+count)\" id=\"add\">"+
"<b class=\"text-danger\" <b style='font-size:15px;'>-</b></div>"+
"    "+
"<div class=\"btn btn-md btn-default\" onClick=\"btn_AddCond()\" id=\"add\">"+
"<b class=\"text-info\" <b style='font-size:15px;'>+</b></div>"+
"</div></div><br>";

      _(lo).style.visibility="hidden";
      _(wr).style.visibility="hidden";
      _(cond).style.visibility="hidden";
}

//function to add condition
function btn_con(cond,c)
{
	
	_(c).style.visibility="visible";
	_(c).disabled=true;
	_(cond).style.display="block";
}

//function to delete remove condition
function btn_Dcond(cond,c)
{
	while(i < count2)
	{
		var condelete=_('condition'+count2);
	    condelete.parentNode.removeChild(condelete);
		count2--;
	}
	
}

function btn_AddCond()
{
count2++;	
	
	//condition textbox yes or no
_('newInput').innerHTML+=

"<div style=\"display:block;\" class=\"col-sm-10 col-md-offset-2\" id=\"condition"+count2+"\">"+
"<br><div class=\"form-inline\">"+
	
"<div class=\"form-group\">"+
"<label class=\"control-label col-sm-2\">No</label>"+
"<input type=\"text\" name=\"\" value=\"\" class=\"form-control\" placeholder=\"No\"> "+
"</div>&nbsp &nbsp &nbsp &nbsp"+

"<div class=\"form-group\">"+
"<label class=\"control-label col-sm-2\">Yes</label>"+
"<input type=\"text\" name=\"\" value=\"\" class=\"form-control\" placeholder=\"Yes\"> "+
"</div></div><br>";
	
//condition buttons add and remove condition	
/*"<div class=\"btn btn-md btn-default\" onClick=\"btn_Dcond('condition'+count2,'cond'+count2)\" id=\"add\">"+
"<b class=\"text-danger\" <b style='font-size:15px;'>-</b></div></div>"+
"    "+
"<div class=\"btn btn-md btn-default\" onClick=\"btn_AddCond()\" id=\"add\">"+
"<b class=\"text-info\" <b style='font-size:15px;'>+</b></div></div>"+*/
	

}

function sub()
    {
	var ajax=new XMLHttpRequest();
	ajax.open("GET" ,"postt.php", true);
    ajax.setRequestHeader("Content-type","Application/x-www-form-urlencoded");
    ajax.onreadystatechange=function(){
	if(ajax.readyState== 4 && ajax.status==200)
	{
       alert(ajax.responseText);
	}
}
    ajax.send(null);

}

