let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};}
var y = document.getElementById('cities');
var x = document.getElementById('countries');

for (var i=0;i<country.length;i++){
	var p = document.createElement('option');
p.text=country[i];
p.setAttribute('value',p.text);
x.add(p);
}
function fun(){
	var f=document.getElementById('countries').value;
	if (f=='Kazakhstan'){
		removeOptions(document.getElementById("cities"));

			var d=[];
			for (var i = 0;i<3;i++){
				d[i]=document.createElement('option');
				d[i].text=cities_by_country['Kazakhstan'][i];
				y.add(d[i]);

			}
	}
	if(f=='Russia'){
		removeOptions(document.getElementById('cities'));

			var d=[];
			for (var i = 0;i<3;i++){
				d[i]=document.createElement('option');
				d[i].text=cities_by_country['Russia'][i];
				y.add(d[i]);

	}

	}
	if(f=='France'){
		removeOptions(document.getElementById("cities"));

			var d=[];
			for (var i = 0;i<3;i++){
				d[i]=document.createElement('option');
				d[i].text=cities_by_country['France'][i];
				y.add(d[i]);

	}		
	}	
}
function(removeOptions(selectbox)
{
	for(var i = selectbox.option.length-1;i>=0;i--){
		selectbox.remove(i);
	}
}