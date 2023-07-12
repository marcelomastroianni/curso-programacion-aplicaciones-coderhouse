import { CheckBox, View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onPressItem,onDeleteItem, item }) => {
  return (
    <TouchableOpacity onPress={() => onPressItem(item)} >
    <View style={styles.containerItem}>
     
        <CheckBox
              value={item.completed}

            />

        <Text style={{...styles.listItem, ...(item.completed ? {textDecoration:"line-through",color:"grey"}:{color:"black"}) } } >{item.value}</Text>
  
        <TouchableOpacity onPress={() => onDeleteItem(item)} >
          <Text style={styles.icon}>X</Text>
        </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
