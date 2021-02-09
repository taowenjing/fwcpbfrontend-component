import fwcpbButton from './src/index'
/* istanbul ignore next */
fwcpbButton.install = function(Vue) {
    Vue.component(fwcpbButton.name, fwcpbButton);
};
export default fwcpbButton;
