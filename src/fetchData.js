import firebase from './firebase';

const fetchData = async () => {
    try {
      const firestore = firebase.firestore();
      const querySnapshot = await firestore.collection('customers').get();
  
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        const dataWithId = {
          id: doc.id, // Add the document ID to the data
          ...doc.data(), // Add other fields from the document data
        };
        fetchedData.push(dataWithId);
      });
  
  
      return fetchedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export default fetchData;
  
