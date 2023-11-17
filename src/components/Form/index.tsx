import Grid from '../Grid';
import * as C from './styles'
import { useState } from 'react'

const Form = ({ handleAdd, transactionsList, setTransactionsList }: any) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Informe a descrição e o valor!');
            return;
        } else if (Number(amount) < 1) {
            alert('O valor tem que ser positivo!');
            return;
        };

        const transation = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transation);

        setDesc('');
        setAmount('');

    }

    return (
        <>
            <C.ContainerExtern>
                <C.Container>
                    <C.InputContent>
                        <C.Label>Descrição</C.Label>
                        <C.Input
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </C.InputContent>
                    <C.InputContent>
                        <C.Label>Valor</C.Label>
                        <C.Input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </C.InputContent>
                    <C.RadioGroup>
                        <C.Input
                            type='radio'
                            id='rIncome'
                            defaultChecked
                            name='group1'
                            onChange={() => setIsExpense(!isExpense)}
                        />
                        <C.Label htmlFor='rIncome'>Entrada</C.Label>
                        <C.Input
                            type='radio'
                            id='rExpenses'
                            name='group1'
                            onChange={() => setIsExpense(!isExpense)}
                        />
                        <C.Label htmlFor='rExpenses'>Saída</C.Label>
                        <C.Button onClick={() => handleSave()}>ADICIONAR</C.Button>
                    </C.RadioGroup>
                </C.Container>
                <Grid itens={transactionsList} setItens={setTransactionsList} />
            </C.ContainerExtern>
        </>
    )
}

export default Form