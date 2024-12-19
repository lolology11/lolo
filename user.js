// التحقق من المستخدم
const users = JSON.parse(localStorage.getItem('users')) || [];
const currentUser = localStorage.getItem('user');

if (!currentUser) {
    alert('يجب عليك تسجيل الدخول أولاً');
    window.location.href = 'login.html';
}

// إضافة كتاب مستعار
document.getElementById('borrowForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const borrowerName = document.getElementById('borrowerName').value;

    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    borrowedBooks.push({ title: bookTitle, borrower: borrowerName, date: new Date().toLocaleDateString() });
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

    alert('تم تسجيل الكتاب المستعار بنجاح!');
    document.getElementById('borrowForm').reset();
});
