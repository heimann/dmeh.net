let myButton = document.getElementById("wordmark");

myButton.addEventListener("mouseover", function (e) {
  let tooltip = document.createElement("div");

  // Tooltip styling
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "#333";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "12px";
  tooltip.style.borderRadius = "6px";

  // Set the tooltip content
  tooltip.textContent = "Look I made your cursor disappear!";

  // Add the tooltip to the document
  document.body.appendChild(tooltip);

  // Position the tooltip
  tooltip.style.left = e.pageX + "px";
  tooltip.style.top = e.pageY + "px";

  // Store the tooltip on the element for later removal
  myButton.tooltip = tooltip;
});

myButton.addEventListener("mouseout", function () {
  // Remove the tooltip from the document
  if (myButton.tooltip) {
    document.body.removeChild(myButton.tooltip);
    myButton.tooltip = null;
  }
});
