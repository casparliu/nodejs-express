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
  //res.send(getPerson(req.params.name));
  res.send(persons);
  res.end();
};

exports.update = function(req, res){
  console.log(">>>>>>>>> update");
  var person = getPerson(req.params.name);
  person.name = req.query.name;
  person.tel = req.query.tel;
  person.company = req.query.company;
  res.send(person);
};

exports.delete = function(req, res){
  console.log(">>>>>>>>> delete");
  var id = req.params.name;
  var newpersons = [];
  persons.forEach(function (entry){
    if(entry.id !== id){
      newpersons.push(entry);
    }
  });
  persons = newpersons;
  res.end();
};

function getPerson(id){
	var person;
	persons.forEach(function (entry){
		if(entry.id === id){
			person = entry;
		}
	});
	return person;
}

exports.upload = function(req, res){
  var fs = require('fs');
  var path = require('path');
  // var ext = path.extname(req.files.file.path);
  var filename = req.params.name + '.jpg';
  var type = req.params.type;   // 'photo' or 'voice'


  fs.readFile(req.files.file.path, function (err, data) {
      var newPath = path.join(__dirname, '../frontend/', 'uploads',  filename);


      fs.writeFile(newPath, data, function (err) {
          if (err) {
              res.json({status: 'error', message: err});
          } else {
              res.json({status: 'ok'});
          }
      });
  });
}