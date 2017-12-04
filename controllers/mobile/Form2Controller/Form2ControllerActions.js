define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Switch_a327521b45544770996fbca3456d7a3e: function AS_Switch_a327521b45544770996fbca3456d7a3e(eventobject) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.FlexContainer0d79833a4e2c64a["skin"] = "CopyslFbox0dad28242bc8746";
            }, null);
        } else {
            (function() {
                self.view.FlexContainer0d79833a4e2c64a["skin"] = "CopyslFbox0dad28242bc8746";
            })();
        }
    }
});