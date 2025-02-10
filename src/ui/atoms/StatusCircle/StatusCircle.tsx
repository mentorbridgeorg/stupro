import { CrossIcon } from "../../../assets/icons/CrossIcon";
import { Box, CheckIcon } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export const StatusCircle=({isChecked}:{isChecked:boolean})=>{
    return (
      <Box style={styles.circle}>
        {isChecked ? (
          <CheckIcon size="4" color="green.800" />
        ) : (
          <CrossIcon />
        )}
      </Box> 
    );
}
const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});