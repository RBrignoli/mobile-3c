import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      marginBottom: 20,
      alignItems:'center'
    },
    list_container: {
      width: '100%',
      paddingHorizontal: 20,
    },
    task_container: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center',
    },
    tarefa_concluida: {
      textDecorationLine: 'line-through',
      color: '#666',
    },
    tarefa_a_fazer: {
      color: '#333',
    },
  });

const tarefas = [
    {id:1, descricao:'teste1', feito:true, created_at:'01/01/2020'},
    {id:2, descricao:'teste2', feito:false, created_at:'15/08/2024'},
    {id:3, descricao:'teste3', feito:true, created_at:'06/08/2024'},
    {id:4, descricao:'teste4', feito:false, created_at:'05/02/2023'},
]

export default listaTarefa = () => {
    
    const[tasks, setTasks] = useState(tarefas)

    const handleConcludeTask = function (item) {
      var task = tasks.find((task) => task.id == item.id)
      task.feito = !task.feito
      setTasks([...tasks])
    }

    return <View style={styles.container}>
        <View style={styles.title}><Text>LISTA DE TAREFAS</Text></View>
        <FlatList
        style={styles.list_container}
        data={tarefas}
        renderItem={({item}) => <View style={styles.task_container} >
                <Text 
                  onPress={() => handleConcludeTask(item)}
                  style={[item.feito ? styles.tarefa_concluida: styles.tarefa_a_fazer]}
                >
                  {item.descricao}
                </Text>
            </View>
            }

        />
    </View>
}