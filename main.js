var names = ["Family Book", "Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var images = 
["5.jpg","4.jpg","3.jpg","2.jpg","1.jpg"]

var i = 0;

function update()
{
i++;
var  numbers_of_family_members_in_array= 5
if(i > numbers_of_family_members_in_array)
{
    i= 0;
}
var updatedImage = images [i];
var updatedName = names [i];
document.getElementById("names").src = updatedImage;
document.getElementById("images").innerHTML = updatedName;


}