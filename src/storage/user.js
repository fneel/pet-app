export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function loadUsers() {
  let json = localStorage.getItem("users");
  if (json === null) {
    return [];
  } else {
    // Parsa JSON och skapa användarobjekt med rätt ID
    const parsedUsers = JSON.parse(json).map((user, index) => ({
      ...user,
      id: index + 1, // Lägg till ett unikt ID baserat på positionen i listan
    }));
    return parsedUsers;
  }
}

export function login(username, password, users) {
  for (let user of users) {
    if (user.name === username && user.password === password) {
      return user;
    }
  }

  return null;
}
