ko.bindingHandlers.limit = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var bind = value.bind;
        var regex = /[0-9]+(\.[0-9]+)?/igm;

        var $element = $(element);

        $element.on("keydown", function (ev) {
            var w = ev.which;
            return (w >= 48 && w <= 57) || w === 190;
        });

        $element.on("keyup", function () {

        });
    }
};