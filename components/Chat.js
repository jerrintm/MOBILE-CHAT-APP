import { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';

const Chat = ({ route, navigation }) => {
   const { name } = route.params; 
   const [messages, setMessages] = useState([]);

    //sets name as name typed by user on mainscreen and sets background as user selected background
  useEffect(() => {
    navigation.setOptions({ title: name, color: background });
  }, []);

   useEffect(() => {
        navigation.setOptions({ title: name });
   }, []);
 
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