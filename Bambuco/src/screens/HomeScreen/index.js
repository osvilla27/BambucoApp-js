import { Text,View} from 'react-native';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { StyledView } from './styled';
import {colors, shadow } from '../../library/utils/theme';


export const HomeScreen = () => {
  const [students, setStudents] = useState([])
  console.log(students)
  useEffect(()=>{
    async function getAllStudent() {
      try {
        const students = await axios.get('https://bambuco.herokuapp.com/api/student/')
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
  return (
    <StyledView style={[shadow.dark]}>
      <View style={[shadow.dark, {height: 100, backgroundColor: 'red'}]}>
      <Text style={{color: colors.primary}}>Hola</Text>
      </View>
     
    </StyledView>
  );
}
