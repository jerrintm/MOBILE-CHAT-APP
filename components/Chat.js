import { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ route, navigation, db, isConnected, storage }) => {
   const { username, background, userID } = route.params; 
   const [messages, setMessages] = useState([]);
   const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }

 
 
    // useEffect hook to set messages options
    let unsubMessages;
    useEffect(() => {
      if (isConnected === true){
        // unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;
        navigation.setOptions({ title: username });
        // Create a query to get the "messages" collection from the Firestore database
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
        // This function will be called whenever there are changes in the collection.
        unsubMessages = onSnapshot(q, (docs) => {
          let newMessages = [];
          // Iterate through each document in the snapshot
          docs.forEach(doc => {
            newMessages.push({ id: doc.id, ...doc.data(),  createdAt: new Date(doc.data().createdAt.toMillis()), })
          });
          cacheMessages(newMessages);
          setMessages(newMessages);
        });
      } else loadCachedMessages();

        // Clean up code
        return () => {
          if (unsubMessages) unsubMessages();
        }
      }, [isConnected]); //isConnected used as a dependency value enabling the component to call the callback of useEffect whenewer the isConnected prop's value changes.


 return (
   <View style={[styles.container, { backgroundColor: background }]}>
     <GiftedChat
            messages={messages}
            renderBubble={renderBubble}
            renderInputToolbar={renderInputToolbar}
            renderActions={renderCustomActions}
            renderCustomView={renderCustomView}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: userID,
              name: username,
            }}
          />
          { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
          {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
     <Text>Hello Screen2!</Text>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default Chat;