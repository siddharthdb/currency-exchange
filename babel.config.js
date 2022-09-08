module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-dynamic-import"
  ]
}