"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-switch@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0__react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-switch@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0__react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-switch@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-switch/dist/index.mjs":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-switch@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-switch/dist/index.mjs ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Root: () => (/* binding */ $6be4966fd9bbc698$export$be92b6f5f03c0fe9),\n/* harmony export */   Switch: () => (/* binding */ $6be4966fd9bbc698$export$b5d5cf8927ab7262),\n/* harmony export */   SwitchThumb: () => (/* binding */ $6be4966fd9bbc698$export$4d07bf653ea69106),\n/* harmony export */   Thumb: () => (/* binding */ $6be4966fd9bbc698$export$6521433ed15a34db),\n/* harmony export */   createSwitchScope: () => (/* binding */ $6be4966fd9bbc698$export$cf7f5f17f69cbd43)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/primitive */ \"(ssr)/./node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.66_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.66_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-use-controllable-state */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.66_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-use-previous */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.2.66_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-use-size */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.66_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-primitive */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2._4bv73rt55hkm3j35qpleiptqiq/node_modules/@radix-ui/react-primitive/dist/index.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* -------------------------------------------------------------------------------------------------\n * Switch\n * -----------------------------------------------------------------------------------------------*/ const $6be4966fd9bbc698$var$SWITCH_NAME = 'Switch';\nconst [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)($6be4966fd9bbc698$var$SWITCH_NAME);\nconst [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);\nconst $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{\n    const { __scopeSwitch: __scopeSwitch , name: name , checked: checkedProp , defaultChecked: defaultChecked , required: required , disabled: disabled , value: value = 'on' , onCheckedChange: onCheckedChange , ...switchProps } = props;\n    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node)=>setButton(node)\n    );\n    const hasConsumerStoppedPropagationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false); // We set this to true by default so that events bubble to forms without JS (SSR)\n    const isFormControl = button ? Boolean(button.closest('form')) : true;\n    const [checked = false, setChecked] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.useControllableState)({\n        prop: checkedProp,\n        defaultProp: defaultChecked,\n        onChange: onCheckedChange\n    });\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($6be4966fd9bbc698$var$SwitchProvider, {\n        scope: __scopeSwitch,\n        checked: checked,\n        disabled: disabled\n    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        type: \"button\",\n        role: \"switch\",\n        \"aria-checked\": checked,\n        \"aria-required\": required,\n        \"data-state\": $6be4966fd9bbc698$var$getState(checked),\n        \"data-disabled\": disabled ? '' : undefined,\n        disabled: disabled,\n        value: value\n    }, switchProps, {\n        ref: composedRefs,\n        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.composeEventHandlers)(props.onClick, (event)=>{\n            setChecked((prevChecked)=>!prevChecked\n            );\n            if (isFormControl) {\n                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if switch is in a form, stop propagation from the button so that we only propagate\n                // one click event (from the input). We propagate changes from an input so that native\n                // form validation works and form events reflect switch updates.\n                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();\n            }\n        })\n    })), isFormControl && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($6be4966fd9bbc698$var$BubbleInput, {\n        control: button,\n        bubbles: !hasConsumerStoppedPropagationRef.current,\n        name: name,\n        value: value,\n        checked: checked,\n        required: required,\n        disabled: disabled // We transform because the input is absolutely positioned but we have\n        ,\n        style: {\n            transform: 'translateX(-100%)'\n        }\n    }));\n});\n/*#__PURE__*/ Object.assign($6be4966fd9bbc698$export$b5d5cf8927ab7262, {\n    displayName: $6be4966fd9bbc698$var$SWITCH_NAME\n});\n/* -------------------------------------------------------------------------------------------------\n * SwitchThumb\n * -----------------------------------------------------------------------------------------------*/ const $6be4966fd9bbc698$var$THUMB_NAME = 'SwitchThumb';\nconst $6be4966fd9bbc698$export$4d07bf653ea69106 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{\n    const { __scopeSwitch: __scopeSwitch , ...thumbProps } = props;\n    const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        \"data-state\": $6be4966fd9bbc698$var$getState(context.checked),\n        \"data-disabled\": context.disabled ? '' : undefined\n    }, thumbProps, {\n        ref: forwardedRef\n    }));\n});\n/*#__PURE__*/ Object.assign($6be4966fd9bbc698$export$4d07bf653ea69106, {\n    displayName: $6be4966fd9bbc698$var$THUMB_NAME\n});\n/* ---------------------------------------------------------------------------------------------- */ const $6be4966fd9bbc698$var$BubbleInput = (props)=>{\n    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.usePrevious)(checked);\n    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.useSize)(control); // Bubble checked change to parents (e.g form change event)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const input = ref.current;\n        const inputProto = window.HTMLInputElement.prototype;\n        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');\n        const setChecked = descriptor.set;\n        if (prevChecked !== checked && setChecked) {\n            const event = new Event('click', {\n                bubbles: bubbles\n            });\n            setChecked.call(input, checked);\n            input.dispatchEvent(event);\n        }\n    }, [\n        prevChecked,\n        checked,\n        bubbles\n    ]);\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"input\", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        type: \"checkbox\",\n        \"aria-hidden\": true,\n        defaultChecked: checked\n    }, inputProps, {\n        tabIndex: -1,\n        ref: ref,\n        style: {\n            ...props.style,\n            ...controlSize,\n            position: 'absolute',\n            pointerEvents: 'none',\n            opacity: 0,\n            margin: 0\n        }\n    }));\n};\nfunction $6be4966fd9bbc698$var$getState(checked) {\n    return checked ? 'checked' : 'unchecked';\n}\nconst $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;\nconst $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXN3aXRjaEAxLjAuM19AdHlwZXMrcmVhY3QtZG9tQDE4LjIuMjJfQHR5cGVzK3JlYWN0QDE4LjIuNjZfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjBfX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXN3aXRjaC9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUM0RjtBQUMxRjtBQUNEO0FBQ0M7QUFDbUI7QUFDNUI7QUFDWjtBQUNLOzs7Ozs7Ozs7OztBQVd4RTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsMkVBQXlCO0FBQ3hIO0FBQ0EsZ0VBQWdFLGlEQUFpQjtBQUNqRixZQUFZLHdOQUF3TjtBQUNwTyxnQ0FBZ0MsK0NBQWU7QUFDL0MseUJBQXlCLDZFQUFzQjtBQUMvQztBQUNBLDZDQUE2Qyw2Q0FBYSxTQUFTO0FBQ25FO0FBQ0EsMENBQTBDLDRGQUEyQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLG9EQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQixvREFBb0IsQ0FBQyxnRUFBZ0IsU0FBUyw4RUFBb0M7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQix5RUFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssbUNBQW1DLG9EQUFvQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxpREFBaUI7QUFDakYsWUFBWSwrQ0FBK0M7QUFDM0Q7QUFDQSx5QkFBeUIsb0RBQW9CLENBQUMsZ0VBQWdCLE9BQU8sOEVBQW9DO0FBQ3pHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxZQUFZLGdGQUFnRjtBQUM1RixnQkFBZ0IsNkNBQWE7QUFDN0Isd0JBQXdCLHlFQUFrQjtBQUMxQyx3QkFBd0IsaUVBQWMsV0FBVztBQUNqRCxJQUFJLGdEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9CLFVBQVUsOEVBQW9DO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSzhSO0FBQzlSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnR1cC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3Qtc3dpdGNoQDEuMC4zX0B0eXBlcytyZWFjdC1kb21AMTguMi4yMl9AdHlwZXMrcmVhY3RAMTguMi42Nl9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMF9fcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3Qtc3dpdGNoL2Rpc3QvaW5kZXgubWpzPzYyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRpclBJbCRiYWJlbHJ1bnRpbWVoZWxwZXJzZXNtZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHtmb3J3YXJkUmVmIGFzICRpclBJbCRmb3J3YXJkUmVmLCB1c2VTdGF0ZSBhcyAkaXJQSWwkdXNlU3RhdGUsIHVzZVJlZiBhcyAkaXJQSWwkdXNlUmVmLCBjcmVhdGVFbGVtZW50IGFzICRpclBJbCRjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QgYXMgJGlyUElsJHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NvbXBvc2VFdmVudEhhbmRsZXJzIGFzICRpclBJbCRjb21wb3NlRXZlbnRIYW5kbGVyc30gZnJvbSBcIkByYWRpeC11aS9wcmltaXRpdmVcIjtcbmltcG9ydCB7dXNlQ29tcG9zZWRSZWZzIGFzICRpclBJbCR1c2VDb21wb3NlZFJlZnN9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzXCI7XG5pbXBvcnQge2NyZWF0ZUNvbnRleHRTY29wZSBhcyAkaXJQSWwkY3JlYXRlQ29udGV4dFNjb3BlfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNvbnRleHRcIjtcbmltcG9ydCB7dXNlQ29udHJvbGxhYmxlU3RhdGUgYXMgJGlyUElsJHVzZUNvbnRyb2xsYWJsZVN0YXRlfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVcIjtcbmltcG9ydCB7dXNlUHJldmlvdXMgYXMgJGlyUElsJHVzZVByZXZpb3VzfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1wcmV2aW91c1wiO1xuaW1wb3J0IHt1c2VTaXplIGFzICRpclBJbCR1c2VTaXplfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1zaXplXCI7XG5pbXBvcnQge1ByaW1pdGl2ZSBhcyAkaXJQSWwkUHJpbWl0aXZlfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZVwiO1xuXG5cblxuXG5cblxuXG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBTd2l0Y2hcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gY29uc3QgJDZiZTQ5NjZmZDliYmM2OTgkdmFyJFNXSVRDSF9OQU1FID0gJ1N3aXRjaCc7XG5jb25zdCBbJDZiZTQ5NjZmZDliYmM2OTgkdmFyJGNyZWF0ZVN3aXRjaENvbnRleHQsICQ2YmU0OTY2ZmQ5YmJjNjk4JGV4cG9ydCRjZjdmNWYxN2Y2OWNiZDQzXSA9ICRpclBJbCRjcmVhdGVDb250ZXh0U2NvcGUoJDZiZTQ5NjZmZDliYmM2OTgkdmFyJFNXSVRDSF9OQU1FKTtcbmNvbnN0IFskNmJlNDk2NmZkOWJiYzY5OCR2YXIkU3dpdGNoUHJvdmlkZXIsICQ2YmU0OTY2ZmQ5YmJjNjk4JHZhciR1c2VTd2l0Y2hDb250ZXh0XSA9ICQ2YmU0OTY2ZmQ5YmJjNjk4JHZhciRjcmVhdGVTd2l0Y2hDb250ZXh0KCQ2YmU0OTY2ZmQ5YmJjNjk4JHZhciRTV0lUQ0hfTkFNRSk7XG5jb25zdCAkNmJlNDk2NmZkOWJiYzY5OCRleHBvcnQkYjVkNWNmODkyN2FiNzI2MiA9IC8qI19fUFVSRV9fKi8gJGlyUElsJGZvcndhcmRSZWYoKHByb3BzLCBmb3J3YXJkZWRSZWYpPT57XG4gICAgY29uc3QgeyBfX3Njb3BlU3dpdGNoOiBfX3Njb3BlU3dpdGNoICwgbmFtZTogbmFtZSAsIGNoZWNrZWQ6IGNoZWNrZWRQcm9wICwgZGVmYXVsdENoZWNrZWQ6IGRlZmF1bHRDaGVja2VkICwgcmVxdWlyZWQ6IHJlcXVpcmVkICwgZGlzYWJsZWQ6IGRpc2FibGVkICwgdmFsdWU6IHZhbHVlID0gJ29uJyAsIG9uQ2hlY2tlZENoYW5nZTogb25DaGVja2VkQ2hhbmdlICwgLi4uc3dpdGNoUHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtidXR0b24sIHNldEJ1dHRvbl0gPSAkaXJQSWwkdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgY29tcG9zZWRSZWZzID0gJGlyUElsJHVzZUNvbXBvc2VkUmVmcyhmb3J3YXJkZWRSZWYsIChub2RlKT0+c2V0QnV0dG9uKG5vZGUpXG4gICAgKTtcbiAgICBjb25zdCBoYXNDb25zdW1lclN0b3BwZWRQcm9wYWdhdGlvblJlZiA9ICRpclBJbCR1c2VSZWYoZmFsc2UpOyAvLyBXZSBzZXQgdGhpcyB0byB0cnVlIGJ5IGRlZmF1bHQgc28gdGhhdCBldmVudHMgYnViYmxlIHRvIGZvcm1zIHdpdGhvdXQgSlMgKFNTUilcbiAgICBjb25zdCBpc0Zvcm1Db250cm9sID0gYnV0dG9uID8gQm9vbGVhbihidXR0b24uY2xvc2VzdCgnZm9ybScpKSA6IHRydWU7XG4gICAgY29uc3QgW2NoZWNrZWQgPSBmYWxzZSwgc2V0Q2hlY2tlZF0gPSAkaXJQSWwkdXNlQ29udHJvbGxhYmxlU3RhdGUoe1xuICAgICAgICBwcm9wOiBjaGVja2VkUHJvcCxcbiAgICAgICAgZGVmYXVsdFByb3A6IGRlZmF1bHRDaGVja2VkLFxuICAgICAgICBvbkNoYW5nZTogb25DaGVja2VkQ2hhbmdlXG4gICAgfSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gJGlyUElsJGNyZWF0ZUVsZW1lbnQoJDZiZTQ5NjZmZDliYmM2OTgkdmFyJFN3aXRjaFByb3ZpZGVyLCB7XG4gICAgICAgIHNjb3BlOiBfX3Njb3BlU3dpdGNoLFxuICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICB9LCAvKiNfX1BVUkVfXyovICRpclBJbCRjcmVhdGVFbGVtZW50KCRpclBJbCRQcmltaXRpdmUuYnV0dG9uLCAkaXJQSWwkYmFiZWxydW50aW1laGVscGVyc2VzbWV4dGVuZHMoe1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICByb2xlOiBcInN3aXRjaFwiLFxuICAgICAgICBcImFyaWEtY2hlY2tlZFwiOiBjaGVja2VkLFxuICAgICAgICBcImFyaWEtcmVxdWlyZWRcIjogcmVxdWlyZWQsXG4gICAgICAgIFwiZGF0YS1zdGF0ZVwiOiAkNmJlNDk2NmZkOWJiYzY5OCR2YXIkZ2V0U3RhdGUoY2hlY2tlZCksXG4gICAgICAgIFwiZGF0YS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICcnIDogdW5kZWZpbmVkLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0sIHN3aXRjaFByb3BzLCB7XG4gICAgICAgIHJlZjogY29tcG9zZWRSZWZzLFxuICAgICAgICBvbkNsaWNrOiAkaXJQSWwkY29tcG9zZUV2ZW50SGFuZGxlcnMocHJvcHMub25DbGljaywgKGV2ZW50KT0+e1xuICAgICAgICAgICAgc2V0Q2hlY2tlZCgocHJldkNoZWNrZWQpPT4hcHJldkNoZWNrZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaXNGb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgICAgIGhhc0NvbnN1bWVyU3RvcHBlZFByb3BhZ2F0aW9uUmVmLmN1cnJlbnQgPSBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpOyAvLyBpZiBzd2l0Y2ggaXMgaW4gYSBmb3JtLCBzdG9wIHByb3BhZ2F0aW9uIGZyb20gdGhlIGJ1dHRvbiBzbyB0aGF0IHdlIG9ubHkgcHJvcGFnYXRlXG4gICAgICAgICAgICAgICAgLy8gb25lIGNsaWNrIGV2ZW50IChmcm9tIHRoZSBpbnB1dCkuIFdlIHByb3BhZ2F0ZSBjaGFuZ2VzIGZyb20gYW4gaW5wdXQgc28gdGhhdCBuYXRpdmVcbiAgICAgICAgICAgICAgICAvLyBmb3JtIHZhbGlkYXRpb24gd29ya3MgYW5kIGZvcm0gZXZlbnRzIHJlZmxlY3Qgc3dpdGNoIHVwZGF0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb25zdW1lclN0b3BwZWRQcm9wYWdhdGlvblJlZi5jdXJyZW50KSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KSksIGlzRm9ybUNvbnRyb2wgJiYgLyojX19QVVJFX18qLyAkaXJQSWwkY3JlYXRlRWxlbWVudCgkNmJlNDk2NmZkOWJiYzY5OCR2YXIkQnViYmxlSW5wdXQsIHtcbiAgICAgICAgY29udHJvbDogYnV0dG9uLFxuICAgICAgICBidWJibGVzOiAhaGFzQ29uc3VtZXJTdG9wcGVkUHJvcGFnYXRpb25SZWYuY3VycmVudCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCAvLyBXZSB0cmFuc2Zvcm0gYmVjYXVzZSB0aGUgaW5wdXQgaXMgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJ1dCB3ZSBoYXZlXG4gICAgICAgICxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICB9XG4gICAgfSkpO1xufSk7XG4vKiNfX1BVUkVfXyovIE9iamVjdC5hc3NpZ24oJDZiZTQ5NjZmZDliYmM2OTgkZXhwb3J0JGI1ZDVjZjg5MjdhYjcyNjIsIHtcbiAgICBkaXNwbGF5TmFtZTogJDZiZTQ5NjZmZDliYmM2OTgkdmFyJFNXSVRDSF9OQU1FXG59KTtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFN3aXRjaFRodW1iXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGNvbnN0ICQ2YmU0OTY2ZmQ5YmJjNjk4JHZhciRUSFVNQl9OQU1FID0gJ1N3aXRjaFRodW1iJztcbmNvbnN0ICQ2YmU0OTY2ZmQ5YmJjNjk4JGV4cG9ydCQ0ZDA3YmY2NTNlYTY5MTA2ID0gLyojX19QVVJFX18qLyAkaXJQSWwkZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZik9PntcbiAgICBjb25zdCB7IF9fc2NvcGVTd2l0Y2g6IF9fc2NvcGVTd2l0Y2ggLCAuLi50aHVtYlByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBjb250ZXh0ID0gJDZiZTQ5NjZmZDliYmM2OTgkdmFyJHVzZVN3aXRjaENvbnRleHQoJDZiZTQ5NjZmZDliYmM2OTgkdmFyJFRIVU1CX05BTUUsIF9fc2NvcGVTd2l0Y2gpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovICRpclBJbCRjcmVhdGVFbGVtZW50KCRpclBJbCRQcmltaXRpdmUuc3BhbiwgJGlyUElsJGJhYmVscnVudGltZWhlbHBlcnNlc21leHRlbmRzKHtcbiAgICAgICAgXCJkYXRhLXN0YXRlXCI6ICQ2YmU0OTY2ZmQ5YmJjNjk4JHZhciRnZXRTdGF0ZShjb250ZXh0LmNoZWNrZWQpLFxuICAgICAgICBcImRhdGEtZGlzYWJsZWRcIjogY29udGV4dC5kaXNhYmxlZCA/ICcnIDogdW5kZWZpbmVkXG4gICAgfSwgdGh1bWJQcm9wcywge1xuICAgICAgICByZWY6IGZvcndhcmRlZFJlZlxuICAgIH0pKTtcbn0pO1xuLyojX19QVVJFX18qLyBPYmplY3QuYXNzaWduKCQ2YmU0OTY2ZmQ5YmJjNjk4JGV4cG9ydCQ0ZDA3YmY2NTNlYTY5MTA2LCB7XG4gICAgZGlzcGxheU5hbWU6ICQ2YmU0OTY2ZmQ5YmJjNjk4JHZhciRUSFVNQl9OQU1FXG59KTtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi8gY29uc3QgJDZiZTQ5NjZmZDliYmM2OTgkdmFyJEJ1YmJsZUlucHV0ID0gKHByb3BzKT0+e1xuICAgIGNvbnN0IHsgY29udHJvbDogY29udHJvbCAsIGNoZWNrZWQ6IGNoZWNrZWQgLCBidWJibGVzOiBidWJibGVzID0gdHJ1ZSAsIC4uLmlucHV0UHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHJlZiA9ICRpclBJbCR1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgcHJldkNoZWNrZWQgPSAkaXJQSWwkdXNlUHJldmlvdXMoY2hlY2tlZCk7XG4gICAgY29uc3QgY29udHJvbFNpemUgPSAkaXJQSWwkdXNlU2l6ZShjb250cm9sKTsgLy8gQnViYmxlIGNoZWNrZWQgY2hhbmdlIHRvIHBhcmVudHMgKGUuZyBmb3JtIGNoYW5nZSBldmVudClcbiAgICAkaXJQSWwkdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGlucHV0UHJvdG8gPSB3aW5kb3cuSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGlucHV0UHJvdG8sICdjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHNldENoZWNrZWQgPSBkZXNjcmlwdG9yLnNldDtcbiAgICAgICAgaWYgKHByZXZDaGVja2VkICE9PSBjaGVja2VkICYmIHNldENoZWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBidWJibGVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldENoZWNrZWQuY2FsbChpbnB1dCwgY2hlY2tlZCk7XG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgcHJldkNoZWNrZWQsXG4gICAgICAgIGNoZWNrZWQsXG4gICAgICAgIGJ1YmJsZXNcbiAgICBdKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qLyAkaXJQSWwkY3JlYXRlRWxlbWVudChcImlucHV0XCIsICRpclBJbCRiYWJlbHJ1bnRpbWVoZWxwZXJzZXNtZXh0ZW5kcyh7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBkZWZhdWx0Q2hlY2tlZDogY2hlY2tlZFxuICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICByZWY6IHJlZixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlLFxuICAgICAgICAgICAgLi4uY29udHJvbFNpemUsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5mdW5jdGlvbiAkNmJlNDk2NmZkOWJiYzY5OCR2YXIkZ2V0U3RhdGUoY2hlY2tlZCkge1xuICAgIHJldHVybiBjaGVja2VkID8gJ2NoZWNrZWQnIDogJ3VuY2hlY2tlZCc7XG59XG5jb25zdCAkNmJlNDk2NmZkOWJiYzY5OCRleHBvcnQkYmU5MmI2ZjVmMDNjMGZlOSA9ICQ2YmU0OTY2ZmQ5YmJjNjk4JGV4cG9ydCRiNWQ1Y2Y4OTI3YWI3MjYyO1xuY29uc3QgJDZiZTQ5NjZmZDliYmM2OTgkZXhwb3J0JDY1MjE0MzNlZDE1YTM0ZGIgPSAkNmJlNDk2NmZkOWJiYzY5OCRleHBvcnQkNGQwN2JmNjUzZWE2OTEwNjtcblxuXG5cblxuZXhwb3J0IHskNmJlNDk2NmZkOWJiYzY5OCRleHBvcnQkY2Y3ZjVmMTdmNjljYmQ0MyBhcyBjcmVhdGVTd2l0Y2hTY29wZSwgJDZiZTQ5NjZmZDliYmM2OTgkZXhwb3J0JGI1ZDVjZjg5MjdhYjcyNjIgYXMgU3dpdGNoLCAkNmJlNDk2NmZkOWJiYzY5OCRleHBvcnQkNGQwN2JmNjUzZWE2OTEwNiBhcyBTd2l0Y2hUaHVtYiwgJDZiZTQ5NjZmZDliYmM2OTgkZXhwb3J0JGJlOTJiNmY1ZjAzYzBmZTkgYXMgUm9vdCwgJDZiZTQ5NjZmZDliYmM2OTgkZXhwb3J0JDY1MjE0MzNlZDE1YTM0ZGIgYXMgVGh1bWJ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-switch@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-switch/dist/index.mjs\n");

/***/ })

};
;