module.exports = function(RED) {
    function MTconnectRulesNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.rules = config.rules || [];

        node.on('input', function(msg) {
            try {
                node.rules.forEach(function(rule) {
                    if (rule.t === 'move') {
                        // Log the rule being processed
                        node.log(`Processing rule: ${JSON.stringify(rule)}`);
                        
                        var fromValue;
                        try {
                            fromValue = RED.util.getMessageProperty(msg, rule.p);
                        } catch (err) {
                            node.warn(`Invalid property path in 'from' field: ${rule.p}`);
                            return;
                        }
                        
                        if (fromValue !== undefined) {
                            // Clone the value to prevent modification issues
                            var clonedValue = JSON.parse(JSON.stringify(fromValue));
                            try {
                                RED.util.setMessageProperty(msg, rule.to, clonedValue);
                            } catch (err) {
                                node.warn(`Invalid property path in 'to' field: ${rule.to}`);
                                return;
                            }
                        } else {
                            node.warn(`Property ${rule.p} not found in message`);
                        }
                    } else {
                        node.warn(`Unsupported rule type: ${rule.t}`);
                    }
                });

                node.send(msg);
            } catch (err) {
                node.error("Error processing input message: " + err.message, msg);
            }
        });
    }

    RED.nodes.registerType("mtconnect-rules", MTconnectRulesNode);
}