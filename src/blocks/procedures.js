import ScratchBlocks from '../scratch-blocks';

ScratchBlocks.Blocks['procedures_declaration'].addLabelExternal = function () {
  const text = ScratchBlocks.Msg.PROCEDURES_ADD_LABEL ?? ' label text';
  ScratchBlocks.WidgetDiv.hide(true);
  this.procCode_ = this.procCode_ + text;
  this.updateDisplay_();
  this.focusLastEditor_();
};

ScratchBlocks.Blocks['procedures_declaration'].addBooleanExternal = function () {
  const text = ScratchBlocks.Msg.PROCEDURES_ADD_BOOLEAN ?? 'boolean';
  ScratchBlocks.WidgetDiv.hide(true);
  this.procCode_ = this.procCode_ + ' %b';
  this.displayNames_.push(text);
  this.argumentIds_.push(ScratchBlocks.utils.genUid());
  this.argumentDefaults_.push('false');
  this.updateDisplay_();
  this.focusLastEditor_();
};

ScratchBlocks.Blocks['procedures_declaration'].addStringNumberExternal = function () {
  const text = ScratchBlocks.Msg.PROCEDURES_ADD_STRING_NUMBER ?? 'number or text';
  ScratchBlocks.WidgetDiv.hide(true);
  this.procCode_ = this.procCode_ + ' %s';
  this.displayNames_.push(text);
  this.argumentIds_.push(ScratchBlocks.utils.genUid());
  this.argumentDefaults_.push('');
  this.updateDisplay_();
  this.focusLastEditor_();
};
