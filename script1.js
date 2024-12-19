document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // تحقق من اسم المستخدم وكلمة المرور
    if (username === 'loay' && password === '114166') {
        localStorage.setItem('user', 'loay');
        window.location.href = 'borrowed-books-record.html';
    } else if (username === 'admin' && password === 'admin') {
        localStorage.setItem('user', 'admin');
        window.location.href = 'admin.html';
    }
else if (username === 'momo' && password === 'momo') {
        localStorage.setItem('user', 'admin');
        window.location.href = 'user.html';
    }
 else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
});
