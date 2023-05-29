const userData = {
  users: [],
  admins: [],
};

const Storage = function() {}

Storage.save = function(data) {
    const { users, admins } = userData;
    const { code } = data;

    if (!code) {
      return users.push(data);
    }

    return admins.push(data);
}

Storage.getAll = function() {
    return userData
}

export default Storage