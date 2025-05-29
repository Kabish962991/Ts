function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === "9994995153" && password === "May") {
    window.location.href = "bookings.html";
  } else {
    alert("Invalid login!");
  }
}

function addBooking() {
  const team = document.getElementById('teamName').value;
  const advance = document.getElementById('advancePay').value;
  const hours = document.getElementById('hours').value;
  const time = document.getElementById('bookingTime').value;
  const mobile = document.getElementById('mobileNumber').value;
  const parking = document.getElementById('parking').value;
  const token = document.getElementById('tokenNumber').value;
  const beverages = document.getElementById('beverages').value;

  const record = { team, advance, hours, time, mobile, parking, token, beverages };
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(record);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  displayBookings();
}

function displayBookings() {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const table = document.querySelector("#bookingTable tbody");
  table.innerHTML = "";
  bookings.forEach((b, i) => {
    const row = `<tr>
      <td>${b.team}</td><td>₹${b.advance}</td><td>${b.hours} Hr</td><td>${b.time}</td>
      <td>${b.mobile}</td><td>${b.parking}</td><td>${b.token}</td><td>${b.beverages}</td>
      <td><button onclick="deleteBooking(${i})">Delete</button></td>
    </tr>`;
    table.innerHTML += row;
  });
}

function deleteBooking(index) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.splice(index, 1);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  displayBookings();
}

function searchBooking() {
  const query = document.getElementById("searchBox").value;
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const table = document.querySelector("#bookingTable tbody");
  table.innerHTML = "";
  bookings.filter(b => b.mobile.includes(query)).forEach((b, i) => {
    const row = `<tr>
      <td>${b.team}</td><td>₹${b.advance}</td><td>${b.hours} Hr</td><td>${b.time}</td>
      <td>${b.mobile}</td><td>${b.parking}</td><td>${b.token}</td><td>${b.beverages}</td>
      <td><button onclick="deleteBooking(${i})">Delete</button></td>
    </tr>`;
    table.innerHTML += row;
  });
}

if (document.querySelector("#bookingTable")) displayBookings();
