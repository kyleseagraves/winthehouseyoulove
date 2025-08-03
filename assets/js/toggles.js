document.addEventListener("DOMContentLoaded", () => {
  // Grab all H2s
  const headings = Array.from(document.querySelectorAll("h2"));
  headings.forEach(h2 => {
    // 1) Build a <details> + <summary>
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerHTML = h2.innerHTML;
    details.appendChild(summary);

    // 2) Move everything until the next H2 into the details
    let nxt = h2.nextElementSibling;
    while (nxt && nxt.tagName !== "H2") {
      const move = nxt;
      nxt = nxt.nextElementSibling;
      details.appendChild(move);
    }

    // 3) Insert the details before the first moved element (or at end)
    h2.parentNode.insertBefore(details, nxt);
    h2.remove();
  });
});
