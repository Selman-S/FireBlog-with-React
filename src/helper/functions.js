import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from './firebase'
import { toastErrorNotify, toastSuccessNotify } from './toastNotify'

const postsCollectionRef = collection(db, 'blog')

export const getPosts = async () => {
  try {
    const data = await getDocs(postsCollectionRef)
    const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    return posts
  } catch (error) {
    toastErrorNotify(error.message)
  }
}

export const createpost = async () => {
  try {
    await addDoc(postsCollectionRef, {
      title: 'Lorem İpsum',
      email: 'ali@ali.ali',
      userImgUrl: 'https://avatars.githubusercontent.com/u/98209250?s=100&v=4',
      imgUrl:
        'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/languages-signpost.jpg?itok=VSbR4uZ9',
      description:
        'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ',
      like: 6,
      likeList: ['ali'],
      timeLocal: '00:23:29',
      dateLocal: 'Sun Aug 02 2022',
      comments: 2,
      commentList: ['asdasdasd', 'fqesdfxcvsdef'],
      commentOwner: ['ali', 'veli'],
    })
    getPosts()
  } catch (error) {
    toastErrorNotify(error.message)
  }
}
