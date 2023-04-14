import { TableCell,Paper, Table,TableContainer, TableHead, TableRow, Typography, TableBody, Button, Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStudents from './AddStudents'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';    

const ViewStudents = () => {
    const styles = {
        table: {
        //   minWidth: 650,
          backgroundColor: '#fff',
        },
        tableHeaderCell: {
          fontWeight: 'bold',
          fontSize:'20px',
          backgroundColor: '#b39ddb',
        },
        tableBodyRow: {
          '&:nth-of-type(even)': {
            backgroundColor: '#f2f2f2',
          },
        },
      };
    var [update,setUpdate]=useState(false)   
    var [singleValue,setSingleValue]=useState([]) 
    var [students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("add the api link here") 
        .then(response=>{
            setStudents(students=response.data)
            console.log(students)
        })
        .catch(err=>console.log(err))
    },[])

    const updateValue = (value)=>{
        setSingleValue(value);
        setUpdate(true);
       }
       const deleteValues = (id)=>{
        console.log("delete clicked"+ id)
        axios.delete("add the api link here"+id) 
        .then((response)=>{
            console.log(response.idvalue);
            alert("sucessfully deleted");
            window.location.reload(false);
        })
       }   
    var  finalJSX =   <Box mt={2}ml={6} mr={6}>
       <TableContainer component={Paper}>
    <Table style={styles.table}>
        <TableHead>
            <TableRow>

                <TableCell style={styles.tableHeaderCell}>ID</TableCell>
                <TableCell style={styles.tableHeaderCell}>NAME</TableCell>
                <TableCell style={styles.tableHeaderCell}>GRADE</TableCell>
                <TableCell style={styles.tableHeaderCell}>ACTION</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <EditIcon 
                            onClick={()=>updateValue(value)}/>
                        <DeleteIcon 
                            onClick={()=>deleteValues(value.id)}/>
                    </TableCell>
                    
                </TableRow>
                })}
               
            </TableBody>
     
    </Table>
</TableContainer>
</Box>

   if (update)
   finalJSX = <AddStudents data={singleValue} method="put"/>
return (
 
 finalJSX
  )
}

export default ViewStudents