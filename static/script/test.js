(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['test'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <li><i class=\"unchecked check_list_item cdi cdi-lg cdi-circle-o\"></i><span class=\"todolist_item\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span><i  class=\"remove_list cdi cdi-lg cdi-times-circle\"></i></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0["todolist-item"] : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();