import { Button, Modal, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default (props) => {
  const [inputText, setInputText] = useState("");

  const addGoalHandler = () => {
    if (inputText.trim() === '') return;
    props.onAddGoal(inputText);
    setInputText('');
    props.onCloseModal();
  }

  return (
    <Modal visible={props.modalState} animationType="slide">
      <View style={styles.modalContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Add your goal here!"
          autoFocus={true}
        />
        <View style={styles.buttonsWrapper}>
            <View style={styles.buttonView}><Button color='#C33' onPress={props.onCloseModal} title="Cancel" /></View>
            <View style={styles.buttonView}><Button color='teal' onPress={addGoalHandler} title="Add" /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 14
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16
  },
  buttonsWrapper: {
    flexDirection: 'row',
    padding: 12,
    width: 200,
    justifyContent: 'center',
    gap: 22,
    width: '100%'
  },
  buttonView: {
    width: '40%'
  }
});
