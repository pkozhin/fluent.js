fluens.core.FluensFacade = function(fluens) {

    this.run = function(type, context) {
        fluens.core.run(type, context);
    };

    this.addProcessors = function(items) {
        fluens.addProcessors(items);
    };
};
