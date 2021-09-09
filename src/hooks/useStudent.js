import React from "react"
const useStudent = () =>{
    const data = [
        {
            key: 1,
            username: "Huyen"
        },
        {
            key: 2,
            username: "Hoa"
        },
        {
            key: 3,
            username: "Hung"
        },
        {
            key: 4,
            username: "Long"
        }
    ];
    const [initStudentList, initOldStudentList] = React.useState([...data])
    const [newStudentList, setNewStudentList] = React.useState([...data])
    const deleteStudent = (username) => {
        const index = newStudentList.findIndex((item, index) => item.username === username)
        if (index > -1){
            newStudentList.splice(index, 1)
            setNewStudentList([...newStudentList])
        }
    }
    return [initStudentList, newStudentList, {deleteStudent}]
}
export default useStudent;