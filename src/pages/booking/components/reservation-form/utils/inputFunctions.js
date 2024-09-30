export { focusOnSiblingWhenComplete };

function focusOnSiblingWhenComplete(e) {
  const currentValue = e.target.value;
  const maxLength = e.target.max.length || 2;

  if (currentValue.length === maxLength) {
    const form = Array.from(e.target.form);
    const siblingNodeIndex = form.indexOf(e.target) + 1;
    const siblingNode = form[siblingNodeIndex];

    siblingNode?.focus();
  }
}
