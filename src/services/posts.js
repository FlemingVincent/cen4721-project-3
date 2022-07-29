import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase'

export const getFeed = (setPosts) => {

    const postItems = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

    onSnapshot(postItems, (snapshot) => {
        let posts = snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data()
          }
        ))
        setPosts(posts)
    })

}

export const sendPost = (user, title, tag, details) => {

    addDoc(collection(db, "posts"),{
        user: user,
        title: title,
        tag: tag,
        details: details,
        timestamp: serverTimestamp()
    })

}