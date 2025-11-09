const LS_USER = 'ccUser';

export function login(email, password) {
  // For demo, accept any email/password, admin if email contains 'admin'
  const user = {
    name: email.split('@')[0],
    email,
    avatar: 'https://i.pravatar.cc/100?u=' + email,
    role: email.includes('admin') ? 'admin' : 'user',
  };
  localStorage.setItem(LS_USER, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(LS_USER);
}

export function getCurrentUser() {
  const saved = localStorage.getItem(LS_USER);
  return saved ? JSON.parse(saved) : null;
}

export function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === 'admin';
} 