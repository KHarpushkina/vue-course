module.exports = {
    presets: ["@vue/cli-plugin-babel/preset", "@babel/preset-env"],
    plugins: [
        [
            "@babel/plugin-transform-async-to-generator",
            {
                module: "bluebird",
                method: "coroutine",
            },
        ],
    ],
    ignore: ["node_modules"],
};
