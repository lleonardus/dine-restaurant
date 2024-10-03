export { focusOnSiblingWhenComplete, focusOnPreviousSiblingWhenEmpty };

function focusOnSiblingWhenComplete(e, maxLength) {
  const currentValue = e.target.value;

  if (currentValue.length === maxLength) {
    const form = Array.from(e.target.form);
    const siblingNodeIndex = form.indexOf(e.target) + 1;
    const siblingNode = form[siblingNodeIndex];

    siblingNode?.focus();
  }
}

//focus on previous sibling when the user presses backspace and the current input is empty
function focusOnPreviousSiblingWhenEmpty(e) {
  const currentValue = e.target.value;
  if (e.key === "Backspace" && !currentValue.length) {
    e.preventDefault();

    const form = Array.from(e.target.form);
    const siblingNodeIndex = form.indexOf(e.target) - 1;
    const siblingNode = form[siblingNodeIndex];

    siblingNode?.focus();
  }
}
