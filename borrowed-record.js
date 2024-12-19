// تحقق من صلاحية المستخدم
const user = localStorage.getItem('user');
if (user !== 'loay') {
    alert('ليس لديك صلاحية للوصول إلى هذه الصفحة');
    window.location.href = 'login.html';
}

// عرض سجل الكتب المستعارة
const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
const tableBody = document.getElementById('borrowedBooksTable');

borrowedBooks.forEach(book => {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.borrower}</td>
        <td>${book.date}</td>
    `;
    tableBody.appendChild(row);
});
