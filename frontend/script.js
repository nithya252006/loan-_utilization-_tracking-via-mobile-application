console.log("JS Loaded");

/* ================= REGISTER ================= */
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const user = document.getElementById("regUser").value.toLowerCase().trim();
    const pass = document.getElementById("regPass").value;
    const confirm = document.getElementById("regConfirm").value;

    if (pass !== confirm) {
      document.getElementById("regError").innerText = "Passwords not match";
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      username: user,
      password: pass,
      name: name
    }));

    alert("Registered Successfully!");
    window.location.href = "login.html";
  });
}

/* ================= LOGIN ================= */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("loginUser").value.toLowerCase().trim();
    const pass = document.getElementById("loginPass").value;

    const db = JSON.parse(localStorage.getItem("user"));

    if (db && db.username === user && db.password === pass) {
      localStorage.setItem("logged", "true");
      localStorage.setItem("currentUser", db.name);

      window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginError").innerText = "Invalid login";
    }
  });
}

/* ================= DASHBOARD INIT ================= */
function initDashboard() {
  if (localStorage.getItem("logged") !== "true") {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("user").innerText =
    localStorage.getItem("currentUser");

  display();
}

/* ================= LOGOUT ================= */
function logout() {
  localStorage.removeItem("logged");
  localStorage.removeItem("currentUser");

  window.location.href = "login.html";
}

/* ================= CRUD ================= */
const loanForm = document.getElementById("loanForm");

if (loanForm) {
  loanForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let loans = JSON.parse(localStorage.getItem("loans")) || [];

    const borrower = document.getElementById("borrower").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const editIndex = document.getElementById("editIndex").value;

    const data = { borrower, amount, date };

    if (editIndex === "") {
      loans.push(data);
    } else {
      loans[editIndex] = data;
      document.getElementById("editIndex").value = "";
    }

    localStorage.setItem("loans", JSON.stringify(loans));

    loanForm.reset();
    display();
  });
}

/* ================= DISPLAY ================= */
function display() {
  const table = document.getElementById("table");
  if (!table) return;

  let loans = JSON.parse(localStorage.getItem("loans")) || [];

  // 👇 get search text
  let searchValue = document.getElementById("searchInput")
    ? document.getElementById("searchInput").value.toLowerCase()
    : "";

  table.innerHTML = "";

  let filteredLoans = loans.filter(l => 
    l.borrower.toLowerCase().includes(searchValue)
  );

  if (filteredLoans.length === 0) {
    table.innerHTML = `<tr><td colspan="4">No matching data</td></tr>`;
    return;
  }

  filteredLoans.forEach((l, i) => {
    table.innerHTML += `
      <tr>
        <td>${l.borrower}</td>
        <td>${l.amount}</td>
        <td>${l.date}</td>
        <td>
          <button class="edit" onclick="editLoan(${i})">Edit</button>
          <button class="delete" onclick="deleteLoan(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

/* ================= EDIT ================= */
function editLoan(index) {
  let loans = JSON.parse(localStorage.getItem("loans")) || [];

  document.getElementById("borrower").value = loans[index].borrower;
  document.getElementById("amount").value = loans[index].amount;
  document.getElementById("date").value = loans[index].date;

  document.getElementById("editIndex").value = index;
}

/* ================= DELETE ================= */
function deleteLoan(index) {
  let loans = JSON.parse(localStorage.getItem("loans")) || [];

  loans.splice(index, 1);

  localStorage.setItem("loans", JSON.stringify(loans));

  display();
}
