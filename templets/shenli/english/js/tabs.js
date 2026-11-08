// JavaScript Document


function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
}else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
}
} 
}



function nTabsA(thisObj,Num){
if(thisObj.className == "activeA")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "activeA"; 
      document.getElementById(tabObj+"_ContentA"+i).style.display = "block";
}else{
   tabList[i].className = "normalA"; 
   document.getElementById(tabObj+"_ContentA"+i).style.display = "none";
}
} 
}
