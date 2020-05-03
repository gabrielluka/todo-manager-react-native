import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBORqhJ68yd5hNdsoWms0F4-20h-XoT_DQ',
  authDomain: 'to-do-pos.firebaseapp.com',
  databaseURL: 'https://to-do-pos.firebaseio.com',
  projectId: 'to-do-pos',
  storageBucket: 'to-do-pos.appspot.com',
  messagingSenderId: '275140336274',
  appId: '1:275140336274:web:0ba9459fec3a7ff806244b',
};

export const initFirebase = () => firebase.initializeApp(config);

export const createUser = async (email, password) => {
  const {user} = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  return user;
};

export const signInOnAsync = async (email, password) => {
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return user;
};

export const currentUser = () => {
  return new Promise((resolve, reject) => {
    let unsubscribe = null;
    unsubscribe = firebase.auth().onAuthStateChanged(
      (user) => {
        resolve(user);
      },
      (error) => {
        reject(error);
      },
      () => {
        unsubscribe();
      },
    );
  });
};

export const saveTask = async (task) => {
  const user = await currentUser();
  var tasksReference = firebase.database().ref(user.uid);
  const key = task.key ? task.key : tasksReference.child('tasks').push().key;
  return await tasksReference.child(`tasks/${key}`).update(task);
};

export const getTasks = async (listener) => {
  const user = await currentUser();
  var tasksReference = firebase.database().ref(user.uid).child('tasks');
  tasksReference.on('value', (snapshot) => {
    var tasks = [];
    snapshot.forEach(function (element) {
      var task = element.val();
      task.key = element.key;
      tasks.push(task);
    });
    listener(tasks);
  });
};
