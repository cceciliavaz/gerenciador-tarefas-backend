import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Filter } from '../components/Filter';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { executeRequest } from '../services/apiServices';
import { removeItem } from '../services/sessionCommand';
import { AccessTokenProps } from '../types/AccessTokenPropos';
import { Task } from '../types/Task';

export const Home : NextPage<AccessTokenProps> = ({setAcesstoken}) => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const getFilteredList = async() =>{
        try{
            const result = await executeRequest('task', 'GET');
            if(result && result.data){
                setTasks(result.data);
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() =>{
        getFilteredList();
    }, []);

    const sair = () =>{
        removeItem('sessionUser');
        setAcesstoken('');
    }

    return (
        <>
            <Header sair={sair}/>
            <Filter/>
            <List tasks={tasks} getFilteredList={getFilteredList} />
            <Footer />
        </>
    );
}