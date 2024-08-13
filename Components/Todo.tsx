import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'

export default function Todo() {

    const [task, setTask] = useState<string>("")
    const [tasks, setTasks] = useState<string[]>([])

    const   handleAddTask = (): void => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    }

    const handleDeleteTask = (index: number): void => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setTasks([""])
    }

    const handleEditTask = (index: number): void => {
        const taskToEdit = tasks[index];
        setTask(taskToEdit);
        handleDeleteTask(index);
    }

    const renderItem = ({ item, index }: { item: string, index: number }) => {
        return (
            <View style={styles.render}>
                <Text>{item}</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => handleEditTask(index)} style={styles.editButton}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteTask(index)} style={styles.deleteButton}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Shaik Todo App</Text>

            <TextInput
                style={styles.input}
                placeholder='Enter todo...'
                onChangeText={(innerText: string) => setTask(innerText)}
            />

            <TouchableOpacity
                style={styles.touch}
                onPress={handleAddTask}
            >
                <Text style={styles.addTodo}>Add todo</Text>
            </TouchableOpacity>

            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        marginTop: 50,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000066",
    },
    input: {
        marginVertical: 5,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: "gray",
        padding: 5,
    },
    touch: {
        marginTop: 5,
        backgroundColor: "#6666ff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    addTodo: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    render: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
    },
    editButton: {
        marginRight: 10,
        backgroundColor: "#ffcc00",
        padding: 5,
        borderRadius: 3,
    },
    deleteButton: {
        backgroundColor: "#ff6666",
        padding: 5,
        borderRadius: 3,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
    }
})
