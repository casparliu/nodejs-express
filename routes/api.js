var persons = new Array();

/*exports.create = function(req, res){
  console.log(">>>>>>>>> create");
  personal.tel = "12345678";
  res.end();
};*/
exports.create = function(req, res){
 	var personal = {
		id: "",
		name: "",
		tel: "",
		company: ""
	};
	//console.log(">>>>>>>>> create");
    personal.id = req.params.name;
    personal.name = req.query.name;
    personal.tel = req.query.tel;
    personal.company = req.query.company;
    console.log(personal);
    persons.push(personal);
    res.end();
};

exports.read = function(req, res){
  console.log(">>>>>>>>> read"+req.params.name);
  res.send(getPerson(req.params.name));
  res.end();
};

exports.update = function(req, res){
  console.log(">>>>>>>>> update");
  var personal = getPerson(req.params.name);
  personal.name = req.query.name;
  personal.tel = req.query.tel;
  personal.company = req.query.company;
  res.send(personal);
};

exports.delete = function(req, res){
  console.log(">>>>>>>>> delete");
    res.end();
};

function getPerson(id){
	for(var i = 0; i < persons.length; i ++){
  		if(persons[i].id == id){
  			return persons[i];
  			break;
  		}
    }
}