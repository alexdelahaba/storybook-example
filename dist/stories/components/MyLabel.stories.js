"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBkColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: "select", options: ["normal", "h1", "h2", "h3"] },
        fontColor: { control: "color" },
    },
};
var Template = function (props) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, props)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: "Basic label",
    size: "normal",
    allCaps: false,
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "AllCaps label",
    size: "normal",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Secondary label",
    size: "normal",
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "Secondary label",
    size: "normal",
    color: "tertiary",
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: "Secondary label",
    size: "normal",
    fontColor: "#1fc291",
};
exports.CustomBkColor = Template.bind({});
exports.CustomBkColor.args = {
    label: "Secondary label",
    size: "normal",
    fontColor: "white",
    backgroundColor: "black",
};
