import { importWebpackExport } from './macros/import-webpack-export' with { type: 'macro' };

const module = {};
const code = importWebpackExport('scratch-blocks/dist/vertical');
new Function('module', code)(module);
const ScratchBlocks = module.exports;
export default ScratchBlocks;

ScratchBlocks.Block.prototype.setCheckboxInFlyout = function (hasCheckbox) {
  this.checkboxInFlyout_ = false;
};
