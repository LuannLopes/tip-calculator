function calculateTip(event) {
  event.preventDefault();
  const bill = document.getElementById("bill").value;
  const serviceQual = document.getElementById("service-quality").value;
  const numOfPeople = document.getElementById("people").value;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);
