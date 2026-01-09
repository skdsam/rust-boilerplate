const {
  invoke
} = window.__TAURI__.core;

window.addEventListener("DOMContentLoaded", () => {
  // Handle Dark Mode Toggle
  const darkToggle = document.querySelector("#dark-mode-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.style.filter = "none";
      } else {
        document.body.style.filter = "invert(0.9) hue-rotate(180deg)";
      }
    });
  }

  // Handle Sidebar Selection
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Handle Action Buttons (Placeholder)
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log(`Clicked: ${btn.textContent.trim()}`);
      // You can add invoke calls here
    });
  });
});