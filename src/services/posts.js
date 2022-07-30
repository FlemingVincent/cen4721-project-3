import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, getDoc, doc, deleteDoc, setDoc, updateDoc, increment } from "firebase/firestore";
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
        votesCount: 0,
        timestamp: serverTimestamp()
    })

}

export const getBookmarkByPostId = (postId, uid) => new Promise((resolve, reject) => {

    getDoc(doc(db, 'posts', postId, 'bookmarks', uid))
    .then((res) => {
      resolve(res.exists())
    })

})

export const updateBookmark = (post, uid, currentBookmarkState) => {

    if (currentBookmarkState) {
      deleteDoc(doc(db, 'posts', post?.id, 'bookmarks', uid))
      updateDoc(doc(db, 'users', post?.data.user), {
        "stats.bookmarksCount": increment(-1)
      })
    }
    else {
      setDoc(doc(db, 'posts', post?.id, 'bookmarks', uid),{})
      updateDoc(doc(db, 'users', post?.data.user), {
        "stats.bookmarksCount": increment(1)
      })
    }
}

export const getVoteByPostId = (postId,uid) => new Promise((resolve, reject) => {

  getDoc(doc(db, 'posts', postId, 'votes', uid))
    .then((res) => {
      if (!res.exists()) {
        resolve(null)
      }
      else {
        resolve(res.data().type)
      }
  })

})

export const updateVote = (postId, uid, currentVoteStateInst, type) => {

  if (currentVoteStateInst.state == null) {
    setDoc(doc(db, 'posts', postId, 'votes', uid),{
      type: type,
    })
    updateDoc(doc(db, 'posts', postId), {
      "votesCount": (type == 'up') ? increment(1) : increment(-1)
    })
  }
  else {
    if (currentVoteStateInst.state == type) {
        deleteDoc(doc(db, 'posts', postId, 'votes', uid))
        updateDoc(doc(db, 'posts', postId), {
          "votesCount": (type == 'up') ? increment(-1) : increment(1)
        })
    }
    else {

        updateDoc(doc(db, 'posts', postId, 'votes', uid), {
          "type": type
        })
        updateDoc(doc(db, 'posts', postId), {
          "votesCount": (type == 'up') ? increment(2) : increment(-2)
        })
    }
}

}