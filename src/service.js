import firebase from "./firebase";

const db = firebase.ref("/movies");

class MovieDataService {
  getAll() {
    return db;
  }

  create(movie) {
    return db.push(movie);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new MovieDataService();