// تحقق من صلاحية المستخدم
const user = localStorage.getItem('user');
if (user !== 'admin') {
    alert('ليس لديك صلاحية للوصول إلى هذه الصفحة');
    window.location.href = 'login.html';
}

// إضافة كتاب جديد
document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const borrowerName = document.getElementById('borrowerName').value;

    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    borrowedBooks.push({ title: bookTitle, borrower: borrowerName, date: new Date().toLocaleDateString() });
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

    alert('تم إضافة الكتاب بنجاح!');
    document.getElementById('bookForm').reset();
});

// إضافة مستخدم جديد
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('تم إضافة المستخدم بنجاح!');
    document.getElementById('userForm').reset();
});
