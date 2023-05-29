const userData = {
  users: [],
  admins: []
}

export default class Storage {
  static save(data) {
    const { users, admins } = userData;
    const { code } = data;

    if (!code) {
      return users.push(data);
    }

    return admins.push(data);
  }

  static getAll() {
    return userData;
  }
};
