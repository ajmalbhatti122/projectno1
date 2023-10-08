 import { useState } from 'react';
import './expense.css';

import {useForm} from 'react-hook-form';
import { useDispatch ,useSelector } from 'react-redux';


export function Expense(){
    let dispatch = useDispatch();
    
    let {handleSubmit ,register} = useForm();    
    
    const onsave=(maradata)=>{

        console.log(maradata);

        dispatch({
            type :'Add-hogya',
            data : maradata
        })
    }
    let cake=useSelector(function(stro){
        return stro.adexpense
    })
    function getIncome(){
        let income = 0;
        {
            cake.daat.map(function(s){
                if(s.amout > 0){
                    income = income + +s.amout
                }
            })
        }
        return income;

    }
    function getexpence(){
        let expense = 0;
        {
            cake.daat.map(function(f){
                if(f.amout < 0){
                    expense +=  +f.amout
                }
            })
        }
        return expense;

    }
    let income = getIncome();
    let expence = Math.abs(getexpence());

    return (
        <div className="container">
            <h1 className='center'>Expense Tracter by M .Ajaml</h1>
            <h2 className='center'>Current Blance <br /> ${income-expence}</h2>

            <div className="iner-text">
                <h3 className='text1'>INCOME <br />${income}</h3>

                <h3 className='text'>EXPENSE <br />${expence}</h3>
            </div>
            <h2 className='center'>History</h2>
            <hr />
            <ul>
            {
                cake.daat.map(function(a,myindex){
                    return <li>

                        <span>{a.desc}</span>
                        <span>{a.amout}</span>
                        <button id='del' onClick={function(){
                            dispatch({
                                type:'delete-hogya',
                                shop :myindex
                            })
                        }}>X</button>
                    </li>
                })
            }
                </ul>
            
            <h2 className='center'>Add new Transation</h2>

            <hr />

            <form onSubmit={handleSubmit(onsave)}>
              
                <label>
                    Enter Transation 
                    <input {...register('desc')} className='input' type="text"  required/>
                    </label>

                    <label>
                    Enter Amount 
                    <input {...register('amout')} className='input' type="text" required/>

                </label>
                <input id='butn' className='input' type="submit" />
            </form>

        </div>
    )
}