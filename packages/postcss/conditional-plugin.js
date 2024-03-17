module.exports.conditionalPlugin = function (condition, plugin) {
    return {
        ...plugin,
        OnceExit(root, helper) {
            const file = root.source?.input.file ?? '';
            if (condition(file)) {
                return plugin.OnceExit(root, helper);
            }
        },
    };
};
