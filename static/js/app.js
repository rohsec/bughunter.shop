let currentProduct = "";

function sendMail(product) {
  currentProduct = product || "Order";
  document.getElementById("productDisplay").textContent = currentProduct;
  document.getElementById("productField").value = currentProduct;

  const modal = document.getElementById("orderModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// close modal helpers
function closeOrderModal() {
  const modal = document.getElementById("orderModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("orderModal");
  const closeBtn = document.getElementById("orderClose");

  // close on X
  closeBtn.addEventListener("click", closeOrderModal);

  // close on overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeOrderModal();
  });

  // submit handler
  document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const alias = document.getElementById("alias").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const address = document.getElementById("address").value.trim();
    const note = document.getElementById("note").value.trim();
    const product = document.getElementById("productField").value;

    const subject = encodeURIComponent(`New Order Request: ${product}`);
    const body = encodeURIComponent(
`I would like to place an order for ${product}.

Customer Details:
Full Name: ${fullName}
Hacker/Alias: ${alias}
Email: ${email}
Contact No: ${contact}
Shipping Address:
${address}

Order Note:
${note}`
    );

    window.location.href = `mailto:bughuntershop@gmail.com?subject=${subject}&body=${body}`;
    closeOrderModal();
  });
});
