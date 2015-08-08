
function template(context){
    var source   = $("#entry-template").html();
    _template = Handlebars.compile(source);
    return _template(context);
}

var entries = [
    {
      name: "Auberginen",
      month: 6
    }
 ];

for (var i = 0; i < entries.length; i++){
  if (entries[i].month == moment().month() + 1){
    $("#birthdays").append(template(entries[i]));
  }
