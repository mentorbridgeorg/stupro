// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import usePushNotification from '../../modules/Notification/usePushNotification';

// const Notification = () => {
//   const {
//     requestUserPermission,
//     getFCMToken,
//     listenToBackgroundNotifications,
//     listenToForegroundNotifications,
//     onNotificationOpenedAppFromBackground,
//     onNotificationOpenedAppFromQuit,
//   } = usePushNotification();

//   useEffect(() => {
//     const listenToNotifications = () => {
//       try {
//         getFCMToken();
//         requestUserPermission();
//         onNotificationOpenedAppFromQuit();
//         listenToBackgroundNotifications();
//         listenToForegroundNotifications();
//         onNotificationOpenedAppFromBackground();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     listenToNotifications();
//   }, []);

//   return (
//     <View>
//       <Text>Push Notification APP!</Text>
//     </View>
//   );
// };

// export default Notification;