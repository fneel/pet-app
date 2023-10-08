//src\storage\user.js

export function saveUsers(users) {
  // Uppdatera användarobjektens format innan du sparar dem
  const formattedUsers = users.map((user) => ({
    id: user.id,
    name: user.name,
    password: user.password,
    tasks: user.tasks,
  }));

  localStorage.setItem("users", JSON.stringify(formattedUsers));
}

export function loadUsers() {
  let json = localStorage.getItem("users");
  if (json === null) {
    return [];
  } else {
    // Parsa JSON och skapa användarobjekt med rätt format
    const parsedUsers = JSON.parse(json).map((user) => ({
      id: user.id,
      name: user.name,
      password: user.password,
      tasks: user.tasks,
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
